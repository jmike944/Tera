/* Tera — datos reales (Fraccionamiento Hacienda El Milagro · HEM)
   Fuente: cotizaciones de construcción + brochure de ventas HEM Marzo 2026.
   Ported from design_handoff_website/ui_kits/website/models.js */

export type StatusTone = "available" | "progress" | "soon";

export type ModelStatus = { tone: StatusTone; label: string };

export type EntregaInmediata = { tipo: string; precio: string };
export type Construccion = { precioM2: string; total: string };

export type ProgramItem = readonly [icon: string, label: string];

export type Modelo = {
  slug: "volterra" | "topurban" | "skydeck";
  nombre: string;
  orden: number;
  m2: string;
  m2exact: string;
  status: ModelStatus;
  etiqueta: string;
  chip: string;
  render: string;
  galeria: string;
  /** Number of real construction photos available under
   *  /models/<slug>/photos/NN.jpg (01..photoCount, zero-padded). */
  photoCount: number;
  /** Number of construction video clips under
   *  /models/<slug>/videos/NN.mp4. 0 = no video tour. */
  videoCount: number;
  resumen: string;
  precioDesde: string;
  entregaInmediata: EntregaInmediata[] | null;
  construccion: Construccion | null;
  plantaAlta: ProgramItem[];
};

export type Common = {
  fraccionamiento: string;
  ciudad: string;
  niveles: number;
  recamaras: number;
  banos: string;
  altura: string;
  plantaBaja: ProgramItem[];
  quality: string[];
  equipamiento: string[];
  acabados: string[];
  notas: string;
};

export type ModeloFull = Modelo & Common;

export type Pilar = { icon: string; titulo: string; texto: string };

export type Coleccion = {
  nombre: string;
  lema: string;
  eyebrow: string;
  titulo: string;
  intro: string;
  parrafos: string[];
  pilares: Pilar[];
};

export type QualityBuild = {
  nombre: string;
  eyebrow: string;
  titulo: string;
  intro: string;
  etapas: number;
  pilares: Pilar[];
};

export type Desarrollo = {
  nombre: string;
  sigla: string;
  ciudad: string;
  estado: string;
  tagline: string;
  intro: string;
  direccion: string;
  tel: string;
  tel2: string;
  email: string;
  ubicacion: ProgramItem[];
  caracteristicas: ProgramItem[];
  servicios: string[];
  amenidades: ProgramItem[];
  lotes: { tipo: string; manzana: string; ids: string }[];
  galeria: {
    acceso: string;
    juegos: string;
    gym: string;
    ubicacion: string;
    masterplan: string;
  };
};

const _common: Common = {
  fraccionamiento: "Hacienda El Milagro",
  ciudad: "Saltillo, Coahuila",
  niveles: 2,
  recamaras: 3,
  banos: "2.5",
  altura: "3.05 m",
  plantaBaja: [
    ["car-front", "Cochera techada (2 autos)"],
    ["door-open", "Recibidor"],
    ["toilet", "Medio baño de visitas"],
    ["washing-machine", "Lavandería"],
    ["chef-hat", "Cocina tipo loft con alacena"],
    ["sofa", "Sala"],
    ["utensils", "Comedor"],
    ["package", "Bodega"],
    ["droplets", "Patio de servicio"],
    ["trees", "Jardín amplio"],
    ["settings", "Cuarto de máquinas"],
  ],
  quality: [
    "Proyecto ejecutivo + plano oficial",
    "Estudio de mecánica de suelos",
    "Cálculo estructural",
    "Servicios de gestoría",
    "SIROC (IMSS)",
    "Supervisión de obra 24/7",
    "Altura interior 3.05 m",
  ],
  equipamiento: [
    "Cisterna 5,000 L",
    "Bomba, boiler e hidroneumático",
    "Puerta principal de seguridad",
    "Puertas y vistas de herrería",
    "Preparación para paneles solares",
    'Ventanas de aluminio 3"',
  ],
  acabados: [
    "Piso porcelanato",
    "Placas de granito en lavamanos y ovalín",
    "Regadera y monomando alto en ovalín",
    "Sanitario ecológico",
    "Barandal de herrería en escalera",
    "Fachada en piedra Riviera Beige / Pizarra Negra",
  ],
  notas:
    "Precios del brochure de ventas HEM Marzo 2026. No incluyen gastos notariales ni de escrituración. Equipamiento adicional (cocina integral, canceles de baño y clósets) no incluido. Renders ilustrativos; sujeto a disponibilidad.",
};

