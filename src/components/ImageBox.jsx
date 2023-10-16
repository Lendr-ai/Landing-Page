import React from "react";
import business1 from "../assets/business1.jpg";
import business2 from "../assets/business2.jpg";
import business3 from "../assets/business3.jpg";
import business4 from "../assets/business4.jpg";

const ImageBox = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 justify-center items-center">
        <img
          src={business1}
          alt=""
          className="w-1/3 object-cover rounded-2xl h-48 shadow"
        />
        <img
          src={business3}
          alt=""
          className="w-3/5 object-cover rounded-2xl h-48 shadow"
        />
      </div>
      <div className="flex flex-row gap-2 justify-center items-center">
        <img
          src={business4}
          alt=""
          className="w-3/5 object-cover rounded-2xl h-48 shadow"
        />
        <img
          src={business2}
          alt=""
          className="w-1/3 object-cover rounded-2xl h-48 shadow"
        />
      </div>
    </div>
  );
};

export default ImageBox;
