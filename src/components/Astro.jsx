import React from "react";
import "./Astro.css";

const Astro = () => {
  return (
    <div className="section_Astro">
      <div className="Astro-Container">
        <div className="AsrtroLeft">
          <h5>Frontend web architecture</h5>
          <big>What is Astro?</big>
          <p>
            Astro is an all-in-one web framework for building fast,
            content-focused websites. The framework is based in Astro Islands
            architecture, which represents a leading paradigm shift for frontend
            web architecture.
          </p>
          <button>GET STARTED</button>
        </div>

        <div className="AstroRight">
          <img src="./astro.png" alt="astro" />
        </div>
      </div>
    </div>
  );
};

export default Astro;
