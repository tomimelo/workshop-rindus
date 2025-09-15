# Los peligros del “black box” development en la era de la IA

Este repositorio incluye:
- La **implementación de un contenedor de Inversión de Dependencias (DI) desde cero** (rama `master`), tal como lo construimos en el workshop.
- Las **slides** del taller en formato Markdown para Slidev (`slides/slides.md`).
- Un **resumen de lectura** con el **speech completo** revisado (`summary.md`) para quienes quieran repasarlo o no pudieron asistir.

---

## 🎯 Objetivo del workshop

Reflexionar sobre la importancia del **deep knowledge** y la **autosuficiencia**: entender lo que usamos, abrir “cajas negras”, y utilizar la IA como **multiplicador** (no como sustituto del criterio profesional).

---

## 🧩 Contenidos del taller

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

/ (raíz)
├─ di/ # Código del DI (implementación del workshop)
├─ slides/
│ └─ slides.md # Slides del taller (Slidev)
├─ summary.md # Speech completo (versión de lectura)
└─ README.md

> ℹ️ La rama principal `master` contiene el estado final del DI creado durante el workshop.
> ℹ️ La rama `di-test` contiene una implementacion del DI hecha por mi.
> ℹ️ La rama `rx-test` contiene una implementacion de un Observable hecha por mi.

---

## ▶️ Cómo ejecutar

### Ver las slides (Slidev)
Requisitos: Node 18+

```bash
npm i
npm run start:slides # Para iniciar el server de las slides
npm run start:di # Para iniciar la "app" usando el DI implementado
npm run test:di # Para lanzar los tests de la implementacion del DI
```
