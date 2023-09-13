import React from "react";
import Logo from "./Logo";
import TitleSubtile from "./TitleSubtile";
import Socials from "./Socials";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div id="socials" className="bg-[#16181c] py-6 pb-4 w-auto">
        <div
          onClick={scrollToTop}
          className="h-12 w-12 -mt-12 bg-gray-200 rounded-full mx-auto flex items-center justify-center text-xl text-[var(--cyan)] cursor-pointer hover:scale-105">
          <FaArrowUp />
        </div>
        <div className="bg-[var(--bg)] w-full flex flex-col items-center justify-center pb-2">
          <TitleSubtile
            titleFontSize="text-[44px]"
            title="Let's connect"
            subtitle="I'm excited to learn more about your web development needs and work together to create exceptional, cutting-edge web applications!"
          />
        </div>

        <Socials width="max-w-[350px]" p="p-4" />
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <p className="text-center  text-white opacity-20 text-sm mt-6">
          Made with ❤ by Amarnath kumar mandal
        </p>
      </div>
    </>
  );
};

export default Footer;