export const modelos: Modelo[] = [
  {
    slug: "volterra",
    nombre: "Volterra",
    orden: 1,
    m2: "187",
    m2exact: "186.58",
    status: { tone: "available", label: "Entrega inmediata" },
    etiqueta: "Disponible y en construcción",
    chip: "2 opciones",
    render: "/models/volterra/render.png",
    galeria: "/models/volterra/gallery.png",
    photoCount: 30,
    videoCount: 0,
    resumen:
      "El modelo de acceso a Hacienda El Milagro: 187 m² en dos niveles con cochera techada para dos autos, cocina tipo loft y recámara principal con walking closet. Disponible en entrega inmediata o por construcción.",
    precioDesde: "$3,990,000",
    entregaInmediata: [
      { tipo: "Lote A · Equipada", precio: "$4,350,000" },
      { tipo: "Lote A · Sin equipar", precio: "$3,990,000" },
    ],
    construccion: { precioM2: "$14,622.00", total: "$2,728,172.76" },
    plantaAlta: [
      ["tv", "Estancia para TV / home office"],
      ["bed-double", "Recámara principal con walking closet, baño completo y peinador"],
      ["bed", "Dos recámaras secundarias"],
      ["bath", "Baño propio"],
      ["layers", "Zinc en exterior"],
      ["sprout", "Roof garden"],
    ],
  },
  {
    slug: "topurban",
    nombre: "Top Urban",
    orden: 2,
    m2: "217",
    m2exact: "216.88",
    status: { tone: "available", label: "Entrega inmediata" },
    etiqueta: "Listo para habitar",
    chip: "Listo",
    render: "/models/topurban/render.png",
    galeria: "/models/topurban/gallery.png",
    photoCount: 27,
    videoCount: 26,
    resumen:
      "Fachada contemporánea con volumen en piedra y 217 m². Distribución amplia de dos niveles, recámara principal con balcón y roof garden. Entrega inmediata.",
    precioDesde: "$4,290,000",
    entregaInmediata: [
      { tipo: "Lote AA", precio: "$4,290,000" },
      { tipo: "Lote AAA", precio: "$4,490,000" },
    ],
    construccion: null,
    plantaAlta: [
      ["tv", "Estancia para TV / home office"],
      [
        "bed-double",
        "Recámara principal con walking closet, baño completo, peinador y balcón",
      ],
      ["bed", "Dos recámaras secundarias"],
      ["bath", "Baño compartido"],
      ["layers", "Zinc en exterior"],
      ["sprout", "Roof garden"],
    ],
  },
  {
    slug: "skydeck",
    nombre: "Sky Deck",
    orden: 3,
    m2: "224",
    m2exact: "223.89",
    status: { tone: "progress", label: "En construcción" },
    etiqueta: "El más amplio",
    chip: "El más amplio",
    render: "/models/skydeck/render.png",
    galeria: "/models/skydeck/gallery.png",
    photoCount: 46,
    videoCount: 0,
    resumen:
      "El modelo insignia: 224 m² con fachada de líneas puras y acento en piedra, recámara principal con balcón y roof garden panorámico. Disponible por construcción.",
    precioDesde: "$3,130,497",
    entregaInmediata: null,
    construccion: { precioM2: "$13,982.30", total: "$3,130,497.14" },
    plantaAlta: [
      ["tv", "Estancia para TV / home office"],
      [
        "bed-double",
        "Recámara principal con walking closet, baño completo, peinador y balcón",
      ],
      ["bed", "Dos recámaras secundarias"],
      ["bath", "Baño compartido"],
      ["layers", "Zinc en exterior"],
      ["sprout", "Roof garden"],
    ],
  },
];

export const desarrollo: Desarrollo = {
  nombre: "Hacienda El Milagro",
  sigla: "HEM",
  ciudad: "Saltillo, Coahuila",
  estado: "Preventa · Marzo 2026",
  tagline: "Donde la excelencia es el estándar",
  intro:
    "Un desarrollo residencial diseñado para el éxito y el bienestar, con amenidades de primer nivel, seguridad y una ubicación estratégica al norponiente de Saltillo.",
  direccion:
    "Boulevard Dr. José Narro Robles 4811-2, Col. Los González, Saltillo, Coahuila",
  tel: "844 788 9459",
  tel2: "844 788 9460",
  email: "info@teradesarrollos.com",
  ubicacion: [
    [
      "route",
      "Salida rápida a Valdés Sánchez, Carr. Monterrey–Saltillo, Zona Industrial Ramos y Carretera 57",
    ],
    [
      "shopping-cart",
      "A menos de 15 minutos de los mejores supermercados de la ciudad",
    ],
    ["trending-up", "Área comercial en desarrollo y nogalera en segunda etapa"],
  ],
  caracteristicas: [
    ["shield", "Vigilancia"],
    ["scan-face", "Acceso controlado"],
    ["fence", "Barda perimetral"],
    ["trees", "Nogalera y áreas verdes"],
    ["map-pin", "Ubicación estratégica"],
    ["dumbbell", "Amenidades"],
  ],
  servicios: [
    "Agua de la ciudad",
    "Drenaje",
    "Electricidad subterránea",
    "Alumbrado público",
    "Internet",
    "Teléfono",
  ],
  amenidades: [
    ["party-popper", "Salón de eventos"],
    ["gamepad-2", "Salón de juegos"],
    ["laptop", "Coworking"],
    ["blocks", "Ludoteca"],
    ["dumbbell", "Gimnasio al aire libre"],
    ["footprints", "Pista de correr / ciclismo"],
    ["goal", "Cancha de fútbol"],
    ["circle-dot", "Canchas de pádel"],
    ["volleyball", "Básquetbol / pickleball"],
    ["skull", "Skate park"],
    ["baby", "Juegos infantiles"],
    ["dog", "Parque de perros"],
    ["flame", "Fire pit"],
    ["landmark", "Ágora"],
    ["utensils", "3 outdoor kitchen (asadores)"],
    ["square-parking", "Estacionamientos"],
  ],
  lotes: [
    { tipo: "AAA", manzana: "Manzana Ñ", ids: "Ñ34, Ñ35" },
    { tipo: "AA", manzana: "Manzana N", ids: "N33, N34, N35" },
    { tipo: "A", manzana: "Manzana L", ids: "L12–L15, L25–L29" },
  ],
  galeria: {
    acceso: "/desarrollos/hem/acceso.png",
    juegos: "/desarrollos/hem/juegos.png",
    gym: "/desarrollos/hem/gym.png",
    ubicacion: "/desarrollos/hem/ubicacion.png",
    masterplan: "/desarrollos/hem/masterplan.png",
  },
};

