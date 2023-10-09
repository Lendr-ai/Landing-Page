import React from "react";
import logo1 from "../assets/businesslogos/logo1.svg";
import logo2 from "../assets/businesslogos/logo2.svg";
import logo3 from "../assets/businesslogos/logo3.svg";
import logo4 from "../assets/businesslogos/logo4.svg";
import logo5 from "../assets/businesslogos/logo5.svg";
import logo6 from "../assets/businesslogos/logo6.svg";
import logo7 from "../assets/businesslogos/logo7.svg";
import logo8 from "../assets/businesslogos/logo8.svg";

const TrustedBy = () => {
  return (
    <div className="mt-8 md:mt-16">
      <h3>Pay with Lendr products are trusted by</h3>
      <div className="mt-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 place-content-center gap-4">
        <img src={logo1} alt="logo1" className="rounded-2xl object-contain" />
        <img src={logo2} alt="logo2" className="rounded-2xl object-contain" />
        <img src={logo3} alt="logo3" className="rounded-2xl object-contain" />
        <img src={logo4} alt="logo4" className="rounded-2xl object-contain" />
        <img src={logo5} alt="logo5" className="rounded-2xl object-contain" />
        <img src={logo6} alt="logo6" className="rounded-2xl object-contain" />
        <img src={logo7} alt="logo7" className="rounded-2xl object-contain" />
        <img src={logo8} alt="logo8" className="rounded-2xl object-contain" />
      </div>
    </div>
  );
};

export default TrustedBy;
