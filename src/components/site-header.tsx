"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandLogo } from "@/components/brand-logo";
import { NAV_LINKS } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-moss/30 bg-brand-surface-soft/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Inicio CardonSense">
          <BrandLogo
            variant="horizontal"
            className="gap-3 sm:gap-3.5"
            markClassName="h-10 w-10 sm:h-11 sm:w-11"
            wordmarkClassName="h-7 sm:h-8"
            priority
          />
        </Link>

        <nav className="flex items-center gap-1 rounded-full border border-brand-moss/34 bg-brand-card/92 p-1.5 text-sm font-semibold text-brand-forest shadow-[0_4px_10px_rgba(30,57,37,0.08)]">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3 py-2 transition-colors duration-200 sm:px-4 after:pointer-events-none after:absolute after:bottom-[6px] after:left-3 after:right-3 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-terra after:transition-transform after:duration-200 sm:after:left-4 sm:after:right-4",
                  isActive
                    ? "bg-brand-surface text-brand-forest after:scale-x-100"
                    : "text-brand-forest/85 hover:bg-brand-surface/70 hover:text-brand-forest hover:after:scale-x-100",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contacto?tipo=demo_citysensor&producto=citysensor"
          className="btn-primary hidden rounded-full px-4 py-2 text-sm font-semibold lg:inline-flex"
          onClick={() => trackEvent("cta_header_demo")}
        >
          Solicitar demo de CitySensor
        </Link>
      </div>
    </header>
  );
}
