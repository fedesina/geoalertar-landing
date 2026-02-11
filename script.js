// ===== INTERNACIONALIZACIÓN =====
let currentLang = localStorage.getItem('geoalert-lang') || 'es';
let lastSelectedHexProps = null;

const translations = {
    es: {
        // Header
        header_cta: "Contactar",
        // Hero
        hero_badge: "Validación operativa exitosa durante la Crisis Patagonia 2026",
        hero_title: "Inteligencia Territorial Predictiva",
        hero_subtitle: "Sabemos dónde está el riesgo antes de que suene la alarma. El primer sistema de gestión de incendios de Argentina que integra clima, satélites y vulnerabilidad social.",
        hero_cta: "Ver demo interactiva",
        hero_stat1_value: "Argentina",
        hero_stat1_label: "Cobertura",
        hero_stat2_value: "Predictivo",
        hero_stat2_label: "No solo detecta",
        hero_stat3_value: "Validado",
        hero_stat3_label: "Con datos reales",
        // Trust
        trust_label: "Validado con datos de",
        // Data
        data_title: "Capacidad de datos",
        data_subtitle: "Nuestro modelo está entrenado con datos históricos verificados de incendios en Argentina y fuentes satelitales globales.",
        data_card1_label: "Incendios confirmados (entrenamiento)",
        data_card2_label: "Años de datos históricos",
        data_card3_label: "Fuentes satelitales integradas",
        data_card4_label: "F1-Score del modelo",
        // Demo
        demo_title: "Tablero de Comando Táctico",
        demo_subtitle: "Vista previa de la interfaz del sistema. Los datos mostrados son ilustrativos para demostrar el funcionamiento.",
        demo_sidebar_title: "Análisis de zona",
        demo_sidebar_intro: "El sistema cruza el riesgo climático con la ubicación de infraestructura crítica: escuelas, líneas eléctricas y cuarteles de bomberos. Seleccioná un hexágono para ver el análisis.",
        demo_explanation_title: "¿Por qué este nivel?",
        demo_explanation_loading: "Cargando análisis...",
        demo_label_temp: "Temperatura",
        demo_label_wind: "Viento",
        demo_label_precip: "Precip. 7 días",
        demo_label_slope: "Pendiente",
        demo_legend_title: "Niveles de riesgo",
        demo_legend_extreme: "Extremo (>80%)",
        demo_legend_high: "Alto (60-80%)",
        demo_legend_moderate: "Moderado (40-60%)",
        demo_legend_low: "Bajo (<40%)",
        demo_risk_word: "riesgo",
        // Risk levels
        risk_extreme: "EXTREMO",
        risk_high: "ALTO",
        risk_moderate: "MODERADO",
        risk_low: "BAJO",
        // Explanation fragments
        explain_temp_very_high: "temperatura muy elevada ({value}°C)",
        explain_temp_high: "temperatura alta ({value}°C)",
        explain_temp_low: "temperatura baja ({value}°C) reduce el riesgo",
        explain_wind_very_strong: "vientos muy fuertes ({value} km/h) favorecen propagación rápida",
        explain_wind_moderate: "vientos moderados a fuertes ({value} km/h)",
        explain_wind_calm: "vientos calmos",
        explain_rain_none: "prácticamente sin lluvias en los últimos 7 días",
        explain_rain_scarce: "precipitaciones escasas ({value} mm)",
        explain_rain_significant: "lluvias recientes significativas ({value} mm) reducen el riesgo",
        explain_rain_moderate: "lluvias moderadas ({value} mm)",
        explain_intro_extreme: "Condiciones críticas: ",
        explain_intro_high: "Condiciones de riesgo elevado: ",
        explain_intro_moderate: "Condiciones intermedias: ",
        explain_intro_low: "Condiciones favorables: ",
        explain_fallback: "múltiples factores combinados determinan este nivel de riesgo.",
        // Tech
        tech_title: "Tecnología Adaptativa Regional",
        tech_intro: "A diferencia de modelos globales genéricos diseñados para cualquier geografía, GeoAlertAR está construido para entender Argentina.",
        tech_box_title: "Router KNN: Algoritmo Multibioma",
        tech_box_p1: "Nuestro sistema utiliza un Router K-Nearest Neighbors que detecta automáticamente el bioma (Patagonia, Chaco, Pampa, Yungas, Delta) y ajusta el modelo predictivo en tiempo real. Cada ecosistema tiene su propia firma de riesgo: humedad crítica en el Delta, viento Zonda en Cuyo, sequía extrema en el Chaco.",
        tech_box_p2: "<strong>Ventaja operativa:</strong> Un modelo global te da un promedio. GeoAlertAR te da precisión territorial adaptada a la diversidad del territorio argentino.",
        tech_point1_title: "Entrenamiento Regional",
        tech_point1_desc: "200K+ eventos históricos argentinos, no datasets globales genéricos.",
        tech_point2_title: "Detección de Bioma",
        tech_point2_desc: "El sistema identifica automáticamente el ecosistema y ajusta el algoritmo.",
        tech_point3_title: "Validación Continua",
        tech_point3_desc: "Cruce en tiempo real con focos activos NASA FIRMS para aprendizaje continuo.",
        // Crisis
        crisis_title: "El problema no es el clima, es la imprevisibilidad",
        crisis_intro: "El 84% del territorio argentino es combustible listo. Nuestro trabajo no es decirte que está seco —eso ya lo sabés— es decirte dónde la vulnerabilidad humana va a encender la mecha.",
        crisis_li1: '<strong>Factor humano:</strong> El 95% de los incendios son causados por actividad humana (intencional o negligencia). El riesgo real está donde convergen sequía + densidad poblacional.',
        crisis_li2: '<strong>Ventana de ignición:</strong> Las condiciones críticas (temperatura, viento, sequía) son predecibles con 7 días de anticipación. El problema es saber <em>dónde</em> mirar.',
        crisis_li3: '<strong>Escala nacional:</strong> Argentina no tiene un ecosistema homogéneo. Lo que funciona en Corrientes no funciona en Chubut.',
        crisis_li4: '<strong>Crisis Patagonia 2026:</strong> GeoAlertAR identificó las zonas de riesgo extremo 5 días antes del primer foco. El sistema ya está validado operativamente.',
        crisis_cta: "Implementar sistema",
        crisis_stat1_label: "Hectáreas quemadas en Argentina (2020-2024)",
        crisis_stat2_label: "Hectáreas en Patagonia (enero 2026, en curso)",
        crisis_stat3_label: "Hectáreas en Corrientes (2022)",
        crisis_stat4_label: "Causados por actividad humana",
        // Comparison
        comparison_title: "El cambio de paradigma",
        comparison_intro: "La gestión tradicional de incendios opera en modo reactivo. GeoAlertAR transforma la operación hacia un modelo predictivo y preventivo.",
        comparison_before_title: "Desafío Actual (Gestión Reactiva)",
        comparison_before_li1: '<strong>Respuesta post-incidente</strong><span>Se actúa cuando el satélite detecta el foco térmico (fuego ya iniciado).</span>',
        comparison_before_li2: '<strong>Pérdida de Capital Natural</strong><span>Daños inevitables en hectáreas productivas y nativas.</span>',
        comparison_before_li3: '<strong>Asignación Generalista</strong><span>Patrullaje rutinario cubriendo grandes zonas sin foco definido.</span>',
        comparison_before_li4: '<strong>Intuición Operativa</strong><span>Decisiones basadas en experiencia, pero sin datos en tiempo real.</span>',
        comparison_after_title: "Ventaja GeoAlertAR (Gestión Preventiva)",
        comparison_after_li1: '<strong>Anticipación Estratégica</strong><span>Alerta de riesgo extremo 7 días antes de la ignición.</span>',
        comparison_after_li2: '<strong>Protección de Activos</strong><span>Blindaje preventivo de zonas de alto valor económico/ecológico.</span>',
        comparison_after_li3: '<strong>Despliegue de Precisión</strong><span>Movilización de recursos a las coordenadas exactas de riesgo.</span>',
        comparison_after_li4: '<strong>Inteligencia Territorial</strong><span>Tablero de comando con índices hídricos y de combustible vivo.</span>',
        comparison_cta: "Solicitar piloto institucional",
        // Team
        team_title: "Quiénes somos",
        team_p1: "GeoalertAR nació de una pregunta incómoda: ¿por qué con toda la tecnología satelital disponible, seguimos reaccionando cuando el fuego ya está quemando?",
        team_p2: "La respuesta no la encontramos en un paper. La encontramos en el terreno —tras haber sido bombero voluntario y entender que cuando suena la alarma, el fuego ya lleva ventaja.",
        team_highlight: "Validación operativa exitosa durante la Crisis Patagonia 2026: identificamos zonas de riesgo extremo 5 días antes del primer foco. El sistema ya probó su valor en condiciones reales de emergencia.",
        team_p4: "Somos Federico y Camila. Él viene del desarrollo y la teledetección. Ella de la geografía ambiental y los sistemas de información geográfica. Juntos construimos algo que creemos puede cambiar cómo Argentina enfrenta el fuego.",
        team_fed_role: "Desarrollador principal",
        team_cam_role: "Geografía Ambiental & GIS",
        team_cam_credentials: "Análisis espacial · Cartografía",
        // Awards
        awards_title: "Formación y reconocimientos",
        awards_intro: "El proyecto combina formación técnica especializada con reconocimiento internacional.",
        awards_item1_date: "Octubre 2025",
        awards_item2_title: "Certificación en Monitoreo de Incendios",
        awards_item2_date: "Abril 2025",
        awards_item3_title: "Formación en Teledetección",
        // Apps
        apps_title: "¿Para quién es?",
        apps_intro: "El sistema puede adaptarse a diferentes necesidades: desde gobiernos provinciales que gestionan emergencias, hasta empresas que necesitan proteger activos forestales.",
        apps_item1_title: "Gobiernos",
        apps_item1_desc: "Planificación de recursos y alertas tempranas a la población antes de que el riesgo escale.",
        apps_item2_title: "Forestales",
        apps_item2_desc: "Protección de plantaciones y bosques nativos con monitoreo continuo de zonas críticas.",
        apps_item3_title: "Aseguradoras",
        apps_item3_desc: "Evaluación de riesgo por zona para pricing de pólizas y prevención de siniestros.",
        apps_item4_title: "Bomberos",
        apps_item4_desc: "Anticipación táctica para pre-posicionar recursos donde el riesgo es inminente.",
        apps_cta: "Hablar con expertos",
        // Contact
        contact_title: "¿Querés saber más?",
        contact_intro: "Si te interesa conocer el sistema, explorar una colaboración o simplemente tenés preguntas, escribinos. Respondemos todos los mensajes.",
        // Footer
        footer_text: "© 2026 GeoAlertAR — Desarrollado en Argentina"
    },
    en: {
        // Header
        header_cta: "Contact",
        // Hero
        hero_badge: "Successful operational validation during Patagonia Crisis 2026",
        hero_title: "Predictive Territorial Intelligence",
        hero_subtitle: "We know where risk is before the alarm sounds. Argentina's first wildfire management system integrating climate, satellites, and social vulnerability.",
        hero_cta: "View interactive demo",
        hero_stat1_value: "Argentina",
        hero_stat1_label: "Coverage",
        hero_stat2_value: "Predictive",
        hero_stat2_label: "Not just detection",
        hero_stat3_value: "Validated",
        hero_stat3_label: "With real data",
        // Trust
        trust_label: "Validated with data from",
        // Data
        data_title: "Data Capacity",
        data_subtitle: "Our model is trained with verified historical wildfire data from Argentina and global satellite sources.",
        data_card1_label: "Confirmed fires (training)",
        data_card2_label: "Years of historical data",
        data_card3_label: "Integrated satellite sources",
        data_card4_label: "Model F1-Score",
        // Demo
        demo_title: "Tactical Command Dashboard",
        demo_subtitle: "System interface preview. Data shown is illustrative to demonstrate functionality.",
        demo_sidebar_title: "Zone analysis",
        demo_sidebar_intro: "The system cross-references climate risk with critical infrastructure locations: schools, power lines, and fire stations. Select a hexagon to view the analysis.",
        demo_explanation_title: "Why this level?",
        demo_explanation_loading: "Loading analysis...",
        demo_label_temp: "Temperature",
        demo_label_wind: "Wind",
        demo_label_precip: "Precip. 7 days",
        demo_label_slope: "Slope",
        demo_legend_title: "Risk levels",
        demo_legend_extreme: "Extreme (>80%)",
        demo_legend_high: "High (60-80%)",
        demo_legend_moderate: "Moderate (40-60%)",
        demo_legend_low: "Low (<40%)",
        demo_risk_word: "risk",
        // Risk levels
        risk_extreme: "EXTREME",
        risk_high: "HIGH",
        risk_moderate: "MODERATE",
        risk_low: "LOW",
        // Explanation fragments
        explain_temp_very_high: "very high temperature ({value}°C)",
        explain_temp_high: "high temperature ({value}°C)",
        explain_temp_low: "low temperature ({value}°C) reduces risk",
        explain_wind_very_strong: "very strong winds ({value} km/h) favor rapid spread",
        explain_wind_moderate: "moderate to strong winds ({value} km/h)",
        explain_wind_calm: "calm winds",
        explain_rain_none: "virtually no rainfall in the last 7 days",
        explain_rain_scarce: "scarce precipitation ({value} mm)",
        explain_rain_significant: "significant recent rainfall ({value} mm) reduces risk",
        explain_rain_moderate: "moderate rainfall ({value} mm)",
        explain_intro_extreme: "Critical conditions: ",
        explain_intro_high: "High risk conditions: ",
        explain_intro_moderate: "Intermediate conditions: ",
        explain_intro_low: "Favorable conditions: ",
        explain_fallback: "multiple combined factors determine this risk level.",
        // Tech
        tech_title: "Regional Adaptive Technology",
        tech_intro: "Unlike generic global models designed for any geography, GeoAlertAR is built to understand Argentina.",
        tech_box_title: "Router KNN: Multi-biome Algorithm",
        tech_box_p1: "Our system uses a K-Nearest Neighbors Router that automatically detects the biome (Patagonia, Chaco, Pampa, Yungas, Delta) and adjusts the predictive model in real time. Each ecosystem has its own risk signature: critical humidity in the Delta, Zonda wind in Cuyo, extreme drought in the Chaco.",
        tech_box_p2: "<strong>Operational advantage:</strong> A global model gives you an average. GeoAlertAR gives you territorial precision adapted to Argentina's diversity.",
        tech_point1_title: "Regional Training",
        tech_point1_desc: "200K+ Argentine historical events, not generic global datasets.",
        tech_point2_title: "Biome Detection",
        tech_point2_desc: "The system automatically identifies the ecosystem and adjusts the algorithm.",
        tech_point3_title: "Continuous Validation",
        tech_point3_desc: "Real-time cross-referencing with NASA FIRMS active hotspots for continuous learning.",
        // Crisis
        crisis_title: "The problem isn't the climate, it's the unpredictability",
        crisis_intro: "84% of Argentine territory is ready fuel. Our job isn't to tell you it's dry — you already know that — it's to tell you where human vulnerability will light the fuse.",
        crisis_li1: '<strong>Human factor:</strong> 95% of fires are caused by human activity (intentional or negligence). Real risk is where drought + population density converge.',
        crisis_li2: '<strong>Ignition window:</strong> Critical conditions (temperature, wind, drought) are predictable 7 days in advance. The problem is knowing <em>where</em> to look.',
        crisis_li3: '<strong>National scale:</strong> Argentina doesn\'t have a homogeneous ecosystem. What works in Corrientes doesn\'t work in Chubut.',
        crisis_li4: '<strong>Patagonia Crisis 2026:</strong> GeoAlertAR identified extreme risk zones 5 days before the first hotspot. The system is already operationally validated.',
        crisis_cta: "Implement system",
        crisis_stat1_label: "Hectares burned in Argentina (2020-2024)",
        crisis_stat2_label: "Hectares in Patagonia (January 2026, ongoing)",
        crisis_stat3_label: "Hectares in Corrientes (2022)",
        crisis_stat4_label: "Caused by human activity",
        // Comparison
        comparison_title: "The paradigm shift",
        comparison_intro: "Traditional fire management operates in reactive mode. GeoAlertAR transforms operations toward a predictive and preventive model.",
        comparison_before_title: "Current Challenge (Reactive Management)",
        comparison_before_li1: '<strong>Post-incident response</strong><span>Action taken when the satellite detects the thermal hotspot (fire already started).</span>',
        comparison_before_li2: '<strong>Natural Capital Loss</strong><span>Inevitable damage to productive and native hectares.</span>',
        comparison_before_li3: '<strong>Generalist Allocation</strong><span>Routine patrolling covering large zones without defined focus.</span>',
        comparison_before_li4: '<strong>Operational Intuition</strong><span>Decisions based on experience, but without real-time data.</span>',
        comparison_after_title: "GeoAlertAR Advantage (Preventive Management)",
        comparison_after_li1: '<strong>Strategic Anticipation</strong><span>Extreme risk alert 7 days before ignition.</span>',
        comparison_after_li2: '<strong>Asset Protection</strong><span>Preventive shielding of high economic/ecological value zones.</span>',
        comparison_after_li3: '<strong>Precision Deployment</strong><span>Resource mobilization to exact risk coordinates.</span>',
        comparison_after_li4: '<strong>Territorial Intelligence</strong><span>Command dashboard with water indices and Live Fuel Moisture.</span>',
        comparison_cta: "Request institutional pilot",
        // Team
        team_title: "Who we are",
        team_p1: "GeoalertAR was born from an uncomfortable question: why, with all the satellite technology available, do we keep reacting when the fire is already burning?",
        team_p2: "We didn't find the answer in a paper. We found it in the field — after serving as a volunteer firefighter and understanding that when the alarm sounds, the fire already has the advantage.",
        team_highlight: "Successful operational validation during Patagonia Crisis 2026: we identified extreme risk zones 5 days before the first hotspot. The system already proved its value under real emergency conditions.",
        team_p4: "We are Federico and Camila. He comes from development and remote sensing. She from environmental geography and geographic information systems. Together we built something we believe can change how Argentina faces fire.",
        team_fed_role: "Lead Developer",
        team_cam_role: "Environmental Geography & GIS",
        team_cam_credentials: "Spatial analysis · Cartography",
        // Awards
        awards_title: "Training and recognition",
        awards_intro: "The project combines specialized technical training with international recognition.",
        awards_item1_date: "October 2025",
        awards_item2_title: "Fire Monitoring Certification",
        awards_item2_date: "April 2025",
        awards_item3_title: "Remote Sensing Training",
        // Apps
        apps_title: "Who is it for?",
        apps_intro: "The system can adapt to different needs: from provincial governments managing emergencies to companies needing to protect forestry assets.",
        apps_item1_title: "Governments",
        apps_item1_desc: "Resource planning and early warnings to the population before risk escalates.",
        apps_item2_title: "Forestry",
        apps_item2_desc: "Protection of plantations and native forests with continuous monitoring of critical zones.",
        apps_item3_title: "Insurance",
        apps_item3_desc: "Zone-based risk assessment for policy pricing and loss prevention.",
        apps_item4_title: "Fire Departments",
        apps_item4_desc: "Tactical anticipation to pre-position resources where risk is imminent.",
        apps_cta: "Talk to experts",
        // Contact
        contact_title: "Want to learn more?",
        contact_intro: "If you're interested in the system, exploring a collaboration, or simply have questions, write to us. We respond to every message.",
        // Footer
        footer_text: "© 2026 GeoAlertAR — Developed in Argentina"
    }
};

