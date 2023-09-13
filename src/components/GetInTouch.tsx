import React from "react";
import TitleSubtile from "./TitleSubtile";
import { IoSendSharp } from "react-icons/io5";

const GetInTouch = () => {
  return (
    <div>
      <div className="w-full h-auto bg-[var(--bg)] flex flex-col items-center justify-center pb-6">
        <TitleSubtile
          titleFontSize="text-[48px]"
          width="lg:w-[1000px]"
          title="Get to know us better!"
          subtitle="It is a pleasure to have you on our website. Let us know if there's an opportunity to do something together."
        />
        <button className="btn gap-7 group bg-general-color text-white hover:text-general-color border-general-color  hover:bg-white hover:border-white hover:gap-3 transition-all duration-200">
          <a
            href="mailto:amarnathkumar097.ak@gmail.com"
            className="group:hover:text-[var(--bg-light)]">
            Drop a message
          </a>
          <IoSendSharp />
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
