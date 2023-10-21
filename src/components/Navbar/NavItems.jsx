import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";

const navItems = [
  {
    path: "/",
    name: "Home",
    private: false,
  },
  {
    path: "/all-products",
    name: "All Products",
    private: false,
  },
  {
    path: "/add-product",
    name: "Add Product",
    private: true,
  },
];

export default function NavItems({ className = "" }) {
  const { currentUser } = useAuth();

  return (
    <ul className={"text-lg ".concat(className).trim()}>
      {navItems
        .filter(item => !item.private || (currentUser && item.private))
        .map(item => (
          <li key={item.name}>
            <NavLink
              className="font-medium text-neutral/80 hover:underline underline-offset-4"
              to={item.path}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
    </ul>
  );
}
