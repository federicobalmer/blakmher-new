const categories = [
  {
    name: "Cocina",
    description: "Piezas funcionales para mesadas, vajilla y rituales diarios.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Baño",
    description: "Accesorios sobrios para transformar lo cotidiano en ritual.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Dormitorio",
    description: "Texturas profundas, calma visual y objetos de pausa.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Living & Comedor",
    description: "Formas esculturales para espacios compartidos.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
  }
];

const featuredProducts = [
  {
    name: "Bandeja Noir",
    category: "Living & Comedor",
    price: "$42.000",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Set Cubiertos Carbon",
    category: "Cocina",
    price: "$58.000",
    image:
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Vaso Stone Black",
    category: "Baño",
    price: "$24.000",
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1000&q=80"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-bone">
      <header className="fixed left-0 right-0 top-0 z-30 border-b border-bone/10 bg-ink/72 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[90rem] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a className="font-serif text-3xl font-semibold tracking-wide" href="#">
            BLAKMHER
          </a>
          <div className="hidden items-center gap-9 text-[0.68rem] uppercase tracking-[0.18em] text-porcelain/68 md:flex">
            <a className="transition hover:text-bone" href="#categorias">
              Categorias
            </a>
            <a className="transition hover:text-bone" href="#productos">
              Productos
            </a>
            <a className="transition hover:text-bone" href="#editorial">
              Editorial
            </a>
          </div>
        </nav>
      </header>

      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img
          alt="Interior premium con decoracion negra"
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-58 grayscale"
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/62 to-ink/18" />

        <div className="relative mx-auto grid w-full max-w-[90rem] gap-12 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:pb-28">
          <div>
            <p className="mb-7 text-[0.68rem] uppercase tracking-editorial text-porcelain/70">
              Premium black home decor
            </p>
            <h1 className="max-w-5xl font-serif text-6xl font-medium leading-[0.86] text-bone sm:text-8xl lg:text-[9rem]">
              Objetos negros para habitar con presencia.
            </h1>
          </div>
          <div className="max-w-xl self-end lg:justify-self-end">
            <p className="text-base leading-8 text-porcelain/76">
              Blakmher reune piezas oscuras, precisas y tactiles para una casa
              mas serena. Una coleccion minima donde el negro funciona como
              arquitectura, contraste y pausa.
            </p>
            <a
              className="mt-9 inline-flex border border-bone/28 px-7 py-4 text-[0.68rem] uppercase tracking-editorial text-bone transition duration-500 hover:border-bone hover:bg-bone hover:text-ink"
              href="#productos"
            >
              Ver seleccion
            </a>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-[90rem] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
        id="categorias"
      >
        <div className="mb-16 grid gap-8 border-b border-bone/10 pb-9 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <p className="text-[0.68rem] uppercase tracking-editorial text-smoke">
              Categorias
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-5xl font-medium leading-none sm:text-7xl">
              La casa editada en negro.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-porcelain/68 lg:justify-self-end">
            Cuatro ambientes, una misma intencion: piezas limpias, oscuras y
            funcionales que elevan la rutina sin cargar el espacio.
          </p>
        </div>

        <div className="grid gap-px bg-bone/10 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <a
              className="group relative min-h-[34rem] overflow-hidden bg-coal"
              href="#productos"
              key={category.name}
            >
              <img
                alt={`Categoria ${category.name}`}
                className="absolute inset-0 h-full w-full object-cover opacity-42 grayscale transition duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:opacity-62"
                src={category.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/44 to-transparent" />
              <div className="relative flex h-full min-h-[34rem] flex-col justify-end p-7">
                <span className="mb-6 block h-px w-12 bg-bone/42" />
                <h3 className="font-serif text-4xl font-medium">
                  {category.name}
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-7 text-porcelain/70">
                  {category.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-bone text-ink" id="productos">
        <div className="mx-auto max-w-[90rem] px-5 py-28 sm:px-8 lg:px-12 lg:py-36">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-editorial text-graphite/54">
                Featured products
              </p>
              <h2 className="mt-4 font-serif text-5xl font-medium leading-none sm:text-7xl">
                Seleccion esencial.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-graphite/64 lg:justify-self-end">
              Placeholder products for the first version. The layout is ready
              to connect to a product catalog later, without adding backend or
              checkout flows now.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-16 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <article
                className={index === 1 ? "lg:mt-16" : ""}
                key={product.name}
              >
                <div className="aspect-[4/5] overflow-hidden bg-graphite">
                  <img
                    alt={product.name}
                    className="h-full w-full object-cover grayscale transition duration-[1200ms] ease-out hover:scale-[1.035]"
                    src={product.image}
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-6 border-t border-ink/12 pt-5">
                  <div>
                    <p className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-graphite/52">
                      {product.category}
                    </p>
                    <h3 className="font-serif text-4xl font-medium leading-none">
                      {product.name}
                    </h3>
                  </div>
                  <p className="pt-1 text-sm text-graphite/64">
                    {product.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden" id="editorial">
        <div className="mx-auto grid max-w-[90rem] gap-px bg-bone/10 px-5 py-28 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-36">
          <div className="relative min-h-[42rem] overflow-hidden bg-coal">
            <img
              alt="Detalle editorial de decoracion negra"
              className="absolute inset-0 h-full w-full object-cover opacity-62 grayscale"
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=80"
            />
            <div className="absolute inset-0 bg-ink/12" />
          </div>
          <div className="flex min-h-[42rem] items-center bg-coal px-7 py-14 sm:px-12 lg:px-16">
            <div className="max-w-2xl">
              <p className="text-[0.68rem] uppercase tracking-editorial text-smoke">
                Editorial
              </p>
              <h2 className="mt-5 font-serif text-6xl font-medium leading-none sm:text-7xl lg:text-8xl">
                Menos brillo. Mas textura. Mas intencion.
              </h2>
              <p className="mt-8 text-base leading-8 text-porcelain/70">
                El negro no achica los espacios: los enfoca. En Blakmher cada
                objeto se piensa como una pieza silenciosa, capaz de ordenar la
                mirada y darle peso a lo cotidiano.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-bone/10 px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-8 text-sm text-porcelain/62 md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-4xl text-bone">BLAKMHER</p>
          <div className="flex flex-wrap gap-7">
            <a className="transition hover:text-bone" href="#categorias">
              Categorias
            </a>
            <a className="transition hover:text-bone" href="#productos">
              Productos
            </a>
            <a className="transition hover:text-bone" href="#editorial">
              Editorial
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
