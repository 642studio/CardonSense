"use client";

import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";

import { type AnalyticsPayload, trackEvent } from "@/lib/analytics";

type TrackedLinkProps = LinkProps & {
  className?: string;
  children: ReactNode;
  eventName?: string;
  eventPayload?: AnalyticsPayload;
};

export function TrackedLink({
  className,
  children,
  eventName,
  eventPayload,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      className={className}
      {...props}
      onClick={() => {
        if (eventName) {
          trackEvent(eventName, eventPayload);
        }
      }}
    >
      {children}
    </Link>
  );
}
