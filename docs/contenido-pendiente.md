# Contenido pendiente

Assets y contenido que el usuario debe proveer antes del deploy final.

## Assets visuales

- [ ] Logo Reto (versión B2B) en SVG — colocar en `public/logos/`
- [ ] Logo Mellow en SVG — colocar en `public/logos/`
- [ ] Fotos o ilustraciones para secciones del Home
- [ ] Video demo — URL real del video (para reemplazar el placeholder en la sección "Mira Reto en acción")
- [ ] Logos de aliados — lista de 8 aliados + archivos SVG/PNG (para reemplazar los placeholders en la sección "Instituciones que confían en Reto")
- [ ] **Imagen OG final** (`public/og-image.png`, 1200×630px) — actualmente hay un placeholder de 1×1px. Reemplazar con imagen real: fondo del color principal del sitio (#201E1E o #FFB500), logo de Reto centrado, tagline. Es lo que aparece al compartir el link en WhatsApp, Slack, redes sociales.
- [ ] **Favicon PNGs** — `public/apple-touch-icon.png` (180×180), `public/favicon-32x32.png`, `public/favicon-16x16.png`. El SVG ya funciona en navegadores modernos; los PNGs son para iOS Safari y navegadores legacy.

## Copy

- [ ] Casos de éxito (testimonios, datos, logos de clientes)
- [ ] Caso de éxito hospital (testimonio, métricas, logo)
- [ ] Caso de éxito industria farmacéutica (testimonio, métricas, logo de laboratorio)
- [ ] Métricas de impacto verificadas
- [ ] Textos legales (aviso de privacidad, términos)

## Técnico

- [ ] **Conectar formulario de contacto a backend** (Formspree / Resend / CRM cliente). El handler está aislado en `src/components/forms/ContactForm.astro`, función `handleSubmit`. Cuando esté conectado, cambiar prop `showDemoBanner` a `false` en `src/pages/contacto.astro` y `src/pages/en/contact.astro`.
- [ ] **Dominio final confirmado** — actualmente placeholder `reto.health`. Actualizar en:
  - `astro.config.mjs` → `site:`
  - `public/robots.txt` → URL del sitemap
- [ ] **Banda de "modo demo"** — quitar cuando backend esté conectado (`showDemoBanner={false}` en las páginas de contacto)
- [ ] Credenciales Vercel para deploy
- [ ] Analytics / tracking (Google Analytics o Plausible)
