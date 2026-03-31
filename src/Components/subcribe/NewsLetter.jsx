import React from "react";

const NewsLetter = () => {
  return (
    <div className="container mx-auto justify-center items-center ">
      <div className="card bg-base-200 p-30  mx-auto flex-col justify-center items-center mt-7 z-10">
        <h2 className="text-xl font-semibold mb-2">
          Subscribe to our Newsletter
        </h2>

        <p className="text-sm mb-4">Get the latest updates and offers.</p>

        <div className="gap-7 justify-center items-center ">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />
          <div className="mt-3 justify-center items-center flex">
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
