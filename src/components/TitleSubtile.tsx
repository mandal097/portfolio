import { TitleSubtitleProps } from "@/types";
import React from "react";

const TitleSubtile = ({
  title,
  subtitle,
  titleFontSize,
  width,
}: TitleSubtitleProps) => {
  return (
    <div className={`md:w-[740px] ${width} px-2 mx-auto py-8 pb-4`}>
      <h1
        className={`text-white font-medium ${titleFontSize} text-center leading-snug`}>
        {title}
      </h1>
      <p className="text-white opacity-80 text-[17px] text-center font-normal mt-5">
        {subtitle}
      </p>
    </div>
  );
};

export default TitleSubtile;
