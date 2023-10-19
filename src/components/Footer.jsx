import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";

import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer p-10 py-14 bg-secondary/30 text-base-content text-base">
      <aside>
        <Link>
          <img className="max-h-6" src={logo} alt="Volt Realm" />
        </Link>
        <div className="py-6 flex gap-4">
          <Link className="text-base-content/70 hover:text-base-content">
            <BsFacebook className="text-2xl" />
          </Link>
          <Link className="text-base-content/70 hover:text-base-content">
            <BsTwitter className="text-2xl" />
          </Link>
          <Link className="text-base-content/70 hover:text-base-content">
            <BsInstagram className="text-2xl" />
          </Link>
          <Link className="text-base-content/70 hover:text-base-content">
            <BsYoutube className="text-2xl" />
          </Link>
        </div>

        <p>©{new Date().getFullYear()} Volt Realm™. All Rights Reserved.</p>
      </aside>
      <nav>
        <header className="footer-title">Our Shop</header>
        <a className="link link-hover">All Products</a>
        <a className="link link-hover">Laptops</a>
        <a className="link link-hover">Phones</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of service</a>
        <a className="link link-hover">Privacy policy</a>
      </nav>
    </footer>
  );
}
