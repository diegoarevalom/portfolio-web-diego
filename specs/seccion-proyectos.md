# Sección de Proyectos — Portfolio Next.js

## Objetivo

Reemplazar la sección de proyectos actual del portfolio (`components/ui/projects.tsx`,
`components/ui/projectCard.tsx`, `components/data/projectData.js`) por una versión
actualizada que refleje el trabajo real de Diego Arévalo: proyectos personales (con IA,
fullstack, frontend) y experiencia profesional en OYT Tecnología SPA. El objetivo es que
un reclutador o cliente potencial que visite el portfolio pueda filtrar rápidamente por
tipo de proyecto y entender el stack y alcance de cada uno, sin perder el estilo visual
oscuro ya existente.

## Estado actual del código (referencia, no modificar el patrón sin razón)

- `components/data/projectData.js`: array plano de objetos `{ id, title, image, tag: string[],
  gitUrl, netlifyUrl }`. Sólo usa `tag[0]` en el render actual.
- `components/ui/projects.tsx`: itera `projectData` y renderiza `ProjectCard` dentro de un grid
  `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`. Título con gradiente amarillo→verde
  (`#fef08a` → `#86efac`) sobre fondo oscuro.
  `linear-gradient(to right, #fef08a, #86efac)`.
- `components/ui/projectCard.tsx`: card con imagen de fondo, overlay al hover con dos
  botones circulares blancos (GitHub y Demo) que aparecen con `opacity-0 group-hover:opacity-100`.

Estos tres archivos deben extenderse (no reescribirse desde cero de forma inconsistente)
para soportar categorías, filtros, badge de proyecto privado y botones condicionales.

## Requisitos

### 1. Fuente de datos (`projectData.js` o equivalente)

Cada proyecto debe soportar:
- `id`, `title`, `description`, `image`, `stack: string[]`, `categories: string[]`
  (multi-categoría — un proyecto puede pertenecer a más de un filtro).
- `gitUrl?`, `demoUrl?` (opcionales — ver reglas de botones abajo).
- `isPrivate: boolean` — true para proyectos de experiencia profesional.
- `company?: string` — sólo para proyectos privados, se muestra en cursiva.

### 2. Categoría 1 — Proyectos Personales

Botones GitHub + Demo (Demo sólo si existe `demoUrl`, ver casos borde). Placeholder de
imagen con gradiente/ícono representativo del stack (no hay screenshots todavía).

| # | Título | GitHub | Demo | Categorías | Stack |
|---|--------|--------|------|------------|-------|
| 1 | CV Analyzer AI | `github.com/diegoarevalom/analizador-cv-anthropic` (nombre real del repo, corregir de "analizadorcv") | `https://analizador-cv-anthropic.vercel.app` | IA, Fullstack | Next.js · TypeScript · Supabase · Claude API · Docker |
| 2 | Generador de Carta de Presentación con IA | `github.com/diegoarevalom/carta-presentacion-ia` | — (sin demo) | IA, Fullstack | Next.js · TypeScript · Supabase · Claude API |
| 3 | Dicase Ecommerce | `github.com/diegoarevalom/dicase_ecommerce` | — (sin demo) | Fullstack | React · TypeScript · Node.js · MongoDB |
| 4 | MERN APV | `github.com/diegoarevalom/MERN_APV_frontend` | — (sin demo) | Fullstack | MongoDB · Express · React · Node.js |
| 5 | WhatsApp Clone | `github.com/diegoarevalom/whattsap_clone` | — (sin demo) | Frontend, Fullstack | React · JavaScript · WebSockets · Supabase |
| 6 | Bestias Australes | `github.com/diegoarevalom/Bestias-australes` | — (sin demo) | Frontend | JavaScript (juego RPG de captura de criaturas) |

Notas:
- El repo de CV Analyzer se llama en GitHub `analizador-cv-anthropic`, no `analizadorcv` como
  se mencionó inicialmente — usar el nombre real.
- Se descartó incluir `cita-tucurucuchu` (repo sin descripción en GitHub).
- No incluir repos de cursos/pruebas sin descripción (`formulario_desis`,
  `portfolio_nextjs`, `curso_node_js`, etc.) — quedan fuera.

### 3. Categoría 2 — Experiencia Profesional

Sin botones de GitHub ni Demo. Badge 🔒 "Proyecto Privado" en su lugar. Nombre de la
empresa en cursiva. Mismo diseño de card que los personales (mismo tamaño, mismo hover,
mismo placeholder de imagen).

| # | Título | Empresa (cursiva) | Categorías | Stack |
|---|--------|--------------------|------------|-------|
| 1 | MonitorDTE | *OYT Tecnología SPA / Generadora Metropolitana S.A.* | Profesional | PHP 8.4 · CakePHP 5 · Azure SQL Server · Docker |
| 2 | OnboardLogistics | *OYT Tecnología SPA* | Profesional | PHP · CakePHP 2.x · MySQL/AWS RDS · Bootstrap |
| 3 | Picapital | *OYT Tecnología SPA* | Profesional | PHP · CakePHP 2.x · MySQL · jQuery/AJAX |
| 4 | M10 | *OYT Tecnología SPA* | Profesional | PHP · CakePHP · MySQL |

