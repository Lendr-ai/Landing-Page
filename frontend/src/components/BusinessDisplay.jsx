import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BusinessDisplay = () => {
  const [paymentTerm, setPaymentTerm] = useState(3);
  const [invoiceTotal, setInvoiceTotal] = useState(30000);

  const [monthlyAmount, setMonthlyAmount] = useState(100);

  const calculation = () => {
    if (paymentTerm === 3) {
      setMonthlyAmount(parseInt((invoiceTotal * 1.01) / paymentTerm));
    } else if (paymentTerm === 6) {
      setMonthlyAmount(parseInt((invoiceTotal * 1.02) / paymentTerm));
    } else if (paymentTerm === 9) {
      setMonthlyAmount(parseInt((invoiceTotal * 1.03) / paymentTerm));
    } else if (paymentTerm === 12) {
      setMonthlyAmount(parseInt((invoiceTotal * 1.04) / paymentTerm));
    }
  };

  useEffect(() => {
    calculation();
  }, [paymentTerm, invoiceTotal]);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <span className="text-xl text-ctasecondary w-fit rounded-2xl">
          Simple but effective
        </span>
        <h3 className="mb-12">Test it for yourself</h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        <form className="w-full lg:w-1/2 p-8 rounded-2xl flex flex-col gap-8 shadow-2xl">
          <div className="flex flex-col">
            <label for="category" className="text-fontsecondary mb-1">
              Select invoice category
            </label>
            <div className="flex flex-col">
              <select
                name="category"
                id="category"
                className="p-2 rounded-2xl border-r-8 border-transparent bg-gray-100 w-full text-lg"
              >
                <option value="Finance" className="p-2 rounded-2xl">
                  Finance
                </option>
                <option value="Legal" className="p-2 rounded-2xl">
                  Legal
                </option>
                <option value="Operations" className="p-2 rounded-2xl">
                  Operations
                </option>
                <option value="Other" className="p-2 rounded-2xl">
                  Other
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label for="total" className="text-fontsecondary mb-1">
              Enter your invoice cost
            </label>
            <input
              type="range"
              id="total"
              name="total"
              min="0"
              max="250000"
              value={invoiceTotal}
              onChange={(e) => setInvoiceTotal(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mb-2 accent-cta"
            />
            <h5 className="text-black text-xl">
              ${invoiceTotal.toLocaleString()}
            </h5>
          </div>
          <div className="flex flex-col">
            <label for="term" className="text-fontsecondary mb-1">
              Choose your optimal payment term from 3 to 12 months
            </label>
            <input
              type="range"
              id="term"
              name="term"
              min="3"
              max="12"
              step="3"
              value={paymentTerm}
              onChange={(e) => setPaymentTerm(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mb-2 accent-cta"
            />
            <h5 className="text-black text-xl">{paymentTerm} Months</h5>
          </div>
        </form>
        <div className="flex flex-col gap-8 justify-center items-start">
          <div className="w-full text-md xl:text-lg">
            Let’s break this up into even monthly payments of{" "}
            <span className="font-bold text-lg xl:text-2xl">
              ${monthlyAmount.toLocaleString()}
            </span>{" "}
            over{" "}
            <span className="font-bold text-lg xl:text-2xl">{paymentTerm}</span>{" "}
            months to help take control of your cash flow.
          </div>
          <button className="w-fit bg-cta border border-cta text-white font-bold hover:text-cta hover:bg-white transition duration-300">
            <Link to="/suppliers">Improve your cashflow</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessDisplay;
