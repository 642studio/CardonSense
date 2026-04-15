import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { TrackedLink } from "@/components/tracked-link";
import { FUTURE_APPLICATIONS } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Aplicaciones de CitySensor",
  description:
    "Portafolio de aplicaciones construidas sobre CitySensor: Bachejoa activo y nuevas implementaciones para drenaje, alumbrado, residuos y planificacion.",
  path: "/soluciones",
  keywords: ["aplicaciones citysensor", "bachejoa", "soluciones de infraestructura urbana"],
});

export default function SolucionesPage() {
  return (
    <div className="space-y-14 pb-12 sm:space-y-16">
      <section className="surface-1 rounded-3xl p-6 sm:p-10">
        <SectionHeading
          eyebrow="Aplicaciones de CitySensor"
          title="Implementaciones modulares sobre un sistema central"
          description="Cada aplicacion opera con la base de datos, validacion y priorizacion de CitySensor para distintos frentes urbanos."
        />
      </section>

      <section className="surface-2 rounded-3xl border-l-4 border-l-brand-terra p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <Image
            src="/brand/bachejoa-logo.png"
            alt="Bachejoa"
            width={200}
            height={64}
            className="h-auto w-44 object-contain"
          />

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="badge-accent inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]">
                <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-current">
                  <path d="M8 1.25a5 5 0 0 0-5 5c0 3.52 4.18 7.8 4.36 7.98a.9.9 0 0 0 1.28 0C8.82 14.05 13 9.77 13 6.25a5 5 0 0 0-5-5Zm0 6.75a1.75 1.75 0 1 1 0-3.5A1.75 1.75 0 0 1 8 8Z" />
                </svg>
                CASO ACTIVO
              </p>
              <p className="inline-flex rounded-full border border-brand-moss/35 bg-brand-surface px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-forest/80">
                Construido sobre CitySensor
              </p>
            </div>
            <h2 className="mt-2 text-3xl font-bold text-brand-forest">Bachejoa</h2>
            <p className="mt-2 text-sm leading-6 text-foreground/82 sm:text-base">
              Implementacion de CitySensor para infraestructura vial. Convierte participacion ciudadana en
              inteligencia operativa para priorizar atencion de baches con evidencia territorial.
            </p>
            <p className="mt-3 text-base font-bold text-brand-terra">
              +3,465 reportes en menos de 2 meses - crecimiento organico
            </p>
          </div>

          <TrackedLink
            href="/soluciones/bachejoa"
            eventName="cta_soluciones_bachejoa_detalle"
            className="btn-secondary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
          >
            Ver implementacion
          </TrackedLink>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Nuevas aplicaciones"
          title="Expansiones de CitySensor para infraestructura urbana"
          description="Modulos en lanzamiento progresivo con la misma logica de captura, validacion y priorizacion."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {FUTURE_APPLICATIONS.map((application) => (
            <article key={application.id} className="surface-2 rounded-2xl border-t-2 border-t-brand-moss/35 p-5">
              <p className="inline-flex rounded-full bg-brand-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-moss">
                Proximamente
              </p>
              <h3 className="mt-3 text-xl font-bold text-brand-forest">{application.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/84">{application.blurb}</p>
              <ul className="mt-4 space-y-1 text-sm text-foreground/80">
                {application.bullets.map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-moss">
                Construido sobre CitySensor
              </p>
              <TrackedLink
                href="/contacto?tipo=piloto_municipal&producto=citysensor"
                eventName="cta_solucion_citysensor_piloto"
                eventPayload={{ aplicacion: application.id }}
                className="btn-primary mt-5 inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold"
              >
                Agendar piloto
              </TrackedLink>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
