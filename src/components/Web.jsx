import React from "react";

const Web = () => {
  return (
    <div className="section_Astro">
      <div className="Astro-Container webAstro">
        <div className="AsrtroLeft  webLeft">
          <h5>Open Source</h5>
          <big>Let's join forces for a better web!</big>
          <p>
            AstroLaunch UI is an open source and powerful design system that
            lets you create Ecommerce websites that your users will love.
          </p>
          <button>GET STARTED</button>
        </div>

        <div className="AstroRight">
          <img src="./github.png" alt="astro" />
        </div>
      </div>
    </div>
  );
};

export default Web;
