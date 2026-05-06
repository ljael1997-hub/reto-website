# Reto — Sitio web

Sitio web B2B de Reto, plataforma de educación médica continua para universidades, hospitales e industria farmacéutica. Construido como sitio estático bilingüe (español / inglés) orientado a la generación de leads institucionales.

## Stack

- **[Astro](https://astro.build/)** — generador de sitios estáticos, output HTML/CSS con mínimo JS
- **i18n manual ES/EN** — archivos JSON de traducciones en `src/i18n/`, sin prefijo para español (`/`), prefijo `/en/` para inglés
- **CSS custom properties** — design system de tokens en `src/styles/tokens.css`
- **Deploy en [Vercel](https://vercel.com/)** — estático, sin servidor

## Correr en local

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build de producción

```bash
npm run build      # output en dist/
npm run preview    # previsualizar el build local
```

## Estructura del proyecto

```
src/
├── components/       # Componentes reutilizables (.astro)
│   ├── audiences/    # Secciones por audiencia (hospitales, industria, universidades)
│   ├── forms/        # Formulario de contacto y CTA
│   ├── methodology/  # Sección de pilares metodológicos
│   ├── paths/        # Rutas educativas
│   └── whatIsReto/   # Secciones de "¿Qué es Reto?"
├── i18n/
│   ├── es.json       # Traducciones en español
│   ├── en.json       # Traducciones en inglés
│   └── utils.ts      # Helper useTranslations()
├── layouts/
│   └── BaseLayout.astro  # Layout principal (head, header, footer, skip link, OG tags)
├── pages/            # Páginas en español (ruta raíz)
│   ├── en/           # Páginas en inglés (/en/*)
│   └── 404.astro     # Página de error 404
└── styles/
    ├── tokens.css    # Design tokens (colores, tipografía, espaciado)
    └── global.css    # Reset y estilos base
public/
├── logos/            # SVGs del logo de Reto
├── brand/            # Íconos WebP (metodología, especialidades)
├── favicon.svg       # Favicon principal
├── robots.txt        # Directivas para bots de búsqueda
└── og-image.png      # Imagen OG para previews (placeholder — ver contenido-pendiente.md)
```

## Idiomas

| Idioma | Ruta | Ejemplo |
|--------|------|---------|
| Español (default) | `/` | `/contacto`, `/universidades` |
| Inglés | `/en/` | `/en/contact`, `/en/universities` |

El selector de idioma en el header mapea cada página a su equivalente en el otro idioma.

## Documentación

- [`docs/decisiones.md`](docs/decisiones.md) — Decisiones técnicas y de diseño con contexto
- [`docs/contenido-pendiente.md`](docs/contenido-pendiente.md) — Assets y copy que el cliente debe proveer antes del deploy final

## Estado actual

Sitio listo para presentación a cliente. Todas las páginas están implementadas y funcionales en local.

- **Formulario de contacto:** en modo demo — muestra banda de aviso visible, no envía datos a ningún backend todavía. Ver `docs/decisiones.md` para contexto y punto de modificación.
- **Pendiente:** dominio final, conexión de backend del formulario, assets visuales reales (fotos, logos de aliados, video demo), analytics.
- **Deploy:** conectar el repositorio a Vercel desde la interfaz web. No requiere configuración adicional — Astro detecta el framework automáticamente.
