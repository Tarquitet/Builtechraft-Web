---
title: 'Conexión desde Bedrock'
category: 'Guías'
order: 3
imagen: ''
---

¡Buenas, buenas! En esta tercera guía oficial, Tarquitet nos enseña paso a paso cómo ingresar al servidor de **Builtechraft** utilizando la versión de Minecraft Bedrock (Móviles, Consolas y Windows 10/11).

Aunque nuestro servidor está alojado de forma nativa en Java Edition, utilizamos un puente de conexión para que puedas jugar con nosotros sin ningún problema.

<div class="flex justify-center my-10">
  <a href="https://www.youtube.com/watch?v=Eae7_nxABfM" target="_blank" rel="noopener noreferrer" class="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-105 hover:border-btc-orange/50">
    <img src="https://img.youtube.com/vi/Eae7_nxABfM/hqdefault.jpg" alt="Guía de Conexión Bedrock" class="w-full max-w-2xl object-cover" />
    <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
      <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
        <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>
  </a>
</div>

---

### ⚠️ Consideración Previa: La IP y el Puerto

Antes de empezar, debes saber que, por motivos de seguridad o actualizaciones técnicas, **la Dirección IP y el Puerto del servidor pueden cambiar** en el futuro.

No te confíes ciegamente en los datos que aparecen en el video; asegúrate de copiar siempre la IP y el Puerto actualizados directamente desde nuestra página web o revisando los canales oficiales en nuestro [Servidor de Discord](/wiki#02-discord).

---

### 📲 Paso a Paso: Agregando el Servidor

Conectar tu dispositivo Bedrock a Builtechraft es muy sencillo, solo sigue estos pasos:

1. Abre tu juego y presiona el botón de **Jugar**.
2. Dirígete a la tercera pestaña superior llamada **Servidores**.
3. Baja hasta el final de la lista de servidores destacados y presiona el botón **Añadir servidor**.
4. Rellena el formulario con los siguientes datos:
   - **Nombre del servidor:** Builtechraft (o el nombre que prefieras para identificarlo).
   - **Dirección del servidor:** Pega aquí la IP oficial de Bedrock.
   - **Puerto:** _¡Muy importante!_ Borra el puerto que viene por defecto (19132) y coloca el puerto específico de nuestro servidor que encontrarás en Discord o en la web.
5. Presiona **Guardar** (no presiones jugar inmediatamente).

---

### 🐛 El "Bug" del Ping (GeyserMC)

Una vez que guardes el servidor en tu lista, es muy probable que notes algo extraño: **el servidor no muestra el ping, no carga el mensaje de bienvenida y parece estar apagado.**

¡No te asustes, es completamente normal!
Como Builtechraft es un servidor nativo de Java, usamos una herramienta llamada _Geyser_ para traducir la conexión hacia Bedrock. Este mod a veces tiene un pequeño "bug" visual en el menú de Bedrock que impide que el juego lea el estado del servidor desde fuera.

**¿Cómo sé si realmente está en línea?**

- Ve a la pestaña de **Amigos** (Mundos LAN). A veces, el sistema de Geyser proyecta el servidor allí simulando que es una partida local.
- Si ves que aparecen mundos LAN de Builtechraft, significa que el servidor **SÍ está en línea**.
- **¡OJO!** No intentes entrar a través de la pestaña de Amigos/LAN porque te dará error. Úsalo solo como un indicador visual.

**Para entrar al servidor:**
Vuelve a la pestaña de **Servidores**, selecciona Builtechraft en tu lista y dale a **Jugar**. Aunque parezca apagado, forzará la conexión. Sabrás que ha funcionado cuando la pantalla cambie y diga _"Generando recursos"_.

---

### 🔐 Sistema de Logueo

Una vez que cargue el terreno, notarás que no puedes moverte y que se te pide iniciar sesión. Esto es parte de nuestro sistema de seguridad para proteger las cuentas (tanto de jugadores Premium como No-Premium).

El funcionamiento de este sistema de registro y logueo lo explicaremos detalladamente en la próxima guía. ¡Prepárate para dar tus primeros pasos en el mundo!
