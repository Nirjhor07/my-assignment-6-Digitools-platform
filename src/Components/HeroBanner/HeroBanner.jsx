import React from "react";
import Banner from "../../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";
import { GoDot } from "react-icons/go";

const HeroBanner = () => {
  return (
    <div className="container mx-auto items-center justify-center">
      <div className="hero bg-base-200 min-h-screen ">
        <div className="flex flex-col space-y-2.5 lg:flex-row-reverse gap-20 ">
          <img className="w-full" src={Banner} />

          <div className="space-y-2.5 text-center md:text-left">
            <p className="lg: badge bg-violet-200 p-4 text-violet-700 [text-shadow:0_0_10px_#a855f7] font-bold">
              <GoDot></GoDot> New:
              AI-Powered Tools Available
            </p>
            <div className="space-y-2.5 text-center md:text-left">
              <h1 className="text-3xl lg:text-7xl font-bold mb-4">
                Supercharge Your{" "}
              </h1>
              <h1 className="text-3xl lg:text-7xl font-bold">
                Digital Workflow{" "}
              </h1>
              <p className="py-6 text-[#627382]">
                Access premium AI tools, design assets, templates, and
                productivity <br /> software—all in one place. Start creating
                faster today. <br /> Explore Products
              </p>
              <div className="gap-4 sm:flex items-center ">
                <button className="btn btn-primary rounded-2xl">
                  Get Started
                </button>

                {/* sorry jhankar vhai lucid icon kaj kortesilona  */}
                <button className="btn btn-outline rounded-2xl">
                  <CiPlay1 /> Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
