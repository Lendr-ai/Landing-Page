import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { LuMenu } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="flex justify-between px-4 h-16 bg-red-200 items-center md:px-12">
      <div>
        <Link to="/">Lendr</Link>
      </div>
      <div
        className={
          showNav
            ? "bg-green-50 h-full fixed top-0 w-4/6 right-0 justify-center items-center md:h-auto md:flex md:static md:w-auto transition-right duration-300"
            : "bg-green-50 h-full fixed top-0 w-4/6 -right-full justify-center items-center md:h-auto md:flex md:static md:w-auto transition-right duration-300"
        }
      >
        <div
          className="text-2xl relative md:hidden flex justify-end top-4 right-4"
          onClick={() => setShowNav(false)}
        >
          <AiOutlineClose />
        </div>
        <ul className="flex flex-col justify-center text-center gap-8 h-full md:flex-row">
          <li>
            <Link to="/suppliers" onClick={() => setShowNav(false)}>
              Suppliers
            </Link>
          </li>
          <li>
            <Link to="/businesses" onClick={() => setShowNav(false)}>
              Businesses
            </Link>
          </li>
        </ul>
      </div>
      <LuMenu className="text-3xl md:hidden" onClick={() => setShowNav(true)} />
    </nav>
  );
};

export default Navbar;
