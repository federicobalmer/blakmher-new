import Link from "next/link";
import { categoryNavigation, type CategoryListing } from "../catalog";

type ListingPageProps = {
  category: CategoryListing;
};

export function ListingPage({ category }: ListingPageProps) {
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
          <div className="hidden items-center gap-8 text-[0.66rem] uppercase tracking-[0.2em] text-porcelain/56 md:flex">
            {categoryNavigation.map((item) => (
              <Link
                className="transition hover:text-bone"
                href={item.href}
                key={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-[92rem] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-20">
        <div className="flex flex-col justify-between gap-14 lg:py-8">
          <div>
            <p className="mb-7 text-[0.66rem] uppercase tracking-[0.28em] text-smoke">
              {category.eyebrow}
            </p>
            <h1 className="font-serif text-[4rem] font-medium leading-[0.86] sm:text-8xl lg:text-[8rem]">
              {category.name}
            </h1>
          </div>
          <p className="max-w-md text-base leading-8 text-porcelain/66">
            {category.description}
          </p>
        </div>

        <div className="relative min-h-[30rem] overflow-hidden border border-bone/10 bg-coal lg:min-h-[38rem]">
          <img
            alt={category.name}
            className="absolute inset-0 h-full w-full object-cover opacity-56 grayscale"
            src={category.image}
          />
          <div className="absolute inset-0 bg-ink/28" />
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="grid gap-10 border-t border-bone/10 pt-10 lg:grid-cols-[14rem_1fr]">
          <aside>
            <p className="mb-5 text-[0.64rem] uppercase tracking-[0.24em] text-smoke">
              Filtros
            </p>
            <div className="flex flex-wrap gap-2 lg:grid">
              {category.filters.map((filter) => (
                <button
                  className="border border-bone/12 px-4 py-3 text-left text-[0.66rem] uppercase tracking-[0.18em] text-porcelain/62 transition hover:border-bone/34 hover:text-bone"
                  key={filter}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="mt-10 hidden border-t border-bone/10 pt-6 text-sm leading-7 text-porcelain/48 lg:block">
              Visual filters only. Product data is static for this first
              version.
            </div>
          </aside>

          <div>
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="text-[0.64rem] uppercase tracking-[0.24em] text-smoke">
                  Products
                </p>
              <h2 className="mt-3 font-serif text-5xl font-medium leading-none">
                  {category.name}
                </h2>
              </div>
              <p className="hidden text-sm text-porcelain/48 sm:block">
                {category.products.length} objects
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
              {category.products.map((product) => (
                <article className="group" key={product.name}>
                  <div className="aspect-[4/5] overflow-hidden border border-bone/10 bg-graphite">
                    <Link href={`/producto/${product.slug}`}>
                      <img
                        alt={product.name}
                        className="h-full w-full object-cover grayscale transition duration-[1200ms] ease-out group-hover:scale-[1.035]"
                        src={product.image}
                      />
                    </Link>
                  </div>
                  <div className="mt-6 border-t border-bone/10 pt-5">
                    <p className="mb-4 text-[0.62rem] uppercase tracking-[0.22em] text-smoke">
                      {product.material}
                    </p>
                    <Link href={`/producto/${product.slug}`}>
                      <h3 className="font-serif text-[2rem] font-medium leading-none transition hover:text-porcelain">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="mt-5 text-sm text-porcelain/58">
                      {product.price}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-bone/10 px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[92rem] flex-col gap-8 text-sm text-porcelain/58 md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-4xl text-bone">BLAKMHER</p>
          <Link className="transition hover:text-bone" href="/">
            Back to home
          </Link>
        </div>
      </footer>
    </main>
  );
}
