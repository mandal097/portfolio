"use client";
import React from "react";
import Socials from "./Socials";
import Aos from "aos";

const HomeFirstPage = ({ bg }: { bg: string }) => {
  const [isMobView, setIsMobView] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (window.matchMedia("(max-width: 640px)").matches) {
      setIsMobView(true);
    }
  }, []);

  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      id="home"
      className={`w-screen m-auto h-[80vh] sm:h-screen flex sm:items-center sm:justify-center bg-[#16181c] ${bg} transition-all duration-200`}>
      <div className="w-full h-auto text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="md:mt-24">
            <p className="uppercase text-sm tracking-widest text-[var(--text-light)]">
              Let&apos;s build something together
            </p>
            <h1 className="py-4 text-[var(--text)]">
              Hi, I&apos;m <span className="text-[var(--blue)]">Amarnath</span>
            </h1>
            <h1 className="py-4 text-[var(--text)] -mt-3">
              A Full-Stack Web Developer
            </h1>
            <p className="py-4 text-gray-300 max-w-[90%] sm:max-w-[70%] m-auto">
              I&apos;m passionate about crafting captivating online experiences
              through web development. <br /> With a keen eye for design and a
              knack for coding, I&apos;ve dedicated myself to mastering the
              digital realm and bringing ideas to life on the web.
            </p>

            {/* socials links */}
            {!isMobView && <Socials width="max-w-[350px]" p="p-4" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFirstPage;
