import React from "react";
import hero from "../images/illustration-hero.svg";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-desc">
        <h1 className="hero-h1">A Simple Bookmark Manager</h1>

        <p className="hero-p">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="button-block">
          <button className="btn btn-chrome">Get it on Chrome</button>
          <button className="btn btn-firefox">Get it on Firefox</button>
        </div>
      </div>
      <div className="hero-img">
        <img src={hero} alt="hero" />
        <div className="hero-img-bg"></div>
      </div>
    </div>
  );
};

export default Hero;
