import React from "react";
import "./Summary.css";

const Summary = () => {
  return (
    <article>
      <div className="article_container">
        <div className="a_first_div">
          <div className="first_div_left">
            <img src="./palette.png" alt="pallete plan" />
          </div>

          {/*  */}
          <div className="r_div">
            <h4>Attention to beautiful design</h4>
            <h2>Awesome color palette, variables & elements foundation.</h2>
            <p>
              Customize your colors, sizes, spacing or typography in minutes so
              they can <br /> fit perfectly for your brand. Spend time creating
              dApps logic and UX, our tools take care of the rest.
            </p>
          </div>
        </div>

        {/*  */}

        <div className="a_second_div">
          <div className="l_div">
            <h4>By developers, for entrepreneurs</h4>
            <h2>Don't write from scratch. Coded examples are included.</h2>
            <p>
              Using our ecommerce starter template will save a lot of coding
              time , as it provides a solid foundation for the Online Store,
              allowing your team to focus on customizing and adding specific
              features to meet the needs of your particular project.
            </p>
          </div>

          <div className="second_div_right">
            <img src="./code.png" alt="pallete plan" />
          </div>

          {/*  */}
        </div>

        <div className="last_div">
          <h4>Powerful Ecommerce UI Tool</h4>
          <h2>AstroLaunch UI is the starting point for your next project!</h2>
          <p>
            Don’t spend hours reinventing the wheel! Our UI tool comes packed
            with everything you need
          </p>
          <p> for you Online Store.</p>
          <img src="./checkout.jpg" alt="Checkout Board" />
        </div>
      </div>
    </article>
  );
};

export default Summary;
