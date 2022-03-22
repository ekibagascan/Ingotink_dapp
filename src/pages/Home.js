import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";
import { about } from "../Data/About";
import { links } from "../Data/Link";
import Carousel from "../components/Carousel/Carousel";
import Roadmap from "../components/Roadmap/Roadmap";
import Team from "../components/Team/Team";
import Header from "../components/Header/Header";
import Sidebar from "../components/SideBar/Sidebar";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Info {...about} />
      <Carousel />
      <Roadmap />
      <Team />
      <Footer {...links} />
    </>
  );
};

export default Home;
