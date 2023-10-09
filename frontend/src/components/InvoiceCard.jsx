import React from "react";

const InvoiceCard = (props) => {
  return (
    <div className="flex flex-col px-2 py-8 rounded-2xl w-36 shrink-0 justify-between items-center h-48">
      <h5 className="text-sm">
        Pay over <span className="font-bold">{props.months}</span> months
      </h5>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-3xl font-bold">${props.monthly}</h3>
        <p className="text-sm">Per Month</p>
      </div>
      <p className="px-3 py-1 rounded-2xl bg-ctasecondary text-white">
        ${props.total} Total
      </p>
    </div>
  );
};

export default InvoiceCard;
