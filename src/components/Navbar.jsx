import { Link } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 px-6 py-4 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
        Coorg Collection
      </h1>

      {/* Links */}
      <div className="hidden md:flex space-x-8 font-medium text-gray-700">
        <Link to="/" className="hover:text-green-600 transition">Home</Link>
        <Link to="/products" className="hover:text-green-600 transition">Products</Link>
        <Link to="/about" className="hover:text-green-600 transition">About</Link>
        <Link to="/contact" className="hover:text-green-600 transition">Contact</Link>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-3">
        
        <button className="p-2 rounded-full hover:bg-green-100 transition">
          <Search size={20} />
        </button>

        <button className="p-2 rounded-full hover:bg-green-100 transition">
          <User size={20} />
        </button>

        <button className="relative p-2 rounded-full hover:bg-green-100 transition">
          <ShoppingCart size={20} />

          <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs px-1.5 rounded-full">
           
          </span>
        </button>

      </div>

    </nav>
  );
}