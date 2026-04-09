import { Link } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-700">
        Coorg Collection
      </h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <Link to="/products" className="hover:text-green-600">Products</Link>
        <Link to="/about" className="hover:text-green-600">About</Link>
        <Link to="/contact" className="hover:text-green-600">Contact</Link>
      </div>

      <div className="flex items-center gap-4">
        
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Search size={20} />
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <User size={20} />
        </button>

        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <ShoppingCart size={20} />

          <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs px-1.5 rounded-full">
          </span>
        </button>

      </div>

    </nav>
  );
}