import React, { useState } from "react";
import InvoiceCard from "./InvoiceCard";

const Invoice = () => {
  const [paymentMethod, setPaymentMethod] = useState("Pay Later");
  return (
    <div>
      <div className="flex flex-col gap-2">
        <span className="text-xl text-ctasecondary w-fit rounded-2xl">
          Get Paid Instantly
        </span>
        <h3 className="mb-8 font-bold">
          Let your customers pay later with zero default risk for you
        </h3>
      </div>
      <div className="flex flex-col md:flex-row md:gap-8 md:justify-center md:items-center">
        <div className="md:w-1/2 rounded-2xl flex justify-center gap-8 items-center">
          <div className="rounded-2xl shadow-2xl bg-white h-96 flex flex-col justify-center py-4">
            <div className="w-full p-8 flex flex-col justify-center items-center h-2/5">
              <p className="font-bold">Invoice from Innovation Digital Play</p>
              <p className="text-fontsecondary">Billed to Solidarity</p>
            </div>
            <div className="px-8">
              <div className="w-full h-0.5 bg-gray-200"></div>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center h-2/5">
              <span className="font-bold text-4xl">$30,000</span>
              <p className="text-fontsecondary">due 21 October 2023</p>
            </div>
            <div className="mt-4 flex justify-center items-center gap-4 h-1/5">
              <a
                onClick={() => setPaymentMethod("Pay Now")}
                className={
                  paymentMethod === "Pay Now"
                    ? "border-b-2 py-1 text-ctasecondary font-bold border-ctasecondary hover:cursor-pointer"
                    : "text-fontsecondary cursor-pointer"
                }
              >
                Pay Now
              </a>
              <a
                onClick={() => setPaymentMethod("Pay Later")}
                className={
                  paymentMethod === "Pay Later"
                    ? "border-b-2 py-1 text-ctasecondary font-bold border-ctasecondary hover:cursor-pointer"
                    : "text-fontsecondary cursor-pointer"
                }
              >
                Pay Later
              </a>
            </div>
          </div>
        </div>
        {paymentMethod === "Pay Later" && (
          <div className="flex flex-col gap-4 md:w-1/2 md:mt-0 p-4 md:p-8 m-h-96">
            <h5 className="font-bold text-fontprimary text-md w-full mt-4">
              Select Payment Term
            </h5>
            <p className="text-fontsecondary">
              Select a period below for your approved invoice. Your vendor
              receives payment within 24 hours.
            </p>
            <div className="grid grid-cols-2 2xl:grid-cols-4 gap-4 mx-auto">
              <InvoiceCard months={3} monthly={"10,100"} total={"30,300"} />
              <InvoiceCard months={6} monthly={"5,100"} total={"30,600"} />
              <InvoiceCard months={9} monthly={"3,417"} total={"30,750"} />
              <InvoiceCard months={12} monthly={"2,575"} total={"30,900"} />
            </div>
          </div>
        )}
        {paymentMethod === "Pay Now" && (
          <div className="flex flex-col gap-4 md:w-1/2 py-8 h-96">
            <h5 className="font-bold text-fontprimary text-md">
              Pay using your credit card
            </h5>
            <form className="flex flex-col gap-2 mt-8 md:mt-0">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor=""
                  className="relative left-1 text-sm text-fontprimary"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9123 4567"
                  className="rounded-2xl py-2 px-4"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor=""
                  className="relative left-1 text-sm text-fontprimary"
                >
                  Card Holder Name
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="rounded-2xl py-2 px-4"
                />
              </div>
              <div className="flex flex-row gap-3">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor=""
                    className="relative left-1 text-sm text-fontprimary"
                  >
                    Expiry
                  </label>
                  <input
                    type="text"
                    placeholder="Month"
                    className="rounded-2xl py-2 px-4 w-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor=""
                    className="relative left-1 text-sm text-fontprimary"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    placeholder="Year"
                    className="rounded-2xl py-2 px-4 w-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor=""
                    className="relative left-1 text-sm text-fontprimary"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="rounded-2xl py-2 px-4 w-full"
                  />
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Invoice;
