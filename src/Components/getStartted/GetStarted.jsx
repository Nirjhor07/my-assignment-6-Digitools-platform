import React, { use } from "react";
import GetCards from "./GetCards";

const GetStarted = ({ getStarted }) => {
  //loading the api
  const getStartedCard = use(getStarted);
//   console.log(getStartedCard);

  return (
    <div className="mx-auto mt-7 bg-base-200 p-4 rounded-xl mb-3 container text-center space-y-2.5">
    <h1 className="text-5xl font-bold">Get Started in 3 Steps</h1>
    <p className="text-sm text-base-700">Start using premium digital tools in minutes, not hours.</p>

    <div className="flex gap-7 justify-center  flex-wrap items-stretch ">
        {
            getStartedCard.map(getCards=> <GetCards key={getCards.id} getCards={getCards}></GetCards>)
        }
    </div>
    </div>
  );
};

export default GetStarted;