export const coleccion: Coleccion = {
  nombre: "Alta Gama",
  lema: "Tu casa. Tu hogar. Tu historia.",
  eyebrow: "COLECCIÓN ALTA GAMA",
  titulo: "Diseño contemporáneo en armonía con la naturaleza",
  intro:
    "Una colección de estilo contemporáneo, concebida con líneas limpias, espacios abiertos y una paleta de acabados neutros que privilegia la funcionalidad. Una atmósfera de serenidad, equilibrio y modernidad.",
  parrafos: [
    "Pensada para profesionales, parejas y familias jóvenes que valoran el alto diseño, la privacidad, la seguridad y la armonía en cada rincón, esta colección ofrece una estética atemporal con un enfoque vanguardista que mantiene una profunda conexión con la naturaleza.",
    "Cada modelo representa un refugio cálido y seguro: simboliza estabilidad, confort y un estilo de vida que armoniza lo contemporáneo con el buen gusto. Sus fachadas, de líneas sobrias y elegantes, transmiten accesibilidad con distinción.",
  ],
  pilares: [
    {
      icon: "pen-line",
      titulo: "Líneas limpias",
      texto:
        "Fachadas de líneas sobrias y elegantes que transmiten accesibilidad con distinción.",
    },
    {
      icon: "maximize",
      titulo: "Espacios abiertos",
      texto:
        "Una distribución que privilegia la funcionalidad, la seguridad y la fluidez espacial.",
    },
    {
      icon: "palette",
      titulo: "Paleta neutra",
      texto:
        "Acabados neutros que generan una atmósfera de serenidad, equilibrio y modernidad.",
    },
    {
      icon: "gem",
      titulo: "Marcas premium",
      texto:
        "Materiales modernos de marcas premium que enaltecen la elegancia de cada espacio.",
    },
    {
      icon: "leaf",
      titulo: "Armonía con la naturaleza",
      texto:
        "Integración armónica con el entorno y una profunda conexión con la naturaleza.",
    },
    {
      icon: "shield-check",
      titulo: "Privacidad y seguridad",
      texto:
        "Diseñada para quienes valoran el alto diseño, la privacidad y el bienestar familiar.",
    },
  ],
};

export const qualityBuild: QualityBuild = {
  nombre: "TERA Quality Build",
  eyebrow: "MODELO CONSTRUCTIVO DE CALIDAD MUNDIAL",
  titulo: "Construido bajo TERA Quality Build",
  intro:
    "Cada casa de la Colección Alta Gama se construye bajo el modelo de calidad mundial “TERA Quality Build”, desarrollado por nosotros para garantizar estándares internacionales en cada proyecto. Una obsesión por lo bien hecho que consolida un estándar constructivo superior en nuestra industria.",
  etapas: 12,
  pilares: [
    {
      icon: "list-checks",
      titulo: "12 etapas definidas",
      texto:
        "Un proceso riguroso de 12 etapas que garantiza estándares internacionales en cada proyecto.",
    },
    {
      icon: "ruler",
      titulo: "Precisión técnica",
      texto:
        "Procesos técnicos de alta precisión y una cultura de excelencia en cada detalle.",
    },
    {
      icon: "layers",
      titulo: "Materiales de alto desempeño",
      texto:
        "Uso de materiales de alto desempeño y mejores prácticas en cada etapa de la obra.",
    },
    {
      icon: "shield-check",
      titulo: "Seguridad y durabilidad",
      texto:
        "Una cultura que prioriza la seguridad, la durabilidad y el bienestar de todos los involucrados.",
    },
  ],
};

export function getModelo(slug: string): ModeloFull | null {
  const m = modelos.find((x) => x.slug === slug);
  return m ? { ..._common, ...m } : null;
}

export const common = _common;
