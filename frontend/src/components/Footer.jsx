import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiFillCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex gap-4">
        <BsFacebook className="text-cta text-2xl cursor-pointer hover:text-gray-400 transition duration-100" />
        <BsTwitter className="text-cta text-2xl cursor-pointer hover:text-gray-400 transition duration-100" />
        <AiFillInstagram className="text-cta text-2xl cursor-pointer hover:text-gray-400 transition duration-100" />
      </div>
      <div className="flex gap-2 justify-center items-center mt-8">
        <AiFillCopyrightCircle className="text-cta text-2xl" />
        <h3 className="cursor-pointer hover:text-gray-400 transition duration-100">
          Lendr
        </h3>
      </div>
      <div className="flex gap-4">
        <h5 className="text-sm cursor-pointer hover:text-gray-400 transition duration-100">
          Terms of Use
        </h5>
        <h5 className="text-sm cursor-pointer hover:text-gray-400 transition duration-100">
          Privacy Policy
        </h5>
      </div>
    </div>
  );
};

export default Footer;
