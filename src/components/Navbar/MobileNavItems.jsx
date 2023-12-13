import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import NavItems from "./NavItems";
import Button from "../Button";
import { useTheme } from "../../hooks";

export default function MobileNavItems() {
  const { currentTheme, changeTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(open => !open);
  }
  function handleToggleTheme() {
    const theme = currentTheme === "light" ? "dark" : "light";
    changeTheme(theme);
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
        className={`grid lg:hidden fixed inset-0 z-50 overflow-y-auto overflow-x-hidden ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={handleMenuToggle}
          className="hero-overlay bg-opacity-40"
        ></div>
        <div
          className={`w-80 sm:w-96 px-5 py-4 justify-self-end bg-base-100 col-start-1 row-start-1 duration-200 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <label className="flex justify-end mb-2">
            <span tabIndex={0} onClick={handleMenuToggle}>
              <IoMdClose className="text-3xl cursor-pointer" />
            </span>
          </label>

          {/* Navbar Items */}
          <NavItems className="menu" onItemClick={handleMenuToggle} />
          <div className="flex items-center justify-between p-2">
            <span className="text-base font-medium">Theme</span>
            <span>--{">"}</span>
            <Button onClick={handleToggleTheme} className="text-base">
              {currentTheme === "light" ? "Light" : "Dark"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
