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
import { products } from "@/data/products";
import type { Gender } from "@/data/products";

export const FeaturedProducts = () => {
  const [filters, setFilters] = useState({
    category: "all",
    subCategory: "all",
    gender: "all" as "all" | Gender,
    priceRange: [0, 500],
    minRating: 0,
  });

  const filteredProducts = products.filter((product) => {
    return (
      (filters.category === "all" || product.category === filters.category) &&
      (filters.subCategory === "all" || product.subCategory === filters.subCategory) &&
      (filters.gender === "all" || product.gender === filters.gender) &&
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
            defaultValue="all"
          >
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Oriental">Oriental</SelectItem>
              <SelectItem value="Fresh">Fresh</SelectItem>
              <SelectItem value="Floral">Floral</SelectItem>
            </SelectContent>
          </Select>

          <Select
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, gender: value as "all" | Gender }))
            }
            defaultValue="all"
          >
            <SelectTrigger>
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genders</SelectItem>
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
            defaultValue="0"
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