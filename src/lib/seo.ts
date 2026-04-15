import type { Metadata } from "next";

export const SITE_URL = "https://www.cardonsense.com";
export const SITE_NAME = "CardonSense";
export const SITE_LOCALE = "es_MX";

export const SITE_DESCRIPTION =
  "CardonSense desarrolla CitySensor, producto de inteligencia territorial para detectar, analizar y priorizar incidencias urbanas con evidencia geoespacial.";

export const BASE_KEYWORDS = [
  "CardonSense",
  "CitySensor",
  "inteligencia territorial",
  "gestion urbana",
  "gobiernos municipales",
  "analisis geoespacial",
  "priorizacion operativa",
  "infraestructura urbana",
  "Bachejoa",
] as const;

export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/og/cardonsense-og.png`,
  width: 1024,
  height: 1024,
  alt: "CitySensor de CardonSense para inteligencia territorial",
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

function normalizePath(path: string): string {
  if (!path || path === "/") {
    return "/";
  }

  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

export function canonicalUrl(path: string): string {
  const normalizedPath = normalizePath(path);
  return normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`;
}

function brandFirstTitle(title: string): string {
  const normalized = title.trim();
  if (!normalized) {
    return SITE_NAME;
  }

  if (normalized.toLowerCase().startsWith(SITE_NAME.toLowerCase())) {
    return normalized;
  }

  return `${SITE_NAME} | ${normalized}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const normalizedPath = normalizePath(path);
  const canonical = canonicalUrl(normalizedPath);
  const seoTitle = brandFirstTitle(title);

  return {
    title: {
      absolute: seoTitle,
    },
    description,
    keywords: Array.from(new Set([...BASE_KEYWORDS, ...keywords])),
    alternates: {
      canonical: normalizedPath,
      languages: {
        "es-MX": normalizedPath,
      },
    },
    openGraph: {
      title: seoTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: "website",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-mark.png`,
  description: SITE_DESCRIPTION,
  email: "contacto@cardonsense.com",
  areaServed: "MX",
  knowsAbout: [
    "CitySensor",
    "inteligencia territorial",
    "analisis geoespacial",
    "priorizacion de incidencias urbanas",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "es-MX",
};
