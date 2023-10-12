import React from "react";
import BusinessBanner from "../components/BusinessBanner";
import BusinessMain from "../components/BusinessMain";
import BusinessDisplay from "../components/BusinessDisplay";
import Footer from "../components/Footer";

const Businesses = () => {
  return (
    <div>
      <div className="px-4 md:px-16 py-8 md:py-16 max-w-screen-2xl ml-auto mr-auto ">
        <BusinessBanner />
      </div>
      <div className="bg-bgsecondary">
        <div className="px-4 md:px-16 py-16 max-w-screen-2xl ml-auto mr-auto mt-16">
          <BusinessMain />
        </div>
      </div>
      <div className="px-4 md:px-16 py-8 md:py-16 max-w-screen-2xl ml-auto mr-auto ">
        <BusinessDisplay />
      </div>
      <div className="bg-bgsecondary">
        <div className="px-4 md:px-16 py-16 max-w-screen-2xl ml-auto mr-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Businesses;
