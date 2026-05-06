# Reto Website

Sitio web oficial de Reto — plataforma de educación médica B2B.

## Stack

- [Astro](https://astro.build) (static site generator)
- TypeScript estricto
- i18n nativo (ES default, EN secundario)
- Despliegue en Vercel

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

El sitio estará en `http://localhost:4321`.

## Estructura

- `src/pages/` — páginas del sitio
- `src/components/` — componentes reutilizables
- `src/layouts/` — layouts base
- `src/i18n/` — diccionarios de traducciones (es.json, en.json)
- `src/styles/` — CSS global y tokens
- `public/` — assets estáticos (logos, fonts, favicon)
- `docs/` — documentación interna del proyecto

## Idiomas

- Español (default): `/`
- Inglés: `/en/`

## Documentación interna

Ver carpeta `docs/`:
- `brief.md` — resumen del brief de Reto
- `decisiones.md` — decisiones técnicas y de diseño
- `contenido-aprobado.md` — copy aprobado por sección
- `contenido-pendiente.md` — pendientes (casos éxito, fotos, video)
- `prompts/` — historial de prompts ejecutados
