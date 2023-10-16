import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const ProductPerk = (props) => {
  return (
    <div className="mb-2">
      <div className="flex flex-row gap-2 items-start">
        <div className="bg-green-100 p-1 rounded-full">
          <AiOutlineCheck className="text-sm text-green-500" />
        </div>
        <p className="text-fontsecondary text-sm">{props.content}</p>
      </div>
    </div>
  );
};

export default ProductPerk;
