import React from "react";
import ProductPerk from "./ProductPerk";
import { SiPayloadcms } from "react-icons/si";
import { AiFillCreditCard } from "react-icons/ai";
import { MdNextWeek } from "react-icons/md";
import { BsCartFill } from "react-icons/bs";
import Product from "./Product";

const Products = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <span className="text-xl text-ctasecondary w-fit rounded-2xl">
          Pay with Lendr
        </span>
        <h3 className="font-bold mb-8">
          Complete transactions with Lendr products
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Product
          icon={<SiPayloadcms className="text-lg text-gray-400" />}
          title="Pay Now"
          item1="Pay your invoice now via bank"
          item2="One secure, frictionless payment"
          item3="Processed in 1-3 days with no fees"
        />
        <Product
          icon={<AiFillCreditCard className="text-lg text-gray-400" />}
          title="Credit Card"
          item1="Secure transactions"
          item2="Eliminate sensitive information storage"
          item3="Built-in fraud protection"
        />
        <Product
          icon={<MdNextWeek className="text-lg text-gray-400" />}
          title="Pay Later"
          item1="Allow your customers the option to pay invoices over 2-12 months"
          item2="Eliminating payment delays and defaults"
          item3="From 1% flat fee per month, subject to approval"
        />
        <Product
          icon={<BsCartFill className="text-lg text-gray-400" />}
          title="Embedded Checkout"
          item1="Customised checkout experiences"
          item2="Modular payment options"
          item3="Access to the Lendr Insights Dashboard"
        />
      </div>
    </div>
  );
};

export default Products;
