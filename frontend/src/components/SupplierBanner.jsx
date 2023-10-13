import React from "react";
import supplierbanner from "../assets/supplierbanner.jpg";

const SupplierBanner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 mt-16">
      <div className="flex flex-col gap-12 md:w-1/2 shrink-0">
        <h1 className="font-bold">Get paid fast</h1>
        <h5>
          Offer a secure checkout via our API for instant payments and payments
          over 12 months, eliminating payment delays and defaults.
        </h5>
        <div className="flex flex-col gap-2 md:items-center md:flex-row">
          <button className="w-40 bg-cta border border-cta text-white font-bold hover:text-cta hover:bg-white transition duration-300">
            Get Paid Faster
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src={supplierbanner}
          alt="supplierbanner"
          className="rounded-lg w-full h-full lg:h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default SupplierBanner;