// Configuración
const RESERVA_NAME = "Reserva de Biosfera Andino Norpatagónica";
const HEX_RADIUS = 0.06; // Radio del hexágono en grados (~6km)

// Corrección para distorsión de proyección a latitud -41°
const LAT_CORRECTION = Math.cos(-41 * Math.PI / 180); // ~0.755

// Función para generar hexágono FLAT-TOP (sin superposición)
function createHexagon(centerLat, centerLng) {
    const coords = [];
    // Flat-top: vértices en 0°, 60°, 120°, 180°, 240°, 300°
    for (let i = 0; i < 6; i++) {
        const angle = (60 * i) * Math.PI / 180;
        // Ajustar longitud por distorsión de proyección
        const lng = centerLng + (HEX_RADIUS / LAT_CORRECTION) * Math.cos(angle);
        const lat = centerLat + HEX_RADIUS * Math.sin(angle);
        coords.push([lng, lat]);
    }
    coords.push(coords[0]);
    return coords;
}

// Espaciado correcto para hexágonos flat-top contiguos
const HORIZ_SPACING = (3 * HEX_RADIUS / 2) / LAT_CORRECTION;
const VERT_SPACING = Math.sqrt(3) * HEX_RADIUS;

// Point in polygon (ray casting algorithm)
function pointInPolygon(lat, lng, polygon) {
    let inside = false;
    const coords = polygon[0]; // Primer anillo del polígono

    for (let i = 0, j = coords.length - 1; i < coords.length; j = i++) {
        const xi = coords[i][0], yi = coords[i][1];
        const xj = coords[j][0], yj = coords[j][1];

        if (((yi > lat) !== (yj > lat)) &&
            (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi)) {
            inside = !inside;
        }
    }
    return inside;
}

