import type { Metadata } from "next";
import { Suspense } from "react";

import { LeadForm } from "@/components/lead-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita una demo de CitySensor, un piloto municipal o una implementacion de Bachejoa.",
};

export default function ContactoPage() {
  return (
    <div className="space-y-10 pb-12 sm:space-y-12">
      <section className="surface-1 rounded-3xl p-6 sm:p-10">
        <SectionHeading
          eyebrow="Contacto"
          title="Solicita demo o piloto de CitySensor"
          description="Comparte tu necesidad y prepararemos una propuesta de implementacion territorial alineada a tu municipio o institucion."
        />

        <div className="surface-2 mt-4 rounded-xl p-4 text-sm text-foreground/82">
          <p>
            Enviaremos respuesta a <strong>contacto@cardonsense.com</strong> y coordinaremos una sesion inicial de
            diagnostico.
          </p>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="surface-2 rounded-3xl p-6 text-sm text-foreground/80 sm:p-8">
            Cargando formulario...
          </div>
        }
      >
        <LeadForm />
      </Suspense>
    </div>
  );
}
