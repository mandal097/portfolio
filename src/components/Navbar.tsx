"use client";
import React from "react";
import div from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  const navRef: React.MutableRefObject<any> = React.useRef();
  const [showNav, setShowNav] = React.useState(false);

  const handleShow = () => {
    setShowNav(!showNav);
  };
  const closeNav = () => {
    setShowNav(false);
  };

  React.useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    let prevScrollPosition = window.pageYOffset;
    const handler = () => {
      if (media.matches) {
        let currentScrollPosition = window.pageYOffset;
        if (prevScrollPosition > currentScrollPosition) {
          navRef.current.style.position = "fixed";
          navRef.current.style.top = "0";
          navRef.current.style.left = "0";
        } else {
          navRef.current.style.position = "fixed";
          navRef.current.style.top = "-55px";
          navRef.current.style.left = "0";
          navRef.current.style.background = "transparent";
        }
        prevScrollPosition = currentScrollPosition;
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      ref={navRef}
      className="px-4 h-[60px] bg-[#16181c] md:bg-transparent md:px-12 fixed top-0 right-0 left-0 w-full flex items-center justify-between z-40  md:backdrop-blur-sm">
      {/* logo */}
      <Logo display="nav" />
      {/* navs */}
      <div
        className={`${
          !showNav && "hidden"
        } fixed top-0 left-0 bottom-0 right-0 h-screen w-screen items-center justify-center  gap-8 z-50 "
         md:flex md:h-fit md:relative md:w-auto`}>
        <ul className="uppercase relative h-screen flex flex-col items-center justify-center gap-8 md:flex-row md:h-fit bg-black/90 md:bg-transparent">
          <li
            onClick={closeNav}
            style={{ animationDelay: "0" }}
            className={`nav_hover text-gray-50 text-sm font-mediu  ${
              showNav && "animate_to_right"
            }`}>
            <Link href='#projects'>projects</Link>
          </li>
          <li
            onClick={closeNav}
            style={{ animationDelay: "100ms" }}
            className={`nav_hover text-gray-50 text-sm font-medium  ${
              showNav && "animate_to_left"
            }`}>
            <Link href='#skills'>skills</Link>
          </li>
          <li
            onClick={closeNav}
            style={{ animationDelay: "200ms" }}
            className={`nav_hover text-gray-50 text-sm font-mediu  ${
              showNav && "animate_to_right"
            }`}>
            <Link href='#about'>about</Link>
          </li>
          <li
            onClick={closeNav}
            style={{ animationDelay: "300ms" }}
            className={`nav_hover text-gray-50 text-sm font-mediu  ${
              showNav && "animate_to_left"
            }`}>
            <Link href='#socials'>socials</Link>
          </li>
          <div
            onClick={handleShow}
            className="absolute top-5 right-4 bg-black p-2 text-gray-100 font-bold text-xl cursor-pointer md:hidden">
            <IoCloseSharp />
          </div>
        </ul>
      </div>
      {/*  */}
      <div
        onClick={handleShow}
        className="bg-black p-2 text-gray-100 font-bold text-xl cursor-pointer md:hidden ml-auto">
        <GiHamburgerMenu />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
