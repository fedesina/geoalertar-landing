# 🌲🔥 GeoAlertAR
> **Sistema de Alerta Temprana de Incendios Forestales basado en Inteligencia Satelital.**

[![NASA Space Apps](https://img.shields.io/badge/NASA_Space_Apps-Best_Mission_Concept_2025-0B3D91?style=for-the-badge&logo=nasa)](https://www.spaceappschallenge.org/)
[![Status](https://img.shields.io/badge/Status-Production-success?style=for-the-badge)](https://www.geoalertar.com.ar)
[![Lang](https://img.shields.io/badge/Lang-ES_|_EN-blue?style=for-the-badge)](#)

## 🚀 Sobre el Proyecto

**GeoAlertAR** es una plataforma tecnológica diseñada para transformar la gestión de incendios forestales de reactiva a preventiva. Utilizando datos satelitales (MODIS, Landsat, Sentinel) y modelos predictivos de Machine Learning, el sistema permite identificar zonas de riesgo extremo hasta **7 días antes** de que ocurra la ignición.

### 🌟 Funcionalidades Clave

* **🌐 Internacionalización Completa (i18n):** Soporte nativo y dinámico para Español e Inglés, con persistencia de preferencia de usuario.
* **🗺️ Mapa Interactivo de Riesgo:** Visualización geoespacial mediante grillas hexagonales que analizan variables críticas (humedad de combustible vivo, viento, temperatura).
* **📱 Diseño Responsive:** Interfaz adaptada a dispositivos móviles para uso en terreno por brigadistas.
* **⚡ Arquitectura Optimizada:** Código refactorizado y modular para máximo rendimiento y mantenibilidad.

---

## 🏆 Reconocimientos

| Premio | Categoría | Año | Entidad |
| :--- | :--- | :--- | :--- |
| **NASA Space Apps Challenge** | 🥇 Best Mission Concept | 2025 | NASA / CONAE |

---

## 🛠️ Tecnologías Utilizadas

El proyecto está construido sobre un stack moderno y ligero, sin dependencias pesadas:

* **Core:** HTML5 Semántico, CSS3 (Variables & Flexbox/Grid), Vanilla JavaScript (ES6+).
* **Mapeo:** [Leaflet.js](https://leafletjs.com/) para renderizado de mapas y capas geoespaciales.
* **Estilos:** [FontAwesome](https://fontawesome.com/) (Iconografía) y Google Fonts (Tipografía IBM Plex Sans).
* **Despliegue:** GitHub Pages.

---

## 📂 Estructura del Repositorio

La arquitectura del proyecto ha sido refactorizada para separar responsabilidades:

```text
geoalertar-landing/
├── index.html       # Estructura semántica y metadatos
├── styles.css       # Estilos globales, diseño responsivo y animaciones
├── script.js        # Lógica de negocio, control del mapa y diccionario de traducciones
├── img/             # Assets gráficos optimizados (Logos, fondos, diagramas)
└── README.md        # Documentación oficial