import Image from "next/image";

import { cn } from "@/lib/cn";

type BrandLogoProps = {
  variant?: "horizontal" | "stacked";
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  priority?: boolean;
};

export function BrandLogo({
  variant = "horizontal",
  className,
  markClassName,
  wordmarkClassName,
  priority = false,
}: BrandLogoProps) {
  if (variant === "stacked") {
    return (
      <div className={cn("flex flex-col items-center gap-3", className)}>
        <Image
          src="/brand/logo-symbol.png"
          alt=""
          aria-hidden
          width={2250}
          height={2250}
          className={cn("h-auto w-44 object-contain", markClassName)}
          priority={priority}
        />
        <Image
          src="/brand/logo-wordmark.png"
          alt="CardonSense"
          width={2250}
          height={513}
          className={cn("h-auto w-64 object-contain", wordmarkClassName)}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/brand/logo-symbol.png"
        alt=""
        aria-hidden
        width={2250}
        height={2250}
        className={cn("h-9 w-9 object-contain", markClassName)}
        priority={priority}
      />
      <Image
        src="/brand/logo-wordmark.png"
        alt="CardonSense"
        width={2250}
        height={513}
        className={cn("h-6 w-auto object-contain", wordmarkClassName)}
        priority={priority}
      />
    </div>
  );
}
