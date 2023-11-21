import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../Components/Footer/Footer";
AOS.init();

const MainLayout = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
     
  );
};

export default MainLayout;
