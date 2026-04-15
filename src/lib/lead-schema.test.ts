import { describe, expect, it } from "vitest";

import {
  leadSchema,
  mapLegacySolutionToInterests,
  normalizeInterestType,
  normalizeLegacySolutionInterest,
  normalizeProductInterest,
} from "@/lib/lead-schema";

describe("normalizadores de interes", () => {
  it("normaliza tipo_interes y producto_interes", () => {
    expect(normalizeInterestType("demo")).toBe("demo_citysensor");
    expect(normalizeInterestType("piloto")).toBe("piloto_municipal");
    expect(normalizeProductInterest("city_sensor")).toBe("citysensor");
    expect(normalizeProductInterest("plataforma")).toBe("general");
  });

  it("normaliza solucion_interes legado", () => {
    expect(normalizeLegacySolutionInterest("planeacion")).toBe("planificacion");
    expect(normalizeLegacySolutionInterest("desconocido")).toBe("plataforma_general");
  });

  it("mapea solucion legado a tipo y producto", () => {
    expect(mapLegacySolutionToInterests("bachejoa")).toEqual({
      tipo_interes: "implementacion_bachejoa",
      producto_interes: "bachejoa",
    });

    expect(mapLegacySolutionToInterests("plataforma_general")).toEqual({
      tipo_interes: "demo_citysensor",
      producto_interes: "citysensor",
    });
  });
});

describe("leadSchema", () => {
  it("acepta un payload nuevo valido", () => {
    const payload = {
      nombre: "Ana Torres",
      correo: "ana@municipio.gob.mx",
      institucion: "Municipio de Hermosillo",
      cargo: "Coordinadora",
      ciudad: "Hermosillo",
      tipo_interes: "piloto_municipal",
      producto_interes: "citysensor",
      mensaje: "Queremos iniciar un piloto para mejorar la priorizacion operativa en zonas criticas.",
      consentimiento: true,
    };

    const parsed = leadSchema.safeParse(payload);
    expect(parsed.success).toBe(true);
  });

  it("acepta payload legado y lo normaliza", () => {
    const payload = {
      nombre: "Ana Torres",
      correo: "ana@municipio.gob.mx",
      institucion: "Municipio de Hermosillo",
      cargo: "Coordinadora",
      ciudad: "Hermosillo",
      solucion_interes: "bachejoa",
      mensaje: "Requerimos evaluar implementacion en infraestructura vial con seguimiento operativo.",
      consentimiento: true,
    };

    const parsed = leadSchema.parse(payload);
    expect(parsed.tipo_interes).toBe("implementacion_bachejoa");
    expect(parsed.producto_interes).toBe("bachejoa");
  });

  it("falla cuando no hay consentimiento", () => {
    const parsed = leadSchema.safeParse({
      nombre: "Ana Torres",
      correo: "ana@municipio.gob.mx",
      institucion: "Municipio de Hermosillo",
      cargo: "Coordinadora",
      ciudad: "Hermosillo",
      tipo_interes: "demo_citysensor",
      producto_interes: "citysensor",
      mensaje: "Necesitamos evaluar factibilidad de implementacion en etapa inicial.",
      consentimiento: false,
    });

    expect(parsed.success).toBe(false);
  });
});
