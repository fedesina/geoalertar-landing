// ===== INTERNACIONALIZACIÓN =====
// Idioma recordado (localStorage puede fallar en modo privado: nunca rompe la pagina)
function leerIdioma() { try { const v = localStorage.getItem('geoalert-lang'); return v === 'en' ? 'en' : 'es'; } catch (e) { return 'es'; } }
let currentLang = leerIdioma();
let lastSelectedHexProps = null;

const translations = {
    es: {
        // Header
        header_login: "Acceder",
        nav_demo: "Mapa de hoy",
        nav_equipo: "Quiénes somos",
        header_cta: "Contactar",
        // Hero
        hero_title: "Inteligencia Territorial de Riesgo de Incendios Forestales",
        hero_subtitle: "Medimos todos los días, en toda la Argentina, dónde se dan las condiciones para que un incendio empiece y se propague. Hoy y con pronóstico a 7 días, para prepararte antes de que aparezca el fuego.",
        hero_validated: "Sistema en operación diaria, contrastado todos los días con focos de calor satelitales (NASA FIRMS).",
        hero_cta_login: "Acceder al sistema",
        // Trust
        trust_label: "Fuentes de datos",
        // Data
        data_title: "Qué mide el sistema",
        data_subtitle: "El motor es el Índice Meteorológico de Peligro de Incendio (FWI) del sistema canadiense, el estándar que usan Canadá, el servicio europeo EFFIS y el Servicio Nacional de Manejo del Fuego. Lo calculamos todos los días, zona por zona, con memoria de la sequía acumulada y el combustible de cada lugar.",
        data_card1_label: "Hexágonos calculados cada día en todo el país",
        data_card2_label: "Actualización con satélites y modelo meteorológico",
        data_card3_value: "7 días",
        data_card3_label: "Pronóstico de condiciones",
        data_card4_title: "Fuentes integradas",
        data_card4_desc: "Datos satelitales, meteorológicos y territoriales en un solo sistema.",
        data_card5_title: "Malla adaptable",
        data_card5_desc: "Se ajusta a la escala y necesidad de cada territorio.",
        // Demo
        demo_title: "El mapa de hoy",
        demo_subtitle: "Condiciones de ignición de hoy en todo el país, calculadas por el sistema. Dato real, actualizado todos los días.",
        demo_sidebar_title: "Argentina hoy",
        map_badge_text: "Tocá un hexágono",
        demo_legend_title: "Niveles (índice FWI)",
        demo_legend_extreme: "Extremo (≥46)",
        demo_legend_veryhigh: "Muy alto (28-45)",
        demo_legend_high: "Alto (15-27)",
        demo_legend_moderate: "Moderado (6-14)",
        demo_legend_low: "Bajo (<6)",
        // Risk levels
        risk_extreme: "EXTREMO",
        risk_veryhigh: "MUY ALTO",
        risk_high: "ALTO",
        risk_moderate: "MODERADO",
        risk_low: "BAJO",
        // Tech
        tech_title: "Física estándar, adaptada a cada territorio",
        tech_intro: "Usamos el método que el mundo ya validó y lo alimentamos con datos de cada lugar de la Argentina.",
        tech_box_title: "Un método auditable, sin caja negra",
        tech_box_p1: "El FWI es un modelo físico publicado: cada nivel se explica con la lluvia, la humedad, el viento y la temperatura que lo produjeron. No depende de un modelo entrenado imposible de auditar.",
        tech_box_p2: "<strong>Ventaja operativa:</strong> el mismo índice que ya conocen los equipos de manejo del fuego, calculado a la escala de cada territorio, todos los días.",
        tech_point1_title: "Combustible de cada zona",
        tech_point1_desc: "Cruzamos el índice con el tipo de vegetación de cada hexágono —cobertura satelital y una clasificación de combustibles adaptada a la Argentina— para distinguir dónde realmente hay con qué arder.",
        tech_point2_title: "Memoria de la sequía",
        tech_point2_desc: "El sistema recuerda la lluvia y el secado de los días anteriores: un día de calor no pesa igual después de dos meses sin lluvia.",
        tech_point3_title: "Contraste diario",
        tech_point3_desc: "Todos los días el mapa se compara con los focos de calor detectados por satélites de la NASA (FIRMS).",
        // Crisis
        crisis_title: "El problema no es el clima, es la imprevisibilidad",
        crisis_intro: "Gran parte del territorio argentino tiene vegetación seca lista para arder. Saber que está seco no alcanza: lo que importa es dónde y cuándo las condiciones hacen que una chispa se convierta en incendio.",
        crisis_li1: "<strong>Factor humano:</strong> El 95% de los incendios se originan por actividad humana (intencional o negligencia), según el Servicio Nacional de Manejo del Fuego (SNMF) — una fuente de ignición que, en la práctica, es imposible de anticipar. Por eso lo único que sí se puede anticipar es <em>dónde</em> esa chispa inevitable encontraría condiciones para volverse catástrofe.",
        crisis_li2: "<strong>Ventana de anticipación:</strong> Temperatura, humedad, viento y lluvia se pronostican con días de anticipación. El problema es saber <em>dónde</em> mirar.",
        crisis_li3: "<strong>Escala nacional:</strong> Argentina no tiene un ecosistema homogéneo. Lo que funciona en Corrientes no funciona en Chubut.",
        crisis_li4: "<strong>Pérdida sostenida:</strong> En Argentina se pierden en promedio más de 300.000 hectáreas de bosque nativo por año a causa de incendios, según el Ministerio de Ambiente y Desarrollo Sostenible (MAyDS), 1998–2018.",
        crisis_source: "Fuentes: Servicio Nacional de Manejo del Fuego (SNMF) y MAyDS.",
        crisis_stat1_label: "Hectáreas quemadas en Argentina (2020-2024)",
        crisis_stat2_label: "Hectáreas en Patagonia (temporada 2025-2026)",
        crisis_stat3_label: "Hectáreas en Corrientes (2022)",
        crisis_stat4_label: "Causados por actividad humana",
        // Comparison
        comparison_title: "El cambio de paradigma",
        comparison_intro: "La gestión tradicional de incendios opera en modo reactivo. GeoAlertAR transforma la operación hacia un modelo de anticipación y prevención.",
        comparison_before_title: "Desafío Actual (Gestión Reactiva)",
        comparison_before_li1: "<strong>Respuesta post-incidente</strong><span>Se actúa cuando el satélite detecta el foco térmico (fuego ya iniciado).</span>",
        comparison_before_li2: "<strong>Pérdida de Capital Natural</strong><span>Daños inevitables en hectáreas productivas y nativas.</span>",
        comparison_before_li3: "<strong>Asignación Generalista</strong><span>Patrullaje rutinario cubriendo grandes zonas sin foco definido.</span>",
        comparison_before_li4: "<strong>Intuición Operativa</strong><span>Decisiones basadas en experiencia, pero sin datos en tiempo real.</span>",
        comparison_after_title: "Ventaja GeoAlertAR (Gestión Preventiva)",
        comparison_after_li1: "<strong>Anticipación</strong><span>Condiciones de riesgo pronosticadas hasta 7 días antes.</span>",
        comparison_after_li2: "<strong>Prioridad de activos</strong><span>Saber qué zonas de alto valor económico o ecológico entran en riesgo alto.</span>",
        comparison_after_li3: "<strong>Despliegue focalizado</strong><span>Recursos y patrullajes donde las condiciones son más críticas, zona por zona.</span>",
        comparison_after_li4: "<strong>Inteligencia territorial</strong><span>Tablero con humedad del combustible, sequía acumulada y evolución de 30 días.</span>",
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
        apps_item4_desc: "Anticipación táctica para pre-posicionar recursos donde las condiciones son más críticas.",
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
        ods_disclaimer: "GeoAlertAR adhiere de forma independiente a estos Objetivos de Desarrollo Sostenible. Este uso es informativo y no implica aval ni certificación de las Naciones Unidas. <a href=\"maqueta-ods.html\" target=\"_blank\">Ver nuestra contribución a los ODS</a>",
        // Landing v2 (13-oct-2026): mapa de hoy, "Como se calcula", "Del pronostico a la accion"
        live_pill_pre: "Dato de hoy",
        live_pill_post: "zonas en riesgo alto o más",
        data_card2_value: "Diario",
        metodo_title: "Cómo se calcula, todos los días",
        metodo_subtitle: "Un método físico, publicado y auditable: cada nivel se puede explicar con los datos que lo produjeron.",
        metodo_s1_t: "Lluvia",
        metodo_s1_d: "Lo que llovió en las últimas 24 h, medido por satélite.",
        metodo_s2_t: "Tiempo del mediodía",
        metodo_s2_d: "Temperatura, humedad y viento a la hora de más peligro.",
        metodo_s3_t: "Memoria de la sequía",
        metodo_s3_d: "Cuánto se secó el combustible fino, el mediano y el profundo, día tras día.",
        metodo_s4_t: "Índice FWI",
        metodo_s4_d: "El índice canadiense (Van Wagner, 1987), estándar internacional.",
        metodo_s5_t: "Nivel por zona",
        metodo_s5_d: "Un nivel por hexágono, cruzado con el combustible de cada lugar.",
        live_label: "Dato del",
        hex_locked_text: "El detalle de cada zona —índice FWI, humedad del combustible, viento, sequía acumulada y pronóstico a 7 días— está en el acceso profesional.",
        hex_locked_cta: "Pedir acceso",
        src_gfs: "Temperatura, humedad y viento",
        src_gsmap: "Lluvia por satélite",
        src_firms: "Focos de calor",
        src_esa: "Vegetación y combustible",
        src_srtm: "Relieve y pendiente",
        src_ign: "Límites y cartografía",
        accion_title: "Del pronóstico a la acción",
        accion_intro: "Así se usa en una semana de temporada. Ejemplo ilustrativo de un cuartel de bomberos.",
        accion_d1_when: "Lunes",
        accion_d1_lvl: "Pronóstico: muy alto el jueves",
        accion_d1_txt: "El mapa a 7 días marca que el jueves la zona del cuartel pasa a riesgo muy alto: viento fuerte después de tres semanas sin lluvia.",
        accion_d2_when: "Martes y miércoles",
        accion_d2_lvl: "Preparación",
        accion_d2_txt: "Se refuerza la guardia para el jueves, se revisan equipos y se avisa a los vecinos que no hagan quemas.",
        accion_d3_when: "Jueves",
        accion_d3_lvl: "Día crítico",
        accion_d3_txt: "Si aparece un foco, la dotación ya está lista y sabe qué zonas tienen el combustible más seco.",
        live_pill_pre_old: "Dato del",
        mapa_error: "No pudimos cargar el mapa de hoy. Probá de nuevo en unos minutos.",
        risk_nodata: "SIN DATOS",
    },
    en: {
        // Header
        header_login: "Login",
        nav_demo: "Today's map",
        nav_equipo: "About us",
        header_cta: "Contact",
        // Hero
        hero_title: "Territorial Intelligence for Wildfire Risk",
        hero_subtitle: "Every day, across all of Argentina, we measure where conditions allow a fire to start and spread. Today and with a 7-day forecast, so you can prepare before fire appears.",
        hero_validated: "Running every day, checked daily against satellite hotspots (NASA FIRMS).",
        hero_cta_login: "Access system",
        // Trust
        trust_label: "Data sources",
        // Data
        data_title: "What the system measures",
        data_subtitle: "The engine is the Canadian Fire Weather Index (FWI), the standard used by Canada, the European EFFIS service and Argentina's National Fire Management Service. We compute it every day, zone by zone, with memory of accumulated drought and the fuel in each place.",
        data_card1_label: "Hexagons computed daily across the country",
        data_card2_label: "Updated with satellites and a weather model",
        data_card3_value: "7 days",
        data_card3_label: "Conditions forecast",
        data_card4_title: "Integrated sources",
        data_card4_desc: "Satellite, weather and territorial data in a single system.",
        data_card5_title: "Adaptive grid",
        data_card5_desc: "Adapts to the scale and needs of each territory.",
        // Demo
        demo_title: "Today's map",
        demo_subtitle: "Today's ignition conditions across the country, computed by the system. Real data, updated every day.",
        demo_sidebar_title: "Argentina today",
        map_badge_text: "Tap a hexagon",
        demo_legend_title: "Levels (FWI index)",
        demo_legend_extreme: "Extreme (≥46)",
        demo_legend_veryhigh: "Very high (28-45)",
        demo_legend_high: "High (15-27)",
        demo_legend_moderate: "Moderate (6-14)",
        demo_legend_low: "Low (<6)",
        // Risk levels
        risk_extreme: "EXTREME",
        risk_veryhigh: "VERY HIGH",
        risk_high: "HIGH",
        risk_moderate: "MODERATE",
        risk_low: "LOW",
        // Tech
        tech_title: "Standard physics, adapted to each territory",
        tech_intro: "We use the method the world has already validated and feed it with data from each place in Argentina.",
        tech_box_title: "An auditable method, no black box",
        tech_box_p1: "FWI is a published physical model: every level is explained by the rain, humidity, wind and temperature that produced it. It doesn't depend on a trained model that can't be audited.",
        tech_box_p2: "<strong>Operational advantage:</strong> the same index fire management teams already know, computed at the scale of each territory, every day.",
        tech_point1_title: "Fuel in each zone",
        tech_point1_desc: "We combine the index with the vegetation type of each hexagon —satellite land cover and a fuel classification adapted to Argentina— to tell where there is really something to burn.",
        tech_point2_title: "Drought memory",
        tech_point2_desc: "The system remembers previous days' rain and drying: a hot day weighs differently after two months without rain.",
        tech_point3_title: "Daily check",
        tech_point3_desc: "Every day the map is compared with hotspots detected by NASA satellites (FIRMS).",
        // Crisis
        crisis_title: "The problem isn't the climate, it's the unpredictability",
        crisis_intro: "Much of Argentina has dry vegetation ready to burn. Knowing it's dry isn't enough: what matters is where and when conditions turn a spark into a wildfire.",
        crisis_li1: "<strong>Human factor:</strong> 95% of fires originate from human activity (intentional or negligence), according to Argentina's National Fire Management Service (SNMF) — an ignition source that is, in practice, impossible to anticipate. That's why the only thing that can be anticipated is <em>where</em> that inevitable spark would find conditions to become a catastrophe.",
        crisis_li2: "<strong>Anticipation window:</strong> Temperature, humidity, wind and rain are forecast days ahead. The problem is knowing <em>where</em> to look.",
        crisis_li3: "<strong>National scale:</strong> Argentina doesn't have a homogeneous ecosystem. What works in Corrientes doesn't work in Chubut.",
        crisis_li4: "<strong>Sustained loss:</strong> Argentina loses over 300,000 hectares of native forest per year to fire on average, according to the National Ministry of Environment (MAyDS), 1998–2018.",
        crisis_source: "Sources: National Fire Management Service (SNMF) and MAyDS.",
        crisis_stat1_label: "Hectares burned in Argentina (2020-2024)",
        crisis_stat2_label: "Hectares in Patagonia (2025-2026 season)",
        crisis_stat3_label: "Hectares in Corrientes (2022)",
        crisis_stat4_label: "Caused by human activity",
        // Comparison
        comparison_title: "The paradigm shift",
        comparison_intro: "Traditional fire management operates in reactive mode. GeoAlertAR shifts operations toward a model of anticipation and prevention.",
        comparison_before_title: "Current Challenge (Reactive Management)",
        comparison_before_li1: "<strong>Post-incident response</strong><span>Action taken when the satellite detects the thermal hotspot (fire already started).</span>",
        comparison_before_li2: "<strong>Natural Capital Loss</strong><span>Inevitable damage to productive and native hectares.</span>",
        comparison_before_li3: "<strong>Generalist Allocation</strong><span>Routine patrolling covering large zones without defined focus.</span>",
        comparison_before_li4: "<strong>Operational Intuition</strong><span>Decisions based on experience, but without real-time data.</span>",
        comparison_after_title: "GeoAlertAR Advantage (Preventive Management)",
        comparison_after_li1: "<strong>Anticipation</strong><span>Risk conditions forecast up to 7 days ahead.</span>",
        comparison_after_li2: "<strong>Asset priority</strong><span>Know which high-value economic or ecological zones enter high risk.</span>",
        comparison_after_li3: "<strong>Focused deployment</strong><span>Resources and patrols where conditions are most critical, zone by zone.</span>",
        comparison_after_li4: "<strong>Territorial intelligence</strong><span>Dashboard with fuel moisture, accumulated drought and 30-day trend.</span>",
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
        apps_item4_desc: "Tactical anticipation to pre-position resources where conditions are most critical.",
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
        ods_disclaimer: "GeoAlertAR independently adheres to these Sustainable Development Goals. This use is informational and does not imply endorsement or certification by the United Nations. <a href=\"maqueta-ods.html\" target=\"_blank\">See our contribution to the SDGs</a>",
        // Landing v2 (13-oct-2026): mapa de hoy, "Como se calcula", "Del pronostico a la accion"
        live_pill_pre: "Today's data",
        live_pill_post: "zones at high risk or above",
        data_card2_value: "Daily",
        metodo_title: "How it's computed, every day",
        metodo_subtitle: "A physical, published and auditable method: every level can be explained by the data that produced it.",
        metodo_s1_t: "Rain",
        metodo_s1_d: "Rainfall in the last 24 h, measured by satellite.",
        metodo_s2_t: "Midday weather",
        metodo_s2_d: "Temperature, humidity and wind at the most dangerous hour.",
        metodo_s3_t: "Drought memory",
        metodo_s3_d: "How much fine, medium and deep fuels have dried, day after day.",
        metodo_s4_t: "FWI index",
        metodo_s4_d: "The Canadian index (Van Wagner, 1987), an international standard.",
        metodo_s5_t: "Level per zone",
        metodo_s5_d: "One level per hexagon, combined with the local fuel.",
        live_label: "Data for",
        hex_locked_text: "Zone details —FWI index, fuel moisture, wind, accumulated drought and 7-day forecast— are available with professional access.",
        hex_locked_cta: "Request access",
        src_gfs: "Temperature, humidity and wind",
        src_gsmap: "Satellite rainfall",
        src_firms: "Hotspots",
        src_esa: "Vegetation and fuel",
        src_srtm: "Terrain and slope",
        src_ign: "Boundaries and mapping",
        accion_title: "From forecast to action",
        accion_intro: "How it's used during a week of fire season. Illustrative example for a fire station.",
        accion_d1_when: "Monday",
        accion_d1_lvl: "Forecast: very high on Thursday",
        accion_d1_txt: "The 7-day map shows the station's area reaching very high risk on Thursday: strong wind after three weeks without rain.",
        accion_d2_when: "Tuesday and Wednesday",
        accion_d2_lvl: "Preparation",
        accion_d2_txt: "Thursday's shift is reinforced, equipment is checked and neighbors are asked not to burn.",
        accion_d3_when: "Thursday",
        accion_d3_lvl: "Critical day",
        accion_d3_txt: "If a fire starts, the crew is already prepared and knows which areas have the driest fuel.",
        live_pill_pre_old: "Data for",
        mapa_error: "We couldn't load today's map. Please try again in a few minutes.",
        risk_nodata: "NO DATA",
    }
};

