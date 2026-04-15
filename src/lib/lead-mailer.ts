import { Resend } from "resend";

import { INTEREST_TYPE_LABELS, PRODUCT_LABELS, type LeadInput } from "@/lib/lead-schema";

function readRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendLeadEmail(lead: LeadInput): Promise<void> {
  const apiKey = readRequiredEnv("RESEND_API_KEY");
  const fromEmail = readRequiredEnv("LEAD_FROM_EMAIL");
  const toEmail = readRequiredEnv("LEAD_TO_EMAIL");

  const resend = new Resend(apiKey);

  const interestType = INTEREST_TYPE_LABELS[lead.tipo_interes];
  const productName = PRODUCT_LABELS[lead.producto_interes];

  const textBody = [
    "Nuevo lead de CardonSense",
    "",
    `Nombre: ${lead.nombre}`,
    `Correo: ${lead.correo}`,
    `Institucion: ${lead.institucion}`,
    `Cargo: ${lead.cargo}`,
    `Ciudad: ${lead.ciudad}`,
    `Tipo de interes: ${interestType}`,
    `Producto de interes: ${productName}`,
    "",
    "Mensaje:",
    lead.mensaje,
  ].join("\n");

  const htmlBody = `
    <h2>Nuevo lead de CardonSense</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(lead.nombre)}</p>
    <p><strong>Correo:</strong> ${escapeHtml(lead.correo)}</p>
    <p><strong>Institucion:</strong> ${escapeHtml(lead.institucion)}</p>
    <p><strong>Cargo:</strong> ${escapeHtml(lead.cargo)}</p>
    <p><strong>Ciudad:</strong> ${escapeHtml(lead.ciudad)}</p>
    <p><strong>Tipo de interes:</strong> ${escapeHtml(interestType)}</p>
    <p><strong>Producto de interes:</strong> ${escapeHtml(productName)}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(lead.mensaje).replaceAll("\n", "<br />")}</p>
  `;

  await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject: `[CardonSense] Nuevo lead - ${interestType}`,
    replyTo: lead.correo,
    text: textBody,
    html: htmlBody,
  });
}
