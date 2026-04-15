"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { trackEvent } from "@/lib/analytics";
import {
  INTEREST_TYPES,
  INTEREST_TYPE_LABELS,
  leadDefaultValues,
  mapLegacySolutionToInterests,
  normalizeInterestType,
  normalizeLegacySolutionInterest,
  normalizeProductInterest,
  type InterestType,
  type LeadInput,
  type ProductInterest,
} from "@/lib/lead-schema";

type FormState = typeof leadDefaultValues;
type FormErrors = Partial<Record<keyof LeadInput, string[]>>;

type StatusState = {
  type: "idle" | "success" | "error";
  message: string;
};

const initialStatus: StatusState = { type: "idle", message: "" };

function deriveProductFromInterestType(tipo: InterestType): ProductInterest {
  if (tipo === "implementacion_bachejoa") return "bachejoa";
  if (tipo === "alianza") return "general";
  return "citysensor";
}

export function LeadForm() {
  const searchParams = useSearchParams();

  const initialSelection = useMemo(() => {
    const hasTypedQuery = searchParams.has("tipo") || searchParams.has("producto");

    if (hasTypedQuery) {
      const tipo = normalizeInterestType(searchParams.get("tipo"));
      const producto = normalizeProductInterest(
        searchParams.get("producto"),
        deriveProductFromInterestType(tipo),
      );

      return { tipo_interes: tipo, producto_interes: producto };
    }

    const legacySolution = normalizeLegacySolutionInterest(searchParams.get("solucion"));
    if (legacySolution) {
      return mapLegacySolutionToInterests(legacySolution);
    }

    return {
      tipo_interes: leadDefaultValues.tipo_interes,
      producto_interes: leadDefaultValues.producto_interes,
    };
  }, [searchParams]);

  const [formData, setFormData] = useState<FormState>({
    ...leadDefaultValues,
    tipo_interes: initialSelection.tipo_interes,
    producto_interes: initialSelection.producto_interes,
  });
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<StatusState>(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const updateInterestType = (tipo: InterestType) => {
    const producto = deriveProductFromInterestType(tipo);
    setFormData((prev) => ({ ...prev, tipo_interes: tipo, producto_interes: producto }));
    setFieldErrors((prev) => ({ ...prev, tipo_interes: undefined, producto_interes: undefined }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(initialStatus);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as
        | { ok: true }
        | { ok: false; fieldErrors?: FormErrors; error?: string };

      if (!response.ok || !payload.ok) {
        if (payload && "fieldErrors" in payload && payload.fieldErrors) {
          setFieldErrors(payload.fieldErrors as FormErrors);
          setStatus({
            type: "error",
            message: "Revisa los campos marcados e intenta nuevamente.",
          });
        } else {
          const fallbackMessage = "No fue posible enviar tu solicitud en este momento.";
          const errorMessage =
            "error" in payload && typeof payload.error === "string"
              ? payload.error
              : fallbackMessage;

          setStatus({
            type: "error",
            message: errorMessage,
          });
        }
        trackEvent("lead_submit_error", { source: "contacto" });
        return;
      }

      setStatus({
        type: "success",
        message: "Gracias. Recibimos tu solicitud y te contactaremos pronto.",
      });
      setFieldErrors({});
      setFormData({
        ...leadDefaultValues,
        tipo_interes: formData.tipo_interes,
        producto_interes: formData.producto_interes,
      });
      trackEvent("lead_submit_success", {
        source: "contacto",
        tipo_interes: formData.tipo_interes,
        producto_interes: formData.producto_interes,
      });
    } catch {
      setStatus({
        type: "error",
        message: "No fue posible conectar con el servicio. Intenta nuevamente.",
      });
      trackEvent("lead_submit_exception", { source: "contacto" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="surface-2 space-y-4 rounded-3xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="nombre"
          label="Nombre completo"
          value={formData.nombre}
          onChange={(value) => updateField("nombre", value)}
          errors={fieldErrors.nombre}
        />
        <Field
          id="correo"
          type="email"
          label="Correo institucional"
          value={formData.correo}
          onChange={(value) => updateField("correo", value)}
          errors={fieldErrors.correo}
        />
        <Field
          id="institucion"
          label="Institucion"
          value={formData.institucion}
          onChange={(value) => updateField("institucion", value)}
          errors={fieldErrors.institucion}
        />
        <Field
          id="cargo"
          label="Cargo"
          value={formData.cargo}
          onChange={(value) => updateField("cargo", value)}
          errors={fieldErrors.cargo}
        />
        <Field
          id="ciudad"
          label="Ciudad"
          value={formData.ciudad}
          onChange={(value) => updateField("ciudad", value)}
          errors={fieldErrors.ciudad}
        />

        <label className="flex flex-col gap-2 text-sm font-medium text-brand-forest">
          Tipo de interes
          <select
            name="tipo_interes"
            value={formData.tipo_interes}
            onChange={(event) =>
              updateInterestType(normalizeInterestType(event.target.value) as InterestType)
            }
            className="h-11 rounded-xl border border-brand-moss/40 bg-brand-card px-3 outline-none ring-brand-moss transition focus:ring-2"
          >
            {INTEREST_TYPES.map((type) => (
              <option key={type} value={type}>
                {INTEREST_TYPE_LABELS[type]}
              </option>
            ))}
          </select>
          {fieldErrors.tipo_interes?.length ? (
            <p className="text-xs text-brand-terra">{fieldErrors.tipo_interes[0]}</p>
          ) : null}
          <p className="text-xs text-foreground/70">
            Producto asociado: <span className="font-semibold">{formData.producto_interes}</span>
          </p>
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium text-brand-forest">
        Mensaje
        <textarea
          name="mensaje"
          rows={5}
          value={formData.mensaje}
          onChange={(event) => updateField("mensaje", event.target.value)}
          className="rounded-xl border border-brand-moss/40 bg-brand-card px-3 py-2 outline-none ring-brand-moss transition focus:ring-2"
          placeholder="Describe el contexto de tu ciudad o institucion y el objetivo de la demo o piloto."
        />
        {fieldErrors.mensaje?.length ? <p className="text-xs text-brand-terra">{fieldErrors.mensaje[0]}</p> : null}
      </label>

      <label className="surface-3 flex items-start gap-3 rounded-xl p-3 text-sm text-foreground/84">
        <input
          type="checkbox"
          checked={formData.consentimiento}
          onChange={(event) => updateField("consentimiento", event.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-brand-moss/45 text-brand-forest focus:ring-brand-moss"
        />
        <span>
          Acepto el aviso de privacidad y autorizo que CardonSense me contacte para coordinar una demo o
          piloto.
        </span>
      </label>
      {fieldErrors.consentimiento?.length ? (
        <p className="text-xs text-brand-terra">{fieldErrors.consentimiento[0]}</p>
      ) : null}

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Enviando..." : "Solicitar demo de CitySensor"}
        </button>

        <p className="text-sm text-foreground/72">Contacto directo: contacto@cardonsense.com</p>
      </div>

      {status.type !== "idle" ? (
        <p
          role="status"
          className={`rounded-xl px-3 py-2 text-sm ${
            status.type === "success"
              ? "bg-brand-surface-soft text-brand-forest"
              : "bg-brand-accent-soft text-brand-terra"
          }`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}

type FieldProps = {
  id: keyof Pick<LeadInput, "nombre" | "correo" | "institucion" | "cargo" | "ciudad">;
  label: string;
  value: string;
  onChange: (value: string) => void;
  errors?: string[];
  type?: "text" | "email";
};

function Field({ id, label, value, onChange, errors, type = "text" }: FieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-brand-forest">
      {label}
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 rounded-xl border border-brand-moss/40 bg-brand-card px-3 outline-none ring-brand-moss transition focus:ring-2"
      />
      {errors?.length ? <p className="text-xs text-brand-terra">{errors[0]}</p> : null}
    </label>
  );
}
