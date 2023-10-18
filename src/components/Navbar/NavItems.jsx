import { NavLink } from "react-router-dom";

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
];

export default function NavItems({ className = "" }) {
  return (
    <ul className={"text-lg ".concat(className).trim()}>
      {navItems
        .filter(item => !item.private)
        .map(item => (
          <li>
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
