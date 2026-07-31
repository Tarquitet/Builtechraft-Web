<div align="center">

### El sitio web oficial del servidor privado de Minecraft: Builtechraft SMP

[![Website](https://img.shields.io/badge/Visitar_Web-builtechraft.tarquitet.com-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white)](https://builtechraft.tarquitet.com/)
[![Astro](https://img.shields.io/badge/Tecnología-Astro_v2-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://github.com/Tarquitet/Builtechraft-Web/tree/v2-astro)
[![Developer](https://img.shields.io/badge/Desarrollado_por-Tarquitet-181717?style=for-the-badge&logo=github&logoColor=white)](https://web.tarquitet.com)

</div>

---

## 🌌 Sobre el Proyecto

**Builtechraft** es un servidor privado de Minecraft con integración Crossplay. Nuestro objetivo principal es construir un mundo masivo y épico unificando disciplinas como la ingeniería, la programación, la arquitectura y el arte.

Este repositorio contiene el código fuente de nuestra **Landing Page oficial**. El diseño actual prioriza el rendimiento extremo y la claridad informativa a través de una arquitectura de componentes modulares.

<div align="center">
  <img src="https://raw.githubusercontent.com/Tarquitet/Builtechraft-Web/refs/heads/main/images/btc-2026.avif" alt="Vista previa de Builtechraft Web" style="border-radius: 8px; max-width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 20px 0;" />
</div>

## 🚀 Evolución y Rama `v2-astro`

El proyecto ha recorrido un largo camino desde sus inicios. Esta versión del repositorio integra los avances de la rama **`v2-astro`**, marcando la madurez técnica del sitio:

1.  **Orígenes Académicos (v1.0):** El proyecto nació en un entorno universitario, desarrollado durante el primer semestre mientras explorábamos los fundamentos de la web. Esta etapa inicial contó con el apoyo fundamental de [**Sant-Hen**](https://github.com/Sant-Hen), quien colaboró en la creación de la primera versión.
2.  **Era Dreamweaver (v2.0):** Una transición hacia un enfoque más visual y estructurado.
3.  **Ingeniería Moderna (v3.0 - Actual):** Reconstrucción total desde cero para maximizar la velocidad utilizando **Astro (Islands Architecture)**, **React** y **Tailwind CSS**.

---

## 🛠️ Especificaciones Técnicas

- **Framework:** Astro (para tiempos de carga casi instantáneos).
- **Lógica:** React (Hooks para el monitoreo en vivo del servidor vía `mcstatus.io`).
- **Estilos:** Tailwind CSS (diseño responsivo y animaciones fluidas).

---

<div align="center">
  <i>¿Buscas un poco de nostalgia? <br> <a href="https://github.com/PintoDavid/Old-Builtechraft-Site/">Haz clic aquí para visitar el código del diseño original de la web</a>.</i>
</div>
=======
# Builtechraft - Landing Page

Official source code for the **Builtechraft** landing page, a private Minecraft server with Crossplay integration. This project prioritizes performance and information clarity through a modular component architecture.

## 🖼 Web Evolution & Versions

### v1.0 - Academic Origins (1st Semester)

_Developed while learning the fundamentals of HTML/CSS._

![1771360430493](images/README/1771360430493.png)

### v2.0 - Visual Design (Dreamweaver Era)

_Created in one week using Adobe Dreamweaver for a more structured visual approach._

![1771360462555](images/README/1771360462555.png)

### v3.0 - Modern Engineering (Astro + AI)

_The current version. Developed in less than 3 days using Astro, React, and AI-assisted optimization._

![1771360498692](images/README/1771360498692.png)

## 🛠 Technical Specifications

- **Framework:** Astro (Islands Architecture).
- **Frontend Logic:** React (Hooks for asynchronous state management).
- **Styling:** Tailwind CSS (Responsive design and custom animations).
- **Monitoring:** Real-time integration with `mcstatus.io` API.

## 🏗 Project Structure

### Data Management (`src/config.js`)

Centralization of network parameters (IPs and ports) to ensure data consistency across the site.

### Status Monitor (`ServerStatus.jsx`)

A dynamic component that executes parallel requests to validate server availability with built-in redundancy.

### Access Section (`IPSection.astro`)

Optimized connection interface featuring:

- **Smart Indicators:** Automatic "Dull" styling if a platform is detected offline.
- **Copiable UI:** Immediate feedback system for IP interactions.
- **Onboarding Protocol:** Guided flow for Whitelist management and rule compliance.

---

# Versión en Español

Código fuente de la landing page de **Builtechraft**. Este proyecto prioriza el rendimiento y la claridad informativa mediante una arquitectura de componentes modulares.

## 🖼 Evolución de la Web

### v1.0 - Orígenes Académicos (1er Semestre)

_Desarrollada durante el aprendizaje de fundamentos de HTML/CSS._

![1771360436877](images/README/1771360436877.png)

### v2.0 - Diseño Visual (Era Dreamweaver)

_Creada en una semana utilizando Adobe Dreamweaver para un enfoque visual estructurado._

![1771360455204](images/README/1771360455204.png)

### v3.0 - Ingeniería Moderna (Astro + IA)

_La versión actual. Desarrollada en menos de 3 días usando Astro, React y optimización asistida por IA._

![1771360509081](images/README/1771360509081.png)

## 🛠 Especificaciones Técnicas

- **Framework:** Astro.
- **Lógica:** React (Hooks para estados asíncronos).
- **Estilos:** Tailwind CSS.
- **Monitoreo:** API de `mcstatus.io`.

## 🏗 Estructura del Proyecto

- **Gestión de Datos:** Centralización de IPs y puertos en `src/config.js`.
- **Monitor de Estado:** Validación paralela de disponibilidad del servidor.
- **Sección de Acceso:** Interfaz con indicadores inteligentes (modo offline), sistema de copiado rápido y protocolo de ingreso para la Whitelist.

---

**Developed by [Tarquitet](https://web.tarquitet.com)**

> > > > > > > v2-astro
