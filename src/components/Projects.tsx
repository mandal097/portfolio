/* eslint-disable @next/next/no-img-element */
import React from "react";
import TitleSubtile from "./TitleSubtile";
import { ProjectsCardProps } from "@/types";
import Image from "next/image";
import Aos from "aos";
import ProjectDetail from "./ProjectDetail";
import { projects } from "@/constants";

const ProjectCard = ({
  details,
  delay,
}: {
  details: ProjectsCardProps;
  delay: number;
}) => {
  const [show, setShow] = React.useState(false);

  const handleShow = () => {
    setShow(!show);
    document.body.style.overflowY = "hidden";
  };

  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay={`${delay}`}
        className="relative flex items-center justify-center h-[50vh] w-full  rounded-xl group overflow-hidden">
        <Image
          src={`/assets/projects/${details.image}`}
          alt="project image"
          objectFit="fill"
          layout="fill"
          className="object-contain rounded-xl group-hover:opacity-90 transition-all duration-100"
        />
        <div
          onClick={handleShow}
          className="translate-y-full group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-tr from-black/80 to-black/10 absolute inset-0">
          <div className="w-full h-full flex flex-col items-start justify-end p-8">
            <h3 className="text-xl text-white font-semibold tracking-wider">
              {details.project_title}
            </h3>
            <p className="text-white text-center text-sm">{details.subtitle}</p>
            <div className="flex items-center gap-1 flex-wrap mt-2">
              {details.technologies.map((item) => (
                <div key={item} className="flex items-center py-[2px] px-2 rounded-full bg-white hover:scale-110 hover:bg-[var(--orange)] cursor-pointer transition-all duration-500">
                  <span className="text-xs text-[var(--orange)] hover:text-white  font-medium transition-all duration-150">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {show && (
        <ProjectDetail
          show={show}
          setShow={setShow}
          handleShow={handleShow}
          details={details}
        />
      )}
    </>
  );
};

const Projects = ({ bg }: { bg: string }) => {
  return (
    <div
      id="projects"
      className={`w-full h-auto bg-[var(--bg)] ${bg} flex flex-col items-center justify-center  transition-all duration-200 pt-6`}>
      <TitleSubtile
        title="Projects"
        titleFontSize="text-[50px]"
        subtitle="Discover My Portfolio: A Journey Through My Web Development Projects. I invite you to explore these creations that reflect my commitment to turning ideas into reality."
      />
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        className="w-full md:px-14 xl:w-[1240px] p-4 pb-32 sm:px-10 mt-20  grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects?.map((project, index) => (
          <ProjectCard
            key={project.id}
            details={project}
            delay={(index + 1) * 200}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
