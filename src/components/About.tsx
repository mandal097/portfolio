import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = ({ bg }: { bg: string }) => {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      id="about"
      className={`px-4 md:px-12 lg:px-28 w-full flex-col-reverse md:flex-col lg:flex-row pt-24 pb-36 h-auto flex bg-[var(--bg-blue)] ${bg} gap-12 transition-all duration-200`}>
      {/* left */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="w-full lg:w-[70%] flex flex-col items-start gap-3 p-2 px-4">
        <h1 className="font-semibold tracking-tight text-gray-50">
          About Me...
        </h1>
        <p className="font-light text-gray-50 opacity-60 text-3xl pb-6">
          Who I Am
        </p>

        <p className="text-gray-50 text-[17px] font-normal leading-8">
          I am passionate Full-Stack Web Developer with a specialization in the
          MERN (MongoDB, Express.js, React.js, Node.js) stack. I&apos;m
          dedicated to crafting dynamic and feature-rich web applications that
          not only impress visually but also deliver a seamless user experience.
        </p>
        <p className="text-gray-50 text-[17px] font-normal leading-8">
          I specialize in building mobile responsive front-end UI applications
          that connect with API’s and other backend technologies. I’m passionate
          about learning new technologies and understand there is more than one
          way to accomplish a task. Though I am most proficient in building
          front-end applications using HTML, CSS, Javascript, and React, I am a
          quick learner and can pick up new tech stacks as needed. I believe
          that being a great developer is not using one specific language, but
          choosing the best tool for the job.
        </p>
        <Link href="/#projects">
          <p className="py-2 text-white underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </Link>
      </div>
      {/* right */}

      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="w-full lg:w-[30%] py-0 flex items-center justify-center">
        <Image
          src="/assets/young-man-sitting.png"
          alt="image"
          width={800}
          height={800}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default About;
