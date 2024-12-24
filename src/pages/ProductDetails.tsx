import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Star, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "@/services/api";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, items } = useCart();
  
  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id!),
    enabled: !!id,
  });
  
  const isInCart = items.some(item => item.id === id);

  if (isLoading) {
    return <div className="container py-20">Loading product details...</div>;
  }

  if (error) {
    return <div className="container py-20">Error loading product: {error.message}</div>;
  }

  if (!product) {
    return (
      <div className="container py-20">
        <h1>Product not found</h1>
        <Link to="/" className="text-blue-500 hover:underline">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-cream py-20">
      <div className="container">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-warmGray hover:text-richBlack"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-lg bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h1 className="font-serif text-4xl font-medium text-richBlack">
              {product.name}
            </h1>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${
                    index < product.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-lg text-warmGray">{product.description}</p>
            <div className="space-y-4 rounded-lg bg-white/50 p-6">
              <p className="font-serif text-3xl font-medium">${product.price}</p>
              <div className="space-y-2">
                <p className="text-sm text-warmGray">Category: {product.category}</p>
                <p className="text-sm text-warmGray">
                  Sub-category: {product.subCategory}
                </p>
                <p className="text-sm text-warmGray">
                  Gender: {product.gender}
                </p>
              </div>
              <Button
                onClick={() => addToCart({ 
                  id: product.id, 
                  name: product.name, 
                  price: product.price, 
                  image: product.image 
                })}
                className="w-full"
                variant={isInCart ? "secondary" : "default"}
                size="lg"
              >
                {isInCart ? (
                  <span className="flex items-center gap-2">
                    <Check className="h-5 w-5" /> Added to Cart
                  </span>
                ) : (
                  "Add to Cart"
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;