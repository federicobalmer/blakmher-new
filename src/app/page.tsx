const categories = [
  {
    name: "Living y Comedor",
    href: "/living-comedor",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85"
  },
  {
    name: "Cocina",
    href: "/cocina",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=85"
  },
  {
    name: "Ba\u00f1o",
    href: "/bano",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=85"
  },
  {
    name: "Dormitorio",
    href: "/dormitorio",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85"
  }
];

const newProducts = [
  {
    name: "Cepillo De Ba\u00f1o Cuadrado Cer\u00e1mica",
    price: "$25.817",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1100&q=85"
  },
  {
    name: "Set De 6 Tenedores Linea Bambu",
    price: "$16.952",
    image:
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1100&q=85"
  },
  {
    name: "Set Taza Y Plato Caf\u00e9 Org\u00e1nica",
    price: "$13.251",
    image:
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1100&q=85"
  },
  {
    name: "Set De Cubiertos De 16 Piezas",
    price: "$47.858",
    image:
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1100&q=85"
  }
];

const featuredProducts = [
  {
    name: "Set De 6 Cucharas Linea Bambu",
    price: "$16.952",
    image:
      "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&w=1100&q=85"
  },
  {
    name: "Plato Playo Org\u00e1nica Plain",
    price: "$24.227",
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1100&q=85"
  },
  {
    name: "Fuente Ovalada Org\u00e1nica Plain Negro",
    price: "$31.401",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1100&q=85"
  }
];

function ProductCard({
  product,
  large = false
}: {
  product: {
    name: string;
    price: string;
    image: string;
  };
  large?: boolean;
}) {
  return (
    <article className="group">
      <div
        className={`overflow-hidden bg-graphite ${
          large ? "aspect-[5/6]" : "aspect-[4/5]"
        }`}
      >
        <img
          alt={product.name}
          className="h-full w-full object-cover grayscale transition duration-[1200ms] ease-out group-hover:scale-[1.035]"
          src={product.image}
        />
      </div>
      <div className="mt-6 border-t border-bone/10 pt-5">
        <p className="mb-4 text-[0.62rem] uppercase tracking-[0.22em] text-smoke">
          Blakmher object
        </p>
        <h3 className="font-serif text-[2rem] font-medium leading-none text-bone">
          {product.name}
        </h3>
        <p className="mt-5 text-sm text-porcelain/58">{product.price}</p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-bone">
      <div className="border-b border-bone/10 bg-coal px-5 py-3 text-center text-[0.64rem] uppercase tracking-[0.22em] text-porcelain/56">
        Env\u00edo gratis en compras mayores a $120.000 / Env\u00edo a todo Argentina
      </div>

      <header className="sticky top-0 z-30 border-b border-bone/10 bg-ink/92 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[92rem] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <a className="font-serif text-[2rem] font-semibold tracking-wide" href="#">
            BLAKMHER
          </a>
          <div className="hidden items-center gap-10 text-[0.66rem] uppercase tracking-[0.2em] text-porcelain/56 md:flex">
            <a className="transition hover:text-bone" href="#productos">
              Nuevos
            </a>
            <a className="transition hover:text-bone" href="#categorias">
              Categorias
            </a>
            <a className="transition hover:text-bone" href="#destacados">
              Destacados
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-[92rem] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-28">
        <div className="flex flex-col justify-between gap-20 lg:py-12">
          <div>
            <p className="mb-10 text-[0.66rem] uppercase tracking-[0.28em] text-smoke">
              Elegancia y estilo en un solo tono
            </p>
            <h1 className="max-w-4xl font-serif text-[4.1rem] font-medium leading-[0.84] sm:text-8xl lg:text-[9rem]">
              Todo lo que necesita tu casa, en negro.
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-base leading-8 text-porcelain/68">
              Objetos negros, funcionales y minimalistas para cocina, ba\u00f1o,
              dormitorio, living y comedor.
            </p>
            <a
              className="mt-8 inline-flex border-b border-bone/34 pb-2 text-[0.66rem] uppercase tracking-[0.2em] text-bone transition duration-500 hover:border-bone"
              href="#productos"
            >
              Ver productos
            </a>
          </div>
        </div>

        <div className="relative min-h-[42rem] overflow-hidden border border-bone/10 bg-coal lg:min-h-[50rem]">
          <img
            alt="Interior Blakmher con objetos negros"
            className="absolute inset-0 h-full w-full object-cover opacity-58 grayscale"
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90"
          />
          <div className="absolute inset-0 bg-ink/24" />
        </div>
      </section>

      <section
        className="mx-auto max-w-[92rem] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
        id="productos"
      >
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-bone/10 pb-9 sm:flex-row sm:items-end">
          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.28em] text-smoke">
              Nuevos ingresos
            </p>
            <h2 className="mt-5 font-serif text-5xl font-medium leading-none sm:text-7xl">
              Reci\u00e9n agregados.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-porcelain/52">
            Una primera mirada a la coleccion.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {newProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section
        className="mx-auto max-w-[92rem] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
        id="categorias"
      >
        <div className="mb-16 flex items-end justify-between border-b border-bone/10 pb-9">
          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.28em] text-smoke">
              Divisiones
            </p>
            <h2 className="mt-5 font-serif text-5xl font-medium leading-none sm:text-7xl">
              Comprar por ambiente.
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              className="group relative min-h-[32rem] overflow-hidden border border-bone/10 bg-coal"
              href="#productos"
              key={category.name}
            >
              <img
                alt={category.name}
                className="absolute inset-0 h-full w-full object-cover opacity-42 grayscale transition duration-[1200ms] ease-out group-hover:scale-[1.035] group-hover:opacity-58"
                src={category.image}
              />
              <div className="absolute inset-0 bg-ink/34" />
              <div className="relative flex h-full min-h-[32rem] items-end p-7">
                <h3 className="font-serif text-4xl font-medium">
                  {category.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section
        className="mx-auto max-w-[92rem] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
        id="destacados"
      >
        <div className="mb-16 grid gap-6 border-b border-bone/10 pb-9 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.28em] text-smoke">
              Productos destacados
            </p>
            <h2 className="mt-5 font-serif text-5xl font-medium leading-none sm:text-7xl">
              Todo negro / todo funcional.
            </h2>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <ProductCard large product={featuredProducts[0]} />
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-1">
            {featuredProducts.slice(1).map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-bone/10 px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[92rem] flex-col gap-8 text-sm text-porcelain/58 md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-4xl text-bone">BLAKMHER</p>
          <div className="flex flex-wrap gap-7">
            <a className="transition hover:text-bone" href="#productos">
              Nuevos
            </a>
            <a className="transition hover:text-bone" href="#categorias">
              Categorias
            </a>
            <a className="transition hover:text-bone" href="#destacados">
              Destacados
            </a>
            <a className="transition hover:text-bone" href="#">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
