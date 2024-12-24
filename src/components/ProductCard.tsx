import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import { Star, Check } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  subCategory: string;
  gender: "men" | "women" | "unisex";
  rating: number;
}

export const ProductCard = ({
  id,
  name,
  price,
  image,
  description,
  rating,
}: ProductCardProps) => {
  const { addToCart, items } = useCart();
  const isInCart = items.some(item => item.id === id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    addToCart({ id, name, price, image });
  };

  return (
    <Link
      to={`/product/${id}`}
      className="group relative overflow-hidden rounded-lg bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md"
    >
      <div className="aspect-square overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="font-serif text-lg font-medium text-richBlack">{name}</h3>
        <p className="text-sm text-warmGray line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <p className="font-serif text-lg font-medium">${price}</p>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`h-4 w-4 ${
                  index < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
        <Button
          onClick={handleAddToCart}
          className="w-full mt-2"
          variant={isInCart ? "secondary" : "default"}
        >
          {isInCart ? (
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4" /> Added to Cart
            </span>
          ) : (
            "Add to Cart"
          )}
        </Button>
      </div>
    </Link>
  );
};