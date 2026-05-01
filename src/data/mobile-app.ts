export const MOBILE_APP_OPERATION_FEATURES = [
  "Captura de incidencias en campo con geolocalizacion precisa.",
  "Registro de evidencia visual asociada a cada hallazgo.",
  "Clasificacion por severidad y tipo de incidencia.",
  "Trazabilidad por mision para seguimiento operativo.",
  "Sincronizacion con operacion territorial para priorizacion institucional.",
] as const;

export const MOBILE_APP_ARCHITECTURE = [
  {
    title: "Frontend",
    text: "Next.js, React, TypeScript, Tailwind CSS y MapLibre para visualizacion geoespacial.",
  },
  {
    title: "Backend",
    text: "FastAPI con SQLAlchemy, Alembic, JWT, control de roles, auditoria y servicios para reportes, imagenes y geometrias.",
  },
  {
    title: "Base de datos geoespacial",
    text: "PostgreSQL + PostGIS para zonas, poligonos, puntos, misiones, incidencias y limites administrativos.",
  },
  {
    title: "Almacenamiento",
    text: "MinIO compatible con S3 para imagenes originales y miniaturas con URLs firmadas.",
  },
  {
    title: "Infraestructura",
    text: "Docker Compose con API, web, Redis, MinIO, worker y base geoespacial.",
  },
] as const;

export const MOBILE_APP_SECURITY = [
  "Autenticacion con JWT y refresh token rotativo.",
  "Hash de contrasenas con Argon2.",
  "Control de acceso por rol y por municipio.",
  "Auditoria de eventos operativos relevantes.",
  "Separacion multi-municipio con municipality_id.",
] as const;

export const MOBILE_APP_ROLES = ["Admin", "Operator", "Supervisor", "Municipality"] as const;

export const MOBILE_APP_GEOSPATIAL = [
  "Soporte de datos GeoJSON para operacion territorial.",
  "Zonas en MULTIPOLYGON con SRID 4326.",
  "Incidencias como punto, poligono o multipoligono.",
  "Calculo de areas de vuelo en metros cuadrados.",
  "Visualizacion de limites administrativos, colonias y municipios.",
] as const;

export const MOBILE_APP_MUNICIPAL_VALUE = [
  "Ubicacion precisa de incidencias en territorio.",
  "Evidencia visual por cada hallazgo.",
  "Priorizacion por severidad.",
  "Planeacion de inspecciones por zona.",
  "Seguimiento por mision y trazabilidad operativa.",
  "Reportes tecnicos exportables.",
  "Control de acceso por municipio y rol.",
  "Base preparada para integracion de deteccion con IA.",
] as const;

export const MOBILE_APP_DIFFERENTIATORS = [
  "Enfoque municipal desde diseno y operacion.",
  "Datos georreferenciados con evidencia visual por mision.",
  "Mapas satelitales y lectura territorial accionable.",
  "Seguridad por roles en contexto multi-municipio.",
  "Preparada para IA y procesamiento territorial futuro.",
] as const;

export const MOBILE_APP_ROADMAP = [
  "Dashboard territorial con mapa de incidencias en tiempo real.",
  "Vista detallada de mision con galeria, mapa, severidades y progreso.",
  "Deteccion automatica de baches o deterioro vial con IA.",
  "Asignacion de incidencias a cuadrillas y seguimiento de reparacion.",
  "Panel publico de transparencia con indicadores agregados.",
] as const;
