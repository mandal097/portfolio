import React from "react";
import "./styles.css";
const Loader = () => {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div className="l-loader">
      <div className="text">
        <span className="letter">G</span>
        <span className="letter">e</span>
        <span className="letter">e</span>
        <span className="letter">k</span>
        <span className="letter">s</span> &nbsp;
        <span className="letter letter-i">
          <span className="fake"></span>
          <span className="letter">I</span>
        </span>
        <span className="letter">n</span>
        <span className="letter">v</span>
        <span className="letter">e</span>
        <span className="letter">n</span>
        <span className="letter">t</span>
        <span className="letter">i</span>
        <span className="letter">o</span>
        <span className="letter">n</span>
      </div>
    </div>
  );
};

export default Loader;