// ===== MAPA DE HOY (dato real) =====
// Lee el GeoJSON publico (solo geometria + nivel) del Worker: /public/mapa.
// El Worker v1.13 da CORS a www.geoalertar.com.ar y geoalertar.com.ar.
// En Live Server (localhost) el Worker no responde a proposito: se usa una
// copia local del MISMO GeoJSON (data/mapa_publico_muestra.geojson), asi se
// prueba el mismo codigo que en produccion. Esa copia NO se publica.
const ES_LOCAL = location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(location.hostname);
const MAPA_URL = ES_LOCAL ? 'data/mapa_publico_muestra.geojson' : 'https://api.appgeoalertar.com.ar/public/mapa';
const NIVELES = ['BAJO', 'MODERADO', 'ALTO', 'MUY_ALTO', 'EXTREMO', 'SIN_DATOS'];

// Fecha de hoy en Argentina (AAAA-MM-DD), para no llamar "de hoy" a un dato viejo.
function hoyArgentina() {
    return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Argentina/Buenos_Aires' }).format(new Date());
}

// GeoJSON publico -> formato interno { fecha, niveles, hex: [[idxNivel, lon, lat, ...]] }.
// Un hexagono con nivel desconocido o sin geometria se descarta (nunca se inventa).
function desdeGeoJSON(gj) {
    if (!gj || !Array.isArray(gj.features) || !/^\d{4}-\d{2}-\d{2}$/.test(gj.fecha_origen_datos || '')) {
        throw new Error('Formato inesperado del mapa publico');
    }
    const hex = [];
    gj.features.forEach(f => {
        const idx = NIVELES.indexOf(f && f.properties && f.properties.nivel);
        const anillo = f && f.geometry && f.geometry.type === 'Polygon' && f.geometry.coordinates[0];
        if (idx < 0 || !Array.isArray(anillo) || anillo.length < 4) return;
        const fila = [idx];
        for (let i = 0; i < anillo.length - 1; i++) fila.push(anillo[i][0], anillo[i][1]); // sin el punto de cierre
        hex.push(fila);
    });
    if (!hex.length) throw new Error('El mapa publico vino vacio');
    return { fecha: gj.fecha_origen_datos, niveles: NIVELES, hex };
}

