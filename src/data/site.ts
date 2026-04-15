export type FutureApplication = {
  id: "drenaje" | "alumbrado" | "residuos" | "planificacion";
  title: string;
  blurb: string;
  bullets: string[];
};

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/citysensor", label: "CitySensor" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const FUTURE_APPLICATIONS: FutureApplication[] = [
  {
    id: "drenaje",
    title: "Drenaje Urbano",
    blurb: "Deteccion de zonas de riesgo hidraulico para priorizar mantenimiento y respuesta preventiva.",
    bullets: ["Monitoreo por cuenca", "Alertas de saturacion", "Rutas de intervencion"],
  },
  {
    id: "alumbrado",
    title: "Alumbrado Publico",
    blurb: "Lectura territorial de fallas en luminarias para reducir tiempos de respuesta y zonas oscuras.",
    bullets: ["Mapa de fallas", "Prioridad por criticidad", "Seguimiento operativo"],
  },
  {
    id: "residuos",
    title: "Residuos Urbanos",
    blurb: "Identificacion de puntos criticos de acumulacion para optimizar recoleccion y trazabilidad.",
    bullets: ["Puntos geolocalizados", "Prioridad por severidad", "Control por zona"],
  },
  {
    id: "planificacion",
    title: "Planificacion Territorial",
    blurb: "Analisis prospectivo y simulacion de escenarios para ordenar intervenciones municipales.",
    bullets: ["Escenarios de impacto", "Priorizacion por colonia", "Tablero estrategico"],
  },
];

export const INCIDENT_TYPES = ["bache", "alumbrado", "drenaje", "residuos"] as const;

export type IncidentType = (typeof INCIDENT_TYPES)[number];

export type DemoIncident = {
  id: string;
  type: IncidentType;
  zona: "norte" | "centro" | "sur";
  severidad: "baja" | "media" | "alta";
  x: number;
  y: number;
};

export const DEMO_INCIDENTS: DemoIncident[] = [
  { id: "INC-001", type: "bache", zona: "centro", severidad: "alta", x: 52, y: 38 },
  { id: "INC-002", type: "alumbrado", zona: "norte", severidad: "media", x: 37, y: 24 },
  { id: "INC-003", type: "drenaje", zona: "sur", severidad: "alta", x: 60, y: 68 },
  { id: "INC-004", type: "residuos", zona: "centro", severidad: "baja", x: 45, y: 52 },
  { id: "INC-005", type: "bache", zona: "sur", severidad: "media", x: 69, y: 63 },
  { id: "INC-006", type: "alumbrado", zona: "norte", severidad: "alta", x: 30, y: 18 },
  { id: "INC-007", type: "drenaje", zona: "centro", severidad: "media", x: 56, y: 46 },
  { id: "INC-008", type: "residuos", zona: "sur", severidad: "baja", x: 40, y: 73 },
  { id: "INC-009", type: "bache", zona: "centro", severidad: "alta", x: 62, y: 42 },
];
