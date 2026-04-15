import { NextResponse } from "next/server";

import { sendLeadEmail } from "@/lib/lead-mailer";
import { leadSchema } from "@/lib/lead-schema";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "JSON invalido" },
      { status: 400 },
    );
  }

  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  try {
    await sendLeadEmail(parsed.data);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[lead-api]", error);
    return NextResponse.json(
      { ok: false, error: "No fue posible registrar tu solicitud" },
      { status: 500 },
    );
  }
}
