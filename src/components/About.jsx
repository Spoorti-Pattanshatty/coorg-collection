export default function About() {
  return (
    <section className="bg-green-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-green-800">
        Why Choose Us?
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-600">
        We bring you authentic, chemical-free products directly from Coorg’s farms.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {["Organic", "Locally Sourced", "Handmade", "Sustainable"].map((item) => (
          <div key={item} className="p-4 bg-white rounded-xl shadow">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}