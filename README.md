# Los peligros del “black box” development en la era de la IA

Este repositorio incluye:
- La **implementación de un contenedor de Inversión de Dependencias (DI) desde cero** (rama `master`), tal como lo construimos en el workshop.
- Las **slides** del taller en formato Markdown para Slidev (`slides/slides.md`).
- Un **resumen de lectura** con el **speech completo** revisado (`summary.md`) para quienes quieran repasarlo o no pudieron asistir.

---

## 🎯 Objetivo del workshop

Reflexionar sobre la importancia del **deep knowledge** y la **autosuficiencia**: entender lo que usamos, abrir “cajas negras”, y utilizar la IA como **multiplicador** (no como sustituto del criterio profesional).

---

## 🧩 Contenidos del workshop

- **Bloque 1 — Mentalidad (“Cultivar la intuición”)**
  - Aprender por repetición y práctica (Shu–Ha–Ri).
  - Riesgos del *copy–paste* y la recompensa inmediata.
  - IA como ayuda, no reemplazo del razonamiento.

- **Bloque 2 — Analizar el terreno (“Trazar el mapa”)**
  - “Cada línea es un pasivo”.
  - Herramientas vs necesidades vs lo que podemos construir.
  - Curiosidad, documentación, lectura de código fuente, cuestionamiento propio.

- **Parte práctica**
  - Implementación **desde cero** de un **DI container** (registro, resolución, ciclos de vida).

---


## 📂 Contenido importante en el repositorio

/ (raíz)<br>
├─ [di](di/)/ # Código del DI (implementación del workshop)<br>
├─ [rx](rx/)/ # Código base para implementar un Observable desde 0. No se llegó a realizar durante el workshop (puedes intentarlo 👀)<br>
├─ slides/<br>
│ └─ [slides.md](slides/slides.md) # Slides del taller (Slidev)<br>
├─ [summary.md](summary.md) # Speech completo (versión de lectura)<br>
└─ README.md

> ℹ️ La rama principal `master` contiene el estado final del DI creado durante el workshop.

> ℹ️ La rama `di-test` contiene una implementacion del DI hecha por mi.

> ℹ️ La rama `rx-test` contiene una implementacion de un Observable hecha por mi.

---

## ▶️ Cómo ejecutar

Requisitos: Node 18+

```bash
npm i
npm run start:slides # Para iniciar el server de las slides
npm run start:di # Para iniciar la "app" usando el DI implementado
npm run test:di # Para lanzar los tests de la implementacion del DI
```

### Bibliografía:
- [The Impact of Generative AI on Critical Thinking - Microsoft](https://www.microsoft.com/en-us/research/wp-content/uploads/2025/01/lee_2025_ai_critical_thinking_survey.pdf) 
- [The Danger of Relying Too Much on AI - Maximilian Schwarzmueller](https://maximilian-schwarzmueller.com/articles/the-danger-of-relying-too-much-on-ai/) 
- [Why Copy-Pasting Code Isn’t Teaching You Programming - AlgoCademy](https://algocademy.com/blog/why-copy-pasting-code-isnt-teaching-you-programming/) 
- [I Lost a Coding Interview Because I Forgot How to Code Without AI - Luke Skyward](https://medium.com/@datasciencedisciple/i-lost-a-coding-interview-because-i-forgot-how-to-code-without-ai-e23536d899b2) 
- [Why I stopped using AI code editors - Luciano Nooijen](https://lucianonooijen.com/blog/why-i-stopped-using-ai-code-editors/) 
- [Code Mending in the AI age - Ray Myers](https://www.youtube.com/watch?v=-r1yB6wCRP8) 
- [The Zen of Programming - Sander Hoogendoorn](https://www.youtube.com/watch?v=syGnlE_oosM) 
- [Developer Productivity v2 - ThePrimeagen](https://www.youtube.com/watch?v=03KsS09YS4E) 
