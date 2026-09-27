# PROMPT FÓRMULA — Web de Negocio de Comida (Plantilla Reusable)

> Copiá y pegá este prompt completo cuando quieras crear una web de negocio de comida (pollos, hamburguesas, tacos, sushi, etc.) con la MISMA calidad, estructura y animaciones del proyecto "Chicken Frito".

---

## PROMPT (esta es la parte que pegás en tu IA)

Quiero que crees una web de marca para un negocio de comida llamada **<NOMBRE DEL NEGOCIO>**, ubicado en **<CIUDAD/PAÍS>**, que vende **<PRODUCTO PRINCIPAL, ej: pollo frito, hamburguesas, tacos>**. Debe ser una landing page premium con SUBPÁGINAS, tal como la de "Chicken Frito" (https://www.chickenfritocr.com). Copiá EXACTAMENTE la misma fórmula: estructura, componentes, sistema de diseño, animaciones y calidad. No inventes otras técnicas; replicá fielmente lo siguiente.

### 1. STACK TÉCNICO (obligatorio)
- **Next.js 16** (App Router) + **React 19** + **TypeScript**.
- **Tailwind CSS 4** (`@import "tailwindcss"` en `globals.css`).
- **GSAP 3** (`gsap`, `@gsap/react` con `useGSAP`, `ScrollTrigger`) + **Lenis** para scroll suave.
- Dependencias exactas: `@gsap/react ^2`, `gsap ^3.15`, `lenis ^1.3`, `next 16.x`, `react 19.x`, `tailwindcss ^4`.
- `next.config.ts`: `images: { qualities: [100, 75] }`.
- Una fuente **display muy bold / extra bold** (tipo universo/black, p.ej. "Universo", "Archivo Black", "Anton") y una fuente **geométrica limpia** para textos (tipo Geist) como fuentes locales con `next/font/local` y variables CSS.

### 2. SISTEMA DE DISEÑO (señales de identidad)
Paleta (definir por negocio, manteniendo la lógica):
- `--background`: crema clara (#fffcf0) — fondo general.
- `--foreground`: casi negro (#1a0a0a) — texto.
- `--primary`: rojo vibrante (#ed1c24) — color hero.
- `--accent`: naranja (#f7941d) — color secundario/CTAs.
- Exportarlos en `@theme inline` como `--color-background`, `--color-foreground`, `--color-primary`, `--color-accent`.

Tipografía global:
- `body`: usa la fuente display bold, `font-weight: 900`, `line-height: 1.1`, `overflow-x: hidden`, font-smoothing antialiased.
- Todos los `h1-h6`: fuente display, `text-transform: uppercase`, `letter-spacing: -0.01em`, `font-weight: 900`, `line-height: 0.85`.
- Botones: SIEMPRE `rounded-full`, `uppercase`, `font-black`, `tracking-widest`; hover `scale-105` y active `scale-95` (transición `transition-all`).

### 3. UTILIDADES CSS DE MARCA (implementar en globals.css)
1. **`.fake-accent`**: crea un acento falso: `display: inline-block; position: relative;` y un `::after` con un trazo diagonal corto (`width .16em; height .035em; top .18em; left 55%; rotate(-35deg)`) color `currentColor`. Se usa envolviendo una vocal que "lleva" acento pero se escribe sin él, ej: `qu<span class='fake-accent'>e</span>`, `c<span class='fake-accent'>o</span>mo`, `m<span class='fake-accent'>u</span>cho`. Variante `.fake-accent-i` para la letra "í". Reglas más finas para footer y menú móvil.
2. **`.text-outline`**: texto con contorno rojo oscuro mediante `text-shadow` múltiple (a partir de ≥768px se refuerza).
3. **`.text-outline-white`**: texto con contorno del color del fondo (varias capas).
4. Scrollbar custom de 8px: track = background, thumb = primary con `border-radius 10px`, hover más oscuro.
5. Estilos Lenis: `html.lenis { height: auto }`, `.lenis.lenis-smooth { scroll-behavior: auto !important }`, `.overflow-hidden { overflow: hidden }`.

### 4. ESQUELETO (SmoothScroll + Layout)
- Componente client `SmoothScroll`: `new Lenis({ lerp: 0.1 })`, `lenis.on("scroll", () => ScrollTrigger.update())`, rAF conectado al `gsap.ticker`, `gsap.ticker.lagSmoothing(0)`. Cleanup: quitar ticker, `lenis.destroy()`, `.kill()` todos los ScrollTriggers. Registrar `ScrollTrigger` UNA vez.
- `layout.tsx`: `<html>` con las variables de fuente (className `h-full antialiased`), `<body className="min-h-full flex flex-col">`, dentro: `<SmoothScroll>{children}</SmoothScroll>` + `<CookieBanner />`.
- Metadata SEO completa: `metadataBase`, `title`, `description`, `robots`, `openGraph` (locale `es_CR`, `type: website`), `twitter.card: summary_large_image`.

### 5. ESTRUCTURA DE LA HOME (orden exacto de secciones)
`<div className="min-h-screen bg-background">`
1. `<Navbar />`
2. `<main>`
   - `<Hero />`         (id="top")
   - `<About />`        (id="nosotros")
   - `<MenuPreview />`  (id="menu")
   - `<Delivery />`     (id="delivery")
   - `<Features />`     (id="features")
   - `<Branches />`     (id="contact")
   - `<Footer />`
3. `<WhatsAppButton />` (fijo, fuera del div)

Cada componente animado es `"use client"` con `useGSAP` + `ScrollTrigger` registrado.

### 6. COMPONENTES — ESPECIFICACIÓN POR PIEZA

**Navbar (client)**
- Fijo `fixed top-0 z-[110]`, contenedor pill `rounded-full bg-background px-6 py-2 shadow-xl` dentro de `max-w-7xl`.
- Logo (navbar), links de anclaje con `fake-accent` en las vocales (usar `dangerouslySetInnerHTML`): Inicio #top, Nosotros #nosotros, Menú #menu, Delivery #delivery, FAQ #features, Contacto #contact.
- Botón CTA "Pedir Ahora" pill primary.
- Móvil: overlay `fixed top:-110vh h-[110vh] z-[100] bg-background` (visible: hidden inicial). Al abrir: GSAP `yPercent: 100` con `power4.out` 0.6s, links aparecen con stagger 0.08 delay 0.2; hamburguesa 3 barras → X (bar1 rotate 45 y7, bar2 opacity 0 x20, bar3 rotate -45 y-7). Al cerrar: inversa `power4.in` y vuelta a hidden. `document.body.classList.add/remove("overflow-hidden")`. Al hacer scroll se cierra.

**Hero (client)**
- `min-h-screen bg-primary` con fondo de franja diagonal (`absolute top-1/2 right-[40%] h-[200%] w-[90%] bg-accent rotate-[35deg]` con `borderRadius 50%`).
- Carrusel de 3 slides (array de objetos `badge`, `title` (3 líneas), `description`, `image`, `accent`, `scale`). Rotación automática cada **6000ms**; transición GSAP: fade out `opacity→0, x:-50, power2.in` 0.5s + stripe `opacity 0, scale 0.8`, luego `setIndex`.
- Entrada de cada slide: stripe `x:200, opacity:0, scale:0.8 → visible`; hijos del contenido `y:50, opacity:0, stagger 0.08`; imagen `x:150, opacity:0.5, scale:0.9`.
- Contenido: badge pill (`rounded-full border border-white/20 bg-white/10 backdrop-blur-sm`, texto upper tracking-widest), H1 gigante (texto `2rem → 6.5rem`, 3 líneas alternando `text-outline` y `text-outline-white`), párrafo `text-white/80`, 2 CTAs ("VER MENU" blanco con flecha `ArrowRight` que se desplaza en hover, y "Pedir Ahora" outline `border-2 border-white/30 hover:bg-white hover:text-primary`), stars 5 en accent + "Google Reviews" + "10k Clientes Felices".
- Imagen: `next/image` `fill`, `object-contain`, `drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]`, `unoptimized`, `quality={100}`, clase de scale por slide (`scale-125 md:scale-[1.40]`), positioning abs en móvil / `lg:relative` con translate.
- Dots inferiores: pill `h-2 rounded-full`, activo `w-10 bg-white` con glow, inactivo `w-6 bg-white/20`.
- Divider inferior: SVG wave (`viewBox 0 0 1200 120`) `fill-background`, `h-12 md:h-16`.

**About (client)** — id="nosotros"
- Grid 2 col. Imagen: círculo `rounded-full border-[10px] border-white shadow-2xl` de 300px/450px con `Image fill object-cover opacity-40` de la textura de fondo + producto encima (`object-contain scale-160` con drop-shadow) + 3 asteriscos/decoraciones SVG rotados (`rotate-[-15deg]`, `rotate-[25deg]`, `rotate-[10deg]`) en primary/accent.
- Texto: etiqueta upper `text-primary tracking-widest`, H2 gigante (p.ej. "EL SECRETO DEL MEJOR POLLO"), párrafo con `fake-accent`, grid 2 col de 4 bullets con icono check en círculo primary.
- Animación ScrollTrigger (`trigger #nosotros`, `start: top 80%`, `toggleActions: play none none none`): imagen `scale 0.8, rotate -5, opacity 0` (power4.out); decoraciones `scale 0` stagger (back.out(2)); título `y 30` stagger; texto `y 20`; bullets `x -15` stagger.

**MenuPreview (client)** — id="menu"
- Watermark: logo gigante `absolute -top-24 -right-48 w-[400px] md:w-[800px] opacity-[0.08] grayscale rotate-[-15deg]` con parallax scrub (`y: 150`).
- Header centrado: bloque con `overflow-hidden` para reveal `yPercent: 100, stagger 0.2, power4.out` (etiqueta, H2 "DESCUBRE LO MEJOR DE NUESTRO SABOR" con segunda línea en primary, botón "Ver el Menú Completo").
- Grid cards `md:grid-cols-2 lg:grid-cols-3` de `h-[220px] md:h-[240px] rounded-[2rem] overflow-hidden`, alternando **blanco** (bg-white, borde, texto foreground) y **rojo** (bg-primary text-white con shadow primary). Cada card: H3 italic `tracking-tighter`, sub `uppercase tracking-widest opacity-70`, botón pill chico "Pedir Ahora", círculo decorativo (`h-48 w-48 rounded-full` en accent o blanco en pos contraria), imagen `fill object-contain` `drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)]` con hover escala/rotación. Hover general: `hover:scale-[1.03]`.
- Animaciones: reveal cards `y: 40, opacity: 0, stagger 0.05` con `once: true`; header scrub `y: -50`; `immediateRender: false`.

**Delivery (client)** — id="delivery"
- Tarjeta `rounded-[2rem] bg-primary shadow-xl` con texto de marca (fondo de imagen `opacity-10 grayscale`).
- Mitad: imagen del delivery (Uber Eats) `object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]` con escalas por breakpoint.
- Mitad: H2 blanco con acento italic accent, párrafo, CTA blanco pill con flecha.
- Animación: imagen `x: -100, opacity 0` (power4.out); contenido hijos `y: 30, opacity 0, stagger 0.2`; `clearProps: "all"`.

**Features (client)** — id="features"
- Grid 2 col. Izquierda: H2 ("¿Por qué elegir...?"), lista de 4 tarjetas `border-l-8 border-accent bg-primary p-8 shadow-2xl` con H3 blanco italic y texto `text-white/90`, hover `scale-[1.02]`.
- Derecha: forma blob (`borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%"`, `bg-accent rounded-full`) + imagen del producto con parallax scrub (`y: -40`).
- CTA grande centrado "Quiero mi Chicken Frito" solo en desktop.
- Animación: contenido `x: -30, opacity 0, stagger 0.05`; blob `scale 0.8, opacity 0` con `back.out(1.7)`.

**Branches (client)** — id="contact"
- Grid `md:grid-cols-2` de cards `bg-white rounded-3xl shadow-xl border-2 border-transparent hover:border-primary/10`.
- Badge número en círculo accent `absolute -top-4 -right-4 rotate-12`.
- Google Maps `iframe` (`https://maps.google.com/maps?q=..&hl=es&z=17&output=embed`) con `grayscale-[0.2] contrast-[1.1]` → `group-hover:grayscale-0`.
- Datos: dirección (Pin), teléfono, horario; botón Waze (`border-2 border-[#33ccff] text-[#33ccff]` → hover relleno, con `WazeIcon`).
- Datos en constante `BRANCHES` (name, address, phone, hours, mapUrl, iframeUrl, wazeUrl).

**Footer (server component)**
- `bg-[#050505] pt-24 pb-12`, grid `md:grid-cols-2 lg:grid-cols-4`: logo footer, descripción con fake-accent, 3 iconos sociales en círculos `bg-white/5` → hover primary + scale 110; columnas "Explora", "Contactanos" (Geist), "Legal" (Términos y Condiciones + Privacidad y Datos — son rutas reales `/terminos` y `/privacidad`).
- Copyright `text-white/40 text-[10px] uppercase tracking-widest` con `border-t border-white/5`.

**WhatsAppButton (server)**
- Fijo `fixed bottom-8 right-8 z-[100] h-16 w-16 rounded-full bg-[#25D366]`, sombra fuerte, anillo `animate-ping opacity-20 group-hover:hidden`, icono WhatsApp. Enlace `wa.me/<numero>?text=<mensaje prellenado>`.

**CookieBanner (client)**
- Muestra si `localStorage.getItem("cookie-consent") !== "true"`; botón "Aceptar" guarda. Tarjeta `rounded-3xl border-2 border-primary/10` blanco con H3 italic + texto con link a `/privacidad`. Animación de entrada `slide-in-from-bottom-10 fade-in`.

### 7. SUBPÁGINAS (todas con Metadata propia)
- **SubpageHeader** común (client opcional, sticky `top-0 z-10 bg-background/90 backdrop-blur-md` con borde): botón "Volver" con `ArrowLeft` que se desplaza en hover, logo centro, spacer derecho.
- Fondo de textura en todas: `absolute inset-0 opacity-[0.02] grayscale` con imagen de textura + `pointer-events-none`.
- **/menu**: título "EL MENU", imágenes del menú (páginas JPG/WebP dentro de cards blancas `rounded-2xl overflow-hidden shadow-xl`).
- **/pedir-ahora**: hero "PEDIR AHORA"; sección 1 "PODES VISITARNOS AL PUBLICO" con las mismas cards de sucursales (réplica de Branches con iframe + Waze); sección 2 "O PEDI POR UBER EATS" con la tarjeta roja de Delivery.
- **/terminos** y **/privacidad**: layout `max-w-4xl` con link "Volver al inicio", H1 con fake-accent, contenido `prose` de texto legal realista (pedidos/entregas, precios, modificaciones; privacidad con recopilación de datos via formulario/WhatsApp, protección, consentimiento).

### 8. SEO / META (igual de pulido que el diseño)
- `layout.tsx` con `metadataBase: new URL("https://www.<marca>.com")`, `openGraph.locale: "es_CR"`.
- `sitemap.ts` con `MetadataRoute.Sitemap`: home (priority 1), /<pedir>, /<menu> (0.9/0.8), /terminos, /privacidad (0.3).
- `public/robots.txt` real, `app/opengraph-image.jpg` + `app/twitter-image.jpg`, favicon.
- Textos con jerga costarricense si el mercado es CR ("pedí", "vení", "disfrutá") — en su idioma correspondiente para otros países.

### 9. CALIDAD / DETALLES (el "toque Chicken Frito")
- **Todas** las imágenes con `unoptimized` y `quality={100}`; usar `.webp`; drop-shadows grandes tipo `drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]` para que el producto "flote".
- Producto siempre presentado "flotando" sobre círculos/blobs/marcos blancos.
- Curvas: `rounded-full` en CTAs, `rounded-[2rem]` en tarjetas grandes, `rounded-3xl` en cards, `rounded-2xl` en imágenes/mapas.
- Mezclar en cada H2: primera línea foreground, una palabra clave en `text-primary italic`.
- Efecto hover con escala sutil + desplazamiento de flechas (`group-hover:translate-x-1`).
- El `fake-accent` debe usarse generosamente en titulares y botones: es la firma visual.
- Contrastes: fondo crema + rojo + naranja + negro; nunca neutro aburrido.

### 10. IMPLEMENTACIÓN FINAL
- Armar el proyecto con `create-next-app` (TypeScript, Tailwind, ESLint, App Router).
- Organizar: `components/` (un archivo por sección + `Icons.tsx` con TODOS los SVG inline, `SmoothScroll`, `SubpageHeader`, `CookieBanner`), `app/fonts.ts` (fuentes locales), `app/page.tsx` (home), subcarpetas por ruta.
- Nada de librerías extra (no añadás animaciones con otras libs ni frameworks CSS adicionales). Solo GSAP + Lenis + Tailwind.
- Verificar al final: `npm run lint`, `npm run build` y que en móvil/desktop el scroll suave, el menú móvil y todos los reveals funcionen sin errores de consola.

**Regla de oro: la identidad visual y el ritmo de animación deben sentirse EXACTAMENTE iguales en cualquier negocio de comida: mismo peso de tipografía, mismas ease (`power4.out`, `power3.out`, `back.out`), mismos bordes redondeados, mismos fake-accent y el scroll suave Lenis. Solo cambian los textos, colores de marca (manteniendo rojo/naranja/crema) y las fotos del producto.**