import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const FeaturePricing = ({ feature }) => {
  console.log(feature);
  return (
    <ul className="mt-2 flex flex-col gap-2 text-xs text-left">
      <div className="flex gap-3">
        <FaCircleCheck />
        <li>{feature}</li>
      </div>
    </ul>
  );
};

export default FeaturePricing;