// Verificar si punto está en cualquier polígono del MultiPolygon
function isInsideReserva(lat, lng, multiPolygon) {
    for (const polygon of multiPolygon) {
        if (pointInPolygon(lat, lng, polygon)) {
            return true;
        }
    }
    return false;
}

// Generar nivel de riesgo basado en posición
function generateRiskData(lat, lng, index) {
    const seed = Math.abs(Math.sin(lat * 1000 + lng * 500 + index)) * 100;

    let baseRisk = 45;
    if (lat > -41.0) baseRisk += 20;
    if (lng < -71.5) baseRisk += 15;

    const prob = Math.max(15, Math.min(95, baseRisk + (seed % 35) - 15));

    let nivel;
    if (prob >= 80) nivel = "EXTREMO";
    else if (prob >= 60) nivel = "ALTO";
    else if (prob >= 40) nivel = "MODERADO";
    else nivel = "BAJO";

    const tempBase = { EXTREMO: 30, ALTO: 24, MODERADO: 18, BAJO: 12 };
    const temp = tempBase[nivel] + (seed % 5);
    const viento = nivel === "EXTREMO" ? 28 + (seed % 12) :
                  nivel === "ALTO" ? 18 + (seed % 8) :
                  nivel === "MODERADO" ? 10 + (seed % 6) : 4 + (seed % 4);
    const precip = nivel === "EXTREMO" ? seed % 5 :
                  nivel === "ALTO" ? seed % 12 :
                  nivel === "MODERADO" ? 15 + (seed % 20) : 30 + (seed % 25);

    // Pendiente del terreno (simulada basada en posición)
    const pendiente = 5 + (seed % 25);

    return {
        probabilidad: Math.round(prob * 10) / 10,
        nivel_riesgo: nivel,
        temp_aire: Math.round(temp * 10) / 10,
        viento_kmh: Math.round(viento * 10) / 10,
        precip_7d: Math.round(precip * 10) / 10,
        pendiente: Math.round(pendiente)
    };
}

