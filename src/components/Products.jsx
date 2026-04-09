import ProductCard from "./ProductCard";
import ghee from "../assets/ghee.jpg";
import oil from "../assets/oil.jpg";
import honey from "../assets/honey.jpg";
import spices from "../assets/spices.jpg";
import coffee from "../assets/coffee.jpg";
import chocolate from "../assets/choco.jpg";
import flavor from "../assets/flavor.webp";
import papad from "../assets/papad.webp";

const products = [
  { name: "Desi Ghee", price: "₹650", oldPrice: "₹800", img: ghee, badge: "BESTSELLER" },
  { name: "Coconut Oil", price: "₹300", oldPrice: "₹400", img: oil, badge: "SALE" },
  { name: "Raw Honey", price: "₹400", img: honey, badge: "PURE" },
  { name: "Organic Spices", price: "₹250", oldPrice: "₹350", img: spices, badge: "SALE" },
  { name: "Coorg Coffee", price: "₹500", img: coffee, badge: "POPULAR" },
  { name: "Dark Chocolate", price: "₹350", oldPrice: "₹450", img: chocolate, badge: "NEW" },
  { name: "Flavor Coffee", price: "₹450",  img: flavor, badge: "NEW" },
  { name: "Palak Papad", price: "₹200", img: papad, badge: "NEW" },
];

export default function Products() {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-green-800">
        Our Products
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </section>
  );
}