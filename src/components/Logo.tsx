import React from "react";

const Logo = ({ display }: { display?: string }) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      if (window.scrollY < 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  return (
    <div
      className={`${
        display === "nav" && "hidden md:block"
      } cursor-pointer z-50`}>
      <a href="#home" className="font-semibold text-white text-3xl">
        Amarnath <span className="text-general-color">Mandal</span>
      </a>
    </div>
  );
};

export default Logo;
