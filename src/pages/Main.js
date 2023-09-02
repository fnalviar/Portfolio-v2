import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect, useState } from "react";

import CanvasBg from "../components/CanvasBg";
import CustomCursor from "../components/CustomCursor";
import Loader from "../components/Loader";
import SideNav from "../components/SideNav";
import StickyIcons from "../components/StickyIcons";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Landing from "./Landing";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";

function Main() {
  const [rotateSpeed, setRotateSpeed] = useState(0.5);

  const initRubberBandAnimation = () => {
    document.querySelectorAll(".rubberBand").forEach((el) => {
      el.addEventListener("mouseover", () => {
        el.classList.add("animated");
      });

      el.onanimationend = () => {
        el.classList.remove("animated");
      };
    });
  };

  useEffect(() => {
    document.body.classList += " overflow__body";
    initRubberBandAnimation();
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <CustomCursor />
      <CanvasBg rotateSpeed={rotateSpeed} />
      <div className="main__container">
        <SideNav />
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact setRotateSpeed={setRotateSpeed} />
        <Footer />
      </div>
      <StickyIcons />
      <div className="background__stars"></div>
      <Loader />
    </div>
  );
}

export default Main;
