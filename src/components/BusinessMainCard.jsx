import React from "react";

const BusinessMainCard = (props) => {
  return (
    <div className="flex flex-col rounded-2xl justify-between p-8 gap-4">
      <h5 className="h-fit xl:h-12 text-lg xl:text-xl flex items-center text-fontprimary">
        {props.title}
      </h5>
      <p className="h-fit xl:h-36 text-fontsecondary text-sm">
        {props.content}
      </p>
    </div>
  );
};

export default BusinessMainCard;
