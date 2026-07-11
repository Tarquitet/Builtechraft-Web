---
title: 'Sentarse y montarse en jugadores'
category: 'Características del Servidor'
order: 10
imagen: ''
---

¡Buenas, buenas! Continuamos expandiendo la sección de **Características del Servidor**. En esta guía, Tarquitet nos muestra una de las funciones más divertidas y solicitadas para darle vida a nuestras bases y puntos de reunión: las mecánicas de inmersión y _roleplay_.

En **Builtechraft** no necesitas estar siempre de pie o minando; a veces solo quieres relajarte con tus amigos alrededor de una fogata. ¡Aquí te enseñamos cómo hacerlo!

<div class="flex justify-center my-10">
  <a href="https://www.youtube.com/watch?v=1vZXAFr82HQ" target="_blank" rel="noopener noreferrer" class="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-105 hover:border-btc-orange/50">
    <img src="https://img.youtube.com/vi/1vZXAFr82HQ/hqdefault.jpg" alt="Guía de Sentarse y Gatear" class="w-full max-w-2xl object-cover" />
    <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
      <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
        <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>
  </a>
</div>

---

## 🪑 ¿Cómo sentarse en el servidor?

Hemos integrado un sistema que te permite sentarte prácticamente en cualquier lugar, y tienes tres formas diferentes de hacerlo dependiendo de la situación:

### 1. Interacción Directa con Bloques

La forma más natural de sentarse. Si tienes **Escaleras, Losas (Slabs) o Troncos** colocados en el suelo, simplemente acércate, apunta al bloque y haz **Clic Derecho**. Tu personaje se sentará automáticamente en el borde del bloque.
_(Nota: Si por algún motivo de posicionamiento el clic derecho falla en ciertas escaleras, puedes usar el método 2)._

### 2. Sentarse en CUALQUIER Bloque

¿Quieres sentarte en el pasto, encima de un cofre o en la punta de una montaña?

- Mira directamente hacia abajo (apuntando a tus propios pies).
- Presiona **dos veces seguidas el botón de agacharse (Doble Shift)**.
- Tu personaje se sentará exactamente en el bloque donde estés parado.

### 3. El Comando Manual

Si prefieres usar el chat o estás levitando en medio de la nada en el modo Creativo, simplemente escribe el comando **`/sit`** en el chat y te sentarás en tu ubicación actual.

---

## 🐎 Montarse sobre otros jugadores (y sus cabezas)

¡Sí, has leído bien! Puedes llevar a tus amigos a cuestas (o que ellos te lleven a ti).
Para hacerlo, simplemente acércate a otro jugador y haz **Doble Clic Derecho** sobre él. Tu personaje se montará en sus hombros/cabeza como si fuera un caballo. Te moverás hacia donde él vaya, lo cual es ideal para hacer bromas, tomar fotos grupales o transportar a alguien que se quedó sin comida.

---

## 🐛 Gatear y Arrastrarse (Crawling)

Minecraft tiene una animación nativa para arrastrarse (la misma que usas cuando nadas o cuando closes una trampilla sobre tu cabeza). En nuestro servidor, puedes forzar esta animación en cualquier momento y lugar, lo cual es perfecto para escabullirte por túneles de 1x1 sin necesidad de llevar cubos de agua.

- Abre el chat y escribe el comando: **`/crawl`**
- Tu personaje se tirará al suelo y podrás moverte arrastrándote. Ten en cuenta que el movimiento en este estado es bastante lento.
- Para ponerte de pie nuevamente, simplemente presiona el botón de **Agacharse (Shift)**.

---

## ⚙️ Detalle Técnico: El truco de las entidades actuales

Si eres jugador de **Bedrock**, es muy probable que al sentarte notes un pequeño "bug" visual: puede que veas corazones de vida flotando debajo de ti, o que te aparezca una barra de nombre extraña.

Esto ocurre porque los mods comerciales comunes no tienen una función nativa para que el jugador se siente en el aire. Para lograrlo, el mod actual _engaña_ al servidor invocando rápidamente una **entidad invisible** (como un cerdito o un soporte de armaduras) justo debajo de ti y te obliga a montarte sobre ella. Al conectarte desde Bedrock vía _Geyser_, tu juego a veces intenta leer la "vida" de ese mob invisible.

---

## 🛠️ Evolución Técnica: Migración a Carpet Script y Datapacks

Para solucionar estos pequeños fallos visuales de Bedrock de raíz y hacer que el servidor sea muchísimo más liviano, **Tarquitet está trabajando actualmente en plasmar todas estas ideas en un script de Carpet (Scarpet) o en un Datapack propio personalizado**.

**¿Qué ventajas traerá este cambio técnico?**

- **Adiós a los cerdos invisibles:** Al programarlo a través de las funciones nativas de _Carpet Mod_, el servidor gestionará la posición de sentado y montado de forma matemática pura, sin necesidad de generar entidades invisibles secundarias.
- **Soporte perfecto para Bedrock:** Al no haber entidades involucradas, los usuarios de móviles y consolas ya no verán barras de vida flotantes ni corazones raros en el suelo.
- **Cero Lag:** Aligerará la carga de procesamiento del servidor, haciendo que las interacciones de _roleplay_ (como subirse a la cabeza de un amigo) sean fluidas, instantáneas y 100% compatibles con la filosofía _Vanilla-Friendly_ de Builtechraft.
