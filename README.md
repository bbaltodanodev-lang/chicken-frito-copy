# Chicken Frito Copy 🍗

> **Demo / copia de proyecto.** Este repositorio es una reproducción del sitio web
> **Chicken Frito** creada con fines de **demostración y portafolio**. No es el sitio
> oficial del negocio, no está afiliado ni respaldado por la marca, y **no está
> diseñado para posicionamiento en buscadores** (está configurado con
> `noindex, nofollow` de forma deliberada).

Sitio web de una cadena de pollo frito, replicado con una landing page premium y
subpáginas propias. Construido sobre **Next.js 16** con **App Router**, **React 19**,
**TypeScript**, **Tailwind CSS 4** y una capa de animaciones con **GSAP** y **Lenis**.

---

## 📸 Características

### Página principal (landing)
| Sección | Descripción |
| --- | --- |
| **Navbar** | Menú fijo con overlay animado, navegación por anclas y enlace a redes. |
| **Hero** | Slider de 3 slides con transiciones GSAP, badge, CTA y fondo animado. |
| **About** | Sección "Nosotros" con entrada por scroll y checklist de valores. |
| **MenuPreview** | Vista previa de los productos destacados con enlace a la carta completa. |
| **Delivery** | Integración con **Uber Eats** para pedidos a domicilio. |
| **Features** | Bloque de ventajas (receta secreta, pollo 100 % fresco, crujido, etc.). |
| **Branches** | Sucursales con dirección, teléfono, horario y enlaces a mapa. |
| **Footer** | Pie de página con navegación, contacto, horarios y redes sociales. |
| **WhatsAppButton** | Botón flotante de contacto directo por WhatsApp. |
| **CookieBanner** | Aviso de cookies con persistencia de la preferencia en `localStorage`. |

### Subpáginas
- `/menu` — carta completa de productos.
- `/pedir-ahora` — flujo de pedido.
- `/privacidad` — política de privacidad.
- `/terminos` — términos y condiciones.

### Animación y experiencia
- **Scroll suave** con [Lenis](https://github.com/darkroomengineering/lenis) integrado al ticker de GSAP.
- **Animaciones de entrada** por sección mediante `ScrollTrigger` (reveal, parallax, stagger).
- Transiciones y overlays con `useGSAP` + el hook `gsap.context` para limpieza segura de triggers.
- **Fuentes locales** con `next/font/local` (Geist + familia Universo), sin peticiones a terceros.

---

## 🛠️ Tecnologías

| Capa | Tecnología |
| --- | --- |
| Framework | **Next.js 16.3.5** (App Router, Turbopack) |
| UI | **React 19.2.8** · **React DOM 19.2.8** |
| Lenguaje | **TypeScript 5** (modo estricto) |
| Estilos | **Tailwind CSS 4** (vía `@tailwindcss/postcss`) |
| Animación | **GSAP 3.15** · **@gsap/react 2.1** · **ScrollTrigger** |
| Scroll | **Lenis 1.3** |
| Imágenes | `next/image` con **WebP** y qualities configuradas |
| Linting | **ESLint 9** + `eslint-config-next` |

---

## 🚀 Cómo ejecutar el proyecto

### Requisitos
- **Node.js 20+** (probado en v24)
- **npm 10+**

### Instalación

```bash
git clone https://github.com/bbaltodanodev-lang/chicken-frito-copy.git
cd chicken-frito-copy
npm install
```

### Modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo con hot reload
npm run build    # Build de producción
npm run start    # Sirve el build de producción
npm run lint     # Análisis estático con ESLint
```

### Build de producción

```bash
npm run build
npm run start
```

Todas las rutas se pre-renderizan de forma estática (SSG).

---

## 📁 Estructura

```
chicken-frito-copy/
├── app/
│   ├── fonts.ts              # Configuración de fuentes locales
│   ├── fonts/                # Archivos de fuente (.woff2 / .otf)
│   ├── globals.css           # Tokens y estilos globales
│   ├── layout.tsx            # Layout raíz + metadata
│   ├── page.tsx              # Landing page
│   ├── menu/page.tsx         # Carta completa
│   ├── pedir-ahora/page.tsx  # Flujo de pedido
│   ├── privacidad/page.tsx   # Política de privacidad
│   ├── terminos/page.tsx     # Términos y condiciones
│   ├── favicon.ico
│   ├── opengraph-image.jpg
│   └── twitter-image.jpg
├── components/
│   ├── About.tsx
│   ├── Branches.tsx
│   ├── CookieBanner.tsx
│   ├── Delivery.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Icons.tsx             # Set de iconos SVG inline
│   ├── MenuPreview.tsx
│   ├── Navbar.tsx
│   ├── SmoothScroll.tsx
│   ├── SubpageHeader.tsx
│   └── WhatsAppButton.tsx
├── public/                   # Logo, heroes, imágenes de menú, robots.txt
├── .gitignore
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🤖 Assistido por IA

Este proyecto fue asistido por herramientas de IA para la generación y refactorización
de código. Consulta [`PROMPT-FORMULA-WEB-COMIDA.md`](./PROMPT-FORMULA-WEB-COMIDA.md)
para la guía de prompting reutilizable con la que se construyó.

---

## 🔍 Nota sobre indexación

Este repositorio es una **copia de demostración** y está configurado intencionadamente
para **no ser indexado**:

- `robots: { index: false, follow: false, nocache: true }` en `app/layout.tsx`.
- `public/robots.txt` con `Disallow: /` para todos los user-agents.
- Sin `sitemap.xml` generado.

Si en algún momento se quisiera publicar como sitio real, habría que revertir estos tres puntos.

---

## 📄 Licencia

MIT — ver [LICENSE](./LICENSE).

---

## ⚠️ Aviso legal

- Las **marcas, logotipos, fotografías e identidad visual** de Chicken Frito pertenecen a
  sus respectivos titulares. Este repositorio es una **réplica técnica sin fines comerciales**.
- Las fuentes **Fontspring DEMO Universo** incluidas en `app/fonts/` son versiones de
  demostración con licencia de evaluación; Sustitúyelas por fuentes con licencia comercial
  antes de cualquier publicación de cara al público.

---

**Autor:** Bernal Baltodano Leiva · [@bbaltodanodev-lang](https://github.com/bbaltodanodev-lang)
