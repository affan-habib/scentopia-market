export type Gender = "men" | "women" | "unisex";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  subCategory: string;
  gender: Gender;
  rating: number;
}

export const products: Product[] = [
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