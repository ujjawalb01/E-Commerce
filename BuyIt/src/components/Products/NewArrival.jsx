import React, { useEffect, useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function NewArrival() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 2999,
      images: [
        { url: "https://picsum.photos/500/500?random=1", altText: "stylish" },
      ],
    },
    {
      _id: "2",
      name: "Trendy Coat",
      price: 3499,
      images: [
        { url: "https://picsum.photos/500/500?random=2", altText: "stylish" },
      ],
    },
    {
      _id: "3",
      name: "Classic Hoodie",
      price: 1999,
      images: [
        { url: "https://picsum.photos/500/500?random=3", altText: "stylish" },
      ],
    },
    {
      _id: "4",
      name: "Denim Jacket",
      price: 2599,
      images: [
        { url: "https://picsum.photos/500/500?random=4", altText: "stylish" },
      ],
    },
    {
      _id: "5",
      name: "Leather Jacket",
      price: 4999,
      images: [
        { url: "https://picsum.photos/500/500?random=5", altText: "stylish" },
      ],
    },
    {
      _id: "6",
      name: "Bomber Jacket",
      price: 3299,
      images: [
        { url: "https://picsum.photos/500/500?random=6", altText: "stylish" },
      ],
    },
    {
      _id: "7",
      name: "Winter Parka",
      price: 5999,
      images: [
        { url: "https://picsum.photos/500/500?random=7", altText: "stylish" },
      ],
    },
    {
      _id: "8",
      name: "Summer Blazer",
      price: 2799,
      images: [
        { url: "https://picsum.photos/500/500?random=8", altText: "stylish" },
      ],
    },
  ];

  // check scroll position
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth
    );
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons(); // run once on mount
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  // scroll function
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8; // scroll 80% of visible width
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Checkout New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Do check out our latest stylish arrivals on the way
        </p>
        {/* Scroll buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border bg-white text-black ${
              !canScrollLeft ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border bg-white text-black ${
              !canScrollRight ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-scroll flex space-x-6 relative pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="relative min-w-[80%] sm:min-w-[60%] md:min-w-[50%] lg:min-w-[30%] xl:min-w-[25%]"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] sm:h-[450px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover rounded-lg"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">₹{product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrival;