Descripciones (confirmadas contra CV real del usuario):
- **MonitorDTE**: sistema de monitoreo de Documentos Tributarios Electrónicos (SII) con
  KPIs en tiempo real, integración SAP y autenticación SSO corporativa (OAuth2/Microsoft
  Entra ID), desplegado en Docker.
- **OnboardLogistics**: plataforma de comercio exterior marítimo — módulos de Costos y
  Compra de Fletes, integración con Project44, CargoWise y TradeLens, carga masiva desde Excel.
- **Picapital**: gestión agroindustrial — control de inventarios, kardex y movimientos de
  stock en tiempo real con filtros dinámicos y AJAX.
- **M10**: plataforma de órdenes de trabajo para grúas industriales, generación de PDFs y
  flujo de aprobaciones multi-estado.

### 4. Filtros

Barra de filtros con las opciones: **Todos | IA | Fullstack | Profesional | Frontend**.
- "Todos" muestra las 10 cards (6 personales + 4 profesionales).
- Cada botón de filtro muestra sólo las cards cuyo array `categories` incluya esa categoría
  (multi-categoría: una card puede aparecer en más de un filtro, ej. CV Analyzer aparece
  en "IA" y en "Fullstack").
- Estado del filtro activo debe tener indicación visual clara (ej. mismo tratamiento de
  gradiente amarillo→verde usado en el título de la sección, u otro estilo consistente con
  la paleta oscura existente).

### 5. Card de proyecto (extensión de `projectCard.tsx`)

- Mantener tamaño, borde redondeado, y comportamiento de hover (blur de imagen + overlay
  con botones) ya existente.
- Placeholder de imagen: fondo con gradiente + ícono representativo del stack/categoría
  (ej. ícono de IA para proyectos con Claude API, ícono de carrito para ecommerce, ícono de
  candado/empresa para privados) — no se usan screenshots reales todavía.
- Botones condicionales según el proyecto:
  - `isPrivate: true` → sin botones GitHub/Demo, mostrar badge 🔒 "Proyecto Privado" y
    nombre de empresa en cursiva debajo del título.
  - `isPrivate: false` y sin `demoUrl` → mostrar sólo botón GitHub (ocultar el botón Demo,
    no mostrar placeholder ni deshabilitado).
  - `isPrivate: false` y con `demoUrl` → mostrar ambos botones (GitHub + Demo).
- Mostrar descripción corta y stack (chips o texto) en la card, no sólo el título y una
  única etiqueta como ahora.

## Casos borde

- **Proyecto sin demo**: ocultar el botón Demo por completo (no badge, no botón deshabilitado)
  — el repo es público, sólo no tiene despliegue.
- **Proyecto privado sin repo público**: nunca debe renderizar un enlace `href` vacío ni un
  botón roto; directamente no se renderizan los botones de acción.
- **Filtro sin resultados**: no debería ocurrir con los datos actuales (todas las categorías
  tienen al menos un proyecto), pero el grid no debe romperse si un filtro queda vacío.
- **Multi-categoría**: un proyecto con `categories: ['IA', 'Fullstack']` debe aparecer una
  sola vez en "Todos", y una vez en cada filtro correspondiente (sin duplicarse dentro del
  mismo filtro).
- **Nombre de repo incorrecto**: usar `analizador-cv-anthropic` (verificado vía API de
  GitHub), no `analizadorcv`.
- **Imágenes faltantes**: como no hay screenshots reales aún, todas las cards nuevas deben
  usar el placeholder con gradiente/ícono — no dejar `<img>` rota ni depender de archivos
  que no existen en `/public/images`.

## Definición de terminado

- Las 10 cards (6 personales + 4 profesionales) se renderizan correctamente en
  `http://localhost:3000` sin errores de consola ni imágenes rotas.
- Los 5 filtros (Todos/IA/Fullstack/Profesional/Frontend) funcionan: al hacer clic, el grid
  muestra exactamente los proyectos cuya(s) categoría(s) coincide(n), sin duplicados ni
  proyectos de más.
- Las cards de experiencia profesional muestran el badge 🔒 "Proyecto Privado", el nombre de
  la empresa en cursiva, y **no** muestran botones de GitHub/Demo.
- Las cards personales muestran botón GitHub siempre, y botón Demo únicamente cuando
  `demoUrl` existe (CV Analyzer AI es el único con demo real por ahora).
- El diseño visual (colores oscuros, gradiente amarillo→verde en títulos, tipografía,
  comportamiento de hover) es consistente con el resto del portfolio — no se ve como una
  sección "pegada" con otro estilo.
- `npm run build` (o el comando de build del proyecto) pasa sin errores de TypeScript/lint.
- Responsive: el grid se adapta correctamente en mobile (1 columna), tablet (2) y desktop
  (3), igual que el comportamiento actual.
