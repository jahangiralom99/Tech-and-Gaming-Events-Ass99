import AboutTech from "../../Components/AboutTech/AboutTech";
import Banner from "../../Components/Banner/Banner";
import TechEvents from "../../Components/TechEvents/TechEvents";
import GamesEvent from "../GamesEvent/GamesEvent";

const Home = () => {
  return (
    <div className="p-4">
      <Banner></Banner>
      <TechEvents></TechEvents>
      <AboutTech></AboutTech>
      <GamesEvent></GamesEvent>
    </div>
  );
};

export default Home;
