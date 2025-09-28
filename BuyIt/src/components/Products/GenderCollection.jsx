import React from "react";
import mencollection from "../../assets/mencoll.jpg";
import womencollection from "../../assets/womencoll.jpg";
import { Link } from "react-router-dom";

function GenderCollection() {
  return (
    <section className="py-10 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        {/* Women */}
        <div className="relative w-full md:flex-1 h-[400px] md:h-[700px]">
          <img
            src={womencollection}
            alt="womenCollection"
            className="w-full h-full object-cover object-top rounded-lg"
          />
          <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 p-4 rounded-lg shadow">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Women Collection
            </h2>
            <Link
              to="/collections/all?gender=women"
              className="text-gray-900 underline text-sm md:text-base"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men */}
        <div className="relative w-full md:flex-1 h-[400px] md:h-[700px]">
          <img
            src={mencollection}
            alt="menCollection"
            className="w-full h-full object-cover object-top rounded-lg"
          />
          <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 p-4 rounded-lg shadow">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Men Collection
            </h2>
            <Link
              to="/collections/all?gender=men"
              className="text-gray-900 underline text-sm md:text-base"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GenderCollection;
