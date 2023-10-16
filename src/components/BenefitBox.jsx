import React from "react";
import { Link } from "react-router-dom";

const BenefitBox = (props) => {
  return (
    <div className="flex flex-col justify-between items-center gap-4 px-4 py-8 rounded-2xl">
      <div className="flex w-full items-center gap-2 rounded-2xl justify-start">
        <div className="text-2xl rounded-2xl">{props.icon}</div>
        <h5 className="font-bold p-2 rounded-2xl text-fontprimary">
          {props.title}
        </h5>
      </div>
      <p className="text-fontsecondary text-sm">{props.content}</p>
      <div className="flex justify-start w-full">
        <button className="text-sm text-white font-bold cursor-pointer bg-cta border border-cta hover:bg-bgsecondary hover:text-cta transition duration-100">
          <Link to="/suppliers">{props.cta}</Link>
        </button>
      </div>
    </div>
  );
};

export default BenefitBox;
