import React from "react";
import businessbanner from "../assets/businessbanner.jpg";

const BusinessBanner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 mt-16">
      <div className="flex flex-col gap-12 md:w-1/2 shrink-0">
        <h1 className="font-bold">
          Convert sizeable invoices into more manageable portions
        </h1>
        <h5>
          We specialise in making big expenses feel bite-sized. Say goodbye to
          the burden of large invoices by spreading them over 3 to 12 manageable
          monthly payments. Join us today and experience financial ease like
          never before.
        </h5>
        <div className="flex flex-col gap-2 md:items-center md:flex-row">
          <button className="w-40 bg-cta border border-cta text-white font-bold hover:text-cta hover:bg-white transition duration-300">
            Start Now
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src={businessbanner}
          alt="businessbanner"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BusinessBanner;
