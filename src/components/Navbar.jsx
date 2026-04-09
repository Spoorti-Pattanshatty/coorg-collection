export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-green-700">
        Coorg Collection
      </h1>

      <ul className="hidden md:flex gap-6 text-gray-700">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
        Shop Now
      </button>
    </nav>
  );
}