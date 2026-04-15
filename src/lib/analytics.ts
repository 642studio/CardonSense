export type AnalyticsPayload = Record<string, string | number | boolean | null | undefined>;

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}): void {
  if (typeof window === "undefined") return;

  const dataLayer = (window as Window & { dataLayer?: Array<Record<string, unknown>> }).dataLayer;
  dataLayer?.push({ event: eventName, ...payload });

  const gtag = (window as Window & {
    gtag?: (command: "event", name: string, params?: AnalyticsPayload) => void;
  }).gtag;

  gtag?.("event", eventName, payload);

  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", eventName, payload);
  }
}
