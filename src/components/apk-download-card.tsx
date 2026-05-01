"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics";
import { TrackedLink } from "@/components/tracked-link";

type ApkDownloadCardProps = {
  apkUrl?: string;
};

export function ApkDownloadCard({ apkUrl }: ApkDownloadCardProps) {
  const normalizedApkUrl = apkUrl?.trim() ?? "";
  const hasApk = normalizedApkUrl.length > 0;

  useEffect(() => {
    if (!hasApk) {
      trackEvent("apk_unavailable_view", { source: "mobile_page" });
    }
  }, [hasApk]);

  return (
    <aside className="surface-2 rounded-2xl p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-moss">Android APK</p>
      <h3 className="mt-2 text-2xl font-bold text-brand-forest">Descarga la app movil de CitySensor</h3>
      <p className="mt-3 text-sm leading-6 text-foreground/82">
        Aplicacion para captura operativa en campo. Disponible actualmente para Android.
      </p>
      <p className="mt-2 text-xs text-foreground/70">
        iOS: en planeacion de roadmap. Mientras tanto, la operacion movil se realiza via APK en Android.
      </p>

      <div className="mt-5 flex flex-col gap-3">
        {hasApk ? (
          <a
            href={normalizedApkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold"
            onClick={() => trackEvent("cta_mobile_apk_download", { source: "mobile_page" })}
          >
            Descargar APK
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex h-11 items-center justify-center rounded-full border border-brand-moss/35 bg-brand-surface px-5 text-sm font-semibold text-brand-forest/60"
          >
            Descarga no disponible temporalmente
          </button>
        )}

        <TrackedLink
          href="/contacto?tipo=demo_citysensor&producto=citysensor"
          eventName="cta_mobile_contact"
          eventPayload={{ source: "mobile_page" }}
          className="btn-secondary inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold"
        >
          Solicitar acceso o soporte
        </TrackedLink>
      </div>
    </aside>
  );
}
