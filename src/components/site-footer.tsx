import Link from "next/link";

import { NAV_LINKS } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-brand-moss/15 bg-brand-forest text-brand-cream">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sand">CardonSense</p>
          <p className="max-w-sm text-sm text-brand-cream/90">
            Empresa de inteligencia territorial que desarrolla CitySensor para detectar, analizar y priorizar
            incidencias urbanas con evidencia geoespacial.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sand">Navegacion</p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sand">Contacto</p>
          <p>contacto@cardonsense.com</p>
          <p>Navojoa, Sonora, Mexico</p>
          <p className="text-brand-cream/70">B2G - CitySensor - Inteligencia territorial aplicada</p>
        </div>
      </div>
    </footer>
  );
}
