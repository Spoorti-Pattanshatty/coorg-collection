import { Heart } from "lucide-react";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 relative overflow-hidden">

    <button 
      onClick={() => setLiked(!liked)}
      className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition"
    >
        <Heart
          className={`w-5 h-5 ${
            liked ? "fill-red-500 text-red-500" : "text-gray-400"
          }`}
        />
      </button>

      {product.badge && (
        <span className="absolute top-3 left-3 z-10 bg-amber-950 text-white text-xs px-3 py-1 rounded-full">
          {product.badge}
        </span>
      )}

      <div className="overflow-hidden rounded-xl">
      <img
       src={product.img}
       alt={product.name}
       className="h-64 w-full object-contain bg-gray-50 p-4 transition duration-300 hover:scale-105"
      />
</div>

      <h3 className="mt-4 text-lg font-semibold">
        {product.name}
      </h3>

      <div className="mt-2">
        {product.oldPrice && (
          <p className="text-gray-400 line-through text-sm">
            {product.oldPrice}
          </p>
        )}
        <p className="text-green-700 font-bold text-lg">
          {product.price}
        </p>
      </div>

      <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
        Add to Cart
      </button>
    </div>
  );
}