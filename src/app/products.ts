export type ProductDetail = {
  slug: string;
  name: string;
  category: string;
  price: string;
  description: string;
  material: string;
  dimensions: string;
  care: string;
  images: string[];
  related: string[];
};

export const productDetails: Record<string, ProductDetail> = {
  "cepillo-bano-cuadrado-ceramica": {
    slug: "cepillo-bano-cuadrado-ceramica",
    name: "Cepillo De Ba\u00f1o Cuadrado Cer\u00e1mica",
    category: "Ba\u00f1o",
    price: "$25.817",
    description:
      "Una pieza funcional de presencia silenciosa, pensada para mantener el ba\u00f1o ordenado sin romper la calma visual del espacio.",
    material: "Ceramica negra mate y fibra sintetica",
    dimensions: "10 x 10 x 38 cm",
    care: "Limpiar con pa\u00f1o humedo. Evitar abrasivos y golpes directos.",
    images: [
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "vaso-stone-black",
      "dispenser-noir",
      "bandeja-ritual-black"
    ]
  },
  "set-tenedores-linea-bambu": {
    slug: "set-tenedores-linea-bambu",
    name: "Set De 6 Tenedores Linea Bambu",
    category: "Cocina",
    price: "$16.952",
    description:
      "Cubiertos negros de linea fina para mesas minimalistas, con una silueta sobria y terminacion contemporanea.",
    material: "Acero inoxidable negro",
    dimensions: "Set x 6 unidades",
    care: "Lavar a mano para preservar la terminacion. Secar inmediatamente.",
    images: [
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "set-cubiertos-16-piezas",
      "set-cucharas-linea-bambu",
      "set-cuchillos-linea-bambu"
    ]
  },
  "set-taza-plato-cafe-organica": {
    slug: "set-taza-plato-cafe-organica",
    name: "Set Taza Y Plato Caf\u00e9 Org\u00e1nica",
    category: "Cocina",
    price: "$13.251",
    description:
      "Un set de cafe con textura organica y presencia oscura, ideal para rituales simples y mesas sobrias.",
    material: "Ceramica negra",
    dimensions: "Taza 120 ml + plato",
    care: "Apto uso diario. Evitar cambios bruscos de temperatura.",
    images: [
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "plato-playo-organica-plain",
      "fuente-ovalada-organica-plain-negro",
      "set-tenedores-linea-bambu"
    ]
  },
  "set-cubiertos-16-piezas": {
    slug: "set-cubiertos-16-piezas",
    name: "Set De Cubiertos De 16 Piezas",
    category: "Cocina",
    price: "$47.858",
    description:
      "Una base completa para una mesa negra, limpia y funcional. Pensado para uso cotidiano con presencia de objeto.",
    material: "Acero inoxidable con terminacion carbon",
    dimensions: "Set x 16 piezas",
    care: "Lavar con esponja suave. No usar productos abrasivos.",
    images: [
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "set-tenedores-linea-bambu",
      "set-cucharas-linea-bambu",
      "set-cuchillos-linea-bambu"
    ]
  },
  "set-cucharas-linea-bambu": {
    slug: "set-cucharas-linea-bambu",
    name: "Set De 6 Cucharas Linea Bambu",
    category: "Cocina",
    price: "$16.952",
    description:
      "Cucharas negras con perfil fino para acompa\u00f1ar vajilla oscura y mesas de baja saturacion visual.",
    material: "Acero inoxidable negro",
    dimensions: "Set x 6 unidades",
    care: "Lavar a mano y secar con pa\u00f1o suave.",
    images: [
      "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "set-tenedores-linea-bambu",
      "set-cuchillos-linea-bambu",
      "set-cubiertos-16-piezas"
    ]
  },
  "set-cuchillos-linea-bambu": {
    slug: "set-cuchillos-linea-bambu",
    name: "Set De 6 Cuchillos Linea Bambu",
    category: "Cocina",
    price: "$16.952",
    description:
      "Cuchillos de mesa con acabado oscuro y proporcion simple para completar una mesa monocromatica.",
    material: "Acero inoxidable negro",
    dimensions: "Set x 6 unidades",
    care: "No usar lavandina ni abrasivos. Secar despues del lavado.",
    images: [
      "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "set-tenedores-linea-bambu",
      "set-cucharas-linea-bambu",
      "set-cubiertos-16-piezas"
    ]
  },
  "plato-playo-organica-plain": {
    slug: "plato-playo-organica-plain",
    name: "Plato Playo Org\u00e1nica Plain",
    category: "Living & Comedor",
    price: "$24.227",
    description:
      "Plato negro de borde organico para mesas contemporaneas, con una presencia simple y tactil.",
    material: "Ceramica negra",
    dimensions: "Diametro 27 cm",
    care: "Lavar con agua tibia y jabon neutro. Secar antes de guardar.",
    images: [
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "set-taza-plato-cafe-organica",
      "fuente-ovalada-organica-plain-negro",
      "plato-playo-oval"
    ]
  },
  "plato-playo-oval": {
    slug: "plato-playo-oval",
    name: "Plato Playo Oval",
    category: "Living & Comedor",
    price: "$24.319",
    description:
      "Pieza ovalada de mesa con linea organica, pensada para composiciones oscuras y sobrias.",
    material: "Ceramica negra",
    dimensions: "31 x 22 cm",
    care: "Evitar golpes en bordes. Lavar con esponja suave.",
    images: [
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "plato-playo-organica-plain",
      "fuente-ovalada-organica-plain-negro",
      "bandeja-noir"
    ]
  },
  "fuente-ovalada-organica-plain-negro": {
    slug: "fuente-ovalada-organica-plain-negro",
    name: "Fuente Ovalada Org\u00e1nica Plain Negro",
    category: "Living & Comedor",
    price: "$31.401",
    description:
      "Fuente baja y amplia para centro de mesa, con terminacion negra y una forma que evita lo perfecto.",
    material: "Ceramica negra",
    dimensions: "32 x 20 cm",
    care: "Lavar a mano. No usar abrasivos sobre la superficie.",
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "plato-playo-organica-plain",
      "plato-playo-oval",
      "bandeja-noir"
    ]
  },
  "vaso-stone-black": {
    slug: "vaso-stone-black",
    name: "Vaso Stone Black",
    category: "Ba\u00f1o",
    price: "$24.000",
    description:
      "Vaso negro de textura mineral para acompa\u00f1ar accesorios de ba\u00f1o con una escala minima.",
    material: "Terminacion piedra",
    dimensions: "8 x 11 cm",
    care: "Limpiar con pa\u00f1o humedo y jabon neutro.",
    images: [
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "cepillo-bano-cuadrado-ceramica",
      "dispenser-noir",
      "bandeja-ritual-black"
    ]
  },
  "dispenser-noir": {
    slug: "dispenser-noir",
    name: "Dispenser Noir",
    category: "Ba\u00f1o",
    price: "$21.900",
    description:
      "Dispenser negro de volumen simple para ordenar la mesada sin sumar ruido visual.",
    material: "Ceramica mate",
    dimensions: "7 x 18 cm",
    care: "No sumergir. Limpiar exterior con pa\u00f1o suave.",
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "cepillo-bano-cuadrado-ceramica",
      "vaso-stone-black",
      "bandeja-ritual-black"
    ]
  },
  "bandeja-ritual-black": {
    slug: "bandeja-ritual-black",
    name: "Bandeja Ritual Black",
    category: "Ba\u00f1o",
    price: "$18.700",
    description:
      "Bandeja de apoyo para piezas de ba\u00f1o, perfumes o peque\u00f1os objetos de uso diario.",
    material: "Resina negra",
    dimensions: "24 x 12 cm",
    care: "Limpiar en seco o con pa\u00f1o apenas humedo.",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "cepillo-bano-cuadrado-ceramica",
      "vaso-stone-black",
      "dispenser-noir"
    ]
  },
  "manta-carbon": {
    slug: "manta-carbon",
    name: "Manta Carbon",
    category: "Dormitorio",
    price: "$76.000",
    description:
      "Textil oscuro de tacto suave para sumar profundidad y pausa al dormitorio.",
    material: "Algodon texturado",
    dimensions: "140 x 180 cm",
    care: "Lavar con agua fria. Secar a la sombra.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "bandeja-noche-noir",
      "contenedor-shadow",
      "vela-black-form"
    ]
  },
  "bandeja-noche-noir": {
    slug: "bandeja-noche-noir",
    name: "Bandeja De Noche Noir",
    category: "Dormitorio",
    price: "$31.401",
    description:
      "Pieza de apoyo para mesa de luz, pensada para reunir objetos peque\u00f1os con orden visual.",
    material: "Ceramica negra",
    dimensions: "28 x 14 cm",
    care: "Lavar a mano y secar con pa\u00f1o suave.",
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "manta-carbon",
      "contenedor-shadow",
      "vela-black-form"
    ]
  },
  "contenedor-shadow": {
    slug: "contenedor-shadow",
    name: "Contenedor Shadow",
    category: "Dormitorio",
    price: "$19.800",
    description:
      "Contenedor negro de linea simple para mantener superficies despejadas.",
    material: "Metal negro",
    dimensions: "16 x 12 cm",
    care: "Limpiar con pa\u00f1o seco. Evitar humedad prolongada.",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "manta-carbon",
      "bandeja-noche-noir",
      "vela-black-form"
    ]
  },
  "vela-black-form": {
    slug: "vela-black-form",
    name: "Vela Black Form",
    category: "Dormitorio",
    price: "$14.900",
    description:
      "Vela oscura para aportar contraste y una presencia baja en mesas de noche o estantes.",
    material: "Cera mineral",
    dimensions: "8 x 9 cm",
    care: "No dejar encendida sin supervision. Cortar pabilo antes de usar.",
    images: [
      "https://images.unsplash.com/photo-1602874801006-e26bb370d6ea?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "manta-carbon",
      "bandeja-noche-noir",
      "contenedor-shadow"
    ]
  },
  "bandeja-noir": {
    slug: "bandeja-noir",
    name: "Bandeja Noir",
    category: "Living & Comedor",
    price: "$42.000",
    description:
      "Bandeja negra de presencia sobria para mesa baja, comedor o composiciones de objetos.",
    material: "Terminacion mate",
    dimensions: "34 x 20 cm",
    care: "Limpiar con pa\u00f1o seco o apenas humedo.",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "fuente-ovalada-organica-plain-negro",
      "plato-playo-oval",
      "objeto-stone-black"
    ]
  },
  "objeto-stone-black": {
    slug: "objeto-stone-black",
    name: "Objeto Stone Black",
    category: "Living & Comedor",
    price: "$29.600",
    description:
      "Objeto decorativo de textura mineral para sumar peso visual sin brillo.",
    material: "Piedra texturada",
    dimensions: "18 x 12 cm",
    care: "Limpiar con pa\u00f1o seco. No mojar.",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "bandeja-noir",
      "centro-mesa-carbon",
      "fuente-ovalada-organica-plain-negro"
    ]
  },
  "centro-mesa-carbon": {
    slug: "centro-mesa-carbon",
    name: "Centro De Mesa Carbon",
    category: "Living & Comedor",
    price: "$38.900",
    description:
      "Centro de mesa negro de perfil bajo para ordenar la composicion visual del comedor.",
    material: "Metal negro",
    dimensions: "36 x 16 cm",
    care: "Evitar humedad. Limpiar con pa\u00f1o suave.",
    images: [
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"
    ],
    related: [
      "bandeja-noir",
      "objeto-stone-black",
      "fuente-ovalada-organica-plain-negro"
    ]
  }
};

export const allProducts = Object.values(productDetails);
