import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "CardonSense es la empresa que desarrolla CitySensor para transformar datos territoriales en decisiones publicas accionables.",
};

const teamPlaceholders = [
  {
    role: "Direccion de producto",
    text: "Conecta vision de negocio, producto y estrategia de escalamiento institucional.",
  },
  {
    role: "Inteligencia territorial",
    text: "Disena modelos geoespaciales y criterios de priorizacion para operacion municipal.",
  },
  {
    role: "Implementacion en campo",
    text: "Ejecuta activaciones, acompanamiento operativo y transferencia de capacidades.",
  },
] as const;

export default function NosotrosPage() {
  return (
    <div className="space-y-14 pb-12 sm:space-y-16">
      <section className="surface-1 rounded-3xl p-6 sm:p-10">
        <SectionHeading
          eyebrow="CardonSense"
          title="Desarrollamos tecnologia para leer y entender el territorio"
          description="CardonSense es una empresa enfocada en inteligencia territorial aplicada a gobiernos municipales. Nuestro producto principal es CitySensor."
        />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="surface-2 rounded-2xl p-6">
          <SectionHeading
            eyebrow="Mision"
            title="Convertir informacion dispersa en accion publica"
            description="Construimos sistemas que traducen senales urbanas en decisiones operativas para mejorar la gestion municipal."
          />
        </article>
        <article className="surface-2 rounded-2xl p-6">
          <SectionHeading
            eyebrow="Vision"
            title="Ciudades que priorizan con evidencia"
            description="Impulsar un nuevo estandar de gestion territorial donde cada intervencion se base en datos, contexto y trazabilidad."
          />
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="surface-2 rounded-2xl p-6">
          <SectionHeading
            eyebrow="Origen"
            title="Nacimos desde el territorio"
            description="CardonSense surge en Sonora para resolver problemas urbanos reales mediante ciencia ciudadana, analisis geoespacial e inteligencia operativa."
          />
        </article>
        <article className="surface-2 rounded-2xl p-6">
          <SectionHeading
            eyebrow="Proposito"
            title="Fortalecer la decision publica"
            description="Nuestro objetivo es ayudar a instituciones a detectar, analizar y priorizar incidencias con rapidez, foco y mejor uso de recursos."
          />
        </article>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Equipo"
          title="Capacidades clave del equipo CardonSense"
          description="Bloque inicial con placeholders para perfilar funciones estrategicas y operativas."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {teamPlaceholders.map((member) => (
            <article key={member.role} className="surface-2 rounded-2xl p-5">
              <h3 className="text-lg font-bold text-brand-forest">{member.role}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/84">{member.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
