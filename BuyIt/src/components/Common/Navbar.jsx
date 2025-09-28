import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  function toggleNavDrawer() {
    setNavDrawerOpen(!navDrawerOpen);
  }

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left-logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Ujjawal
          </Link>
        </div>
        {/* center nav */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="collections/all"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            topwear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            bottom wear
          </Link>
        </div>
        {/* right- icon */}

        <div className="flex items-center space-x-4">
          <Link to="/login" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hoverr:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-[#32174d] text-xs rounded-full px-2 py-0.5 text-white">
              2
            </span>
          </button>
          {/* Search icon */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer
        drawerOpen={!drawerOpen}
        toggleCartDrawer={toggleCartDrawer}
      />
      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">
            Men
            </Link>
            <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">
            Women
            </Link>
            <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">
            Top Wear
            </Link>
            <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">
            Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
