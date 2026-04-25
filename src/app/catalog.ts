export type ListingProduct = {
  slug: string;
  name: string;
  price: string;
  material: string;
  image: string;
};

export type CategoryListing = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  filters: string[];
  products: ListingProduct[];
};

export const categoryListings: Record<string, CategoryListing> = {
  cocina: {
    slug: "cocina",
    name: "Cocina",
    eyebrow: "Kitchen objects",
    description:
      "Vajilla, cubiertos y piezas de mesa en negro para una cocina mas silenciosa y precisa.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1800&q=88",
    filters: ["Todos", "Cubiertos", "Vajilla", "Ceramica", "Metal"],
    products: [
      {
        slug: "set-tenedores-linea-bambu",
        name: "Set De 6 Tenedores Linea Bambu",
        price: "$16.952",
        material: "Acero inoxidable negro",
        image:
          "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1100&q=85"
      },
      {
        slug: "set-cubiertos-16-piezas",
        name: "Set De Cubiertos De 16 Piezas",
        price: "$47.858",
        material: "Terminacion carbon",
        image:
          "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1100&q=85"
      },
      {
        slug: "set-taza-plato-cafe-organica",
        name: "Set Taza Y Plato Caf\u00e9 Org\u00e1nica",
        price: "$13.251",
        material: "Ceramica organica",
        image:
          "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1100&q=85"
      },
      {
        slug: "set-cucharas-linea-bambu",
        name: "Set De 6 Cucharas Linea Bambu",
        price: "$16.952",
        material: "Acero inoxidable negro",
        image:
          "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&w=1100&q=85"
      },
      {
        slug: "set-cuchillos-linea-bambu",
        name: "Set De 6 Cuchillos Linea Bambu",
        price: "$16.952",
        material: "Acero inoxidable negro",
        image:
          "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=1100&q=85"
      },
      {
        slug: "plato-playo-organica-plain",
        name: "Plato Playo Org\u00e1nica Plain",
        price: "$24.227",
        material: "Ceramica negra",
        image:
          "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1100&q=85"
      }
    ]
  },
  bano: {
    slug: "bano",
    name: "Ba\u00f1o",
    eyebrow: "Bath objects",
    description:
      "Accesorios oscuros para ordenar el ritual diario con formas simples y materiales sobrios.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1800&q=88",
    filters: ["Todos", "Ceramica", "Accesorios", "Organizadores", "Mate"],
    products: [
      {
        slug: "cepillo-bano-cuadrado-ceramica",
        name: "Cepillo De Ba\u00f1o Cuadrado Cer\u00e1mica",
        price: "$25.817",
        material: "Ceramica negra",
        image:
          "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1100&q=85"
      },
      {
        slug: "vaso-stone-black",
        name: "Vaso Stone Black",
        price: "$24.000",
        material: "Textura piedra",
        image:
          "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1100&q=85"
      },
      {
        slug: "dispenser-noir",
        name: "Dispenser Noir",
        price: "$21.900",
        material: "Ceramica mate",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1100&q=85"
      },
      {
        slug: "bandeja-ritual-black",
        name: "Bandeja Ritual Black",
        price: "$18.700",
        material: "Resina negra",
        image:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=85"
      }
    ]
  },
  dormitorio: {
    slug: "dormitorio",
    name: "Dormitorio",
    eyebrow: "Bedroom objects",
    description:
      "Texturas profundas y piezas de apoyo para una habitacion calma, oscura y minima.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=88",
    filters: ["Todos", "Textil", "Objetos", "Noche", "Organizacion"],
    products: [
      {
        slug: "manta-carbon",
        name: "Manta Carbon",
        price: "$76.000",
        material: "Algodon texturado",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85"
      },
      {
        slug: "bandeja-noche-noir",
        name: "Bandeja De Noche Noir",
        price: "$31.401",
        material: "Ceramica negra",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1100&q=85"
      },
      {
        slug: "contenedor-shadow",
        name: "Contenedor Shadow",
        price: "$19.800",
        material: "Metal negro",
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1100&q=85"
      },
      {
        slug: "vela-black-form",
        name: "Vela Black Form",
        price: "$14.900",
        material: "Cera mineral",
        image:
          "https://images.unsplash.com/photo-1602874801006-e26bb370d6ea?auto=format&fit=crop&w=1100&q=85"
      }
    ]
  },
  "living-comedor": {
    slug: "living-comedor",
    name: "Living & Comedor",
    eyebrow: "Living objects",
    description:
      "Piezas de mesa, fuentes y objetos decorativos para espacios compartidos en clave negra.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=88",
    filters: ["Todos", "Mesa", "Fuentes", "Decoracion", "Ceramica"],
    products: [
      {
        slug: "fuente-ovalada-organica-plain-negro",
        name: "Fuente Ovalada Org\u00e1nica Plain Negro",
        price: "$31.401",
        material: "Ceramica negra",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1100&q=85"
      },
      {
        slug: "plato-playo-oval",
        name: "Plato Playo Oval",
        price: "$24.319",
        material: "Ceramica organica",
        image:
          "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1100&q=85"
      },
      {
        slug: "bandeja-noir",
        name: "Bandeja Noir",
        price: "$42.000",
        material: "Terminacion mate",
        image:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=85"
      },
      {
        slug: "objeto-stone-black",
        name: "Objeto Stone Black",
        price: "$29.600",
        material: "Piedra texturada",
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1100&q=85"
      },
      {
        slug: "centro-mesa-carbon",
        name: "Centro De Mesa Carbon",
        price: "$38.900",
        material: "Metal negro",
        image:
          "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1100&q=85"
      }
    ]
  }
};

export const categoryNavigation = [
  { name: "Cocina", href: "/cocina" },
  { name: "Ba\u00f1o", href: "/bano" },
  { name: "Dormitorio", href: "/dormitorio" },
  { name: "Living & Comedor", href: "/living-comedor" }
];
