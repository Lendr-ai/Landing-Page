import React from "react";
import BusinessMainCard from "./BusinessMainCard";

const BusinessMain = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <span className="text-xl text-ctasecondary w-fit rounded-2xl">
          How does Lendr work
        </span>
        <h3 className="mb-12">Sign up and pay later</h3>
      </div>
      <div className="flex flex-col xl:flex-row gap-4 justify-center items-start relative">
        <div className="absolute bg-white left-6 xl:left-0 xl:top-6 h-full w-1 xl:h-1 xl:w-full rounded-2xl"></div>
        <div className="flex flex-row xl:flex-col max-w-lg gap-2 xl:gap-8 w-full xl:w-1/3">
          <div className="flex justify-center items-center">
            <div className="h-12 w-12 bg-cta text-white font-bold flex justify-center items-center rounded-full z-10">
              1
            </div>
          </div>
          <BusinessMainCard
            title="Sign up and connect your bank accounts"
            content="Complete your company information and connect your bank accounts to power our credit decision technology. We will confirm your eligibility in less than 24 hours."
          />
        </div>
        <div className="flex flex-row xl:flex-col max-w-lg gap-2 xl:gap-8 w-full xl:w-1/3">
          <div className="flex justify-center items-center">
            <div className="h-12 w-12 bg-cta text-white font-bold flex justify-center items-center rounded-full z-10">
              2
            </div>
          </div>
          <BusinessMainCard
            title="Flexible payment on your terms"
            content="Once approved, your commitment-free credit line is active for 30 days, after which you can click to refresh it. You can upload as many invoices as you need - up to $250,000. We pay the supplier as soon as the invoice is approved."
          />
        </div>
        <div className="flex flex-row xl:flex-col max-w-lg gap-2 xl:gap-8 w-full xl:w-1/3">
          <div className="flex justify-center items-center">
            <div className="h-12 w-12 bg-cta text-white font-bold flex justify-center items-center rounded-full z-10">
              3
            </div>
          </div>
          <BusinessMainCard
            title="Prioritise spend on growth"
            content="Lendr advances do not have any interest rate attached, or dilution from warrants. We add a simple fee on each advance from 1% per month. No subscriptions - you only pay a fee for what you’ve used!"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessMain;
