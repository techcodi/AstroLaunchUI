import React from "react";
import "./Plans.css";

const Plans = () => {
  return (
    <section className="s-paln">
      <div className="plan_container">
        <div className="planHead">
          {" "}
          <h2>Pick the best plan for you</h2>
          <p>
            You have Free Unlimited Updates and Premium Support on each package.
          </p>
        </div>
        <div className="plan_form">
          <div className="first_card">
            <div className="card_top">
              <p>Open Source</p>
              <h4>FREE</h4>
            </div>
            <div className="card_down">
              <small>Documentation</small>
              <small>20 Components</small>
              <small>10 Blocks</small>
              <small>3 Example Pages</small>
              <button className="btn-primary">DOWNLOAD</button>
            </div>
          </div>
          {/*  */}

          <div className="first_card card_right">
            <div className="card_top">
              <p>Pro Version</p>
              <h4>$99</h4>
            </div>
            <div className="card_down">
              <small>Documentation</small>
              <small>140+ Components</small>
              <small>30+ Blocks</small>
              <small>10+ Example Pages</small>
              <button className="btn">GET ACCESS</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
