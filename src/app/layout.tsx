import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const bodyFont = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const headingFont = Raleway({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cardonsense.com"),
  title: {
    default: "CardonSense | CitySensor",
    template: "%s | CardonSense",
  },
  description:
    "CardonSense desarrolla CitySensor, producto de inteligencia territorial para detectar, analizar y priorizar incidencias urbanas con evidencia geoespacial.",
  openGraph: {
    title: "CardonSense | CitySensor",
    description:
      "CitySensor es el producto principal de CardonSense para gobiernos municipales que necesitan gestionar el territorio con datos.",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CardonSense | CitySensor",
    description:
      "CardonSense convierte reportes y senales urbanas en decisiones accionables con CitySensor.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${bodyFont.variable} ${headingFont.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-brand-paper text-brand-forest">
        <div className="relative min-h-screen overflow-x-clip">
          <div className="pointer-events-none absolute inset-0">
            <div className="hero-grid absolute inset-0 opacity-[0.08]" />
            <div className="territory-topo absolute inset-0 opacity-[0.015]" />
            <div className="territory-points absolute inset-0 opacity-[0.01]" />
          </div>
          <SiteHeader />
          <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
