---
title: 'Sistema de Autenticación Segura'
category: 'Guías'
order: 6
imagen: ''
---

¡Buenas, buenas! En esta guía de **Builtechraft**, Tarquitet nos hablaba sobre el último paso necesario para empezar a jugar: la seguridad de tu cuenta.

A lo largo de la historia de nuestro servidor, la forma en la que protegemos a nuestros jugadores ha evolucionado. A continuación, te explicamos cómo funcionaba antes y cuál es nuestro **moderno sistema actual**.

> **📜 Nota Histórica:** _El siguiente video muestra nuestro antiguo sistema de contraseñas manuales por chat. Aunque el video es un clásico de nuestra comunidad, **ya no necesitas escribir comandos para entrar**. ¡Sigue leyendo abajo para ver cómo funciona hoy en día!_

<div class="flex justify-center my-10">
  <a href="https://www.youtube.com/watch?v=V7660esF7Gw" target="_blank" rel="noopener noreferrer" class="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-105 hover:border-btc-orange/50">
    <img src="https://img.youtube.com/vi/V7660esF7Gw/hqdefault.jpg" alt="Guía de Registro y Login" class="w-full max-w-2xl object-cover" />
    <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
      <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
        <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>
  </a>
</div>

---

### 📖 Un poco de historia: La era de las contraseñas

En los primeros días del servidor (como se ve en el video de arriba), cuando un jugador entraba por primera vez, aparecía completamente "congelado". No podía moverse ni interactuar con el mundo hasta que abría el chat y escribía un comando como `/register <contraseña>`. En sus siguientes visitas, debía escribir `/login <contraseña>`.

Aunque esto evitaba que alguien robara tu nombre de usuario, **tenía muchos problemas**:

- Los jugadores olvidaban sus contraseñas constantemente.
- Era tedioso tener que escribir comandos cada vez que el servidor se reiniciaba.
- Escribir claves directamente en el chat de Minecraft nunca ha sido la práctica más segura.

Es por eso que **decidimos eliminar por completo las contraseñas dentro del juego**.

---

### 🚀 El Nuevo Sistema: Alternative Auth y Ely.by

Hoy en día, Builtechraft utiliza un sistema de validación invisible y súper seguro llamado **Alternative Auth** (desarrollado en Modrinth).

En lugar de pedirte una contraseña cuando entras al mundo, nuestro servidor se comunica **directamente con tu Launcher** en el momento en que haces clic en "Conectar".

**¿Cómo funciona ahora?**

- Ya no hay comandos `/register` ni `/login`.
- Ya no aparecerás "congelado" esperando para escribir una clave.
- El servidor utiliza los servidores de autenticación de **Ely.by** (para usuarios No-Premium) y **Mojang** (para usuarios Premium) para generar un _Token_ seguro.
- Si tu Launcher está correctamente iniciado con tu cuenta de Ely.by o Microsoft, el servidor te reconoce instantáneamente y te deja jugar de inmediato.

---

### ✅ ¿Qué necesitas hacer para entrar?

Para que este sistema te deje entrar sin problemas, hay dos requisitos vitales que debes cumplir:

#### 1. Estar en la Whitelist (Obligatorio)

Antes siquiera de abrir tu juego, **debes haber sido aprobado en nuestra Whitelist**. Como vimos en la guía anterior, esto significa que debiste haber entrado a nuestro servidor de Discord y haber solicitado acceso oficial. Si tu nombre no está en la base de datos de los administradores, el servidor rechazará tu conexión inmediatamente.

#### 2. Configurar bien tu Launcher

Una vez que un administrador te haya confirmado que estás en la Whitelist, tu única responsabilidad técnica es iniciar sesión correctamente en tu Launcher (te recomendamos repasar nuestra [Guía de Launchers](/wiki#launchers)):

- **Si eres Premium:** Simplemente inicia sesión en tu launcher con tu cuenta de Microsoft/Minecraft.
- **Si eres No-Premium:** Debes crearte una cuenta gratuita en la página oficial de [Ely.by](https://ely.by/). Luego, inicia sesión con ese correo y contraseña **dentro de tu Launcher** (usando ElyPrism o XMCL).

El sistema _Alternative Auth_ leerá tu sesión, verificará tu nombre en la Whitelist, cargará tu Skin automáticamente y te dará acceso total al mundo.

---

### 🆘 Error de "Sesión Inválida" (Invalid Session)

Al usar este nuevo sistema directo, el único error que podrías encontrarte al intentar entrar al servidor es un mensaje que diga: **"Sesión Inválida"**, **"Invalid Session"** o **"Fallo al verificar el nombre de usuario"**.

¡No entres en pánico! Esto no es un baneo ni un problema del servidor. Simplemente significa que el _Token_ de seguridad de tu launcher ha caducado por llevar mucho tiempo abierto.

**La solución es muy sencilla:**

- Cierra tu juego por completo.
- Ve a los ajustes de cuentas de tu Launcher.
- Cierra la sesión de tu cuenta (Log out) y vuelve a iniciar sesión (Log in) poniendo tu correo y clave de Ely.by o Microsoft.
- Vuelve a abrir el juego; tu sesión se habrá renovado y el servidor te dejará entrar al instante.
