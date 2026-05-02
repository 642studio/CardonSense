"use client";

import dynamic from "next/dynamic";

export const GlobeHero = dynamic(() => import("@/components/globe-hero").then((m) => m.GlobeHero), {
  ssr: false,
  loading: () => (
    <div className="flex aspect-square w-full max-w-[320px] items-center justify-center rounded-full border border-brand-moss/20 bg-brand-surface/40 sm:max-w-[420px] lg:max-w-[500px]">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-forest/30 border-t-brand-forest" />
    </div>
  ),
});
