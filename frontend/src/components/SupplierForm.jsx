import React from "react";

const SupplierForm = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <span className="text-xl text-ctasecondary w-fit rounded-2xl">
          Pick your path
        </span>
        <h3 className="font-bold mb-8">Schedule a demo</h3>
        <p className="text-fontsecondary mb-8">
          Contact us today to get paid faster and easier with our checkout
          platform.
        </p>
      </div>
      <form className="flex flex-col gap-4" id="onboard">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="flex flex-col gap-1 w-full">
            <label for="first" className="text-fontsecondary">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              name="first"
              id="first"
              className="border rounded-2xl px-4 py-2"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label for="last" className="text-fontsecondary">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Smith"
              name="last"
              id="last"
              className="border rounded-2xl px-4 py-2"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="flex flex-col gap-1 w-full">
            <label for="email" className="text-fontsecondary">
              Email
            </label>
            <input
              type="text"
              placeholder="johnsmith@gmail.com"
              name="email"
              id="email"
              className="border rounded-2xl px-4 py-2"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label for="phone" className="text-fontsecondary">
              Phone
            </label>
            <input
              type="text"
              placeholder="0424 073 944"
              name="phone"
              id="phone"
              className="border rounded-2xl px-4 py-2"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="flex flex-col gap-1 w-full">
            <label for="company" className="text-fontsecondary">
              Company Name
            </label>
            <input
              type="text"
              placeholder="John Smith Finance"
              name="company"
              id="company"
              className="border rounded-2xl px-4 py-2"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label for="job" className="text-fontsecondary">
              Job Title
            </label>
            <input
              type="text"
              placeholder="CEO"
              name="job"
              id="job"
              className="border rounded-2xl px-4 py-2"
            />
          </div>
        </div>
        <button className="w-40 bg-cta border border-cta text-white font-bold hover:text-cta hover:bg-white transition duration-300 mt-8">
          Get Paid Faster
        </button>
      </form>
    </div>
  );
};

export default SupplierForm;
