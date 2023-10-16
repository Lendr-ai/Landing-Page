import React from "react";
import SupplierBanner from "../components/SupplierBanner";
import SupplierMain from "../components/SupplierMain";
import SupplierCode from "../components/SupplierCode";
import SupplierTrustedBy from "../components/SupplierTrustedBy";
import SupplierForm from "../components/SupplierForm";
import Footer from "../components/Footer";

const Suppliers = () => {
  return (
    <div>
      <div className="px-4 md:px-16 py-8 md:py-16 max-w-screen-2xl ml-auto mr-auto ">
        <SupplierBanner />
      </div>
      <div className="bg-bgsecondary">
        <div className="px-4 md:px-16 py-16 max-w-screen-2xl ml-auto mr-auto mt-16">
          <SupplierMain />
        </div>
      </div>
      <div className="px-4 md:px-16 py-8 md:py-16 max-w-screen-2xl ml-auto mr-auto ">
        <SupplierCode />
      </div>
      <div className="bg-bgsecondary">
        <div className="px-4 md:px-16 py-16 max-w-screen-2xl ml-auto mr-auto">
          <SupplierTrustedBy />
        </div>
      </div>
      <div className="px-4 md:px-16 py-8 md:py-16 max-w-screen-2xl ml-auto mr-auto ">
        <SupplierForm />
      </div>
      <div className="bg-bgsecondary">
        <div className="px-4 md:px-16 py-16 max-w-screen-2xl ml-auto mr-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
