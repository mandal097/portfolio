"use client";
import React from "react";
import TitleSubtile from "@/components/TitleSubtile";
import Footer from "@/components/Footer";
import AOS from "aos";
import Logo from "@/components/Logo";
import Loader from "@/components/Loader/Loader";
import HomeFirstPage from "@/components/HomeFirstPage";
import Skill from "@/components/Skill";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GetInTouch from "@/components/GetInTouch";

const Home = () => {
  const [bg, setBg] = React.useState("bg-[var(--bg)]");
  // const [showLoader, setShowLoader] = React.useState(true);

  React.useEffect(() => {
    AOS.init();
  }, []);

  React.useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setShowLoader(false);
  //   }, 2000);
  // }, []);

  React.useEffect(() => {
    const handler = () => {
      //1st section
      if (window.scrollY < 50) {
        setBg("lg:bg-[var(--bg)]");
        //2nd section
      } else if (window.scrollY >= 500 && window.scrollY < 1200) {
        setBg("lg:bg-[var(--bg-blue)]");
        //third section
      } else if (window.scrollY >= 1200 && window.scrollY < 2800) {
        setBg("lg:bg-[var(--cyan)]");
        //4th section
      } else if (window.scrollY >= 2800 && window.scrollY < 3500) {
        setBg("lg:bg-[var(--bg-light)]");
        // client section
      } else if (window.scrollY >= 3500 && window.scrollY < 6000) {
        setBg("lg:bg-[var(--bg-light)]");
        // setBg("lg:bg-rose-900");
      } else if (window.scrollY >= 7100 && window.scrollY < 7900) {
        setBg("lg:bg-[var(--bg-light)]");
      } else {
        setBg("lg:bg-[var(--bg-light)]");
      }
      // console.log(window.scrollY);
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  // if (showLoader) return <Loader />;
  return (
    <>
      <div className={`overflow-hidden`}>
        {/* hero section */}
        <div className="px-4 h-[60px] bg-[var(--bg)] items-center md:hidden flex">
          <Logo />
        </div>
        <HomeFirstPage bg={bg} />
        <About bg={bg} />
        <Projects bg={bg} />
        <GetInTouch />
        <Skill bg={bg} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
