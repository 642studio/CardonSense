import { z } from "zod";

export const INTEREST_TYPES = [
  "demo_citysensor",
  "piloto_municipal",
  "implementacion_bachejoa",
  "alianza",
] as const;

export type InterestType = (typeof INTEREST_TYPES)[number];

export const PRODUCT_INTERESTS = ["citysensor", "bachejoa", "general"] as const;

export type ProductInterest = (typeof PRODUCT_INTERESTS)[number];

export const LEGACY_SOLUTION_INTERESTS = [
  "bachejoa",
  "planificacion",
  "deporte",
  "cultura",
  "plataforma_general",
] as const;

export type LegacySolutionInterest = (typeof LEGACY_SOLUTION_INTERESTS)[number];

export const INTEREST_TYPE_LABELS: Record<InterestType, string> = {
  demo_citysensor: "CitySensor (demo)",
  piloto_municipal: "Piloto municipal",
  implementacion_bachejoa: "Implementacion Bachejoa",
  alianza: "Alianza",
};

export const PRODUCT_LABELS: Record<ProductInterest, string> = {
  citysensor: "CitySensor",
  bachejoa: "Bachejoa",
  general: "General",
};

const toCanonical = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/-/g, "_")
    .trim();

export function normalizeInterestType(value: unknown, fallback: InterestType = "demo_citysensor"): InterestType {
  if (typeof value !== "string") return fallback;

  const canonical = toCanonical(value);

  if (canonical === "demo_citysensor" || canonical === "demo" || canonical === "citysensor") {
    return "demo_citysensor";
  }
  if (canonical === "piloto_municipal" || canonical === "piloto" || canonical === "piloto_citysensor") {
    return "piloto_municipal";
  }
  if (
    canonical === "implementacion_bachejoa" ||
    canonical === "bachejoa" ||
    canonical === "implementacion"
  ) {
    return "implementacion_bachejoa";
  }
  if (canonical === "alianza" || canonical === "aliados") {
    return "alianza";
  }

  return fallback;
}

export function normalizeProductInterest(
  value: unknown,
  fallback: ProductInterest = "citysensor",
): ProductInterest {
  if (typeof value !== "string") return fallback;

  const canonical = toCanonical(value);

  if (canonical === "citysensor" || canonical === "city_sensor") return "citysensor";
  if (canonical === "bachejoa") return "bachejoa";
  if (canonical === "general" || canonical === "cardonsense" || canonical === "plataforma") return "general";

  return fallback;
}

export function normalizeLegacySolutionInterest(value: unknown): LegacySolutionInterest | undefined {
  if (typeof value !== "string") return undefined;

  const canonical = toCanonical(value);

  if (canonical === "bachejoa") return "bachejoa";
  if (canonical === "planificacion" || canonical === "planeacion") return "planificacion";
  if (canonical === "deporte" || canonical === "deportes") return "deporte";
  if (canonical === "cultura") return "cultura";

  if (
    canonical === "plataforma" ||
    canonical === "plataforma_general" ||
    canonical === "general" ||
    canonical === "cardonsense"
  ) {
    return "plataforma_general";
  }

  return "plataforma_general";
}

export function mapLegacySolutionToInterests(legacy: LegacySolutionInterest): {
  tipo_interes: InterestType;
  producto_interes: ProductInterest;
} {
  if (legacy === "bachejoa") {
    return {
      tipo_interes: "implementacion_bachejoa",
      producto_interes: "bachejoa",
    };
  }

  if (legacy === "planificacion" || legacy === "deporte" || legacy === "cultura") {
    return {
      tipo_interes: "piloto_municipal",
      producto_interes: "citysensor",
    };
  }

  return {
    tipo_interes: "demo_citysensor",
    producto_interes: "citysensor",
  };
}

function normalizeLeadPayload(value: unknown): unknown {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return value;
  }

  const input = value as Record<string, unknown>;
  const legacySolution = normalizeLegacySolutionInterest(input.solucion_interes);
  const legacyMapped = legacySolution ? mapLegacySolutionToInterests(legacySolution) : undefined;

  return {
    ...input,
    tipo_interes: normalizeInterestType(input.tipo_interes, legacyMapped?.tipo_interes ?? "demo_citysensor"),
    producto_interes: normalizeProductInterest(
      input.producto_interes,
      legacyMapped?.producto_interes ?? "citysensor",
    ),
  };
}

export const leadSchema = z.preprocess(
  normalizeLeadPayload,
  z.object({
    nombre: z.string().trim().min(2, "Ingresa tu nombre").max(120, "Nombre demasiado largo"),
    correo: z.string().trim().email("Correo invalido").max(160, "Correo demasiado largo"),
    institucion: z
      .string()
      .trim()
      .min(2, "Ingresa la institucion")
      .max(160, "Institucion demasiado larga"),
    cargo: z.string().trim().min(2, "Ingresa tu cargo").max(120, "Cargo demasiado largo"),
    ciudad: z.string().trim().min(2, "Ingresa la ciudad").max(120, "Ciudad demasiado larga"),
    tipo_interes: z.enum(INTEREST_TYPES),
    producto_interes: z.enum(PRODUCT_INTERESTS),
    mensaje: z
      .string()
      .trim()
      .min(12, "Comparte un poco mas de contexto")
      .max(1200, "Mensaje demasiado largo"),
    consentimiento: z
      .boolean()
      .refine((value) => value, { message: "Debes aceptar el aviso de privacidad" }),
  }),
);

export type LeadInput = z.infer<typeof leadSchema>;

export const leadDefaultValues: Omit<LeadInput, "consentimiento"> & {
  consentimiento: boolean;
} = {
  nombre: "",
  correo: "",
  institucion: "",
  cargo: "",
  ciudad: "",
  tipo_interes: "demo_citysensor",
  producto_interes: "citysensor",
  mensaje: "",
  consentimiento: false,
};
