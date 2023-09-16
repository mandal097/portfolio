/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { HiMiniGlobeAlt } from "react-icons/hi2";
import { VscGithub } from "react-icons/vsc";
import { RxExternalLink } from "react-icons/rx";
import { ProjectDetailsProps } from "@/types";
const ProjectDetail = ({
  show,
  setShow,
  handleShow,
  details,
}: ProjectDetailsProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const checkClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShow(false);
        document.body.style.overflowY = "scroll";
      }
    };

    document.addEventListener("mousedown", checkClick);
    return () => {
      document.removeEventListener("mousedown", checkClick);
    };
  }, [setShow]);

  const handleEscapeKey = React.useCallback(
    (e: any) => {
      if (e.key === "Escape") {
        setShow(false);
        document.body.style.overflowY = "scroll";
      }
    },
    [setShow]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [handleEscapeKey]);

  return (
    <div className="fixed top-0 right-0 bottom-0 z-50" ref={ref}>
      <div
        className="w-full sm:w-[480px] h-screen overflow-y-scroll p-8 bg-[var(--blue)] relative
      ">
        {/* bg-gradient-to-tr from-[var(--blue)] to-[var(--cyan)] */}
        <div
          onClick={handleShow}
          className="text-3xl text-[var(--text)] cursor-pointer">
          <MdOutlineArrowBack />
        </div>
        <h2 className="text-black text-2xl font-semibold mt-8">
          {details.project_title}
        </h2>
        <p className="text-gray-100 text-base font-light">{details.subtitle}</p>
        <div className="h-[30vh] md:w-full md:h-[40vh] flex items-center justify-center mt-1">
          <img
            src={`/assets/projects/${details.image}`}
            alt="project image"
            className="object-fill rounded-xl w-full h-full"
          />
        </div>
        <h2 className="text-black font-bold text-lg  mt-8">Description</h2>
        <p className="text-gray-100 text-sm font-light">
          {details.description}
        </p>
        <h2 className="text-black font-bold text-lg  mt-8">Technologies</h2>
        <div className="flex items-center flex-wrap mt-3 gap-2">
          {details?.technologies?.map((item) => (
            <div
              key={item}
              className="bg-white text-[var(--orange)] text-sm px-2 py-1 rounded-sm cursor-pointer hover:bg-[var(--orange)] hover:text-white hover:scale-105 transition-all duration-200">
              {item}
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-white font-normal text-lg  mt-8 flex items-center gap-2">
            <HiMiniGlobeAlt />
            Website
          </h2>
          <a
            href={details.website_link}
            target="_blank"
            className="py-2 text-black underline cursor-pointer text-sm font-bold">
            {details.website_link}
          </a>
        </div>
        <div>
          <h2 className="text-white font-normal text-lg  mt-8 flex items-center gap-2">
            <VscGithub />
            Github
          </h2>
          <a
            href={details.github_link}
            target="_blank"
            className="py-2 text-black underline cursor-pointer text-sm font-bold">
            {details.github_link}
          </a>
        </div>
        {details.backend_github_link && (
          <div>
            <h2 className="text-white font-normal text-lg  mt-8 flex items-center gap-2">
              <VscGithub />
              Github backend
            </h2>
            <a
              href={details.backend_github_link}
              target="_blank"
              className="py-2 text-black underline cursor-pointer text-sm font-bold">
              {details.backend_github_link}
            </a>
          </div>
        )}
        <div className="w-full h-10 bg-[var(--orange)] text-white rounded-xl flex items-center justify-center my-4 cursor-pointer">
          <a
            href={details.website_link}
            target="_blank"
            className="text-white font-normal text-lg flex items-center gap-2">
            Visit Site
            <RxExternalLink />
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
