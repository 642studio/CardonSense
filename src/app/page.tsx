import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { TrackedLink } from "@/components/tracked-link";
import { FUTURE_APPLICATIONS } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Inteligencia territorial con CitySensor",
  description:
    "CitySensor es el producto principal de CardonSense para detectar, analizar y priorizar incidencias urbanas con evidencia territorial.",
  path: "/",
  keywords: ["citysensor para ciudades", "plataforma de inteligencia territorial", "gestion municipal basada en datos"],
});

const problemCards = [
  {
    title: "Fragmentacion",
    text: "La informacion territorial llega por canales dispersos y no converge en una lectura operativa unica.",
  },
  {
    title: "Falta de visibilidad",
    text: "Sin contexto geoespacial, es dificil detectar zonas criticas, tendencias y prioridad real de intervencion.",
  },
  {
    title: "Gestion reactiva",
    text: "Las decisiones se toman tarde, con criterios subjetivos y menor eficiencia en el uso del recurso publico.",
  },
] as const;

const workflowSteps = [
  "Captura (ciudadania y sensores)",
  "Validacion geoespacial",
  "Analisis territorial",
  "Priorizacion operativa",
  "Accion institucional",
  "Retroalimentacion continua",
] as const;

export default function HomePage() {
  return (
    <div className="space-y-20 pb-12 sm:space-y-24">
      <section className="surface-1 relative overflow-hidden rounded-3xl p-6 sm:p-10">
        <div className="absolute inset-0 bg-[linear-gradient(122deg,rgba(255,255,255,0.3),transparent_58%)]" />
        <div className="territory-topo absolute inset-y-0 right-0 w-[44%] opacity-[0.16]" />
        <div className="territory-points absolute inset-y-0 right-0 w-[44%] opacity-[0.1]" />
        <div className="absolute -left-6 -top-6 h-36 w-36 rounded-full bg-brand-moss/18 blur-3xl" />
        <div className="absolute -bottom-10 -right-8 h-44 w-44 rounded-full bg-brand-terra/16 blur-3xl" />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-moss">
              Producto principal de CardonSense
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-brand-forest sm:text-5xl">
              CitySensor: inteligencia territorial para ciudades.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/85 sm:text-lg">
              Detecta, analiza y prioriza incidencias urbanas en tiempo real mediante captura de datos,
              analisis geoespacial e inteligencia artificial para ejecucion operativa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <TrackedLink
                href="/contacto?tipo=demo_citysensor&producto=citysensor"
                eventName="cta_home_demo_citysensor"
                className="btn-primary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
              >
                Solicitar demo de CitySensor
              </TrackedLink>
              <TrackedLink
                href="/contacto?tipo=piloto_municipal&producto=citysensor"
                eventName="cta_home_piloto"
                className="btn-secondary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
              >
                Agendar piloto
              </TrackedLink>
            </div>
          </div>

          <div className="hero-float relative overflow-hidden rounded-3xl border border-brand-moss/40 bg-brand-card/98 p-5 shadow-[0_24px_44px_rgba(30,57,37,0.22)]">
            <div className="territory-topo absolute inset-0 opacity-[0.14]" />
            <div className="grid-overlay absolute inset-0 opacity-[0.16]" />
            <div className="relative overflow-hidden rounded-2xl border border-brand-moss/34 bg-brand-paper/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
              <Image
                src="/brand/hero-citysensor-cover.png"
                alt="Visualizacion territorial de incidencias para CitySensor"
                width={1024}
                height={1024}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
            <div className="surface-3 mt-4 rounded-2xl border-l-4 border-l-brand-terra p-4 text-sm text-foreground/90">
              <div className="flex flex-wrap items-center gap-2">
                <p className="badge-accent inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">
                  <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-current">
                    <path d="M8 1.25a5 5 0 0 0-5 5c0 3.52 4.18 7.8 4.36 7.98a.9.9 0 0 0 1.28 0C8.82 14.05 13 9.77 13 6.25a5 5 0 0 0-5-5Zm0 6.75a1.75 1.75 0 1 1 0-3.5A1.75 1.75 0 0 1 8 8Z" />
                  </svg>
                  PRIMER CASO REAL
                </p>
                <p className="inline-flex rounded-full border border-brand-moss/35 bg-brand-surface px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-forest/80">
                  CitySensor validado
                </p>
              </div>
              <p className="mt-3 font-semibold text-brand-forest">Bachejoa valida CitySensor en infraestructura vial</p>
              <p className="mt-1 text-base font-bold text-brand-terra">
                +3,465 reportes en menos de 2 meses con crecimiento organico.
              </p>
              <p className="mt-2 text-xs text-foreground/70">
                Evidencia territorial real para activar pilotos y contratos municipales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Problema"
          title="Por que las ciudades no priorizan con precision"
          description="Los territorios generan informacion valiosa todos los dias, pero sin estructura termina en decisiones tardias."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {problemCards.map((item) => (
            <article key={item.title} className="surface-2 rounded-2xl p-5">
              <h3 className="text-xl font-bold text-brand-forest">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/82">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Que es CitySensor"
          title="Sistema central de inteligencia territorial"
          description="CitySensor integra captura de datos, validacion geoespacial e inteligencia operativa para convertir incidencias en ejecucion priorizada."
        />

        <article className="surface-2 rounded-2xl p-6">
          <p className="text-sm leading-7 text-foreground/84 sm:text-base">
            CitySensor consolida reportes ciudadanos, fuentes externas, lectura geoespacial y modelos de IA en
            un solo flujo operativo. El resultado es una vista institucional para decidir donde intervenir,
            con que urgencia y con que impacto esperado.
          </p>
        </article>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Como funciona"
          title="De senales dispersas a accion municipal"
          description="Flujo continuo para detectar, validar, priorizar y ejecutar con trazabilidad."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <article key={step} className="surface-2 rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terra">Paso 0{index + 1}</p>
              <p className="mt-3 text-base font-semibold text-brand-forest">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="surface-2 rounded-3xl border-l-4 border-l-brand-terra p-6 sm:p-8">
        <SectionHeading
          eyebrow="Validacion"
          title="Bachejoa: primer caso real que valida CitySensor"
          description="Bachejoa funciona como implementacion activa para generar datos reales y validar la efectividad del sistema en campo."
        />
        <div className="mt-5 flex flex-wrap gap-3">
          <TrackedLink
            href="/soluciones/bachejoa"
            eventName="cta_home_bachejoa_detalle"
            className="btn-secondary inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold"
          >
            Ver implementacion Bachejoa
          </TrackedLink>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Aplicaciones"
          title="Aplicaciones construidas sobre CitySensor"
          description="Cada modulo operativo se construye sobre la misma base de inteligencia territorial."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          <article className="surface-2 rounded-2xl border-l-4 border-l-brand-terra p-5">
            <p className="badge-accent inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">
              Activa
            </p>
            <h3 className="mt-3 text-xl font-bold text-brand-forest">Bachejoa</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/84">
              Implementacion en infraestructura vial para captura ciudadana y priorizacion operativa.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-moss">
              Construido sobre CitySensor
            </p>
          </article>

          {FUTURE_APPLICATIONS.map((application) => (
            <article key={application.id} className="surface-2 rounded-2xl p-5">
              <p className="inline-flex rounded-full bg-brand-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-moss">
                Proximamente
              </p>
              <h3 className="mt-3 text-xl font-bold text-brand-forest">{application.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/84">{application.blurb}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-moss">
                Construido sobre CitySensor
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="surface-1 rounded-3xl p-8 sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terra">Siguiente paso</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-forest sm:text-4xl">
              Solicita una demo de CitySensor para tu municipio.
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/82">
              Definimos juntos alcance del piloto, indicadores de seguimiento y plan de implementacion.
            </p>
          </div>

          <TrackedLink
            href="/contacto?tipo=demo_citysensor&producto=citysensor"
            eventName="cta_home_footer_demo_citysensor"
            className="btn-primary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
          >
            Solicitar demo de CitySensor
          </TrackedLink>
        </div>
      </section>
    </div>
  );
}
