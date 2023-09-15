import React from "react";
import "./Allwork.css";
import BorderInnerIcon from "@mui/icons-material/BorderInner";

const Allwork = () => {
  return (
    <section>
       <div className="work_head">
          <big>Design & Code by</big>
          <span>
            <BorderInnerIcon />
          </span>
          <span>Creative Tim</span>
        </div>
      <div className="work_container grid">
       
        <div className="work">
          <img src="./icon1.png" alt="for dev" />
          <h4>For Designers</h4>
          <p>This template comes packed with designer files based on Figma.</p>
        </div>
        <div className="work">
          <img src="./icon2.png" alt="for dev" />
          <h4>For Develpers</h4>
          <p>
            Save months of work when you use our fully coded components and
            pages.
          </p>
        </div>
        <div className="work">
          <img src="./icon3.png" alt="for dev" />
          <h4>For Store Owners</h4>
          <p>
            Save time and money by helping your team focus on customization and
            features..
          </p>
        </div>
      </div>
    </section>
  );
};

export default Allwork;
