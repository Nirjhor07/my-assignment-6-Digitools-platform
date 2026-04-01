import React, { use } from "react";
import PricingCards from "./PricingCards";

const TransparentPricing = ({ transparentPricingData }) => {
  //load the pricing data
  const pricingCards = use(transparentPricingData);
  //   console.log(pricingCards);
  return (
    <div className="mx-auto mt-7 bg-base-200 p-4 rounded-xl mb-3 container text-center space-y-2.5">
      <h1 className="text-5xl font-bold">Simple, Transparent Pricing</h1>
      <p className="text-sm text-base-700">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      <div className="flex gap-5 flex-wrap mx-auto justify-center items-center p-4">
        {pricingCards.map((pCards) => (
          <PricingCards key={pCards.id} pCards={pCards}></PricingCards>
        ))}
      </div>
    </div>
  );
};

export default TransparentPricing;
