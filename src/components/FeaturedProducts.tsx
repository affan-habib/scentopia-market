import { useState } from "react";
import { ProductCard } from "./ProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";

const featuredProducts = [
  {
    id: "1",
    name: "Rose & Oud",
    price: 280,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75",
    description: "A sophisticated blend of Damascus rose and rare oud wood.",
    category: "Oriental",
    subCategory: "Woody",
    gender: "unisex",
    rating: 4,
  },
  {
    id: "2",
    name: "Vetiver Dreams",
    price: 240,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f",
    description: "Fresh vetiver mixed with citrus notes and amber.",
    category: "Fresh",
    subCategory: "Citrus",
    gender: "men",
    rating: 5,
  },
  {
    id: "3",
    name: "Midnight Jasmine",
    price: 260,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601",
    description: "Night-blooming jasmine with hints of vanilla and musk.",
    category: "Floral",
    subCategory: "White Floral",
    gender: "women",
    rating: 4,
  },
];

export const FeaturedProducts = () => {
  const [filters, setFilters] = useState({
    category: "",
    subCategory: "",
    gender: "",
    priceRange: [0, 500],
    minRating: 0,
  });

  const filteredProducts = featuredProducts.filter((product) => {
    return (
      (!filters.category || product.category === filters.category) &&
      (!filters.subCategory || product.subCategory === filters.subCategory) &&
      (!filters.gender || product.gender === filters.gender) &&
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1] &&
      product.rating >= filters.minRating
    );
  });

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-12 text-center font-serif text-3xl font-medium text-richBlack">
          Featured Collection
        </h2>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <Select
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, category: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              <SelectItem value="Oriental">Oriental</SelectItem>
              <SelectItem value="Fresh">Fresh</SelectItem>
              <SelectItem value="Floral">Floral</SelectItem>
            </SelectContent>
          </Select>

          <Select
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, gender: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All</SelectItem>
              <SelectItem value="men">Men</SelectItem>
              <SelectItem value="women">Women</SelectItem>
              <SelectItem value="unisex">Unisex</SelectItem>
            </SelectContent>
          </Select>

          <div className="space-y-2">
            <label className="text-sm font-medium">Price Range</label>
            <Slider
              defaultValue={[0, 500]}
              max={500}
              step={10}
              onValueChange={(value) =>
                setFilters((prev) => ({ ...prev, priceRange: value }))
              }
            />
          </div>

          <Select
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, minRating: Number(value) }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Min Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">All Ratings</SelectItem>
              <SelectItem value="4">4+ Stars</SelectItem>
              <SelectItem value="5">5 Stars</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};