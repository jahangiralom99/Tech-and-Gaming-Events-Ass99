import AboutTech from "../../Components/AboutTech/AboutTech";
import Banner from "../../Components/Banner/Banner";
import TechEvents from "../../Components/TechEvents/TechEvents";

const Home = () => {
  return (
    <div className="p-4">
      <Banner></Banner>
      <TechEvents></TechEvents>
      <AboutTech></AboutTech>
    </div>
  );
};

export default Home;
