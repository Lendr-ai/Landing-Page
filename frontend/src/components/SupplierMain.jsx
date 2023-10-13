import React from "react";
import BusinessMainCard from "./BusinessMainCard";

const SupplierMain = () => {
  return (
    <div>
      <h3 className="mb-12">How does Lendr work?</h3>
      <div className="flex flex-col xl:flex-row gap-4 justify-center items-start relative">
        <div className="absolute bg-white left-6 xl:left-0 xl:top-6 h-full w-1 xl:h-1 xl:w-full rounded-2xl"></div>
        <div className="flex flex-row xl:flex-col max-w-lg gap-2 xl:gap-8 w-full xl:w-1/3">
          <div className="flex justify-center items-center">
            <div className="h-12 w-12 bg-cta text-white font-bold flex justify-center items-center rounded-full z-10">
              1
            </div>
          </div>
          <BusinessMainCard
            title="Get paid upfront within 24 hours"
            content="Our streamlined process ensures you receive your funds upfront within just 24 hours. Say goodbye to waiting and hello to immediate financial flexibility. Join us today and get paid faster than ever before."
          />
        </div>
        <div className="flex flex-row xl:flex-col max-w-lg gap-2 xl:gap-8 w-full xl:w-1/3">
          <div className="flex justify-center items-center">
            <div className="h-12 w-12 bg-cta text-white font-bold flex justify-center items-center rounded-full z-10">
              2
            </div>
          </div>
          <BusinessMainCard
            title="Accelerate sales and collections velocity. Give customers payment flexibility."
            content="Elevate your sales and collection speed with us. Our platform accelerates the velocity of transactions, providing your customers with the freedom to choose their preferred payment options. Boost your business by offering payment flexibility today."
          />
        </div>
        <div className="flex flex-row xl:flex-col max-w-lg gap-2 xl:gap-8 w-full xl:w-1/3">
          <div className="flex justify-center items-center">
            <div className="h-12 w-12 bg-cta text-white font-bold flex justify-center items-center rounded-full z-10">
              3
            </div>
          </div>
          <BusinessMainCard
            title="Deploy quickly with our API. Very limited integration required."
            content="Swiftly implement our API for seamless deployment. Our user-friendly interface requires minimal integration efforts, making it easy for you to get started. Speed up your processes and enhance your offerings with minimal fuss – explore our API solutions today."
          />
        </div>
      </div>
    </div>
  );
};

export default SupplierMain;
