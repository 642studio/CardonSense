import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { TrackedLink } from "@/components/tracked-link";
import { SITE_URL, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Bachejoa: implementacion operativa de CitySensor",
  description:
    "Bachejoa funciona como implementacion institucional de CitySensor para gestionar incidencias viales con datos geolocalizados y priorizacion operativa.",
  path: "/soluciones/bachejoa",
  keywords: ["bachejoa", "infraestructura vial", "sistema de gestion territorial"],
});

const bachejoaWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/soluciones/bachejoa#webpage`,
  url: `${SITE_URL}/soluciones/bachejoa`,
  name: "Bachejoa: implementacion operativa de CitySensor",
  description:
    "Bachejoa es una implementacion institucional de CitySensor para operar incidencias de infraestructura vial con evidencia territorial.",
  inLanguage: "es-MX",
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
};

const bachejoaServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/soluciones/bachejoa#service`,
  name: "Implementacion Bachejoa",
  url: `${SITE_URL}/soluciones/bachejoa`,
  serviceType: "Gestion de infraestructura vial basada en datos",
  description:
    "Implementacion de CitySensor para capturar, priorizar y dar trazabilidad a incidencias viales en gobiernos municipales.",
  provider: {
    "@id": `${SITE_URL}/#organization`,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Municipios de Mexico",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Gobiernos municipales",
  },
  isRelatedTo: {
    "@id": `${SITE_URL}/citysensor#softwareapplication`,
  },
};

const operationalFlow = [
  "Reporte ciudadano",
  "Clasificacion automatica",
  "Geolocalizacion de incidencia",
  "Priorizacion operativa",
  "Asignacion a cuadrilla",
  "Registro de intervencion",
  "Historico territorial",
] as const;

const governmentPanelFeatures = [
  "Visualizacion en tiempo real de incidencias por zona.",
  "Priorizacion por zonas criticas y severidad.",
  "Seguimiento de reportes con estado operativo.",
  "Control de cuadrillas y orden de atencion.",
  "Metricas de desempeno para equipos institucionales.",
  "Historico de mantenimiento para planeacion publica.",
] as const;

const coverageCategories = ["Baches", "Agua", "Drenaje", "Basura", "Luminarias"] as const;

const roleSystem = [
  "Cada incidente tiene un responsable operativo.",
  "Cada tipo de problema activa un flujo institucional distinto.",
  "Cada accion queda trazada para seguimiento y auditoria.",
] as const;

const differentiators = [
  "Participacion ciudadana conectada con datos estructurados.",
  "Lectura geoespacial en tiempo real para priorizar acciones.",
  "Interfaz accesible con dinamica de uso simple y sostenida.",
  "Implementacion de bajo costo para gobiernos municipales.",
] as const;

const saasModel = [
  "Suscripcion mensual para municipios.",
  "Licenciamiento por tamano de poblacion.",
  "Modulos activables segun necesidad operativa.",
] as const;

const availableIntegrations = [
  "APIs para interoperar con sistemas institucionales.",
  "Exportacion de datos para analisis y reporte.",
  "Capas compatibles con entornos GIS municipales.",
] as const;

const intelligenceRoadmap = [
  "Deteccion de zonas criticas por recurrencia.",
  "Patrones de deterioro para planeacion preventiva.",
  "Prediccion de mantenimiento en despliegue progresivo.",
] as const;

