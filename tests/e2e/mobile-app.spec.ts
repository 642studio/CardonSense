import { expect, test } from "@playwright/test";

const apkUrl = process.env.NEXT_PUBLIC_CITYSENSOR_APK_URL?.trim();

test("mobile app: muestra estado sin descarga cuando no hay APK configurado", async ({ page }) => {
  test.skip(Boolean(apkUrl), "Este escenario aplica solo cuando no hay APK configurado.");

  await page.goto("/mobile");
  await expect(page.getByRole("button", { name: "Descarga no disponible temporalmente" }).first()).toBeDisabled();
  await expect(page.getByText("Disponible actualmente para Android.")).toBeVisible();
});

test("mobile app: habilita enlace de descarga cuando hay APK configurado", async ({ page }) => {
  test.skip(!apkUrl, "Este escenario aplica solo cuando hay APK configurado.");

  await page.goto("/mobile");
  const downloadLink = page.getByRole("link", { name: "Descargar APK" }).first();
  await expect(downloadLink).toBeVisible();
  await expect(downloadLink).toHaveAttribute("href", apkUrl ?? "");
});
