import type { Metadata, Viewport } from "next";
import { Montserrat, Raleway } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  BASE_KEYWORDS,
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

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
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "CardonSense | CitySensor",
    template: "%s | CardonSense",
  },
  description: SITE_DESCRIPTION,
  keywords: [...BASE_KEYWORDS],
  category: "Government & Public Services",
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "CardonSense | CitySensor",
    description:
      "CitySensor es el producto principal de CardonSense para gobiernos municipales que necesitan gestionar el territorio con datos.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "CardonSense | CitySensor",
    description:
      "CardonSense convierte reportes y senales urbanas en decisiones accionables con CitySensor.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#2F6B3F",
};

const globalSchemas = [organizationJsonLd, websiteJsonLd];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${bodyFont.variable} ${headingFont.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-brand-paper text-brand-forest">
        {globalSchemas.map((schema, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
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
