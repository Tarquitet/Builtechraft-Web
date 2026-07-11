---
title: 'TP con Brújulas y Magnetitas'
category: 'Características del Servidor'
order: 9
imagen: ''
---

¡Buenas, buenas! Inauguramos la sección de **Características del Servidor** explicando una de las mecánicas más útiles y mejor integradas que tenemos en **Builtechraft** para facilitar el transporte.

Sabemos que viajar miles de bloques puede ser agotador, pero los comandos mágicos como `/warp` o `/home` rompen por completo la experiencia de supervivencia y le quitan valor a la exploración. Por eso, hemos integrado el datapack **LodestoneTP**, un sistema de viaje rápido 100% _Vanilla-Friendly_.

<div class="bg-black/40 border border-white/5 border-l-2 border-l-btc-yellow rounded-r-2xl p-6 mb-10 mt-8 hover:bg-black/60 transition-colors">
  <h3 class="text-xl font-bold text-btc-yellow mb-2 mt-0">🧭 La Evolución del Transporte: LodestoneTP</h3>
  <p class="text-zinc-300 m-0 leading-relaxed">
    Introducida en la mítica <strong>versión 1.16 (Nether Update)</strong>, la Magnetita revolucionó la navegación original de Minecraft. El datapack <strong>LodestoneTP</strong> lleva esto al siguiente nivel: al usar este bloque del <i>End-game</i> y vincularle una Brújula, el sistema lee los datos magnéticos almacenados y te permite viajar instantáneamente a ese punto. Es una modificación técnica brillante que recompensa el esfuerzo de conseguir materiales valiosos sin usar trampas.
  </p>
</div>

---

## 🛠️ Guía Paso a Paso para el Teletransporte

Para crear tu propia red de viaje rápido (ya sea en tu base personal, en un bioma lejano o en una granja técnica), solo necesitas seguir estos tres pasos:

### 1. Construir la Magnetita (Lodestone)

Primero, necesitas establecer tu punto de destino. La Magnetita es un bloque de alto valor y fabricarla representa un verdadero hito en tu progresión dentro del servidor.

- **El contexto de la 1.16:** Antes de la _Nether Update_, orientarse en el Nether o en el End era imposible porque las brújulas giraban sin control. La Magnetita se añadió al juego para solucionar esto, creando un "campo magnético artificial" al que las brújulas pueden apuntar en cualquier dimensión.
- **Receta de Fabricación:** Necesitarás **8 Ladrillos de Piedra Cincelada** (rodeando el perímetro de la mesa de crafteo) y **1 Lingote de Netherite (Inframundita)** exactamente en el centro.
- **El verdadero costo del End-Game:** Recuerda que para obtener ese Lingote de Netherite hoy en día, no solo debes minar Escombros Ancestrales en las profundidades del Nether y fundirlos. Desde la actualización 1.20, también requieres encontrar y duplicar una **Plantilla de Herrería de Mejora**. Esto garantiza que el viaje rápido sea un lujo exclusivo para jugadores avanzados, manteniendo intacto el balance económico del servidor.
- **Colocación:** Pon la Magnetita en el lugar exacto al que quieres teletransportarte. Asegúrate de que el área alrededor y encima de ella sea segura.

<div class="flex justify-center my-6">
  <img src="https://minecraft.wiki/images/Lodestone_JE1_BE1.png" alt="Magnetita en Minecraft" class="w-32 h-32 object-contain drop-shadow-xl" />
</div>

### 2. Vincular la Brújula

Ahora necesitas la "llave" para viajar a esa Magnetita.

- Craftea una **Brújula normal** (4 lingotes de hierro y 1 polvo de redstone).
- Acércate a la Magnetita que acabas de colocar.
- Haz **Clic Derecho** sobre la Magnetita con la Brújula en la mano.
- **¿Qué ocurre a nivel técnico?:** Verás que la brújula obtiene un brillo morado (como un encantamiento). Internamente, el juego acaba de guardar las etiquetas NBT `LodestoneDimension` y `LodestonePos` dentro de la brújula. Ahora es una **Brújula de Magnetita** y su aguja apuntará siempre hacia las coordenadas exactas de ese bloque, sin importar lo lejos que vayas.

<div class="flex justify-center my-6">
  <img src="https://minecraft.wiki/images/Compass_JE3_BE3.gif" alt="Brújula de Magnetita" class="w-32 h-32 object-contain drop-shadow-xl" />
</div>

### 3. ¡Ejecutar el Teletransporte!

Aquí es donde entra la magia del datapack **LodestoneTP**. Si te encuentras muy lejos de tu base y necesitas regresar rápidamente:

- Pon la **Brújula de Magnetita** ya vinculada en tu mano principal.
- Mantén presionado el botón de **Agacharse (Shift)**.
- Haz **Clic Derecho** mirando al aire.
- _¡Zas!_ El datapack leerá las etiquetas NBT de tu brújula, emitirá el sonido y las partículas moradas de un Enderman, y serás teletransportado de forma instantánea justo encima de la Magnetita.

---

## ⚖️ Balance y Reglas del Viaje Rápido

Para que esta mecánica siga siendo un reto justo y no parezca un comando trampa, el datapack impone ciertas limitaciones físicas y técnicas:

- **Consumo de recursos:** El viaje rápido somete a la brújula a una gran energía. Dependiendo de los ajustes de dificultad actuales del servidor (revisar documento oficial), **usar la brújula para teletransportarte podría consumirla** (destruyéndola de tu inventario en el proceso) o restar niveles de experiencia a tu personaje. ¡Úsala solo en emergencias o viajes realmente largos!
- **Restricción de Dimensiones:** Por reglas de seguridad del juego base, el teletransporte solo funciona si estás en la **misma dimensión** que la Magnetita (Del Overworld al Overworld, del Nether al Nether). Si intentas viajar entre diferentes dimensiones, la brújula girará descontroladamente y el teletransporte será cancelado.
- **Magnetitas Destruidas:** Si otro jugador (o un Creeper) rompe la Magnetita de destino, la conexión se corta de raíz. Tu brújula perderá su función, la aguja girará sin rumbo y el teletransporte quedará inhabilitado permanentemente.

### 💡 Consejos para Arquitectos e Ingenieros

1. **Renombra tus brújulas:** Pasa tus brújulas vinculadas por un Yunque y ponles nombres descriptivos (ej. _"Base Principal"_, _"Granja de Slimes"_, _"Mesa de Crafteo"_). Así sabrás a dónde te lleva cada una.
2. **Crea una Sala de Portales (Hub):** Si tienes un megaproyecto, construye una habitación centralizada en tu base con varias Magnetitas.
3. **El truco del Ender Chest:** Lleva siempre un Cofre de Ender contigo y guarda allí todas tus brújulas de Magnetita. De esta manera, tendrás acceso rápido a toda tu infraestructura logística desde cualquier rincón del mundo, sin ocupar espacio vital en tu inventario principal.
