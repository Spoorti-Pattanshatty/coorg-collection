import { Leaf, Handshake, Sprout, Globe, FlaskConical } from "lucide-react";

export default function About() {
  const features = [
  { icon: <FlaskConical size={40} />, title: "Chemical Free" },
  { icon: <Handshake size={40} />, title: "Ethically Traded" },
  { icon: <Sprout size={40} />, title: "Grown Locally" },
  { icon: <Handshake size={40} />, title: "Hand Crafted" },
  { icon: <Leaf size={40} />, title: "Natural Ingredients" },
  { icon: <Globe size={40} />, title: "Sustainably Developed" },
];
  return (
    <section className="bg-[#eef5e6] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div className="grid grid-cols-2 gap-8">
          {features.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 mx-auto flex items-center justify-center border-2 border-green-600 rounded-full text-green-600">
                {item.icon}
              </div>
              <p className="mt-3 text-green-700 font-semibold">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-4xl font-bold text-green-700">
            Why Choose Us?
          </h2>

          <h3 className="mt-4 text-xl text-gray-700">
            Healthy <span className="text-green-600">Mind</span> Resides In Healthy{" "}
            <span className="text-green-600">Body</span>
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Having a healthy body supports having a healthy mind as numerous
            studies have shown. And a healthy body begins with eating well.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We are on a mission to deliver pure, natural, and authentic products
            sourced directly from farmers. Every item is carefully processed in
            small batches to maintain quality and freshness.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We do not use harmful chemicals, preservatives, or artificial
            additives—only nature’s goodness.
          </p>

          <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
            Read Our Story
          </button>
        </div>
      </div>
    </section>
  );
}