export default function BachejoaPage() {
  return (
    <div className="space-y-14 pb-12 sm:space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bachejoaWebPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bachejoaServiceSchema) }}
      />
      <section className="surface-1 rounded-3xl border-l-4 border-l-brand-terra p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
          <Image
            src="/brand/bachejoa-logo.png"
            alt="Bachejoa"
            width={260}
            height={90}
            className="h-auto w-48 object-contain"
          />

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="badge-accent inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]">
                <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-current">
                  <path d="M8 1.25a5 5 0 0 0-5 5c0 3.52 4.18 7.8 4.36 7.98a.9.9 0 0 0 1.28 0C8.82 14.05 13 9.77 13 6.25a5 5 0 0 0-5-5Zm0 6.75a1.75 1.75 0 1 1 0-3.5A1.75 1.75 0 0 1 8 8Z" />
                </svg>
                IMPLEMENTACION ACTIVA
              </p>
              <p className="inline-flex rounded-full border border-brand-moss/35 bg-brand-surface px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-forest/80">
                Modulo de CitySensor
              </p>
            </div>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-brand-forest sm:text-5xl">
              Bachejoa: plataforma de gestion de infraestructura urbana basada en datos.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-foreground/85 sm:text-lg">
              Bachejoa opera como implementacion institucional de CitySensor para capturar, visualizar y operar
              incidencias en territorio en tiempo real.
            </p>
            <p className="mt-4 text-lg font-bold text-brand-terra">+3,465 reportes en menos de 2 meses.</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Que es Bachejoa"
          title="Version pro: sistema operativo de gestion territorial"
          description="No es un mapa aislado. Es una capa operativa que traduce participacion ciudadana en decisiones institucionales trazables."
        />

        <article className="surface-2 rounded-2xl p-6 text-sm leading-7 text-foreground/84 sm:text-base">
          Bachejoa permite capturar incidencias, estructurar datos geolocalizados, priorizar intervenciones y
          registrar ejecucion en campo. Su funcion es cerrar el ciclo entre reporte ciudadano y accion publica.
        </article>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Flujo operativo"
          title="Flujo completo de gestion en 7 etapas"
          description="La capacidad diferencial esta en operar todo el proceso, no solo la captura inicial."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {operationalFlow.map((step, index) => (
            <article key={step} className="surface-2 rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terra">Paso 0{index + 1}</p>
              <p className="mt-3 text-base font-semibold text-brand-forest">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Panel para gobiernos"
          title="Interfaz institucional para toma de decisiones"
          description="El valor SaaS se concentra en la operacion diaria del municipio con informacion clara y priorizada."
        />

        <article className="surface-2 rounded-2xl p-6">
          <ul className="grid gap-3 text-sm leading-6 text-foreground/84 sm:grid-cols-2">
            {governmentPanelFeatures.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Impacto y evidencia"
          title="Validacion operativa con datos verificables"
          description="Se prioriza evidencia real del territorio, sin inflar cifras de ejecucion no auditadas."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <article className="surface-2 rounded-2xl border-l-4 border-l-brand-terra p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terra">Dato clave</p>
            <p className="mt-3 text-3xl font-extrabold text-brand-forest">+3,465</p>
            <p className="mt-1 text-sm text-foreground/82">reportes ciudadanos en menos de 2 meses.</p>
          </article>
          <article className="surface-2 rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-moss">Resultado</p>
            <p className="mt-3 text-base font-semibold text-brand-forest">Visibilidad territorial accionable</p>
            <p className="mt-2 text-sm leading-6 text-foreground/82">
              Identificacion de concentraciones de dano para asignar recursos con mejor criterio.
            </p>
          </article>
          <article className="surface-2 rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-moss">Evidencia</p>
            <p className="mt-3 text-base font-semibold text-brand-forest">Participacion ciudadana sostenida</p>
            <p className="mt-2 text-sm leading-6 text-foreground/82">
              Generacion organica de datos territoriales utiles para gestion y trazabilidad institucional.
            </p>
          </article>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="surface-2 rounded-2xl p-6">
          <SectionHeading
            eyebrow="Cobertura"
            title="Categorias urbanas que ya opera"
            description="Bachejoa parte de vialidad y habilita una logica extensible de gestion urbana."
          />
          <div className="mt-5 flex flex-wrap gap-2">
            {coverageCategories.map((category) => (
              <span
                key={category}
                className="inline-flex rounded-full border border-brand-moss/35 bg-brand-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-forest/85"
              >
                {category}
              </span>
            ))}
          </div>
        </article>

        <article className="surface-2 rounded-2xl p-6">
          <SectionHeading
            eyebrow="Roles y operacion"
            title="Sistema operativo con responsables y trazabilidad"
            description="Cada incidencia y cada flujo tienen responsable, criterio y seguimiento institucional."
          />
          <ul className="mt-5 space-y-2 text-sm leading-6 text-foreground/84">
            {roleSystem.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Diferenciador"
          title="Por que Bachejoa compite como SaaS institucional"
          description="Combina simplicidad de adopcion con arquitectura operativa util para gobierno."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {differentiators.map((item) => (
            <article key={item} className="surface-2 rounded-2xl p-5 text-sm leading-6 text-foreground/84">
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="surface-2 rounded-3xl border-l-4 border-l-brand-terra p-6 sm:p-8">
        <SectionHeading
          eyebrow="Caso Navojoa"
          title="Caso de uso real para venta municipal"
          description="Una implementacion concreta que demuestra el valor del sistema en contexto urbano real."
        />

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="surface-3 rounded-2xl p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terra">Problema</p>
            <p className="mt-2 text-sm leading-6 text-foreground/84">
              Alta recurrencia de baches y baja visibilidad institucional sobre ubicacion y severidad.
            </p>
          </article>
          <article className="surface-3 rounded-2xl p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terra">Solucion</p>
            <p className="mt-2 text-sm leading-6 text-foreground/84">
              Activacion de mapa ciudadano con captura geolocalizada y priorizacion operativa sobre CitySensor.
            </p>
          </article>
          <article className="surface-3 rounded-2xl p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terra">Resultado</p>
            <p className="mt-2 text-sm leading-6 text-foreground/84">
              Mayor visibilidad territorial, presion positiva para atencion y datos utiles para gestion publica.
            </p>
          </article>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="surface-2 rounded-2xl p-6">
          <SectionHeading
            eyebrow="Modelo SaaS municipal"
            title="Estructura comercial para escalar implementacion"
            description="Oferta orientada a continuidad operativa, no a proyectos aislados."
          />
          <ul className="mt-5 space-y-2 text-sm leading-6 text-foreground/84">
            {saasModel.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>

        <article className="surface-2 rounded-2xl p-6">
          <SectionHeading
            eyebrow="Integraciones e inteligencia"
            title="Interoperabilidad activa y roadmap analitico"
            description="Integraciones disponibles hoy, con capacidades predictivas en despliegue progresivo."
          />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-moss">Disponibles</p>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-foreground/84">
            {availableIntegrations.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-moss">Roadmap</p>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-foreground/84">
            {intelligenceRoadmap.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="surface-1 rounded-3xl p-8 sm:p-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:items-center lg:gap-3">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-brand-forest sm:text-4xl">
              Lleva Bachejoa a tu municipio como operacion institucional.
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/82">
              Definimos alcance, flujo operativo e indicadores para activar una implementacion real.
            </p>
          </div>

          <TrackedLink
            href="/contacto?tipo=demo_citysensor&producto=citysensor"
            eventName="cta_bachejoa_demo_citysensor"
            className="btn-secondary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
          >
            Solicitar demo de CitySensor
          </TrackedLink>
          <TrackedLink
            href="/contacto?tipo=implementacion_bachejoa&producto=bachejoa"
            eventName="cta_bachejoa_piloto"
            className="btn-primary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
          >
            Agendar piloto Bachejoa
          </TrackedLink>
        </div>
      </section>
    </div>
  );
}
