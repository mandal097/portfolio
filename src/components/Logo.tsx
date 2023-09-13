import Link from "next/link";
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
      <Link href="#home" className="font-semibold text-white text-3xl">
        Amarnath <span className="text-general-color">Mandal</span>
      </Link>
    </div>
  );
};

export default Logo;
