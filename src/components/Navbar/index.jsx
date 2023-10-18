import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import logo from "../../assets/logo.svg";
import NavItems from "./NavItems";
import UserAccount from "./UserAccount";
import MobileNavItems from "./MobileNavItems";

export default function Navbar({ className }) {
  return (
    <nav
      className={"navbar bg-white w-full py-2 top-0 left-0 z-20 "
        .concat(className)
        .trim()}
    >
      {/* Navbar Start Section */}
      <div className="navbar-start w-3/4 lg:w-1/2">
        <Link to="/" className="text-2xl font-bold">
          <img className="w-[150px]" src={logo} alt="Volt Realm Logo" />
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
          <Link to="cart" className="btn btn-circle btn-ghost">
            <MdShoppingCart className="w-7 h-7 rounded-full" />
          </Link>
        </div>

        {/* Mobile navbar menu */}
        <MobileNavItems />
      </div>
    </nav>
  );
}
