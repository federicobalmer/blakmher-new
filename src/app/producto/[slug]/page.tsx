import Link from "next/link";
import { notFound } from "next/navigation";
import { allProducts, productDetails } from "../../products";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = productDetails[params.slug];

  if (!product) {
    notFound();
  }

  const relatedProducts = product.related
    .map((slug) => productDetails[slug])
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-ink text-bone">
      <header className="border-b border-bone/10 bg-ink">
        <nav className="mx-auto flex max-w-[92rem] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <Link
            className="font-serif text-[2rem] font-semibold tracking-wide"
            href="/"
          >
            BLAKMHER
          </Link>
          <Link
            className="text-[0.66rem] uppercase tracking-[0.2em] text-porcelain/56 transition hover:text-bone"
            href="/cocina"
          >
            Volver
          </Link>
        </nav>
      </header>

      <section className="mx-auto grid max-w-[92rem] gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-20">
        <div>
          <div className="overflow-hidden border border-bone/10 bg-coal">
            <img
              alt={product.name}
              className="aspect-[4/5] h-full w-full object-cover grayscale"
              src={product.images[0]}
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            {product.images.slice(0, 3).map((image, index) => (
              <div
                className="aspect-[4/3] overflow-hidden border border-bone/10 bg-coal"
                key={image}
              >
                <img
                  alt={`${product.name} ${index + 1}`}
                  className="h-full w-full object-cover opacity-68 grayscale"
                  src={image}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-10 lg:self-start">
          <p className="mb-7 text-[0.66rem] uppercase tracking-[0.28em] text-smoke">
            {product.category}
          </p>
          <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[0.9] sm:text-7xl">
            {product.name}
          </h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-porcelain/66">
            {product.description}
          </p>
          <p className="mt-8 text-2xl text-bone">{product.price}</p>

          <div className="mt-10 flex flex-col gap-4 border-y border-bone/10 py-7 sm:flex-row sm:items-center">
            <div className="flex w-fit items-center border border-bone/14">
              <button
                className="h-12 w-12 text-lg text-porcelain/62"
                type="button"
              >
                -
              </button>
              <input
                aria-label="Cantidad"
                className="h-12 w-14 border-x border-bone/14 bg-transparent text-center text-sm text-bone outline-none"
                defaultValue="1"
                inputMode="numeric"
              />
              <button
                className="h-12 w-12 text-lg text-porcelain/62"
                type="button"
              >
                +
              </button>
            </div>
            <button
              className="h-12 border border-bone/24 px-8 text-[0.68rem] uppercase tracking-[0.2em] text-bone transition hover:border-bone"
              type="button"
            >
              Agregar
            </button>
          </div>

          <div className="mt-8 divide-y divide-bone/10 border-y border-bone/10">
            {[
              ["Material", product.material],
              ["Medidas", product.dimensions],
              ["Cuidado", product.care]
            ].map(([label, value]) => (
              <div className="grid gap-4 py-5 sm:grid-cols-[8rem_1fr]" key={label}>
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-smoke">
                  {label}
                </p>
                <p className="text-sm leading-7 text-porcelain/62">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mb-10 border-b border-bone/10 pb-7">
          <p className="text-[0.66rem] uppercase tracking-[0.28em] text-smoke">
            Relacionados
          </p>
          <h2 className="mt-4 font-serif text-5xl font-medium leading-none">
            Tambien en negro.
          </h2>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((related) => (
            <article className="group" key={related.slug}>
              <Link href={`/producto/${related.slug}`}>
                <div className="aspect-[4/5] overflow-hidden border border-bone/10 bg-graphite">
                  <img
                    alt={related.name}
                    className="h-full w-full object-cover grayscale transition duration-[1200ms] ease-out group-hover:scale-[1.035]"
                    src={related.images[0]}
                  />
                </div>
              </Link>
              <div className="mt-5 border-t border-bone/10 pt-4">
                <Link href={`/producto/${related.slug}`}>
                  <h3 className="font-serif text-[2rem] font-medium leading-none transition hover:text-porcelain">
                    {related.name}
                  </h3>
                </Link>
                <p className="mt-4 text-sm text-porcelain/58">
                  {related.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
