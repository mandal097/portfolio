/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./styles.css";
const Loader = () => {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div className="l-loader">
      <div className="img">
        <img src="/assets/young-man-sitting.png" alt="boy-with-laptop" />
      </div>
      <div className="text">
        <span className="letter">L</span>
        <span className="letter">o</span>
        <span className="letter">a</span>
        <span className="letter">d</span>
        <span className="letter letter-i">
          <span className="fake"></span>
          <span className="letter">i</span>
        </span>
        <span className="letter">n</span>
        <span className="letter">g</span>
      </div>
    </div>
  );
};

export default Loader;
