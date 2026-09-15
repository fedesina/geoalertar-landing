// ===== INTERNACIONALIZACIÓN =====
let currentLang = localStorage.getItem('geoalert-lang') || 'es';
let lastSelectedHexProps = null;

const translations = {
    es: {
        // Header
        header_login: "Acceder",
        nav_demo: "Demo",
        nav_equipo: "Quiénes somos",
        header_cta: "Contactar",
        // Hero
        hero_title: "Inteligencia Territorial de Riesgo de Incendios Forestales",
        hero_subtitle: "Te decimos dónde van a darse las condiciones de riesgo de incendio con hasta 7 días de anticipación. Cubrimos todo el territorio argentino, todos los días. Para que actúes antes de que sea tarde.",
        hero_validated: "Sistema operativo y validado en emergencias reales.",
        hero_cta_login: "Acceder al sistema",
        // Trust
        trust_label: "Validado con datos de",
        // Data
        data_title: "Capacidad de datos",
        data_subtitle: "El motor de riesgo se basa en el índice FWI, complementado con modelos satelitales que calibran y regionalizan el análisis según cada territorio, entrenados con datos históricos verificados de incendios en Argentina.",
        data_card1_label: "Detecciones satelitales analizadas",
        data_card2_label: "Años de datos históricos",
        data_card3_value: "7 días",
        data_card3_label: "Anticipación de riesgo",
        data_card4_title: "Fuentes integradas",
        data_card4_desc: "Datos satelitales, meteorológicos y territoriales en un solo sistema.",
        data_card5_title: "Malla adaptable",
        data_card5_desc: "Se ajusta a la escala y necesidad de cada territorio.",
        // Demo
        demo_title: "Tablero de Comando Táctico",
        demo_subtitle: "Vista previa de la interfaz del sistema. Los datos mostrados son ilustrativos para demostrar el funcionamiento.",
        demo_disclaimer_badge: "DEMOSTRACIÓN SIMPLIFICADA",
        demo_disclaimer_text: "Este demo muestra una versión simplificada. El sistema completo hace mucho más:",
        demo_accordion_toggle: "Ver funciones completas",
        demo_acc1_title: "Resumen general del territorio",
        demo_acc2_title: "Riesgo y evolución temporal",
        demo_acc3_title: "Condiciones ambientales",
        demo_acc4_title: "Vegetación y combustible",
        demo_acc5_title: "Pronóstico hasta 7 días",
        demo_acc6_title: "Capas de información disponibles",
        demo_acc7_title: "Contexto socioterritorial",
        demo_sidebar_title: "Análisis de zona",
        demo_sidebar_intro: 'El sistema cruza el riesgo climático con la ubicación de infraestructura crítica: <strong>escuelas, líneas eléctricas y cuarteles de bomberos</strong>. <span class="demo-cta">👉 Hacé click en un hexágono para ver el análisis completo</span>',
        map_badge_text: "Hacé click en cualquier hexágono",
        demo_explanation_title: "¿Por qué este nivel?",
        demo_explanation_loading: "Cargando análisis...",
        demo_label_temp: "Temperatura",
        demo_label_wind: "Viento",
        demo_label_precip: "Precip. 7 días",
        demo_label_slope: "Pendiente",
        demo_legend_title: "Niveles de riesgo (FWI)",
        demo_legend_extreme: "Extremo (≥46)",
        demo_legend_veryhigh: "Muy alto (28-45)",
        demo_legend_high: "Alto (15-27)",
        demo_legend_moderate: "Moderado (6-14)",
        demo_legend_low: "Bajo (<6)",
        demo_risk_word: "riesgo",
        // Risk levels
        risk_extreme: "EXTREMO",
        risk_veryhigh: "MUY ALTO",
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
        explain_intro_veryhigh: "Condiciones de riesgo muy elevado: ",
        explain_intro_high: "Condiciones de riesgo elevado: ",
        explain_intro_moderate: "Condiciones intermedias: ",
        explain_intro_low: "Condiciones favorables: ",
        explain_fallback: "múltiples factores combinados determinan este nivel de riesgo.",
        // Case study
        case_title: "Precisión comprobada en el terreno",
        case_subtitle: "Durante la crisis de Patagonia en marzo de 2026, el sistema identificó las zonas de riesgo extremo días antes de que se confirmaran los primeros focos.",
        case_footer: "Focos de calor confirmados por satélites internacionales ocurrieron dentro de las zonas de riesgo identificadas por el sistema.",
        // Tech
        tech_title: "Tecnología Adaptativa Regional",
        tech_intro: "A diferencia de modelos globales genéricos diseñados para cualquier geografía, GeoAlertAR está construido para entender Argentina.",
        tech_box_title: "Adaptado a cada región de Argentina",
        tech_box_p1: "No usamos un modelo genérico global. El sistema detecta automáticamente la región y adapta su análisis a las condiciones locales. Lo que es crítico en Patagonia no es lo mismo que en el NEA o en Cuyo.",
        tech_box_p2: "<strong>Ventaja operativa:</strong> Un modelo global te da un promedio. GeoAlertAR te da precisión territorial adaptada a la diversidad del territorio argentino.",
        tech_point1_title: "Calibración y regionalización con datos argentinos",
        tech_point1_desc: "El índice FWI se combina con modelos satelitales calibrados con más de 200K detecciones históricas reales de Argentina —no datasets globales genéricos— para regionalizar el análisis y clasificar automáticamente el tipo de vegetación.",
        tech_point2_title: "Adaptación automática",
        tech_point2_desc: "El sistema identifica la región y ajusta sus parámetros a las condiciones locales del terreno y el clima.",
        tech_point3_title: "Validación diaria",
        tech_point3_desc: "Cada estimación de riesgo se cruza con focos de calor reales confirmados por satélites internacionales.",
        // Crisis
        crisis_title: "El problema no es el clima, es la imprevisibilidad",
        crisis_intro: "Gran parte del territorio argentino tiene vegetación seca lista para arder. Nuestro trabajo no es decirte que está seco —eso ya lo sabés— es decirte dónde la vulnerabilidad humana va a encender la mecha.",
        crisis_li1: '<strong>Factor humano:</strong> El 95% de los incendios se originan por actividad humana (intencional o negligencia), según el Servicio Nacional de Manejo del Fuego (SNMF) — una fuente de ignición que, en la práctica, es imposible de anticipar. Por eso lo único que sí se puede anticipar es <em>dónde</em> esa chispa inevitable encontraría condiciones para volverse catástrofe.',
        crisis_li2: '<strong>Ventana de ignición:</strong> Las condiciones críticas (temperatura, viento, sequía) son estimables con 7 días de anticipación. El problema es saber <em>dónde</em> mirar.',
        crisis_li3: '<strong>Escala nacional:</strong> Argentina no tiene un ecosistema homogéneo. Lo que funciona en Corrientes no funciona en Chubut.',
        crisis_li4: '<strong>Pérdida sostenida:</strong> En Argentina se pierden en promedio más de 300.000 hectáreas de bosque nativo por año a causa de incendios, según el Ministerio de Ambiente y Desarrollo Sostenible (MAyDS), 1998–2018.',
        crisis_source: "Fuentes: Servicio Nacional de Manejo del Fuego (SNMF) y MAyDS.",
        crisis_stat1_label: "Hectáreas quemadas en Argentina (2020-2024)",
        crisis_stat2_label: "Hectáreas en Patagonia (enero 2026, en curso)",
        crisis_stat3_label: "Hectáreas en Corrientes (2022)",
        crisis_stat4_label: "Causados por actividad humana",
        // Comparison
        comparison_title: "El cambio de paradigma",
        comparison_intro: "La gestión tradicional de incendios opera en modo reactivo. GeoAlertAR transforma la operación hacia un modelo de anticipación y prevención.",
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
        // Team
        team_title: "Quiénes somos",
        team_p1: "GeoalertAR nació de una pregunta incómoda: ¿por qué con toda la tecnología satelital disponible, seguimos reaccionando cuando el fuego ya está quemando?",
        team_p2: "La respuesta no la encontramos en un paper. La encontramos en el terreno —tras haber sido bombero voluntario y entender que cuando suena la alarma, el fuego ya lleva ventaja.",
        team_p4: "Somos Federico y Camila. Él viene del desarrollo y la teledetección. Ella de la geografía ambiental y los sistemas de información geográfica. Juntos construimos algo que creemos puede cambiar cómo Argentina enfrenta el fuego.",
        team_fed_role: "Desarrollador principal",
        team_cam_role: "Geografía Ambiental & GIS",
        team_cam_credentials: "Análisis espacial · Cartografía",
        // Awards
        awards_title: "Formación y reconocimientos",
        awards_intro: "El proyecto combina formación técnica especializada con reconocimiento internacional.",
        awards_item1_date: "Octubre 2025",
        awards_item2_title: "Advanced NASA Earth Observations and Tools for Active Fire, Smoke, and Post-Fire Monitoring",
        awards_item2_date: "Abril 2025",
        awards_item3_title: "Formación en Teledetección Óptica",
        awards_item4_org: "Publicación científica",
        awards_item4_title: "Paper publicado en EarthArXiv",
        awards_item5_title: "Taller de Información Geoespacial para la Gestión de Riesgos de Desastres",
        awards_item5_date: "Argentina",
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
        apps_item5_title: "ONGs y áreas protegidas",
        apps_item5_desc: "Monitoreo continuo de reservas y ecosistemas prioritarios para actuar antes de que el fuego los alcance.",
        apps_cta: "Solicitar piloto",
        // Contact
        contact_title: "¿Querés saber más?",
        contact_intro: "Si te interesa conocer el sistema, explorar una colaboración o simplemente tenés preguntas, escribinos. Respondemos todos los mensajes.",
        // Footer
        footer_text: "© 2026 GeoAlertAR — Desarrollado en Argentina",
        // ODS
        ods_label: "GeoAlertAR contribuye a los Objetivos de Desarrollo Sostenible de la ONU",
        ods_disclaimer: 'GeoAlertAR adhiere de forma independiente a estos Objetivos de Desarrollo Sostenible. Este uso es informativo y no implica aval ni certificación de las Naciones Unidas. <a href="maqueta-ods.html" target="_blank">Ver nuestra contribución a los ODS</a>'
    },
    en: {
        // Header
        header_login: "Login",
        nav_demo: "Demo",
        nav_equipo: "About us",
        header_cta: "Contact",
        // Hero
        hero_title: "Territorial Intelligence for Wildfire Risk",
        hero_subtitle: "We tell you where wildfire risk conditions will develop up to 7 days in advance. We cover all of Argentina, every day. So you can act before it's too late.",
        hero_validated: "Operational system, validated in real emergencies.",
        hero_cta_login: "Access system",
        // Trust
        trust_label: "Validated with data from",
        // Data
        data_title: "Data Capacity",
        data_subtitle: "The risk engine is based on the FWI index, complemented by satellite models that calibrate and regionalize the analysis for each territory, trained with verified historical wildfire data from Argentina.",
        data_card1_label: "Satellite detections analyzed",
        data_card2_label: "Years of historical data",
        data_card3_value: "7 days",
        data_card3_label: "Risk anticipation",
        data_card4_title: "Integrated sources",
        data_card4_desc: "Satellite, weather and territorial data in a single system.",
        data_card5_title: "Adaptive grid",
        data_card5_desc: "Adapts to the scale and needs of each territory.",
        // Demo
        demo_title: "Tactical Command Dashboard",
        demo_subtitle: "System interface preview. Data shown is illustrative to demonstrate functionality.",
        demo_disclaimer_badge: "SIMPLIFIED DEMO",
        demo_disclaimer_text: "This is a simplified demo. The full system does much more:",
        demo_accordion_toggle: "See full capabilities",
        demo_acc1_title: "Overall territory status",
        demo_acc2_title: "Risk and time evolution",
        demo_acc3_title: "Environmental conditions",
        demo_acc4_title: "Vegetation and fuel",
        demo_acc5_title: "7-day forecast",
        demo_acc6_title: "Available data layers",
        demo_acc7_title: "Socio-territorial context",
        demo_sidebar_title: "Zone analysis",
        demo_sidebar_intro: 'The system cross-references climate risk with critical infrastructure locations: <strong>schools, power lines, and fire stations</strong>. <span class="demo-cta">👉 Click on a hexagon to view the full analysis</span>',
        map_badge_text: "Click on any hexagon",
        demo_explanation_title: "Why this level?",
        demo_explanation_loading: "Loading analysis...",
        demo_label_temp: "Temperature",
        demo_label_wind: "Wind",
        demo_label_precip: "Precip. 7 days",
        demo_label_slope: "Slope",
        demo_legend_title: "Risk levels (FWI)",
        demo_legend_extreme: "Extreme (≥46)",
        demo_legend_veryhigh: "Very high (28-45)",
        demo_legend_high: "High (15-27)",
        demo_legend_moderate: "Moderate (6-14)",
        demo_legend_low: "Low (<6)",
        demo_risk_word: "risk",
        // Risk levels
        risk_extreme: "EXTREME",
        risk_veryhigh: "VERY HIGH",
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
        explain_intro_veryhigh: "Very high risk conditions: ",
        explain_intro_high: "High risk conditions: ",
        explain_intro_moderate: "Intermediate conditions: ",
        explain_intro_low: "Favorable conditions: ",
        explain_fallback: "multiple combined factors determine this risk level.",
        // Case study
        case_title: "Field-proven accuracy",
        case_subtitle: "During the Patagonia crisis in March 2026, the system identified extreme risk zones days before the first hotspots were confirmed.",
        case_footer: "Hotspots confirmed by international satellites occurred within the risk zones identified by the system.",
        // Tech
        tech_title: "Regional Adaptive Technology",
        tech_intro: "Unlike generic global models designed for any geography, GeoAlertAR is built to understand Argentina.",
        tech_box_title: "Adapted to each region of Argentina",
        tech_box_p1: "We don't use a generic global model. The system automatically detects the region and adapts its analysis to local conditions. What's critical in Patagonia is not the same as in the NEA or Cuyo.",
        tech_box_p2: "<strong>Operational advantage:</strong> A global model gives you an average. GeoAlertAR gives you territorial precision adapted to Argentina's diversity.",
        tech_point1_title: "Calibration and regionalization with Argentine data",
        tech_point1_desc: "The FWI index is combined with satellite models calibrated with over 200K real historical detections from Argentina —not generic global datasets— to regionalize the analysis and automatically classify vegetation type.",
        tech_point2_title: "Automatic adaptation",
        tech_point2_desc: "The system identifies the region and adjusts its parameters to local terrain and climate conditions.",
        tech_point3_title: "Daily validation",
        tech_point3_desc: "Each risk estimate is cross-referenced with real hotspots confirmed by international satellites.",
        // Crisis
        crisis_title: "The problem isn't the climate, it's the unpredictability",
        crisis_intro: "Much of Argentina's territory has dry vegetation ready to burn. Our job isn't to tell you it's dry — you already know that — it's to tell you where human vulnerability will light the fuse.",
        crisis_li1: '<strong>Human factor:</strong> 95% of fires originate from human activity (intentional or negligence), according to Argentina\'s National Fire Management Service (SNMF) — an ignition source that is, in practice, impossible to anticipate. That\'s why the only thing that can be anticipated is <em>where</em> that inevitable spark would find conditions to become a catastrophe.',
        crisis_li2: '<strong>Ignition window:</strong> Critical conditions (temperature, wind, drought) are estimable 7 days in advance. The problem is knowing <em>where</em> to look.',
        crisis_li3: '<strong>National scale:</strong> Argentina doesn\'t have a homogeneous ecosystem. What works in Corrientes doesn\'t work in Chubut.',
        crisis_li4: '<strong>Sustained loss:</strong> Argentina loses over 300,000 hectares of native forest per year to fire on average, according to the National Ministry of Environment (MAyDS), 1998–2018.',
        crisis_source: "Sources: National Fire Management Service (SNMF) and MAyDS.",
        crisis_stat1_label: "Hectares burned in Argentina (2020-2024)",
        crisis_stat2_label: "Hectares in Patagonia (January 2026, ongoing)",
        crisis_stat3_label: "Hectares in Corrientes (2022)",
        crisis_stat4_label: "Caused by human activity",
        // Comparison
        comparison_title: "The paradigm shift",
        comparison_intro: "Traditional fire management operates in reactive mode. GeoAlertAR shifts operations toward a model of anticipation and prevention.",
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
        // Team
        team_title: "Who we are",
        team_p1: "GeoalertAR was born from an uncomfortable question: why, with all the satellite technology available, do we keep reacting when the fire is already burning?",
        team_p2: "We didn't find the answer in a paper. We found it in the field — after serving as a volunteer firefighter and understanding that when the alarm sounds, the fire already has the advantage.",
        team_p4: "We are Federico and Camila. He comes from development and remote sensing. She from environmental geography and geographic information systems. Together we built something we believe can change how Argentina faces fire.",
        team_fed_role: "Lead Developer",
        team_cam_role: "Environmental Geography & GIS",
        team_cam_credentials: "Spatial analysis · Cartography",
        // Awards
        awards_title: "Training and recognition",
        awards_intro: "The project combines specialized technical training with international recognition.",
        awards_item1_date: "October 2025",
        awards_item2_title: "Advanced NASA Earth Observations and Tools for Active Fire, Smoke, and Post-Fire Monitoring",
        awards_item2_date: "April 2025",
        awards_item3_title: "Optical Remote Sensing Training",
        awards_item4_org: "Scientific publication",
        awards_item4_title: "Paper published on EarthArXiv",
        awards_item5_title: "Geospatial Information Workshop for Disaster Risk Management",
        awards_item5_date: "Argentina",
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
        apps_item5_title: "NGOs and protected areas",
        apps_item5_desc: "Continuous monitoring of reserves and priority ecosystems to act before fire reaches them.",
        apps_cta: "Request a pilot",
        // Contact
        contact_title: "Want to learn more?",
        contact_intro: "If you're interested in the system, exploring a collaboration, or simply have questions, write to us. We respond to every message.",
        // Footer
        footer_text: "© 2026 GeoAlertAR — Developed in Argentina",
        // ODS/SDG
        ods_label: "GeoAlertAR contributes to the UN Sustainable Development Goals",
        ods_disclaimer: 'GeoAlertAR independently adheres to these Sustainable Development Goals. This use is informational and does not imply endorsement or certification by the United Nations. <a href="maqueta-ods.html" target="_blank">See our contribution to the SDGs</a>'
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

// Techo de FWI usado en la demo (valor ilustrativo, no un límite real del índice)
const DEMO_MAX_FWI = 58;

// Distancia aproximada (en grados, corregida por latitud) entre un punto y el epicentro
function distFromEpicenter(lat, lng, epicenter) {
    const dLat = lat - epicenter.lat;
    const dLng = (lng - epicenter.lng) * LAT_CORRECTION;
    return Math.sqrt(dLat * dLat + dLng * dLng);
}

// Generar nivel de riesgo (FWI simulado) según la distancia a un epicentro,
// para que el patrón se vea como un foco de calor que se atenúa hacia los bordes,
// no como ruido aleatorio disperso.
function generateRiskData(lat, lng, index, epicenter, maxDist) {
    const dist = distFromEpicenter(lat, lng, epicenter);
    const ratio = Math.min(1, dist / maxDist); // 0 = epicentro, 1 = borde más lejano

    // Textura local para que no sea un degradado perfectamente liso
    const seed = Math.abs(Math.sin(lat * 1000 + lng * 500 + index)) * 100;
    const noise = (seed % 16) - 8;

    let fwi = DEMO_MAX_FWI * (1 - ratio) + noise;
    fwi = Math.max(1, Math.min(DEMO_MAX_FWI + 6, fwi));

    let nivel;
    if (fwi >= 46) nivel = "EXTREMO";
    else if (fwi >= 28) nivel = "MUY_ALTO";
    else if (fwi >= 15) nivel = "ALTO";
    else if (fwi >= 6) nivel = "MODERADO";
    else nivel = "BAJO";

    const tempBase = { EXTREMO: 30, MUY_ALTO: 26, ALTO: 22, MODERADO: 17, BAJO: 12 };
    const temp = tempBase[nivel] + (seed % 5);
    const viento = nivel === "EXTREMO" ? 28 + (seed % 12) :
                  nivel === "MUY_ALTO" ? 22 + (seed % 10) :
                  nivel === "ALTO" ? 16 + (seed % 8) :
                  nivel === "MODERADO" ? 10 + (seed % 6) : 4 + (seed % 4);
    const precip = nivel === "EXTREMO" ? seed % 5 :
                  nivel === "MUY_ALTO" ? 3 + (seed % 8) :
                  nivel === "ALTO" ? seed % 12 :
                  nivel === "MODERADO" ? 15 + (seed % 20) : 30 + (seed % 25);

    // Pendiente del terreno (simulada, no depende del FWI)
    const pendiente = 5 + (seed % 25);

    return {
        fwi: Math.round(fwi * 10) / 10,
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

    // Epicentro fijo (desplazado del centro geométrico para que no quede
    // perfectamente simétrico) usado como foco del que se atenúa el riesgo.
    const centerLat = (startLat + endLat) / 2;
    const centerLng = (startLng + endLng) / 2;
    const epicenter = {
        lat: centerLat + (startLat - centerLat) * 0.35,
        lng: centerLng + (startLng - centerLng) * 0.4
    };
    // Distancia máxima posible (a la esquina más lejana) para normalizar la atenuación
    const corners = [
        { lat: startLat, lng: startLng }, { lat: startLat, lng: endLng },
        { lat: endLat, lng: startLng }, { lat: endLat, lng: endLng }
    ];
    const maxDist = Math.max(...corners.map(c => distFromEpicenter(c.lat, c.lng, epicenter)));

    let index = 0;
    let row = 0;

    for (let lat = startLat; lat >= endLat; lat -= VERT_SPACING) {
        // Offset para filas impares (la mitad del espaciado horizontal)
        const offset = (row % 2) * (HORIZ_SPACING / 2);

        for (let lng = startLng + offset; lng <= endLng; lng += HORIZ_SPACING) {
            // Solo agregar si está dentro de la reserva
            if (isInsideReserva(lat, lng, multiPolygon)) {
                const riskData = generateRiskData(lat, lng, index, epicenter, maxDist);

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

    const introMap = { 'EXTREMO': t.explain_intro_extreme, 'MUY_ALTO': t.explain_intro_veryhigh, 'ALTO': t.explain_intro_high, 'MODERADO': t.explain_intro_moderate, 'BAJO': t.explain_intro_low };
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

function getColor(fwi) {
    if (fwi >= 46) return '#dc2626';
    if (fwi >= 28) return '#ea580c';
    if (fwi >= 15) return '#f97316';
    if (fwi >= 6) return '#eab308';
    return '#22c55e';
}

function getRiskClass(nivel) {
    return 'risk-' + nivel.toLowerCase();
}

// Estilo para hexágonos
function hexStyle(feature) {
    return {
        fillColor: getColor(feature.properties.fwi),
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

    // Ocultar badge después del primer click
    const badge = document.getElementById('map-badge');
    if (badge && !badge.classList.contains('fade-out')) {
        badge.classList.add('fade-out');
        // Eliminar del DOM después de la animación
        setTimeout(() => badge.remove(), 300);
    }

    const riskNameMap = { 'EXTREMO': translations[currentLang].risk_extreme, 'MUY_ALTO': translations[currentLang].risk_veryhigh, 'ALTO': translations[currentLang].risk_high, 'MODERADO': translations[currentLang].risk_moderate, 'BAJO': translations[currentLang].risk_low };
    document.getElementById('hex-risk').textContent = riskNameMap[props.nivel_riesgo] || props.nivel_riesgo;
    document.getElementById('hex-risk').className = 'hex-risk-badge ' + getRiskClass(props.nivel_riesgo);
    document.getElementById('hex-prob-value').textContent = props.fwi.toFixed(1);
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
// Acordeón "Ver todo lo que puede mostrar GeoAlertAR"
function toggleDemoAccordion() {
    const content = document.getElementById('demo-accordion-content');
    const toggle = document.getElementById('demo-accordion-toggle');
    content.classList.toggle('open');
    toggle.classList.toggle('open');
}

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
