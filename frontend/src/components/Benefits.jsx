import React from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaLevelDownAlt, FaMoneyBill } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import BenefitBox from "./BenefitBox";

const Benefits = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <span className="text-xl text-ctasecondary w-fit rounded-2xl">
          Exceeding expectations
        </span>
        <h3 className="mb-8 font-bold">Bring your vision to life with us</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <BenefitBox
          icon={<BsFillLightningChargeFill className="text-yellow-400" />}
          title="40% faster"
          content="Say goodbye to the endless wait for payments and hello to a 40% faster way to collect what you're owed. Our cutting-edge pay later function empowers your business to offer convenient payment terms to your customers."
          cta="Learn More"
        />
        <BenefitBox
          icon={<FaLevelDownAlt className="text-blue-400" />}
          title="50% reduction"
          content="Revolutionise your payment process with a 50% reduction in check payments. Embrace efficiency like never before with our innovative solution that slashes your reliance on checks by a whopping 50%."
          cta="See How"
        />
        <BenefitBox
          icon={<FaMoneyBill className="text-green-400" />}
          title="$1.5b"
          content="Say goodbye to sluggish payment methods and hello to accelerated growth. Join the future of seamless payments and take your business to new heights today."
          cta="Learn More"
        />
        <BenefitBox
          icon={<CgDanger className="text-orange-400" />}
          title="Zero"
          content="Partner with us for a risk-free financial journey. Say goodbye to credit uncertainties and hello to a secure future. Join us today for a worry-free business experience."
          cta="See How"
        />
      </div>
    </div>
  );
};

export default Benefits;
