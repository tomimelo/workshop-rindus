> **DISCLAIMER:** Irónicamente este resumen fue generado por IA. Puede contener errores.

# Los peligros del *black box* development en la era de la IA

**Reflexiones sobre conocimiento profundo, autosuficiencia y cómo usar la IA como multiplicador, no como reemplazo.**

---

## Introducción

La idea de este workshop fue sencilla: crear un espacio tranquilo para conversar, compartir experiencias y debatir cómo trabajamos; que cada quien se lleve algo útil para crecer como desarrollador y como profesional.

El título —**“Los peligros del *black box* development en la era de la IA”**— suena provocador, pero el objetivo no fue “ir contra” la IA. Al contrario: buscamos **reflexionar sobre cómo la usamos**, cuándo aporta valor y **qué riesgos hay** si la adoptamos de forma acrítica. La IA es **una herramienta poderosa**, no un oráculo omnisciente. Nuestra labor no es *copiar/pegar* respuestas: es **pensar**, **diseñar** y **resolver problemas**.

> **Idea fuerza:** la IA puede acelerar tu trabajo, pero **no sustituye** el criterio profesional ni el entendimiento profundo de tus herramientas.

---

## Por qué importa abrir las “cajas negras”

Todos pasamos por esa etapa donde casi todo parece magia: copiamos código de un curso, tocamos dos líneas y funciona. Bien para empezar, pero **insuficiente para construir sistemas reales**. Cuando dejamos de hacernos preguntas (¿por qué esto funciona así?, ¿qué problema resuelve?, ¿qué pasaría si…?), renunciamos a comprender y caemos en el **modo caja negra**: “funciona, no sé por qué, pero sigamos”.

Esto tiene consecuencias:

- **Atrofia del pensamiento crítico.** Si delegamos el razonamiento, disminuye la capacidad de analizar, diagnosticar y decidir.
- **Dependencia frágil.** Cambia el framework, falla la librería o la IA “alucina”, y quedamos a la deriva.
- **Menor calidad y mantenibilidad.** Sin entender los fundamentos, cuesta prevenir errores, elegir estructuras adecuadas o identificar *trade-offs*.

> **Recordatorio:** programar es un medio para expresar una solución pensada. La IA **predice**; nosotros **razonamos**.

---

## Un mapa para aprender: *Shu–Ha–Ri*

La filosofía japonesa **Shu–Ha–Ri** describe bien el camino desde principiante a maestría:

- **Shu (守) – Seguir la forma.** Disciplina y repetición. Copiás ejemplos, seguís tutoriales y reglas tal cual. Construís “memoria muscular”.
- **Ha (破) – Romper la forma.** Empezás a cuestionar: leés documentación, mirás el código fuente, experimentás y entendés qué hay dentro de la caja.
- **Ri (離) – Trascender la forma.** Desarrollás intuición. No pensás cada paso: tu conocimiento te guía. Podés innovar, crear estilo propio y enseñar.

**Clave:** si te quedás en *Shu* (copiar/pegar), tu avance se estanca. Pasar a *Ha* y *Ri* requiere **curiosidad**, **práctica deliberada** y **responsabilidad técnica**.

---

## Riesgos del *black box* en tiempos de IA

- **Confianza excesiva en respuestas generadas.** La IA puede acelerar, pero también llevarte a aceptar soluciones sin validar.
- **Código sin comprensión.** Integrar bloques que “andan” pero no entendés convierte tu base en un terreno minado.
- **Pérdida de memoria muscular.** Si todo lo completa el *autocomplete*, tu escritura y tu criterio se oxidan.

> **Antídoto:** mantener el **hábito de pensar** antes de pegar, **explicar** por qué una solución funciona y **contrastar** con documentación y pruebas.

---

## Analizar el terreno antes de codear

Antes de teclear, **diseñá la solución**:

1. **Define el problema con precisión.** ¿Cuál es la necesidad real? ¿Qué no entra en el alcance?
2. **Dibuja el mapa mental.** Capa de dominio, flujos, dependencias, casos borde.
3. **Piensa en datos y contratos.** Modelos, invariantes, pre/postcondiciones.
4. **Planifica la verificación.** ¿Cómo sabrás que funciona? Estrategia de tests y métricas.

Con el plan claro, pasás de “pararte cada dos por tres” a un **flujo sostenido**. Y si el sistema es grande, **sé dueño de tu código**: cada línea es un pasivo; entenderla reduce deuda futura.

---

## Ingredientes: conocer tus herramientas (de verdad)

Para elegir bien, hay que conocer:

- **Lenguaje:** no sólo sintaxis; también **fundamentos** (modelo de memoria, complejidad, estructuras de datos).
- **Frameworks/Librerías:** qué ofrecen, cómo están implementados, qué *trade-offs* implican.
- **Ecosistema:** *tooling*, empaquetado, despliegue, observabilidad.

> **Ejercicio útil:** ¿podrías implementar una versión mínima sin Internet? Si la respuesta es “sí”, dominás el concepto.

