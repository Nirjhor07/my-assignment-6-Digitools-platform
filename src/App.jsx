import { Play } from "lucide";
import "./App.css";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Navbar from "./Components/NavBar/Navbar";
import Stats from "./Components/Stats/Stats";
import Cards from "./Components/cards/Cards";
import { Suspense, useState } from "react";

//getting api data
const cartPromise = async () => {
  const res = await fetch("/public/cardApi.json");
  return res.json();
};

function App() {
  const cart = cartPromise();

  //cart count update 
  const [cardCount , setCardCount]=useState(0);
  return (
    <>
      <header>
        <Navbar cardCount={cardCount} setCardCount={setCardCount}></Navbar>
        {/* now the banner section will be added here--hero banner  */}
        <HeroBanner></HeroBanner>
      </header>
      <Stats></Stats>
      <main>
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <Cards cart={cart} cardCount={cardCount} setCardCount={setCardCount}></Cards>
        </Suspense>
      </main>
    </>
  );
}

export default App;
