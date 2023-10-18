import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import NavItems from "./NavItems";

export default function MobileNavItems() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(open => !open);
  }

  return (
    <>
      <label
        tabIndex={0}
        className="p-2 lg:hidden cursor-pointer"
        onClick={handleMenuToggle}
      >
        <IoMdMenu className="text-3xl" />
      </label>

      <div
        className={`grid lg:hidden fixed inset-0 z-50 overflow-y-auto ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={handleMenuToggle}
          className="hero-overlay bg-opacity-40"
        ></div>
        <div
          className={`w-80 sm:w-96 px-5 py-4 justify-self-end bg-white col-start-1 row-start-1 duration-200 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <label className="flex justify-end mb-2">
            <span tabIndex={0} onClick={handleMenuToggle}>
              <IoMdClose className="text-3xl cursor-pointer" />
            </span>
          </label>

          {/* Navbar Items */}
          <NavItems className="menu" />
        </div>
      </div>
    </>
  );
}
