import React from "react";

const GetCards = ({ getCards }) => {
  // destructuring
  const { id, title, description, icon } = getCards;
  //   console.log(getCards);
  return (
    <div className="card w-96 bg-blue-50 shadow-sm border border-blue-100 relative">
      {/* id in badge */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
        {id}
      </div>

      <div className="card-body flex flex-col items-center text-center">
        {/* Icon Circle */}
        <div className="w-16 h-16 bg-violet-200 rounded-full flex items-center justify-center mb-4">
          <img className="p-3" src={icon} />
        </div>

        {/* title getStarted card */}
        <h2 className="text-2xl font-bold mb-2">{title}</h2>

        {/* description */}
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default GetCards;
