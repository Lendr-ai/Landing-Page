import React from "react";
import ReviewCard from "./ReviewCard";
import logo1 from "../assets/businesslogos/logo1.svg";
import logo2 from "../assets/businesslogos/logo2.svg";
import logo3 from "../assets/businesslogos/logo3.svg";

const Reviews = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <span className="text-xl text-ctasecondary w-fit rounded-2xl">
          Exceeding expectations
        </span>
        <h3 className="font-bold mb-8">Customer and Partner Testimonials</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <ReviewCard
          company="Innovation Digital"
          review="Integrating the Pay Later option into our business has been a game-changer. Not only have we seen a significant boost in sales, but our customers also love the flexibility it offers. It's a win-win for us and our clients!"
          img={logo1}
        />
        <ReviewCard
          company="Avery Davis"
          review="We implemented the Pay Later solution for our online store, and the integration process was seamless. Our customers appreciate the added convenience, and we've noticed an increase in repeat business. Highly recommended for other businesses looking to enhance their offerings."
          img={logo2}
        />
        <ReviewCard
          company="LevelUp Financial"
          review="By partnering with Lendr, we've gained a competitive edge in the e-commerce market. It's user-friendly, and our clients have responded positively to the option. It's an essential tool for any business wanting to stay ahead in today's market."
          img={logo3}
        />
      </div>
    </div>
  );
};

export default Reviews;