function mostrarErrorMapa() {
    const caja = document.getElementById('live-counts');
    if (caja) {
        caja.innerHTML = '<p class="live-error" data-i18n="mapa_error"></p>';
        caja.firstChild.textContent = translations[currentLang].mapa_error;
        caja.classList.add('on');
    }
    const fecha = document.getElementById('live-date');
    if (fecha && fecha.parentElement) fecha.parentElement.hidden = true;
    const pill = document.getElementById('live-pill');
    if (pill) pill.hidden = true;
}
const NIVEL_COLOR = { BAJO: '#22c55e', MODERADO: '#eab308', ALTO: '#f97316', MUY_ALTO: '#ea580c', EXTREMO: '#dc2626', SIN_DATOS: '#64748b' };
const NIVEL_KEY = { BAJO: 'risk_low', MODERADO: 'risk_moderate', ALTO: 'risk_high', MUY_ALTO: 'risk_veryhigh', EXTREMO: 'risk_extreme', SIN_DATOS: 'risk_nodata' };
const REDUCIR_MOVIMIENTO = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const map = L.map('map', { zoomControl: true, scrollWheelZoom: false, preferCanvas: true, minZoom: 3, maxZoom: 9, zoomSnap: 0.25 });
const ARGENTINA = [[-55.2, -73.6], [-21.8, -53.6]];
map.fitBounds(ARGENTINA);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Esri'
}).addTo(map);

