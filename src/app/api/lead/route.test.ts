import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/lead-mailer", () => ({
  sendLeadEmail: vi.fn(),
}));

import { sendLeadEmail } from "@/lib/lead-mailer";
import { POST } from "@/app/api/lead/route";

const mockedSendLeadEmail = vi.mocked(sendLeadEmail);

const validPayload = {
  nombre: "Carla Ruiz",
  correo: "carla@municipio.gob.mx",
  institucion: "Municipio de Cajeme",
  cargo: "Directora de Planeacion",
  ciudad: "Ciudad Obregon",
  tipo_interes: "demo_citysensor",
  producto_interes: "citysensor",
  mensaje: "Necesitamos validar un piloto para priorizar cuadrillas y seguimiento de incidencias.",
  consentimiento: true,
};

afterEach(() => {
  vi.clearAllMocks();
});

describe("POST /api/lead", () => {
  it("responde ok=true cuando el payload es valido y el correo se envia", async () => {
    mockedSendLeadEmail.mockResolvedValueOnce();

    const response = await POST(
      new Request("http://localhost/api/lead", {
        method: "POST",
        body: JSON.stringify(validPayload),
      }),
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ ok: true });
    expect(mockedSendLeadEmail).toHaveBeenCalledTimes(1);
  });

  it("acepta payload legado con solucion_interes", async () => {
    mockedSendLeadEmail.mockResolvedValueOnce();

    const response = await POST(
      new Request("http://localhost/api/lead", {
        method: "POST",
        body: JSON.stringify({
          nombre: "Jose Perez",
          correo: "jose@municipio.gob.mx",
          institucion: "Municipio de Navojoa",
          cargo: "Coordinador",
          ciudad: "Navojoa",
          solucion_interes: "bachejoa",
          mensaje: "Buscamos implementacion de bachejoa con trazabilidad operativa.",
          consentimiento: true,
        }),
      }),
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ ok: true });
    expect(mockedSendLeadEmail).toHaveBeenCalledTimes(1);
  });

  it("responde fieldErrors cuando faltan campos", async () => {
    const response = await POST(
      new Request("http://localhost/api/lead", {
        method: "POST",
        body: JSON.stringify({ nombre: "Solo nombre" }),
      }),
    );

    expect(response.status).toBe(400);
    const payload = (await response.json()) as { ok: false; fieldErrors: Record<string, string[]> };
    expect(payload.ok).toBe(false);
    expect(payload.fieldErrors.correo?.length).toBeGreaterThan(0);
    expect(mockedSendLeadEmail).not.toHaveBeenCalled();
  });

  it("responde error 500 cuando falla el proveedor", async () => {
    mockedSendLeadEmail.mockRejectedValueOnce(new Error("resend failed"));

    const response = await POST(
      new Request("http://localhost/api/lead", {
        method: "POST",
        body: JSON.stringify(validPayload),
      }),
    );

    expect(response.status).toBe(500);
    await expect(response.json()).resolves.toEqual({
      ok: false,
      error: "No fue posible registrar tu solicitud",
    });
  });
});
