import React from "react";
import CodeSnippet from "./CodeSnippet";
import { BiSolidCube } from "react-icons/bi";
import { TbTopologyComplex } from "react-icons/tb";

const SupplierCode = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/5">
          <div className="flex flex-col gap-2">
            <span className="text-xl text-ctasecondary w-fit rounded-2xl">
              Get started
            </span>
            <h3 className="font-bold mb-8">
              The fastest way to integrate Lendr
            </h3>
            <p className="text-fontsecondary mb-8">
              Checkout’s intuitive APIs and documentation make it easy to get
              started, and easy to iterate.
            </p>
            <button className="w-fit bg-cta border border-cta text-white font-bold hover:text-cta hover:bg-white transition duration-300">
              <a href="#onboard">Explore the docs</a>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <CodeSnippet />
        </div>
      </div>
      <div className="flex gap-8 lg:gap-16 mt-8 lg:mt-16 justify-center items-center flex-col lg:flex-row">
        <div className="flex flex-col gap-2 w-full lg:w-1/3 shadow-2xl p-8 rounded-2xl">
          <div className="flex justify-start items-center gap-4">
            <BiSolidCube className="text-2xl text-cta" />
            <h5 className="text-fontprimary text-md">Modular in nature</h5>
          </div>
          <p className="text-fontsecondary text-sm">
            Use Checkout as your all-in-one payment page, or use it only for
            specific payment methods by combining it with our embeddable UI
            components.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full lg:w-1/3 shadow-2xl p-8 rounded-2xl">
          <div className="flex justify-start items-center gap-4">
            <TbTopologyComplex className="text-2xl text-cta" />
            <h5 className="text-fontprimary text-md">
              Supports advanced use cases
            </h5>
          </div>
          <p className="text-fontsecondary text-sm">
            Checkout works with your other APIs to let you set up subscriptions
            or power your platform or marketplace payments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupplierCode;