const hexRenderer = L.canvas({ padding: 0.5 });
let mapaDatos = null;
let conteos = {};
let mapaDibujado = false;
let hexSeleccionado = null;

function fmtNum(n) { return n.toLocaleString(currentLang === 'en' ? 'en-US' : 'es-AR'); }
function fmtFecha(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'es-AR', { day: 'numeric', month: 'long' });
}

// Cuenta animada (respeta "reducir movimiento")
function contar(el, hasta, ms = 1200, sufijo = '') {
    if (REDUCIR_MOVIMIENTO) { el.textContent = fmtNum(hasta) + sufijo; return; }
    const t0 = performance.now();
    (function paso(t) {
        const p = Math.min(1, (t - t0) / ms);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmtNum(Math.round(hasta * e)) + sufijo;
        if (p < 1) requestAnimationFrame(paso);
    })(t0);
}

function pintarConteos(animar) {
    const t = translations[currentLang];
    const caja = document.getElementById('live-counts');
    const orden = ['EXTREMO', 'MUY_ALTO', 'ALTO', 'MODERADO', 'BAJO'];
    const total = orden.reduce((a, k) => a + (conteos[k] || 0), 0) || 1;
    caja.innerHTML = orden.map(k => `
        <div class="live-row">
            <span class="live-row-name"><i style="background:${NIVEL_COLOR[k]}"></i>${t[NIVEL_KEY[k]]}</span>
            <span class="live-row-bar"><span style="--w:${(100 * (conteos[k] || 0) / total).toFixed(1)}%;background:${NIVEL_COLOR[k]}"></span></span>
            <b class="live-row-n" data-n="${conteos[k] || 0}">${animar ? '0' : fmtNum(conteos[k] || 0)}</b>
        </div>`).join('');
    if (animar) caja.querySelectorAll('.live-row-n').forEach(el => contar(el, +el.dataset.n));
    requestAnimationFrame(() => caja.classList.add('on'));
}