// Generar grilla hexagonal dentro de bounds
function generateHexGridInBounds(bounds, multiPolygon) {
    const features = [];

    const startLat = bounds.getNorth();
    const endLat = bounds.getSouth();
    const startLng = bounds.getWest();
    const endLng = bounds.getEast();

    let index = 0;
    let row = 0;

    for (let lat = startLat; lat >= endLat; lat -= VERT_SPACING) {
        // Offset para filas impares (la mitad del espaciado horizontal)
        const offset = (row % 2) * (HORIZ_SPACING / 2);

        for (let lng = startLng + offset; lng <= endLng; lng += HORIZ_SPACING) {
            // Solo agregar si está dentro de la reserva
            if (isInsideReserva(lat, lng, multiPolygon)) {
                const riskData = generateRiskData(lat, lng, index);

                features.push({
                    type: "Feature",
                    properties: {
                        hex_id: `hex_${index}`,
                        latitude: lat,
                        longitude: lng,
                        region: RESERVA_NAME,
                        ...riskData
                    },
                    geometry: {
                        type: "Polygon",
                        coordinates: [createHexagon(lat, lng)]
                    }
                });
                index++;
            }
        }
        row++;
    }
    return { type: "FeatureCollection", features };
}

// Función para generar explicación según las variables
function generateExplanation(props) {
    const t = translations[currentLang];
    const temp = props.temp_aire;
    const viento = props.viento_kmh;
    const lluvia = props.precip_7d;
    const nivel = props.nivel_riesgo;

    let reasons = [];

    if (temp >= 28) {
        reasons.push(t.explain_temp_very_high.replace('{value}', temp.toFixed(1)));
    } else if (temp >= 22) {
        reasons.push(t.explain_temp_high.replace('{value}', temp.toFixed(1)));
    } else if (temp <= 10) {
        reasons.push(t.explain_temp_low.replace('{value}', temp.toFixed(1)));
    }

    if (viento >= 25) {
        reasons.push(t.explain_wind_very_strong.replace('{value}', viento.toFixed(1)));
    } else if (viento >= 15) {
        reasons.push(t.explain_wind_moderate.replace('{value}', viento.toFixed(1)));
    } else if (viento < 5) {
        reasons.push(t.explain_wind_calm);
    }

    if (lluvia < 2) {
        reasons.push(t.explain_rain_none);
    } else if (lluvia < 10) {
        reasons.push(t.explain_rain_scarce.replace('{value}', lluvia.toFixed(1)));
    } else if (lluvia >= 50) {
        reasons.push(t.explain_rain_significant.replace('{value}', lluvia.toFixed(1)));
    } else if (lluvia >= 20) {
        reasons.push(t.explain_rain_moderate.replace('{value}', lluvia.toFixed(1)));
    }

    const introMap = { 'EXTREMO': t.explain_intro_extreme, 'ALTO': t.explain_intro_high, 'MODERADO': t.explain_intro_moderate, 'BAJO': t.explain_intro_low };
    let intro = introMap[nivel] || t.explain_intro_moderate;

    return reasons.length > 0 ? intro + reasons.join(", ") + "." : intro + t.explain_fallback;
}

