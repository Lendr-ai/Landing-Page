import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { LuMenu } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiFillCopyrightCircle } from "react-icons/ai";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="flex justify-between px-4 h-20 items-center md:px-16 max-w-screen-2xl ml-auto mr-auto">
      <div className="w-24 flex justify-center items-center relative top-1">
        <Link to="/">
          <img src={Logo} alt="Lendr" className="w-full" />
        </Link>
      </div>
      <div
        className={
          showNav
            ? "h-full fixed top-0 w-5/6 right-0 justify-center items-center md:h-auto md:flex md:static md:w-auto transition-right duration-300 bg-white z-10 shadow-2xl"
            : "h-full fixed top-0 w-5/6 -right-full justify-center items-center md:h-auto md:flex md:static md:w-auto transition-right duration-300 bg-white z-10 shadow-2xl"
        }
      >
        <div
          className="text-2xl relative md:hidden flex justify-end top-4 right-4"
          onClick={() => setShowNav(false)}
        >
          <div className="border border-cta p-2 rounded-2xl">
            <AiOutlineClose className="text-2xl text-cta" />
          </div>
        </div>
        <ul className="flex flex-col justify-center text-center gap-8 h-full md:flex-row relative z-10">
          <li>
            <Link
              to="/suppliers"
              onClick={() => setShowNav(false)}
              className="font-bold hover:text-gray-600 transition duration-100 cursor-pointer text-lg md:text-sm"
            >
              Suppliers
            </Link>
          </li>
          <li>
            <Link
              to="/businesses"
              onClick={() => setShowNav(false)}
              className="font-bold hover:text-gray-600 transition duration-100 cursor-pointer text-lg md:text-sm"
            >
              Businesses
            </Link>
          </li>
          <div className="flex gap-8 md:hidden justify-center items-center mt-20">
            <BsFacebook className="text-cta text-2xl cursor-pointer hover:text-gray-400 transition duration-100" />
            <BsTwitter className="text-cta text-2xl cursor-pointer hover:text-gray-400 transition duration-100" />
            <AiFillInstagram className="text-cta text-2xl cursor-pointer hover:text-gray-400 transition duration-100" />
          </div>
        </ul>
      </div>
      <div className="bg-gray-100 p-2 rounded-2xl md:hidden">
        <LuMenu
          className="text-2xl text-cta"
          onClick={() => setShowNav(true)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
