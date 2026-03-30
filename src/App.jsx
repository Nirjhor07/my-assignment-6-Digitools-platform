import { Play } from "lucide";
import "./App.css";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Navbar from "./Components/NavBar/Navbar";
import Stats from "./Components/Stats/Stats";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* now the banner section will be added here--hero banner  */}
        <HeroBanner></HeroBanner>
      </header>
      <Stats></Stats>
    </>
  );
}

export default App;
