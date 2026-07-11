---
title: 'Gestión de Skins y Apariencia'
category: 'Características del Servidor'
order: 11
imagen: ''
---

¡Buenas, buenas! En esta guía, Tarquitet nos explica cómo funciona la personalización de nuestros personajes dentro de **Builtechraft**.

A todos nos gusta lucir bien y tener nuestra propia identidad en el servidor. A lo largo del tiempo, el sistema de _skins_ ha recibido actualizaciones importantes para hacer este proceso mucho más cómodo, seguro y automatizado.

<div class="bg-black/40 border border-white/5 border-l-2 border-l-btc-orange rounded-r-2xl p-6 mb-10 mt-8 hover:bg-black/60 transition-colors">
  <h3 class="text-xl font-bold text-btc-orange mb-2 mt-0">⚠️ Retiro Temporal del Mod de Skins</h3>
  <p class="text-zinc-300 m-0 leading-relaxed">
    El antiguo mod que nos permitía cambiar la apariencia mediante comandos en el chat ha sido <strong>retirado temporalmente</strong>. Este sistema generaba problemas, ya que a veces fallaba al actualizar la apariencia y resultaba molesto para los usuarios. Ahora dependemos de métodos mucho más directos y estables.
  </p>
</div>

<div class="flex justify-center my-10">
  <a href="https://www.youtube.com/watch?v=el-qz6di96A" target="_blank" rel="noopener noreferrer" class="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-105 hover:border-btc-orange/50">
    <img src="https://img.youtube.com/vi/el-qz6di96A/hqdefault.jpg" alt="Guía de Skins" class="w-full max-w-2xl object-cover" />
    <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
      <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
        <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>
  </a>
</div>

---

## 🌐 El Sistema Actual: ¿Cómo cambiar tu Skin?

Actualmente, el servidor lee tu apariencia directamente desde la base de datos externa que estés utilizando. Tienes varias alternativas muy cómodas para gestionar tu _skin_ sin tener que escribir comandos en el juego:

### 1. Desde las Páginas Web Oficiales

Es el método más directo y el que recomendamos:

- **Jugadores Premium:** Inicia sesión en la página oficial de [Minecraft.net](https://www.minecraft.net/) y cambia tu apariencia allí. Al entrar al servidor, tu _skin_ se actualizará sola.
- **Jugadores No-Premium:** Ve a [Ely.by](https://ely.by/), inicia sesión en tu cuenta y sube tu _skin_ o capa personalizada. El sistema Alternative Auth del servidor la leerá automáticamente.

### 2. Desde la configuración de tu Launcher

La mayoría de _launchers_ modernos (como Prism Launcher, XMCL o los oficiales) te permiten gestionar tus cuentas y subir tu archivo de _skin_ directamente desde sus menús de configuración antes de abrir el juego.

### 3. Usando Mods Externos (Client-Side)

Muchos jugadores prefieren instalar mods en sus propios clientes para gestionar su apariencia visual.

- **Essentials:** Es un mod extremadamente popular entre los usuarios Premium que permite cambiar de _skins_ y cosméticos directamente desde un menú visual en el juego.
- **Otros mods visuales:** Puedes instalar cualquier mod visual _client-side_ que te permita forzar la carga de tu _skin_, siempre y cuando sea compatible con tu versión de juego.

---

## 🛠️ El Sistema de Respaldo (Comandos Offline)

Si en algún momento ocurre un fallo catastrófico con el sistema de seguridad de Ely.by y Mojang, y nos vemos obligados a colocar el servidor en **modo offline**, el antiguo mod de comandos regresará para salvarnos.

Solo si se da esa situación de emergencia, podrás usar estos comandos:

### 1. Copiar skins de otras cuentas

- **`/skin set <Nombre>`** o **`/skin set Mojang <Nombre>`**: Te aplicará la apariencia exacta de la cuenta Premium que escribas.
- **`/skin set by <Nombre>`**: Te aplicará la apariencia de un usuario registrado en Ely.by. _(Solo en Java)._

### 2. Cargar skins desde una URL (Internet)

Formato: `/skin set web classic ((URL))` o `/skin set web slim ((URL))`

- Busca tu _skin_ en páginas como MinecraftSkins, súbela a un canal privado de Discord o a Imgur.
- Haz clic derecho en la imagen ya subida, selecciona **"Copiar dirección de la imagen"** (asegúrate de que termine en `.png`).
- Pega esa URL dentro de los dobles paréntesis en el comando.

### 3. Limpiar o Reiniciar tu apariencia

- **`/skin clear`**: Eliminará la apariencia actual y te dejará con la de Steve/Alex por defecto.
- **`/skin reset`**: Restaurará tu apariencia a la versión original vinculada a tu cuenta.
