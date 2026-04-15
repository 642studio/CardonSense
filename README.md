# CardonSense Website V1

Sitio web institucional de CardonSense construido con Next.js 16, TypeScript y Tailwind CSS.

## Objetivo del sitio

- Posicionar CardonSense como plataforma de inteligencia territorial.
- Mostrar portafolio de soluciones: Bachejoa activo + verticales proximamente.
- Convertir visitas en oportunidades de demo/piloto para gobiernos municipales.

## Rutas implementadas

- `/` Inicio
- `/plataforma`
- `/soluciones`
- `/soluciones/bachejoa`
- `/contacto`
- `POST /api/lead`

## Requisitos

- Node.js 22+
- npm 10+

## Configuracion local

1. Instala dependencias:

```bash
npm install
```

2. Crea tu archivo de entorno:

```bash
cp .env.example .env.local
```

3. Completa variables:

- `RESEND_API_KEY`
- `LEAD_FROM_EMAIL`
- `LEAD_TO_EMAIL` (por defecto `contacto@cardonsense.com`)

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Calidad y pruebas

```bash
npm run lint
npm run test
npm run test:e2e
npm run build
```

## Stack tecnico

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Zod para validacion
- Resend para envio de leads por correo
- Vitest para unit/integration tests
- Playwright para e2e
