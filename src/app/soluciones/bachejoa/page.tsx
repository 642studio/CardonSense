import type { Metadata } from "next";
import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { TrackedLink } from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "Bachejoa",
  description:
    "Bachejoa es la implementacion activa de CitySensor para infraestructura vial y validacion del modelo de inteligencia territorial.",
};

const systemRole = [
  "Captura reportes ciudadanos geolocalizados con tipo y severidad.",
  "Genera dataset territorial continuo para lectura operativa.",
  "Alimenta CitySensor con evidencia de campo en tiempo real.",
  "Valida la efectividad del modelo para pilotos B2G.",
] as const;

const validationFlow = [
  "Ciudadania reporta incidencias viales en territorio activo.",
  "Bachejoa estructura y clasifica los reportes por prioridad.",
  "CitySensor integra, valida y analiza el comportamiento espacial.",
  "Municipio ejecuta intervenciones y registra trazabilidad operativa.",
] as const;

export default function BachejoaPage() {
  return (
    <div className="space-y-14 pb-12 sm:space-y-16">
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
                Construido sobre CitySensor
              </p>
            </div>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-brand-forest sm:text-5xl">Bachejoa</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-foreground/85 sm:text-lg">
              Bachejoa no es un producto aislado: es la implementacion de CitySensor enfocada en infraestructura
              vial para demostrar como la participacion ciudadana se convierte en inteligencia territorial accionable.
            </p>
            <p className="mt-4 text-lg font-bold text-brand-terra">
              +3,465 reportes en menos de 2 meses - crecimiento 100% organico
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="surface-2 rounded-2xl p-6">
          <SectionHeading
            eyebrow="Rol dentro del sistema"
            title="Como Bachejoa alimenta CitySensor"
            description="Cada reporte de campo se transforma en datos estructurados para analisis, priorizacion y accion institucional."
          />
          <ul className="mt-5 space-y-2 text-sm leading-6 text-foreground/82">
            {systemRole.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>

        <article className="surface-2 rounded-2xl p-6">
          <SectionHeading
            eyebrow="Validacion del modelo"
            title="Flujo operativo que valida CitySensor"
            description="Bachejoa demuestra el ciclo completo desde captura ciudadana hasta ejecucion municipal con trazabilidad."
          />
          <ol className="mt-5 space-y-2 text-sm leading-6 text-foreground/82">
            {validationFlow.map((step, index) => (
              <li key={step}>
                {index + 1}. {step}
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="surface-1 rounded-3xl p-8 sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-brand-forest sm:text-4xl">
              Quiero implementar Bachejoa como piloto de CitySensor.
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/82">
              Revisemos cobertura, objetivos y condiciones para activar una implementacion municipal.
            </p>
          </div>

          <TrackedLink
            href="/contacto?tipo=implementacion_bachejoa&producto=bachejoa"
            eventName="cta_bachejoa_piloto"
            className="btn-primary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
          >
            Agendar piloto
          </TrackedLink>
        </div>
      </section>
    </div>
  );
}
