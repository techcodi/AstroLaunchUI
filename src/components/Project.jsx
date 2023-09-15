import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="s_project">
      <div className="project_conatiner">
        <div className="project_contents">
          <h4>Attention to hiqh-quality code</h4>
          <h2>Develop consistenly using Astro architecture principles</h2>
          <p>
            Using AstroLaunch UI you get everything you need to start creating
            your fully functional and responsive
          </p>
          <p className="pro-p"> Ecommerce website in days, not months.</p>

          <img src="./blocks.png" alt="blocks agenda" />
        </div>
      </div>
    </div>
  );
};

export default Project;