// Inicializar mapa (sin controles de zoom ni navegación)
const map = L.map('map', {
    zoomControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    touchZoom: false,
    dragging: false,
    keyboard: false
}).setView([-41, -71.5], 7);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: ''
}).addTo(map);

function getColor(prob) {
    if (prob >= 80) return '#dc2626';
    if (prob >= 60) return '#f97316';
    if (prob >= 40) return '#eab308';
    return '#22c55e';
}

function getRiskClass(nivel) {
    return 'risk-' + nivel.toLowerCase();
}

// Estilo para hexágonos
function hexStyle(feature) {
    return {
        fillColor: getColor(feature.properties.probabilidad),
        weight: 1,
        opacity: 1,
        color: '#374151',
        fillOpacity: 0.7
    };
}

// Estilo para el contorno de la reserva
function reservaStyle(feature) {
    return {
        fillColor: 'transparent',
        weight: 2,
        opacity: 1,
        color: '#059669',
        dashArray: '5, 5',
        fillOpacity: 0
    };
}

let hexLayer = null;

function highlightFeature(e) {
    e.target.setStyle({ weight: 2, color: '#0f172a', fillOpacity: 0.9 });
    e.target.bringToFront();
}

function resetHighlight(e) {
    if (hexLayer) hexLayer.resetStyle(e.target);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: function(e) {
            showHexInfo(feature.properties);
        }
    });
}