function pintarFechas() {
    if (!mapaDatos) return;
    document.getElementById('live-date').textContent = fmtFecha(mapaDatos.fecha);
    document.getElementById('live-pill-date').textContent = fmtFecha(mapaDatos.fecha);
    // "Dato de hoy" solo si el dato es de hoy; si no, "Dato del <fecha>".
    const pre = document.querySelector('#live-pill [data-i18n^="live_pill_pre"]');
    if (pre) {
        const clave = mapaDatos.fecha === hoyArgentina() ? 'live_pill_pre' : 'live_pill_pre_old';
        pre.setAttribute('data-i18n', clave);
        pre.textContent = translations[currentLang][clave];
    }
}

function showHexInfo(nivel) {
    lastSelectedHexProps = nivel;
    const t = translations[currentLang];
    const badge = document.getElementById('map-badge');
    if (badge && !badge.classList.contains('fade-out')) { badge.classList.add('fade-out'); setTimeout(() => badge.remove(), 300); }
    document.getElementById('hex-info').classList.add('active');
    const el = document.getElementById('hex-risk');
    el.textContent = t[NIVEL_KEY[nivel]] || nivel;
    el.className = 'hex-risk-badge risk-' + nivel.toLowerCase();
}

// Dibuja los hexagonos de norte a sur en tandas: el pais "aparece" en ~1,5 s.
function dibujarMapa() {
    if (mapaDibujado || !mapaDatos) return;
    mapaDibujado = true;
    const hexes = mapaDatos.hex.slice().sort((a, b) => b[2] - a[2]);
    const capa = L.layerGroup().addTo(map);
    const crear = h => {
        const nivel = mapaDatos.niveles[h[0]];
        const pts = []; for (let i = 1; i < h.length; i += 2) pts.push([h[i + 1], h[i]]);
        const p = L.polygon(pts, { renderer: hexRenderer, stroke: false, fillColor: NIVEL_COLOR[nivel], fillOpacity: 0.72 });
        p.on('click', () => {
            if (hexSeleccionado) hexSeleccionado.setStyle({ stroke: false });
            p.setStyle({ stroke: true, color: '#ffffff', weight: 2 });
            hexSeleccionado = p;
            showHexInfo(nivel);
        });
        capa.addLayer(p);
    };
    if (REDUCIR_MOVIMIENTO) { hexes.forEach(crear); return; }
    const TANDAS = 45; const porTanda = Math.ceil(hexes.length / TANDAS); let i = 0;
    (function tanda() {
        hexes.slice(i, i + porTanda).forEach(crear); i += porTanda;
        if (i < hexes.length) requestAnimationFrame(tanda);
    })();
}