**Evitar el Dunning–Kruger:**

- Leé documentación y **código fuente**.
- Preguntá “por qué” (a colegas, a la IA, pero **valida**).
- Duda de tus primeras conclusiones; buscá evidencia y refuta hipótesis.
- Construí algo **desde cero** para enfrentar las dificultades reales.

---

## Autosuficiencia práctica

- **Reduce dependencias externas.** Si falta una *feature*, simúlala (puertos/adaptadores, *wrappers*). Sigue el avance y cambia la implementación después.
- **Optimiza tu entorno.** Un IDE/editor y SO bien dominados ahorran horas: atajos, *jump to symbol*, búsqueda por *fuzzy*, terminales y *window manager* que no te rompan el foco.
- **Estandariza hábitos.** Convenciones, *linters*, formatos, scripts de *dev*. Lo repetible, que sea automático; reservá el cerebro para pensar.

---

## Cómo usar la IA como multiplicador (y no como muleta)

1. **Define el objetivo con precisión.** Contexto, restricciones, ejemplos positivos/negativos.
2. **Pide alternativas y justificaciones.** “Dame 2–3 enfoques, con *trade-offs* y costes”.
3. **Valida con documentación y tests.** No integres nada sin entender y probar.
4. **Itera desde tu criterio.** Proponé mejoras, cuestioná supuestos, lleva la conversación a los detalles que importan.
5. **Documenta lo aprendido.** Convierte la ayuda puntual en conocimiento del equipo.

> **Regla de oro:** si la IA te sorprende, probablemente hay un hueco en tu modelo mental. Aprovechá para **estudiar ese hueco**.

---

## Checklist antes de copiar/pegar

- [ ] ¿Entiendo el **problema** y el **caso borde** que resuelve?
- [ ] ¿Puedo **explicar** cómo funciona la solución, paso a paso?
- [ ] ¿Cuál es su **complejidad** (tiempo/memoria) y sus *trade-offs*?
- [ ] ¿Cómo **fallaría**? ¿Qué validaciones/tests necesito?
- [ ] ¿Alinea con nuestro **estilo/arquitectura** y estándares del equipo?

Si alguna respuesta es “no”, todavía no está listo para integrarse.

---

## Ejercicios de práctica deliberada (para equipos)

1. **Katas sin red:** implementar estructuras/algoritmos básicos sin buscar. Luego comparar con una versión de la IA y discutir.
2. **Abrir una librería:** leer el código de una utilidad que usamos a diario y explicar su diseño.
3. **Reescribir un módulo:** reemplazar una dependencia por una versión mínima propia para entender *capabilities* y límites.
4. **Post-mortem técnico:** ante un bug, escribir cómo lo diagnosticamos, hipótesis descartadas y aprendizajes.
5. **Prompts con *trade-offs*:** pedir a la IA rutas alternativas y justificar por qué se elige una.

---

## Optimiza tu entorno (para mantener el “modo zen”)

- Domina atajos de tu editor/IDE. Evitá el *file tree* como muleta; usá *Go to file/symbol/line*.
- Usa un *window manager* o flujos de ventanas que no te saquen del teclado.
- Automatiza tareas repetitivas con scripts; mantené un *toolbelt* propio por proyecto.
- Mide y recorta la **fricción**: menos clics, menos ventanas, menos cambios de contexto.

---

## Cierre y reflexión final

Volvimos una y otra vez a la misma idea: **ser dueños de nuestro trabajo**. La IA aporta muchísimo cuando **sabemos qué pedirle**, **cómo evaluar** sus respuestas y **dónde** integrarlas con seguridad. Pero la responsabilidad —el criterio, la arquitectura, los invariantes, las decisiones de diseño— sigue siendo humana.

El **software craftsmanship** resume esta filosofía: no es sólo “que funcione”, es **saber por qué funciona**, cuidar la calidad, disfrutar del oficio. Cuando todo mantiene una armonía —está ordenado, tiene sentido, es legible— aparece el orgullo de autor.

> *“Es más divertido ser competente”* (David Heinemeier Hansson). La competencia da confianza y hace el trabajo más disfrutable.

En un mundo donde la IA puede producir código en segundos, **crece el valor** de quien **entiende** de verdad: porque puede aprovechar la IA, detectar sus errores y construir soluciones robustas y mantenibles.

Así que empujémonos a **ir un nivel más profundo**, a practicar los básicos, a reforzar la intuición técnica. La próxima vez que soluciones un bug difícil o construyas una *feature* desde cero sin buscar nada, celebralo: **ese es el músculo** que queremos fortalecer. Si mantenemos esta mentalidad de curiosidad y aprendizaje continuo, no sólo seremos mejores desarrolladores, sino que también elevaremos a todo el equipo. Y —por si acaso— estaremos listos para afrontar cualquier reto… incluso a 10.000 metros de altura y **sin Wi‑Fi**.

