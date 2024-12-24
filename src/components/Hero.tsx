import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e"
          alt="Luxury Perfume"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <p className="animate-fadeIn font-serif text-lg text-cream/80">Discover Your Signature Scent</p>
          <h1 className="animate-fadeIn font-serif text-4xl font-medium text-cream sm:text-5xl md:text-6xl">
            Artisanal Perfumes
          </h1>
          <p className="mx-auto mt-6 max-w-lg animate-fadeIn text-lg text-cream/90">
            Handcrafted fragrances that tell your unique story
          </p>
          <Button
            className="mt-8 animate-fadeIn bg-cream/90 px-8 py-6 text-richBlack hover:bg-cream"
            size="lg"
          >
            Shop Collection
          </Button>
        </div>
      </div>
    </section>
  );
};