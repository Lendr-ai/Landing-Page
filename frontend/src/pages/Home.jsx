import React from "react";
import Invoice from "../components/Invoice";
import ImageBox from "../components/ImageBox";
import TrustedBy from "../components/TrustedBy";
import Products from "../components/Products";
import Benefits from "../components/Benefits";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <div className="px-4 md:px-16 py-8 md:py-16 max-w-screen-2xl ml-auto mr-auto ">
        <Banner />
      </div>
      <div className="px-4 md:px-16 max-w-screen-2xl ml-auto mr-auto">
        <TrustedBy />
      </div>
      <div className="bg-bgsecondary">
        <div className="px-4 md:px-16 py-16 max-w-screen-2xl ml-auto mr-auto mt-16">
          <Invoice />
        </div>
      </div>
      <div className="px-4 md:px-16 py-16 max-w-screen-2xl ml-auto mr-auto">
        <Products />
      </div>
      <div className="bg-bgsecondary">
        <div className="px-4 md:px-16 py-16 max-w-screen-2xl ml-auto mr-auto">
          <Benefits />
        </div>
      </div>
      <div className="px-4 md:px-16 py-16 max-w-screen-2xl ml-auto mr-auto">
        <Reviews />
      </div>
      <div className="bg-bgsecondary">
        <div className="px-4 md:px-16 py-16 max-w-screen-2xl ml-auto mr-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
