# Builtechraft - Landing Page

Official source code for the **Builtechraft** landing page, a private Minecraft server with Crossplay integration. This project prioritizes performance and information clarity through a modular component architecture.

## 🖼 Web Evolution & Versions

### v1.0 - Academic Origins (1st Semester)

_Developed while learning the fundamentals of HTML/CSS._

![](images/README/1771360430493.png)\### v2.0 - Visual Design (Dreamweaver Era)

_Created in one week using Adobe Dreamweaver for a more structured visual approach._

![](images/README/1771360462555.png)\### v3.0 - Modern Engineering (Astro + AI)

_The current version. Developed in less than 3 days using Astro, React, and AI-assisted optimization._

![](images/README/1771360498692.png)\## 🛠 Technical Specifications

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

![](images/README/1771360436877.png)\### v2.0 - Diseño Visual (Era Dreamweaver)

_Creada en una semana utilizando Adobe Dreamweaver para un enfoque visual estructurado._

![](images/README/1771360455204.png)\### v3.0 - Ingeniería Moderna (Astro + IA)

_La versión actual. Desarrollada en menos de 3 días usando Astro, React y optimización asistida por IA._

![](images/README/1771360509081.png)\## 🛠 Especificaciones Técnicas

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