function showHexInfo(props) {
    lastSelectedHexProps = props;
    document.getElementById('sidebar-intro').style.display = 'none';
    document.getElementById('hex-info').classList.add('active');

    const riskNameMap = { 'EXTREMO': translations[currentLang].risk_extreme, 'ALTO': translations[currentLang].risk_high, 'MODERADO': translations[currentLang].risk_moderate, 'BAJO': translations[currentLang].risk_low };
    document.getElementById('hex-risk').textContent = riskNameMap[props.nivel_riesgo] || props.nivel_riesgo;
    document.getElementById('hex-risk').className = 'hex-risk-badge ' + getRiskClass(props.nivel_riesgo);
    document.getElementById('hex-prob-value').textContent = props.probabilidad.toFixed(1);
    document.getElementById('hex-temp').textContent = props.temp_aire.toFixed(1);
    document.getElementById('hex-wind').textContent = props.viento_kmh.toFixed(1);
    document.getElementById('hex-rain').textContent = props.precip_7d.toFixed(1);
    document.getElementById('hex-slope').textContent = props.pendiente;
    document.getElementById('hex-explanation').textContent = generateExplanation(props);
}

// Cargar GeoJSON de la reserva
fetch('Reserva_de_Biosfera_Andino_Norpatagonica.geojson')
    .then(response => response.json())
    .then(reservaData => {
        // Mostrar contorno de la reserva
        const reservaLayer = L.geoJSON(reservaData, {
            style: reservaStyle
        }).addTo(map);

        // Obtener bounds y coordenadas del MultiPolygon
        const bounds = reservaLayer.getBounds();
        const multiPolygon = reservaData.features[0].geometry.coordinates;

        // Generar hexágonos dentro de la reserva
        const hexData = generateHexGridInBounds(bounds, multiPolygon);

        // Mostrar hexágonos
        hexLayer = L.geoJSON(hexData, {
            style: hexStyle,
            onEachFeature: onEachFeature
        }).addTo(map);

        // Ajustar vista solo a los hexágonos (no a toda la reserva)
        if (hexData.features.length > 0) {
            const hexBounds = hexLayer.getBounds();
            map.fitBounds(hexBounds, { padding: [10, 10] });
        }
    })
    .catch(error => {
        console.error('Error cargando GeoJSON:', error);
    });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== LANGUAGE SWITCHING =====
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('geoalert-lang', lang);
    document.documentElement.lang = lang;

    // Update plain text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    // Update HTML elements (with <strong>, <span>, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });

    // Update toggle active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Re-render demo sidebar if hexagon was selected
    if (lastSelectedHexProps && document.getElementById('hex-info').classList.contains('active')) {
        showHexInfo(lastSelectedHexProps);
    }
}

// Language toggle event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

// Initialize language
setLanguage(currentLang);
