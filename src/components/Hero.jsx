import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Images
import img1 from "../assets/slider1.webp";
import img2 from "../assets/slider2.webp";
import img3 from "../assets/slider3.webp";
import img4 from "../assets/slider4.webp";

export default function Hero() {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="w-full">

      {/* 🎞️ SLIDER ONLY */}
      <div className="relative h-[70vh] overflow-hidden">

        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white"
        >
          <ChevronRight size={28} />
        </button>

        <div className="absolute bottom-5 w-full flex justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 w-3 rounded-full cursor-pointer ${
                current === i ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="text-center py-12 px-6 bg-white">
        <h2 className="text-4xl font-bold text-green-800">
          Pure Goodness from Coorg
        </h2>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Discover authentic, handcrafted organic products sourced directly
          from nature — fresh, healthy, and full of flavor.
        </p>

        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
          View All
        </button>
      </div>

    </section>
  );
}