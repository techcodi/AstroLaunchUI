import React from "react";
import "./Example.css";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const Example = () => {
  return (
    <section className="mainTemp">
      <div className="exampleHead">
        <h6>Get inspired!</h6>
        <p>Example Pages</p>
        <small>
          You can start using our fully coded Ecommerce page examples if you
          want to get inspired or show something to your client.
        </small>
      </div>
      <div className="example_container">
        <div className="example_flex">
          <div className="template">
            <img src="./landing-page.jpg" alt="Landing page" />
            <h3>Landing Page</h3>
            <p>
              Designed to introduce the website's purpose and encourage the user
              to take an action.
            </p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              VIEW PAGE
              <TrendingFlatIcon />
            </a>
          </div>
        </div>

        <div className="example_flex">
          <div className="template">
            <img src="./dashboard-page.jpg" alt="Landing page" />
            <h3>Dashboard Page</h3>
            <p>
              It's designed to give the user all the information they need to
              make a purchase decision
            </p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              VIEW PAGE <TrendingFlatIcon />
            </a>
          </div>
        </div>

        <div className="example_flex">
          <div className="template">
            <img src="./billing-page.jpg" alt="Landing page" />
            <h3>Billing Page</h3>
            <p>
              Includes a summary of the items in the cart and a form for billing
              and shipping information.
            </p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              VIEW PAGE
              <TrendingFlatIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Example;
