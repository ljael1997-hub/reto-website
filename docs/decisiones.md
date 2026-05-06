# Decisiones del proyecto

## Stack: Astro

Se eligió Astro sobre Next.js / React vainilla por:
- Sitio mayoritariamente estático (marketing B2B)
- Output 100% HTML/CSS, sin JS innecesario
- i18n nativo
- Curva de aprendizaje compatible con HTML/CSS vanilla
- Deploy gratuito en Vercel

## Idiomas

ES default, EN secundario. Estructura simplificada: mismo HTML, dos archivos JSON de traducciones.

## Branding

Definido en `Branding_Reto_2025.pptx`. Resumen aplicado:

### Paleta
- Película clásica: `#201E1E`
- Amarillo Mellow: `#FFB500`
- Azul acero: `#66B3FF`
- Aliceblue: `#F5F9FC`
- Cielo: `#7C99EC`
- Tomate: `#E45A3D`
- Rosa: `#F8BAD4`

### Tipografía
- Bricolage Grotesque (Extra Bold) — titulares y CTAs
- Inter (Medium) — cuerpo

### Logo
Isologo Reto en su versión B2B (sin Emdi, que es B2C/app).

## Pendientes técnicos

- Instalar y configurar tipografías (Prompt 01)
- Sistema de tokens CSS (Prompt 01)
- Componentes base: Button, Section, Card (Prompt 01)
- Header con selector de idioma (Prompt 01)
- Footer con enlace a Mellow (Prompt 01)

## 2026-05-06 — Formulario de contacto: frontend-only en v1

**Contexto:** Prompt 09 implementa la página de contacto con formulario completo.

**Decisión:** El formulario en esta versión es frontend-only. Valida y muestra mensaje de éxito, pero no envía datos a ningún backend.

**Razón:** El cliente (Reto) aún no ha aprobado la propuesta. Cuando lo haga, se decidirá con ellos qué servicio de backend usar — pueden tener un CRM propio, preferir Formspree, o querer una solución más robusta como Resend con dominio propio. Comprometerse ahora a una infra obligaría a migrar después.

**Punto de modificación:** `src/components/forms/ContactForm.astro`, función `handleSubmit`. Es el único punto a tocar cuando se defina el backend.

**Implicación:** El sitio se puede entregar y mostrar al cliente. Si alguien llena el formulario antes de conectar backend, los datos se pierden — esto debe estar documentado para Reto antes del deploy productivo.
