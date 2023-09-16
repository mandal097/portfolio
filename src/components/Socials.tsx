import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SocialsProps } from "@/types";
import Aos from "aos";

const Socials = ({ width, p }: SocialsProps) => {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={`flex items-center justify-between ${width} m-auto py-5`}>
      <a
        href="https://www.linkedin.com/in/amarnath-kumar-mandal-228707224/"
        target="_blank"
        rel="noreferrer"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="50">
        <div
          className={`rounded-full shadow-lg shadow-gray-800 ${p} cursor-pointer hover:scale-110 ease-in border-2 hover:bg-gray-50 hover:text-black border-white duration-300 text-white`}>
          <FaLinkedinIn />
        </div>
      </a>
      <a
        href="https://github.com/mandal097"
        target="_blank"
        rel="noreferrer"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="100">
        <div
          className={`rounded-full shadow-lg shadow-gray-800 ${p} cursor-pointer hover:scale-110 ease-in border-2 hover:bg-gray-50 hover:text-black border-white duration-300 text-white`}>
          <FaGithub />
        </div>
      </a>
      <a
        href="https://instagram.com/_mandal097___?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D "
        target="_blank"
        rel="noreferrer"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="200">
        <div
          className={`rounded-full shadow-lg shadow-gray-800 ${p} cursor-pointer hover:scale-110 ease-in border-2 hover:bg-gray-50 hover:text-black border-white duration-300 text-white`}>
          <FaInstagram />
        </div>
      </a>
      <a
        href="mailto:amarnathkumar097.ak@gmail.com"
        target="_blank"
        rel="noreferrer"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="300">
        <div
          className={`rounded-full shadow-lg shadow-gray-800 ${p} cursor-pointer hover:scale-110 ease-in border-2 hover:bg-gray-50 hover:text-black border-white duration-300 text-white`}>
          <AiOutlineMail />
        </div>
      </a>
      <a
        href="tel:8826764772"
        target="_blank"
        rel="noreferrer"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="400">
        <div
          className={`rounded-full shadow-lg shadow-gray-800 ${p} cursor-pointer hover:scale-110 ease-in border-2 hover:bg-gray-50 hover:text-black border-white duration-300 text-white`}>
          <BsFillPersonLinesFill />
        </div>
      </a>
    </div>
  );
};

export default Socials;
