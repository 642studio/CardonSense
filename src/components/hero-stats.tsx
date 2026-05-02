"use client";

import CountUp from "react-countup";

export function HeroStats() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-6">
      <div>
        <p className="text-3xl font-extrabold tabular-nums text-brand-forest">
          +<CountUp end={3465} duration={2.2} separator="," enableScrollSpy scrollSpyOnce />
        </p>
        <p className="mt-0.5 text-xs font-medium text-foreground/65">reportes en &lt;2 meses · Bachejoa</p>
      </div>
      <div className="h-10 w-px bg-brand-moss/30" />
      <div>
        <p className="text-3xl font-extrabold text-brand-forest">100%</p>
        <p className="mt-0.5 text-xs font-medium text-foreground/65">crecimiento organico</p>
      </div>
    </div>
  );
}
