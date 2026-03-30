import React from "react";

const Stats = () => {
  const stats = [
    {
      number: "50K+",
      label: "Active Users",
    },
    {
      number: "200+",
      label: "Premium Tools",
    },
    {
      number: "4.9",
      label: "Rating",
    },
  ];

  return (
    <div className="bg-linear-to-r from-violet-600 to-purple-600 py-16 ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </h2>
              <p className="text-lg text-violet-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
