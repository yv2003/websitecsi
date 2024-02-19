import React from "react";
import Swiper from "../components/gallery/Swiper";
// import Swiper from "../gallery/Swiper";
// import Footer from "../components/footer/Footer";
import Footer from "./Footer/Footer";
// import FindUS from "../FindUS";
import FindUS from "../components/FindUS";
import { Navbar } from "../components/navbar/Navbar";
import Landing from "../components/landing-page";
import AboutUs from "../components/AboutUs/AboutUs";
import Mission from "../components/mission";

export const Home = () => {
  return (
    <>
      <div className="bg-[url('../public/csi-website.png')] bg-fixed">
        {/* <Navbar /> */}
        <Landing />
        <AboutUs/>
        <Mission />
        <Swiper />
        <FindUS />
        {/* <Footer /> */}
      </div>
    </>
  );
};
