import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const ProductCard = ({ id, name, price, image, description }: ProductCardProps) => {
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
        <p className="font-serif text-lg font-medium">${price}</p>
      </div>
    </Link>
  );
};