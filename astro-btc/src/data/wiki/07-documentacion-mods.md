---
title: 'Documentación Oficial Excel'
category: 'Información Técnica'
order: 7
imagen: ''
---

¡Buenas, buenas! En esta guía completa de **Builtechraft**, nuestro fundador Tarquitet nos abre las puertas al "cerebro técnico" del servidor.

Si alguna vez te has preguntado qué modificaciones utilizamos, cómo alteramos las mecánicas para mejorar la calidad de vida sin perder la esencia _Vanilla_, o cómo sabemos cuándo es seguro actualizar el servidor, aquí encontrarás todas las respuestas.

<div class="bg-black/40 border border-white/5 border-l-2 border-l-blue-500 rounded-r-2xl p-6 mb-10 mt-8 hover:bg-black/60 transition-colors">
  <h3 class="text-xl font-bold text-blue-400 mb-2 mt-0">📊 Documento Oficial de Builtechraft</h3>
  <p class="text-zinc-300 m-0 mb-4 leading-relaxed">
    Creemos en la transparencia total. Todo lo que corre en el servidor (mods, reglas de Carpet, estado de actualizaciones) está documentado en nuestra Hoja de Cálculo de acceso público. ¡Puedes usar esta misma lista para armar tu propio servidor!
  </p>
  <a href="https://docs.google.com/spreadsheets/d/1Iz5vklWMbVcgOCYRVN5NOEBX91VLfOCkHtI5ilxut-c/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:scale-105">
    Abrir Hoja de Cálculo (Google Sheets)
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
  </a>
</div>

---

## PARTE 1: Control de Mods y Actualizaciones

En el primer video guía, analizamos cómo llevamos el control de las modificaciones para garantizar la estabilidad de nuestros mundos (Survival y Creativo).

<div class="flex justify-center my-8">
  <a href="https://www.youtube.com/watch?v=jb9-KwTIsVc" target="_blank" rel="noopener noreferrer" class="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-105 hover:border-blue-500/50">
    <img src="https://img.youtube.com/vi/jb9-KwTIsVc/hqdefault.jpg" alt="Guía de Documentación y Mods" class="w-full max-w-2xl object-cover" />
    <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
      <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
        <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>
  </a>
</div>

### 🔄 ¿Cómo funcionan las actualizaciones del Servidor?

Actualizar un servidor técnico no es tan sencillo como darle a un botón. En nuestro Google Sheets tenemos un **Panel de Control de Actualizaciones**:

1. **Estado de los Mods:** Cada mod esencial tiene un indicador que nos dice si ya es compatible con la nueva versión de Minecraft (ej. 1.21.5).
2. **Medidor de Progreso:** La tabla calcula automáticamente el porcentaje. Si nos faltan mods críticos, el panel marcará un "NO" en rojo en la sección "¿El servidor se puede actualizar?".
3. **Seguridad ante todo:** Jamás actualizaremos el servidor si un mod de seguridad u optimización no está listo. Preferimos esperar para no corromper el mapa.

### ⚙️ ¿Por qué usamos Mods (Fabric) y no Plugins?

En Builtechraft decidimos usar un servidor basado puramente en **Mods (Fabric)** en lugar de Plugins (Spigot, Paper) por dos razones:

- **Rapidez:** Las comunidades de modding en Fabric actualizan sus herramientas en días. Los servidores de plugins suelen tardar meses.
- **Esencia Vanilla:** Los servidores de plugins modifican el código base del juego para ahorrar recursos, rompiendo granjas y alterando mecánicas. Fabric respeta al 100% las mecánicas originales, ofreciendo una experiencia ideal para la ingeniería.

---

## PARTE 2: Reglas de Juego y Tweaks (Carpet Mod)

En nuestro segundo video guía, exploramos los ajustes específicos y reglas personalizadas (Game Rules) que aplicamos para hacer el día a día más cómodo en nuestro Survival.

<div class="flex justify-center my-8">
  <a href="https://www.youtube.com/watch?v=28wVxKDV5_g" target="_blank" rel="noopener noreferrer" class="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-105 hover:border-btc-orange/50">
    <img src="https://img.youtube.com/vi/28wVxKDV5_g/hqdefault.jpg" alt="Guía de Reglas de Juego" class="w-full max-w-2xl object-cover" />
    <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
      <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
        <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>
  </a>
</div>

### 📖 Leyenda del Documento

Si revisas la hoja de cálculo, verás que las reglas (Tweaks) tienen un código de colores:

- **Verde:** Regla activa y definitiva por defecto.
- **Naranja:** Regla experimental. Puede quedarse o eliminarse.
- **Amarillo:** Regla activa actualmente, pero con altas probabilidades de ser removida.
- **Rojo:** Regla descartada.
- **Gris:** Regla planeada o en revisión.

### ✨ Calidad de Vida (Quality of Life)

- **Protección de Cultivos (Caída de Pluma):** Si llevas puestas unas botas con _Caída de Pluma_, ya no destruirás los cultivos al saltar sobre ellos.
- **Coordenadas de Muerte:** Al morir, el chat te mostrará tus coordenadas exactas para que puedas recuperar tus ítems.
- **Recuperación de Etiquetas (Nametags):** Si un mob renombrado muere, ahora soltará la etiqueta como ítem para reutilizarla.
- **Salto de la Noche:** Solo se necesita que el 50% (o menos) de los jugadores en línea duerman para pasar la noche.
- **Cosecha Rápida (Right-click Harvest):** _(En revisión)_ Clic derecho sobre un cultivo para cosecharlo y replantarlo automáticamente.

### 🤝 Economía Compartida y Aldeanos

- **Zombificación Garantizada:** Los aldeanos se convertirán en zombies al 100% de las veces al ser atacados (como en dificultad Difícil), permitiendo curarlos sin riesgo.
- **Descuento Comunista:** Si un jugador cura a un aldeano, **el descuento de comercio se aplica para todos los jugadores del servidor**, no solo para quien lo curó.

### ⚔️ Combate, Botines y Granjas

- **Invisibilidad Perfecta:** _(Experimental)_ Con poción de invisibilidad, los monstruos no te atacarán **incluso con armadura puesta**, siempre que no lleves nada en las manos.
- **Huevos de Dragón Renovables:** Cada vez que derroten al Ender Dragon, este soltará un nuevo huevo, permitiendo que todos tengan este trofeo.
- **Head Hunter (Cazatalentos):** Al morir a manos de otro jugador, soltarás tu cabeza con tu skin actual (ideal para decoración).
- **Bots (Fake Players):** Se permite invocar bots para dejarlos AFK cargando chunks en granjas específicas. Además, ¡los Phantoms no atacarán a estos bots!

### 🛠️ Reglas en Discusión

Constantemente evaluamos qué mecánicas añadir o quitar para no arruinar el juego base. Actualmente debatimos:

- **Griefing de los Enderman:** Limitar a que solo puedan llevarse calabazas y sandías para no dañar el terreno.
- **Duplicación de Hilo:** Un antiguo bug que podría regresar exclusivamente para permitir construcciones técnicas complejas.
- **Manzana de Notch:** Restaurar el antiguo crafteo con bloques de oro, quizá como evento especial.

Nuestro objetivo final: **No romper el juego**, sino pulir sus asperezas para que la ingeniería y la creatividad fluyan al máximo.
