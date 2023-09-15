import React from "react";
import "./Hero.css";
import BlurOnIcon from "@mui/icons-material/BlurOn";

const Hero = () => {
  return (
    <header>
      <div className="hero_container">
        <div className="hero_left">
          <div>
            <span>NEW</span>
            <span>
              {" "}
              <BlurOnIcon />
            </span>
            <span>ASTRO STARTER TEMPLATE</span>
          </div>
          <h1>
            The perfect foundation for your <br />{" "}
            <span className="hero-span"> Astro Project</span>
          </h1>
          <p>
            AstroLaunch UI is a free template designed to be both lightweight
            and feature-rich. It comes packed with <br /> everything you need to
            get your Online Store ready in no time.
          </p>
        </div>
        <div className="hero_right">
          <img
            src="https://www.creative-tim.com/astro/header.png"
            alt="hero-work"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
