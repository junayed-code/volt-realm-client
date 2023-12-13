import { Link } from "react-router-dom";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import NavItems from "./NavItems";
import UserAccount from "./UserAccount";
import MobileNavItems from "./MobileNavItems";
import NavCart from "./NavCart";
import { useTheme } from "../../hooks";
import Button from "../Button";
import logoLight from "../../assets/logo-light.svg";
import logoDark from "../../assets/logo-dark.svg";

export default function Navbar({ className = "" }) {
  const { currentTheme, changeTheme } = useTheme();

  const handleToggleTheme = () => {
    const theme = currentTheme === "light" ? "dark" : "light";
    changeTheme(theme);
  };

  return (
    <nav
      className={"bg-base-100 w-full py-2 top-0 left-0 z-20 border-b border-base-content/20 "
        .concat(className)
        .trim()}
    >
      <div className="navbar max-w-7xl mx-auto w-[96%]">
        {/* Navbar Start Section */}
        <div className="navbar-start w-3/4 lg:w-1/2">
          <Link to="/" className="text-2xl font-bold">
            <img
              className="w-32 sm:w-36"
              src={currentTheme === "light" ? logoLight : logoDark}
              alt="Volt Realm Logo"
            />
          </Link>
        </div>
        {/* Navbar Middle Section */}
        <div className="navbar-center hidden lg:inline-flex">
          <NavItems className="flex items-center space-x-6" />
        </div>
        {/* Navbar End Section */}
        <div className="navbar-end gap-2 w-3/12 lg:w-1/2">
          <div className="flex items-center space-x-3">
            <UserAccount />
            <NavCart />
            <button
              onClick={handleToggleTheme}
              className="btn btn-circle btn-ghost hidden lg:inline-flex"
            >
              {currentTheme === "light" ? (
                <BiSolidSun className="text-2xl" />
              ) : (
                <BiSolidMoon className="text-2xl" />
              )}
            </button>
          </div>

          {/* Mobile navbar menu */}
          <MobileNavItems />
        </div>
      </div>
    </nav>
  );
}
