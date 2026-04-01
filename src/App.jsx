import { Play } from "lucide";
import "./App.css";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Navbar from "./Components/NavBar/Navbar";
import Stats from "./Components/Stats/Stats";
import Cards from "./Components/cards/Cards";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import NewsLetter from "./Components/subcribe/NewsLetter";
import Footer from "./Components/footer/Footer";
import GetStarted from "./Components/getStartted/GetStarted";
import TransparentPricing from "./Components/transparentPricing/TransparentPricing";

//getting api data
const cartPromise = async () => {
  const res = await fetch("/public/cardApi.json");
  return res.json();
};

// getting getStarted Api
const getStartedPromise = async () => {
  const res = await fetch("/public/getStarted.json");
  return res.json();
};

//get the transparent pricing Api
const transparentPricingApiPromise = async () => {
  const res = await fetch("/public/simplePricing.json");
  return res.json();
};

function App() {
  // state for cartCount
  const [cardCount, setCardCount] = useState(0);
  // storing API's into variables
  const cart = cartPromise();
  //get started Api storing to variable
  const getStarted = getStartedPromise();
  // get the transparent pricing api
  const transparentPricingData = transparentPricingApiPromise();
  return (
    <>
      <header>
        {/* navbar has a count cart tab */}
        <Navbar cardCount={cardCount}></Navbar>
        {/* now the banner section will be added here--hero banner  */}
        <HeroBanner></HeroBanner>
      </header>
      <Stats></Stats>
      <main>
        {/* cards section */}
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <Cards
            cart={cart}
            cardCount={cardCount}
            setCardCount={setCardCount}
          ></Cards>
        </Suspense>

        {/* getStarted component */}
        <Suspense
          fallback={
            <>
              <span className="loading loading-bars loading-xs"></span>
              <span className="loading loading-bars loading-sm"></span>
              <span className="loading loading-bars loading-md"></span>
              <span className="loading loading-bars loading-lg"></span>
              <span className="loading loading-bars loading-xl"></span>
            </>
          }
        >
          <GetStarted getStarted={getStarted}></GetStarted>
        </Suspense>

        {/* transparentPricingApi component  */}
        <Suspense
          fallback={
            <>
              <span className="loading loading-bars loading-xs"></span>
              <span className="loading loading-bars loading-sm"></span>
              <span className="loading loading-bars loading-md"></span>
              <span className="loading loading-bars loading-lg"></span>
              <span className="loading loading-bars loading-xl"></span>
            </>
          }
        >
          <TransparentPricing
            transparentPricingData={transparentPricingData}
          ></TransparentPricing>
        </Suspense>

        {/* newsletter */}
        <NewsLetter></NewsLetter>
      </main>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
