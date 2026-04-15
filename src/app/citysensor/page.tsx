import { MapDemo } from "@/components/map-demo";
import { SectionHeading } from "@/components/section-heading";
import { TrackedLink } from "@/components/tracked-link";
import { SITE_URL, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "CitySensor: producto de inteligencia territorial",
  description:
    "CitySensor permite a gobiernos municipales detectar, analizar y priorizar incidencias urbanas con mapas operativos y analisis geoespacial.",
  path: "/citysensor",
  keywords: ["producto citysensor", "software para gobiernos municipales", "analisis geoespacial municipal"],
});

const citySensorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/citysensor#softwareapplication`,
  name: "CitySensor",
  alternateName: "CitySensor de CardonSense",
  url: `${SITE_URL}/citysensor`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  inLanguage: "es-MX",
  description:
    "CitySensor es el producto principal de CardonSense para detectar, analizar y priorizar incidencias urbanas con inteligencia territorial.",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  audience: {
    "@type": "Audience",
    audienceType: "Gobiernos municipales",
  },
  featureList: [
    "Mapa interactivo de incidencias",
    "Analisis territorial por severidad y zona critica",
    "Priorizacion operativa de intervenciones",
    "Dashboard institucional con trazabilidad",
  ],
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
};

const capabilities = [
  "Mapa interactivo de incidencias con severidad, zona y categoria.",
  "Analisis territorial para detectar patrones y concentraciones criticas.",
  "Clasificacion operativa por impacto, urgencia y contexto urbano.",
  "Priorizacion automatica para orientar cuadrillas e inversion publica.",
  "Dashboard institucional para seguimiento, trazabilidad y resultados.",
] as const;

const architectureLayers = [
  {
    title: "Captura",
    text: "CitySensor integra reportes ciudadanos y fuentes de sensores para generar datos geolocalizados en tiempo real.",
  },
  {
    title: "Validacion",
    text: "Analisis geoespacial y teledeteccion complementan la cobertura territorial y reducen sesgos de participacion.",
  },
  {
    title: "Inteligencia",
    text: "Modelos de IA detectan patrones, anticipan riesgo y recomiendan prioridades de intervencion municipal.",
  },
] as const;

const benefits = [
  "Mejor toma de decisiones con evidencia territorial unificada.",
  "Optimizacion de recursos operativos y presupuestales.",
  "Transicion de gestion reactiva a gestion proactiva.",
] as const;

export default function CitySensorPage() {
  return (
    <div className="space-y-16 pb-12 sm:space-y-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySensorSchema) }} />
      <section className="surface-1 rounded-3xl p-6 sm:p-10">
        <SectionHeading
          eyebrow="Producto principal"
          title="CitySensor: sistema de inteligencia territorial para ciudades"
          description="CitySensor transforma senales urbanas dispersas en informacion operativa para detectar, analizar y priorizar incidencias con rapidez y precision."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article key={capability} className="surface-2 rounded-2xl p-5 text-sm leading-6 text-foreground/84">
              {capability}
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Arquitectura"
          title="Tres capas integradas en un solo sistema"
          description="CitySensor opera como flujo continuo entre captura de datos, validacion territorial e inteligencia operativa."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {architectureLayers.map((layer, index) => (
            <article key={layer.title} className="surface-2 relative overflow-hidden rounded-2xl p-6">
              <div className="badge-accent absolute right-4 top-4 rounded-full px-2 py-1 text-xs font-semibold">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-brand-forest">{layer.title}</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/82">{layer.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Visualizacion"
          title="Lectura operativa del territorio"
          description="CitySensor combina mapas, clusters e indicadores para ubicar zonas criticas y priorizar ejecucion municipal."
        />
        <MapDemo />
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Beneficios"
            title="Resultado: decisiones publicas mas efectivas"
            description="El producto permite asignar mejor los recursos y mantener trazabilidad de cada accion territorial."
          />
          <ul className="mt-6 grid gap-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="surface-2 rounded-xl px-4 py-3 text-sm text-foreground/84">
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <TrackedLink
            href="/contacto?tipo=demo_citysensor&producto=citysensor"
            eventName="cta_citysensor_demo"
            className="btn-primary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
          >
            Solicitar demo de CitySensor
          </TrackedLink>
          <TrackedLink
            href="/contacto?tipo=piloto_municipal&producto=citysensor"
            eventName="cta_citysensor_piloto"
            className="btn-secondary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
          >
            Agendar piloto
          </TrackedLink>
        </div>
      </section>
    </div>
  );
}
