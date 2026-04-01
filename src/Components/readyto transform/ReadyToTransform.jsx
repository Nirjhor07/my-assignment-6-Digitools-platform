import React from "react";
import { GoDotFill } from "react-icons/go";

const ReadyToTransform = () => {
  return (
    <div className="bg-linear-to-r from-violet-600 to-purple-600 py-20 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready to Transform Your Workflow?
        </h2>

        {/* sub heading */}
        <p className="text-base-200 ">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br /> Start your free trial today.
        </p>

        {/* btns */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            className="btn btn-wide bg-white
           text-purple-600 border-white hover:bg-purple-50"
          >
            Explore Products
          </button>
          <button
            className="btn btn-outline btn-wide text-white
          border-white hover:bg-white hover:text-purple-600"
          >
            View Pricing
          </button>
        </div>

        {/* bottom Text */}
        <p className=" text-base-300 text-sm md:text-sm pt-4 flex justify-center items-center gap-2.5">
          16-day free trial
          <GoDotFill></GoDotFill> No credit card required
          <GoDotFill></GoDotFill> Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default ReadyToTransform;
