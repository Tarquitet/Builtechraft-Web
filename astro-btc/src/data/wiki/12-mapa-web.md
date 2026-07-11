---
title: 'Mapa Web y Waypoints'
category: 'Características del Servidor'
order: 14
imagen: ''
---

¡Buenas, buenas! En esta guía, Tarquitet nos enseña a utilizar una de las herramientas externas más potentes de **Builtechraft**: nuestro mapa web interactivo.

Si te perdiste, quieres admirar las construcciones de los demás desde el cielo, o necesitas compartir la ubicación de tu granja con toda la comunidad, este sistema te permitirá hacerlo de forma completamente _Vanilla_, sin comandos extraños.

<div class="flex justify-center my-10">
  <a href="https://www.youtube.com/watch?v=GajCw1NoaJE" target="_blank" rel="noopener noreferrer" class="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-105 hover:border-btc-orange/50">
    <img src="https://img.youtube.com/vi/GajCw1NoaJE/hqdefault.jpg" alt="Guía de Mapa Web" class="w-full max-w-2xl object-cover" />
    <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
      <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
        <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>
  </a>
</div>

---

## 🗺️ ¿Cómo acceder al Mapa Web?

No necesitas descargar nada para usarlo, funciona directamente desde tu navegador (tanto en PC como en móviles).

- Entra a nuestra página oficial: [AQUÍ](https://builtechraft.tarquitet.com).
- En el menú de navegación, ve a la sección de **Novedades**.
- Selecciona el mundo que quieres visualizar (Survival o Creativo).
- Haz clic en el botón **"Ver Mapa Online"**.

_Nota: Dependiendo del tamaño de lo explorado, el mapa puede tardar unos segundos en cargar. ¡Ten paciencia!_

---

## 🎮 Controles del Mapa Interactivo

Una vez dentro, notarás que la interfaz es similar a Google Maps, pero con muchas más opciones para explorar nuestro mundo cúbico.

### Controles Básicos

- **Moverse:** Clic Izquierdo y arrastrar (o deslizar el dedo en el móvil).
- **Zoom:** Rueda del ratón (o pellizcar en la pantalla).
- **Rotar cámara:** Clic Derecho y arrastrar.

### Menú de Herramientas (Menú Lateral)

- **Perspectiva 3D / 2D:** Puedes cambiar entre una vista cenital plana (plano arquitectónico) o una vista en 3D para apreciar la altura de las montañas y los edificios. _¡Ojo! La vista 3D consume más recursos de tu navegador._
- **Día y Noche:** Puedes alternar la iluminación haciendo clic en el icono del Sol o la Luna.
- **Jugadores (Player List):** Te muestra una lista de quién está conectado. Si haces clic en el nombre de un jugador, la cámara viajará automáticamente hasta sus coordenadas exactas en vivo.
- **Marcadores (Marker List):** Un listado de todas las zonas, bases y granjas importantes que los jugadores han decidido hacer públicas.
- **Dimensiones:** Puedes cambiar de pestaña para ver el Overworld, el Nether o el End.

---

## 📍 Cómo crear Marcadores (Waypoints) públicos

¿Has construido una granja pública o un mercado y quieres que todo el mundo pueda verlo en la página web? Gracias a la integración que tenemos en el servidor, puedes crear _waypoints_ interactivos desde dentro del juego.

### Paso 1: Preparar los materiales

Necesitarás conseguir:

- **Un Estandarte (Banner):** Del color que prefieras.
- **Un Yunque y Experiencia:** Para nombrar el estandarte.
- **Un Mapa Localizador Vacío:** Se craftea rodeando una Brújula con 8 de Papel en la mesa de crafteo.

### Paso 2: Nombrar el Estandarte

Ve al Yunque, coloca el Estandarte y cámbiale el nombre por el título que quieras que aparezca en la web (por ejemplo: _"Granja de Hierro"_ o _"Base de Tarquitet"_).

### Paso 3: Colocar y Registrar

- Ve al lugar exacto que quieres marcar en el mundo real y **coloca tu Estandarte nombrado en el suelo** o en la pared.
- Abre tu **Mapa Localizador Vacío** dándole clic derecho al aire para que empiece a dibujar el terreno.
- Acércate al Estandarte que colocaste y **haz Clic Derecho sobre el estandarte usando el mapa abierto**.
- ¡Magia! Verás que en tu mapa de papel aparece un pequeño icono del color de tu estandarte con el nombre que le pusiste.

### Paso 4: ¡Sincronización Web!

En el momento en que haces clic derecho al estandarte con el mapa, el servidor detecta esa interacción y **sincroniza automáticamente la ubicación con el Mapa Web**.
Si recargas la página del navegador, verás que tu _waypoint_ ya aparece de forma pública para que cualquiera pueda visitarlo.

_💡 Consejo de decoración: Puedes colocar el mapa que usaste dentro de un Marco (Item Frame) cerca del estandarte para tener un minimapa estático en la pared de tu base._
