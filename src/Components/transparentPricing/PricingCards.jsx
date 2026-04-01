import React from "react";
import FeaturePricing from "./FeaturePricing";

const PricingCards = ({ pCards }) => {
  //destructuring
  const { title, subtitle, price, duration, badge, features, buttonText } =
    pCards;
  //   console.log(pCards);
  return (
    <div
      className={`card w-96 shadow-sm flex flex-col ${badge ? " bg-violet-400 text-white " : "bg-base-100"}`}
    >
      <div className="card-body flex flex-col">
        {badge && (
          <span className="badge badge-xs badge-warning mx-auto">{badge}</span>
        )}
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        {/* subtitle */}
        <p className="text-left">{subtitle}</p>

        <p className="text-right">
          ${price}/{duration}
        </p>

        <div>
          {features.map((feature, index) => (
            <FeaturePricing key={index} feature={feature}></FeaturePricing>
          ))}
        </div>

        <div className="mt-6">
          <button
            className={`${
              badge
                ? "btn btn-ghost btn-block rounded-2xl text-violet-700 bg-white"
                : "btn btn-primary btn-block rounded-2xl text-white"
            }`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
