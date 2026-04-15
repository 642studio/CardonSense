"use client";

import { useMemo, useState } from "react";

import { DEMO_INCIDENTS, INCIDENT_TYPES, type IncidentType } from "@/data/site";

const severityStyles = {
  baja: {
    dot: "h-3.5 w-3.5 bg-brand-moss",
    halo: "bg-brand-moss/35",
    ring: "border-brand-moss/45",
  },
  media: {
    dot: "h-4 w-4 bg-brand-amber",
    halo: "bg-brand-amber/42",
    ring: "border-brand-amber/55",
  },
  alta: {
    dot: "h-[18px] w-[18px] bg-brand-terra",
    halo: "bg-brand-terra/52",
    ring: "border-brand-terra/60 shadow-[0_0_0_3px_rgba(164,74,63,0.18)]",
  },
};

export function MapDemo() {
  const [selectedType, setSelectedType] = useState<IncidentType | "todos">("todos");
  const [selectedZone, setSelectedZone] = useState<"todas" | "norte" | "centro" | "sur">("todas");

  const incidents = useMemo(
    () =>
      DEMO_INCIDENTS.filter(
        (incident) =>
          (selectedType === "todos" || incident.type === selectedType) &&
          (selectedZone === "todas" || incident.zona === selectedZone),
      ),
    [selectedType, selectedZone],
  );

  return (
    <div className="surface-2 rounded-3xl p-4 sm:p-6">
      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-brand-forest">Mapa demo de incidencias</p>
          <p className="text-sm text-foreground/75">Simulacion de priorizacion por tipo y zona.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <select
            className="rounded-full border border-brand-moss/40 bg-brand-card px-3 py-2 text-sm text-brand-forest"
            value={selectedType}
            onChange={(event) => setSelectedType(event.target.value as IncidentType | "todos")}
          >
            <option value="todos">Todos los tipos</option>
            {INCIDENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type[0].toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>

          <select
            className="rounded-full border border-brand-moss/40 bg-brand-card px-3 py-2 text-sm text-brand-forest"
            value={selectedZone}
            onChange={(event) =>
              setSelectedZone(event.target.value as "todas" | "norte" | "centro" | "sur")
            }
          >
            <option value="todas">Todas las zonas</option>
            <option value="norte">Norte</option>
            <option value="centro">Centro</option>
            <option value="sur">Sur</option>
          </select>
        </div>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-brand-moss/40 bg-brand-surface-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(47,107,63,0.14),transparent_35%),radial-gradient(circle_at_75%_75%,rgba(164,74,63,0.14),transparent_40%)]" />
        <div className="territory-topo absolute inset-0 opacity-[0.2]" />
        <div className="grid-overlay absolute inset-0 opacity-[0.6]" />
        <div className="territory-points absolute inset-0 opacity-[0.08]" />

        {incidents.map((incident) => (
          <button
            key={incident.id}
            type="button"
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${incident.x}%`, top: `${incident.y}%` }}
            title={`${incident.id} - ${incident.type} - ${incident.severidad}`}
          >
            <span
              className={`signal-ping absolute inset-0 rounded-full ${severityStyles[incident.severidad].halo}`}
            />
            <span
              className={`relative block rounded-full border border-white ${severityStyles[incident.severidad].ring} ${severityStyles[incident.severidad].dot}`}
            />
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
        <div className="surface-3 rounded-xl border-brand-moss/26 p-3 text-foreground/82">
          <p className="text-xs font-semibold uppercase tracking-wide">Incidencias visibles</p>
          <p className="mt-1 text-2xl font-bold text-brand-forest">{incidents.length}</p>
        </div>
        <div className="rounded-xl border border-brand-terra/42 bg-brand-accent-soft/90 p-3 text-foreground/88 shadow-[0_8px_16px_rgba(98,44,38,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-terra">Severidad alta</p>
          <p className="mt-1 text-2xl font-bold text-brand-terra">
            {incidents.filter((incident) => incident.severidad === "alta").length}
          </p>
        </div>
        <div className="surface-3 rounded-xl border-l-4 border-l-brand-moss p-3 text-foreground/84">
          <p className="text-xs font-semibold uppercase tracking-wide">Zona critica</p>
          <p className="mt-1 text-xl font-bold text-brand-forest">
            {
              ["norte", "centro", "sur"]
                .map((zone) => ({
                  zone,
                  count: incidents.filter((incident) => incident.zona === zone).length,
                }))
                .sort((a, b) => b.count - a.count)[0]?.zone ?? "-"
            }
          </p>
        </div>
      </div>
    </div>
  );
}
