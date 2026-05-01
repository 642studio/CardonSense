import { ApkDownloadCard } from "@/components/apk-download-card";
import { SectionHeading } from "@/components/section-heading";
import { TrackedLink } from "@/components/tracked-link";
import {
  MOBILE_APP_ARCHITECTURE,
  MOBILE_APP_DIFFERENTIATORS,
  MOBILE_APP_GEOSPATIAL,
  MOBILE_APP_MUNICIPAL_VALUE,
  MOBILE_APP_OPERATION_FEATURES,
  MOBILE_APP_ROADMAP,
  MOBILE_APP_ROLES,
  MOBILE_APP_SECURITY,
} from "@/data/mobile-app";
import { SITE_URL, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "App móvil CitySensor",
  description:
    "Conoce la app móvil de CitySensor para captura territorial en campo, operación por misión y descarga APK para Android.",
  path: "/mobile",
  keywords: ["app móvil citysensor", "descargar apk citysensor", "captura territorial en campo"],
});

export default function MobileAppPage() {
  const apkUrl = process.env.NEXT_PUBLIC_CITYSENSOR_APK_URL?.trim() ?? "";

  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/mobile#softwareapplication`,
    name: "App móvil CitySensor",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android",
    inLanguage: "es-MX",
    url: `${SITE_URL}/mobile`,
    description:
      "Aplicación móvil de CitySensor para captura de incidencias georreferenciadas, evidencia visual y operación por misión en gobiernos municipales.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    ...(apkUrl ? { downloadUrl: apkUrl } : {}),
  };

  return (
    <div className="space-y-14 pb-12 sm:space-y-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }} />

      <section className="surface-1 rounded-3xl p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-moss">App móvil CitySensor</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-brand-forest sm:text-5xl">
              Captura territorial en campo con operacion estructurada.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/84 sm:text-lg">
              La app movil de CitySensor permite registrar incidencias, evidencia visual y contexto geoespacial en
              tiempo real para convertir observaciones de campo en decisiones municipales accionables.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <TrackedLink
                href="/contacto?tipo=demo_citysensor&producto=citysensor"
                eventName="cta_mobile_page_demo"
                className="btn-primary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
              >
                Solicitar demo de CitySensor
              </TrackedLink>
              <TrackedLink
                href="/citysensor"
                eventName="cta_mobile_page_citysensor"
                className="btn-secondary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
              >
                Ver plataforma completa
              </TrackedLink>
            </div>
          </div>

          <ApkDownloadCard apkUrl={apkUrl} />
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Operacion"
          title="Que hace la app en campo"
          description="La app movil conecta captura, evidencia y trazabilidad para sostener la operacion territorial."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MOBILE_APP_OPERATION_FEATURES.map((feature) => (
            <article key={feature} className="surface-2 rounded-2xl p-5 text-sm leading-6 text-foreground/84">
              {feature}
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Arquitectura tecnica"
          title="Stack de desarrollo y servicios de soporte"
          description="CitySensor movil se integra con una arquitectura moderna separada por capas de frontend, backend, datos y almacenamiento."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {MOBILE_APP_ARCHITECTURE.map((item) => (
            <article key={item.title} className="surface-2 rounded-2xl p-5">
              <h3 className="text-lg font-bold text-brand-forest">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/84">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="surface-2 rounded-2xl p-6">
          <SectionHeading
            eyebrow="Seguridad y acceso"
            title="Control por rol y municipio"
            description="El modelo operativo aplica seguridad por autenticacion, roles y separacion multi-municipio."
          />
          <ul className="mt-5 space-y-2 text-sm leading-6 text-foreground/84">
            {MOBILE_APP_SECURITY.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-moss">Roles</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {MOBILE_APP_ROLES.map((role) => (
              <span
                key={role}
                className="inline-flex rounded-full border border-brand-moss/35 bg-brand-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-forest/85"
              >
                {role}
              </span>
            ))}
          </div>
        </article>

        <article className="surface-2 rounded-2xl p-6">
          <SectionHeading
            eyebrow="Base geoespacial"
            title="GeoJSON y PostGIS para lectura territorial"
            description="La app movil aprovecha un modelo geoespacial preparado para incidencias puntuales y areas afectadas."
          />
          <ul className="mt-5 space-y-2 text-sm leading-6 text-foreground/84">
            {MOBILE_APP_GEOSPATIAL.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="surface-2 rounded-2xl border-l-4 border-l-brand-terra p-6">
          <SectionHeading
            eyebrow="Valor municipal"
            title="De reportes aislados a operacion estructurada"
            description="La app movil acelera captura y seguimiento para sostener decisiones publicas con evidencia territorial."
          />
          <ul className="mt-5 space-y-2 text-sm leading-6 text-foreground/84">
            {MOBILE_APP_MUNICIPAL_VALUE.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>

        <article className="surface-2 rounded-2xl p-6">
          <SectionHeading
            eyebrow="Diferenciadores"
            title="No es solo un mapa movil"
            description="CitySensor movil conecta territorio, evidencia, seguridad y continuidad operativa multi-municipio."
          />
          <ul className="mt-5 space-y-2 text-sm leading-6 text-foreground/84">
            {MOBILE_APP_DIFFERENTIATORS.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="surface-2 rounded-3xl p-6 sm:p-8">
        <SectionHeading
          eyebrow="Roadmap"
          title="Evolucion prevista de CitySensor movil"
          description="Linea de evolucion funcional para ampliar capacidad de operacion y transparencia publica."
        />
        <div className="mt-5 grid gap-3">
          {MOBILE_APP_ROADMAP.map((item, index) => (
            <article key={item} className="surface-3 rounded-xl p-4 text-sm leading-6 text-foreground/84">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terra">Evolucion 0{index + 1}</p>
              <p className="mt-2">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="surface-1 rounded-3xl p-8 sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terra">Descarga y soporte</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-forest sm:text-4xl">
              Activa la app movil de CitySensor en tu operacion.
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/82">
              Si ya cuentas con piloto o despliegue, te compartimos configuracion de acceso y flujo de uso para
              equipos en campo.
            </p>
          </div>
          <div className="flex w-full max-w-sm flex-col gap-3">
            {apkUrl ? (
              <a
                href={apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
              >
                Descargar APK
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex h-11 items-center justify-center rounded-full border border-brand-moss/35 bg-brand-surface px-6 text-sm font-semibold text-brand-forest/60"
              >
                Descarga no disponible temporalmente
              </button>
            )}
            <TrackedLink
              href="/contacto?tipo=demo_citysensor&producto=citysensor"
              eventName="cta_mobile_contact"
              eventPayload={{ source: "mobile_page_footer" }}
              className="btn-secondary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
            >
              Contactar soporte
            </TrackedLink>
          </div>
        </div>
      </section>
    </div>
  );
}
