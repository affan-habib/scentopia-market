import { ProductCard } from "./ProductCard";

const featuredProducts = [
  {
    id: "1",
    name: "Rose & Oud",
    price: 280,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75",
    description: "A sophisticated blend of Damascus rose and rare oud wood.",
  },
  {
    id: "2",
    name: "Vetiver Dreams",
    price: 240,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f",
    description: "Fresh vetiver mixed with citrus notes and amber.",
  },
  {
    id: "3",
    name: "Midnight Jasmine",
    price: 260,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601",
    description: "Night-blooming jasmine with hints of vanilla and musk.",
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-12 text-center font-serif text-3xl font-medium text-richBlack">
          Featured Collection
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};