fetch(MAPA_URL)
    .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(gj => {
        const datos = desdeGeoJSON(gj);
        mapaDatos = datos;
        conteos = {};
        datos.hex.forEach(h => { const n = datos.niveles[h[0]]; conteos[n] = (conteos[n] || 0) + 1; });
        pintarFechas();
        // Pastilla del hero: zonas en ALTO o mas
        const altoMas = (conteos.ALTO || 0) + (conteos.MUY_ALTO || 0) + (conteos.EXTREMO || 0);
        const pill = document.getElementById('live-pill');
        pill.hidden = false;
        contar(document.getElementById('live-pill-n'), altoMas, 1400);
        // Mapa y conteos: arrancan cuando la seccion entra en pantalla
        const io = new IntersectionObserver(es => {
            if (es.some(e => e.isIntersecting)) { io.disconnect(); map.invalidateSize(); map.fitBounds(ARGENTINA); dibujarMapa(); pintarConteos(true); }
        }, { threshold: 0.25 });
        io.observe(document.getElementById('map'));
    })
    .catch(err => { console.error('No se pudo cargar el mapa de hoy:', err); mostrarErrorMapa(); });

// ===== APARICION AL HACER SCROLL (metodo + tarjetas) =====
(function () {
    const items = document.querySelectorAll('.metodo-step, .data-card');
    if (REDUCIR_MOVIMIENTO || !('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('visto')); return; }
    document.documentElement.classList.add('anim');
    const io = new IntersectionObserver(es => es.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('visto'); io.unobserve(e.target);
        const n = e.target.querySelector('[data-count]');
        if (n) contar(n, +n.dataset.count, 1200, n.dataset.suffix || '');
    }), { threshold: 0.3 });
    items.forEach((el, k) => { el.style.setProperty('--d', (k % 5) * 110 + 'ms'); io.observe(el); });
    const linea = document.querySelector('.metodo-steps');
    if (linea) new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { linea.classList.add('visto'); o.disconnect(); } }, { threshold: 0.3 }).observe(linea);
})();

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
    try { localStorage.setItem('geoalert-lang', lang); } catch (e) { /* sin almacenamiento: no pasa nada */ }
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
    if (typeof pintarFechas === 'function') pintarFechas();
    if (typeof mapaDibujado !== 'undefined' && mapaDibujado) pintarConteos(false);
}

// Language toggle event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

// Initialize language
setLanguage(currentLang);
