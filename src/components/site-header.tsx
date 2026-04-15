"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { NAV_LINKS } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-moss/30 bg-brand-surface-soft/90 backdrop-blur-md">
      <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 items-center" aria-label="Inicio CardonSense">
            <BrandLogo
              variant="horizontal"
              className="gap-2.5 sm:gap-3"
              markClassName="h-10 w-10 sm:h-11 sm:w-11"
              wordmarkClassName="h-7 w-auto sm:h-8"
              priority
            />
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="site-mobile-nav"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-moss/40 bg-brand-card/95 text-brand-forest shadow-[0_4px_10px_rgba(30,57,37,0.09)] md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6L18 18M6 18L18 6" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>

          <nav className="hidden items-center gap-1 rounded-full border border-brand-moss/34 bg-brand-card/92 p-1.5 text-sm font-semibold text-brand-forest shadow-[0_4px_10px_rgba(30,57,37,0.08)] md:flex">
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

        <div
          id="site-mobile-nav"
          className={cn(
            "md:hidden transition-all duration-200",
            mobileMenuOpen ? "max-h-[420px] pt-3 opacity-100" : "max-h-0 overflow-hidden opacity-0",
          )}
        >
          <nav className="rounded-2xl border border-brand-moss/34 bg-brand-card/95 p-2 text-sm font-semibold text-brand-forest shadow-[0_8px_14px_rgba(30,57,37,0.1)]">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block rounded-xl px-3 py-2.5",
                    isActive
                      ? "bg-brand-surface text-brand-forest"
                      : "text-brand-forest/85 hover:bg-brand-surface/70 hover:text-brand-forest",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contacto?tipo=demo_citysensor&producto=citysensor"
            className="btn-primary mt-3 inline-flex h-11 w-full items-center justify-center rounded-full px-4 text-sm font-semibold"
            onClick={() => {
              setMobileMenuOpen(false);
              trackEvent("cta_header_demo");
            }}
          >
            Solicitar demo de CitySensor
          </Link>
        </div>
      </div>
    </header>
  );
}
