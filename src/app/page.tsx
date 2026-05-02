import { GlobeHero } from "@/components/globe-wrapper";
import { HeroStats } from "@/components/hero-stats";
import { HoverCard, Reveal, StaggerItem, StaggerReveal } from "@/components/reveal";
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
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-brand-terra" strokeWidth="1.8">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
      </svg>
    ),
    title: "Fragmentacion",
    text: "La informacion territorial llega por canales dispersos y no converge en una lectura operativa unica.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-brand-terra" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "Falta de visibilidad",
    text: "Sin contexto geoespacial, es dificil detectar zonas criticas, tendencias y prioridad real de intervencion.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-brand-terra" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Gestion reactiva",
    text: "Las decisiones se toman tarde, con criterios subjetivos y menor eficiencia en el uso del recurso publico.",
  },
] as const;

const workflowSteps = [
  { step: "01", label: "Captura", detail: "Ciudadania y sensores" },
  { step: "02", label: "Validacion", detail: "Geoespacial" },
  { step: "03", label: "Analisis", detail: "Territorial + IA" },
  { step: "04", label: "Priorizacion", detail: "Operativa" },
  { step: "05", label: "Accion", detail: "Institucional" },
  { step: "06", label: "Retroalimentacion", detail: "Continua" },
] as const;

export default function HomePage() {
  return (
    <div className="space-y-20 pb-12 sm:space-y-24">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="surface-1 relative overflow-hidden rounded-3xl p-6 sm:p-10">
        {/* Animated aurora blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="aurora-blob-1 absolute -left-12 -top-12 h-72 w-72 rounded-full bg-brand-forest/14 blur-3xl" />
          <div className="aurora-blob-2 absolute -bottom-16 -right-12 h-80 w-80 rounded-full bg-brand-terra/12 blur-3xl" />
          <div className="aurora-blob-3 absolute left-1/2 top-1/3 h-60 w-60 -translate-x-1/2 rounded-full bg-brand-moss/10 blur-3xl" />
        </div>
        <div className="territory-topo absolute inset-y-0 right-0 w-[44%] opacity-[0.12]" />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Text column */}
          <div className="animate-[heroText_0.7s_ease-out_both]">
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
                className="btn-primary btn-shimmer inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
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

            {/* Live stat */}
            <HeroStats />
          </div>

          {/* Globe column */}
          <div className="flex justify-center pb-4 pt-2 lg:justify-end animate-[heroGlobe_0.9s_ease-out_0.15s_both]">
            <GlobeHero />
          </div>
        </div>
      </section>

      {/* ── PROBLEMA ─────────────────────────────────────────── */}
      <section className="space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Problema"
            title="Por que las ciudades no priorizan con precision"
            description="Los territorios generan informacion valiosa todos los dias, pero sin estructura termina en decisiones tardias."
          />
        </Reveal>

        <StaggerReveal className="grid gap-4 md:grid-cols-3">
          {problemCards.map((item) => (
            <StaggerItem key={item.title}>
              <HoverCard className="surface-2 rounded-2xl p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-brand-terra/25 bg-brand-accent-soft/60">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-foreground/82">{item.text}</p>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* ── QUE ES CITYSENSOR ────────────────────────────────── */}
      <section className="space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Que es CitySensor"
            title="Sistema central de inteligencia territorial"
            description="CitySensor integra captura de datos, validacion geoespacial e inteligencia operativa para convertir incidencias en ejecucion priorizada."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <article className="surface-2 rounded-2xl p-6">
            <p className="text-sm leading-7 text-foreground/84 sm:text-base">
              CitySensor consolida reportes ciudadanos, fuentes externas, lectura geoespacial y modelos de IA en
              un solo flujo operativo. El resultado es una vista institucional para decidir donde intervenir,
              con que urgencia y con que impacto esperado.
            </p>
          </article>
        </Reveal>
      </section>

      {/* ── WORKFLOW ─────────────────────────────────────────── */}
      <section className="space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Como funciona"
            title="De senales dispersas a accion municipal"
            description="Flujo continuo para detectar, validar, priorizar y ejecutar con trazabilidad."
          />
        </Reveal>

        <StaggerReveal className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workflowSteps.map((item) => (
            <StaggerItem key={item.step}>
              <HoverCard className="surface-2 group relative overflow-hidden rounded-2xl p-5">
                <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-brand-terra to-brand-moss transition-transform duration-300 group-hover:scale-x-100" />
                <p className="font-mono text-3xl font-bold text-brand-forest/12">{item.step}</p>
                <p className="mt-1 text-base font-bold text-brand-forest">{item.label}</p>
                <p className="mt-1 text-xs font-medium text-brand-moss">{item.detail}</p>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* ── VALIDACION BACHEJOA ──────────────────────────────── */}
      <Reveal>
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
      </Reveal>

      {/* ── APLICACIONES ─────────────────────────────────────── */}
      <section className="space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Aplicaciones"
            title="Aplicaciones construidas sobre CitySensor"
            description="Cada modulo operativo se construye sobre la misma base de inteligencia territorial."
          />
        </Reveal>

        <StaggerReveal className="grid gap-4 lg:grid-cols-4">
          <StaggerItem>
            <HoverCard className="surface-2 group relative overflow-hidden rounded-2xl border-l-4 border-l-brand-terra p-5">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-terra to-brand-terra/30" />
              <p className="badge-accent inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">
                <span className="signal-ping inline-block h-1.5 w-1.5 rounded-full bg-brand-terra" />
                Activa
              </p>
              <h3 className="mt-3 text-xl font-bold text-brand-forest">Bachejoa</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/84">
                Implementacion en infraestructura vial para captura ciudadana y priorizacion operativa.
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-moss">
                Construido sobre CitySensor
              </p>
            </HoverCard>
          </StaggerItem>

          {FUTURE_APPLICATIONS.map((application) => (
            <StaggerItem key={application.id}>
              <HoverCard className="surface-2 shimmer-card group relative overflow-hidden rounded-2xl p-5">
                <p className="inline-flex rounded-full bg-brand-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-moss">
                  Proximamente
                </p>
                <h3 className="mt-3 text-xl font-bold text-brand-forest">{application.title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/84">{application.blurb}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-moss">
                  Construido sobre CitySensor
                </p>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <Reveal>
        <section className="surface-1 cta-gradient rounded-3xl p-8 sm:p-10">
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
              className="btn-primary btn-shimmer inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
            >
              Solicitar demo de CitySensor
            </TrackedLink>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
