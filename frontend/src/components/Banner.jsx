import React from "react";
import ImageBox from "../components/ImageBox";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 mt-16">
      <div className="flex flex-col gap-12 md:w-1/2 shrink-0">
        <h1 className="font-bold">
          Accelerate Your Payments and Offload Customer Default Risk
        </h1>
        <h5>
          Accelerate your platform's growth with our "Pay Later" API,
          eliminating payment delays and defaults. Supercharge your business now
          and experience the future of seamless payments.
        </h5>
        <div className="flex flex-col gap-2 md:items-center md:flex-row">
          <button className="w-40 bg-cta border border-cta text-white font-bold hover:text-cta hover:bg-white transition duration-300">
            Get Paid Faster
          </button>
          <p className="text-cta text-sm font-bold">
            Trusted by thousands of businesses in Australia
          </p>
        </div>
      </div>
      <div className="md:w-1/2">
        <ImageBox />
      </div>
    </div>
  );
};

export default Banner;
