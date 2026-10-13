# 🌲🔥 GeoAlertAR
> **Condiciones de ignición de incendios forestales en toda Argentina, todos los días.**

[![NASA Space Apps](https://img.shields.io/badge/NASA_Space_Apps-Best_Mission_Concept_2025-0B3D91?style=for-the-badge&logo=nasa)](https://www.spaceappschallenge.org/)
[![Status](https://img.shields.io/badge/Status-Operativo-success?style=for-the-badge)](https://www.geoalertar.com.ar)
[![Lang](https://img.shields.io/badge/Lang-ES_|_EN-blue?style=for-the-badge)](#)

Sitio institucional de **GeoAlertAR** — [www.geoalertar.com.ar](https://www.geoalertar.com.ar). La aplicación vive en [appgeoalertar.com.ar](https://appgeoalertar.com.ar).

## 🚀 Sobre el proyecto

GeoAlertAR **mide las condiciones de ignición del combustible** en más de 13.400 hexágonos que cubren Argentina, todos los días, y las pronostica hasta 7 días. No detecta ni predice incendios: dice dónde el combustible está en condiciones de encenderse y propagar fuego, para que bomberos y agencias se preparen antes.

El motor es el **Índice Meteorológico de Peligro de Incendio (FWI)** del sistema canadiense (Van Wagner, 1987): un modelo físico, publicado y auditable, alimentado con:

| Dato | Fuente |
| :--- | :--- |
| Temperatura, humedad y viento | NOAA · GFS |
| Lluvia | JAXA · GSMaP |
| Focos de calor (contraste diario) | NASA · FIRMS |
| Vegetación y combustible | ESA · WorldCover |
| Relieve | NASA · SRTM |
| Límites y cartografía | IGN Argentina |

## 🌟 Qué tiene la landing

* **El mapa de hoy:** el nivel de condiciones de cada hexágono, con el dato real publicado ese día (solo el nivel; el detalle es para usuarios del sistema).
* **Cómo se calcula:** de la lluvia y el tiempo del mediodía al nivel por zona, paso a paso.
* **Español e inglés**, diseño adaptado a celular y animaciones que respetan "reducir movimiento".

## 🏆 Reconocimientos

| Premio | Categoría | Año | Entidad |
| :--- | :--- | :--- | :--- |
| **NASA Space Apps Challenge** | 🥇 Best Mission Concept | 2025 | NASA / CONAE |

## 🛠️ Tecnología

* HTML, CSS y JavaScript sin frameworks.
* [Leaflet](https://leafletjs.com/) para el mapa; FontAwesome e IBM Plex Sans (Google Fonts).
* Seguridad: Content-Security-Policy y Subresource Integrity en las librerías externas.
* Despliegue: GitHub Pages.

## 📂 Estructura

```text
geoalertar-landing/
├── index.html                 # Página principal
├── styles.css                 # Estilos y animaciones
├── script.js                  # Textos ES/EN y mapa de hoy
├── maqueta-ods.html           # Objetivos de Desarrollo Sostenible
├── politica-privacidad.html   # Política de privacidad
├── terminos.html              # Términos y condiciones
└── img/                       # Imágenes
```
