import React from "react";
import ProductPerk from "./ProductPerk";

const Product = (props) => {
  return (
    <div className="p-4 rounded-2xl shadow-2xl bg-white">
      <div className="flex justify-start items-center mb-4 gap-4 px-2 py-4 rounded-2xl">
        {props.icon}
        <h5 className="font-bold text-fontprimary">{props.title}</h5>
      </div>
      <div className="flex flex-col gap-2">
        <ProductPerk content={props.item1} />
        <ProductPerk content={props.item2} />
        <ProductPerk content={props.item3} />
      </div>
    </div>
  );
};

export default Product;
