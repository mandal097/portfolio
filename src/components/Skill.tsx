import { skills } from "@/constants";
import { SkillCardProps } from "@/types";
import Aos from "aos";
import Image from "next/image";
import React from "react";

const SkillCard = ({ skill }: { skill: SkillCardProps }) => {
  return (
    <div className="p-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-200 bg-[var(--text-light)]">
      <div className="flex flex-col justify-center items-center">
        <div className="m-auto">
          <Image
            src={`/assets/skills/${skill.icon}`}
            width={40}
            height={40}
            alt="icons"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="capitalize">{skill.language}</h3>
        </div>
      </div>
    </div>
  );
};

const Skill = ({ bg }: { bg: string }) => {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      id="skills"
      className={`mx-auto flex flex-col justify-center h-auto bg-[var(--bg-light)] py-7 px-5 sm:px-14 pb-28 ${bg}`}>
      <h2
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="py-8 text-center text-[var(--text)]">
        Skills And Technology
      </h2>
      <div
        data-aos="zoom-out-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="mx-auto w-full lg:w-[1000px] grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-5 md:gap-5 p-5 rounded-xl bg-[var(--bg)]">
        {skills?.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
