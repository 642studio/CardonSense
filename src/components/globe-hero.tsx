"use client";

import createGlobe, { type COBEOptions, type Globe } from "cobe";
import { useEffect, useRef } from "react";

type GlobeOptions = COBEOptions & {
};

const MARKERS: NonNullable<COBEOptions["markers"]> = [
  { location: [24.8, -107.4] as [number, number], size: 0.07 },
  { location: [19.43, -99.13] as [number, number], size: 0.045 },
  { location: [20.66, -103.35] as [number, number], size: 0.035 },
  { location: [25.69, -100.32] as [number, number], size: 0.035 },
  { location: [4.71, -74.07] as [number, number], size: 0.03 },
] ;

const ARCS: NonNullable<COBEOptions["arcs"]> = [
  { from: [24.8, -107.4] as [number, number], to: [19.43, -99.13] as [number, number] },
  { from: [19.43, -99.13] as [number, number], to: [20.66, -103.35] as [number, number] },
];

const MOBILE_BREAKPOINT = 768;

function buildOptions(
  size: number,
  isMobile: boolean,
  pixelRatio: number,
  phiRef: { current: number },
): GlobeOptions {
  return {
    devicePixelRatio: pixelRatio,
    width: size * pixelRatio,
    height: size * pixelRatio,
    phi: phiRef.current,
    theta: 0.16,
    dark: 0,
    diffuse: 1.2,
    mapSamples: isMobile ? 16000 : 24000,
    mapBrightness: 6,
    mapBaseBrightness: 0,
    baseColor: [0.2, 0.48, 0.32],
    markerColor: [0.95, 0.45, 0.32],
    glowColor: [0.5, 0.78, 0.61],
    opacity: 1,
    markers: MARKERS,
    arcs: ARCS,
    arcColor: [0.88, 0.52, 0.42],
    arcWidth: 0.34,
    arcHeight: isMobile ? 0.06 : 0.08,
    markerElevation: 0.02,
  };
}

export function GlobeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Start focused on Mexico / LATAM cluster so markers are visible at first paint.
  const phiRef = useRef(5.1);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let globe: Globe | undefined;
    let renderFrame = 0;
    let rotateFrame = 0;
    const render = () => {
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
      const size = Math.max(240, Math.floor(container.clientWidth || 360));
      const options = buildOptions(size, isMobile, pixelRatio, phiRef);

      if (!globe) {
        globe = createGlobe(canvas, options);
      } else {
        globe.update(options);
      }
    };

    const scheduleRender = () => {
      cancelAnimationFrame(renderFrame);
      renderFrame = requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(scheduleRender);
    resizeObserver.observe(container);
    window.addEventListener("resize", scheduleRender);
    scheduleRender();

    const rotate = () => {
      phiRef.current += 0.0018;
      globe?.update({ phi: phiRef.current });
      rotateFrame = requestAnimationFrame(rotate);
    };
    rotateFrame = requestAnimationFrame(rotate);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", scheduleRender);
      cancelAnimationFrame(renderFrame);
      cancelAnimationFrame(rotateFrame);
      globe?.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[320px] px-2 sm:max-w-[420px] sm:px-3 lg:max-w-[500px]"
    >
      <canvas ref={canvasRef} className="relative z-10 block aspect-square w-full" />

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
        <div className="aspect-square w-[66%] animate-[pulseRing_4.4s_ease-out_infinite] rounded-full border border-brand-forest/16" />
        <div className="absolute aspect-square w-[78%] animate-[pulseRing_4.4s_ease-out_infinite_1.3s] rounded-full border border-brand-moss/10" />
      </div>

      <div className="absolute -bottom-2 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-brand-terra/50 bg-white/90 px-3 py-1.5 shadow-lg backdrop-blur-sm sm:-bottom-3">
        <span className="signal-ping inline-block h-1.5 w-1.5 rounded-full bg-brand-terra" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-terra">Bachejoa activo</span>
      </div>
    </div>
  );
}
