import { expect, test } from "@playwright/test";

test("flujo principal: inicio -> citysensor -> soluciones -> contacto -> envio", async ({ page }) => {
  await page.route("**/api/lead", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true }),
    });
  });

  await page.goto("/");
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "CitySensor", exact: true })
    .click();

  await expect(page).toHaveURL(/\/citysensor/);

  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Soluciones", exact: true })
    .click();
  await expect(page).toHaveURL(/\/soluciones/);

  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contacto", exact: true })
    .click();
  await expect(page).toHaveURL(/\/contacto/);

  await page.getByLabel("Nombre completo", { exact: true }).fill("Maria Lopez");
  await page.getByLabel("Correo institucional", { exact: true }).fill("maria@municipio.gob.mx");
  await page.getByLabel("Institucion", { exact: true }).fill("Municipio de Navojoa");
  await page.getByLabel("Cargo", { exact: true }).fill("Directora de Servicios Publicos");
  await page.getByLabel("Ciudad", { exact: true }).fill("Navojoa");
  await page.getByLabel("Mensaje", { exact: true }).fill(
    "Buscamos iniciar un piloto para priorizar incidencias urbanas con base en datos.",
  );
  await page
    .getByLabel(
      "Acepto el aviso de privacidad y autorizo que CardonSense me contacte para coordinar una demo o piloto.",
      { exact: true },
    )
    .check();

  await page.getByRole("button", { name: "Solicitar demo de CitySensor" }).click();

  await expect(page.getByRole("status")).toContainText(
    "Gracias. Recibimos tu solicitud y te contactaremos pronto.",
  );
});
