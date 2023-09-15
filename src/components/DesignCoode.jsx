import React from "react";
import "./DesignCode.css";
import CountUp from "react-countup";

const DesignCoode = () => {
  return (
    <aside>
      <div className="a_container">
        <div className="a_first_div">
          <h4>Fully Coded Components based in Astro</h4>
          <h2>From idea to design. From design to code. From code to live.</h2>
          <p>
            All the sections and pages made with these elements <br /> will be
            fully responsive and will look beautiful on all <br /> types of
            screens, including phones, tables, or desktops.
          </p>
        </div>

        <div className="a_second_div_flex">
          <div className="">
            {" "}
            <div className="second_div_flex_left">
              <div className="first_countUp">
                <span className="sapn_countUp">
                  <CountUp start={0} end={140} duration={30} />+
                </span>
                <p>Coded Elements</p>
                <p className="countUp_s_p">
                  From buttons, to inputs, navbars, alerts, tabels, cards or
                  charts.
                </p>
              </div>
              {/*  */}
              <div className="first_countUp">
                <span className="sapn_countUp">
                  <CountUp start={0} end={10} duration={50} />+
                </span>
                <p>Example Pages</p>
                <p className="countUp_s_p">
                  Save months of work when you use our pre-made pages.
                </p>
              </div>
            </div>
          </div>
          {/* ============================== */}
          <div className="second_div_flex_left_dowm">
            <div className="second_div_flex_left">
              <div className="first_countUp">
                <span className="sapn_countUp">
                  <CountUp start={0} end={40} duration={40} />+
                </span>
                <p>Design Blocks</p>
                <p className="countUp_s_p">
                  Mix the already made sections and unleash your creativity.
                </p>
              </div>
              {/*  */}
              <div className="first_countUp">
                <span className="sapn_countUp">
                  <CountUp start={0} end={30} duration={30} />+
                </span>
                <p>Global Styles</p>
                <p className="countUp_s_p">
                  Colors, typography system, shadows, and blur effects are ready
                  to be used.
                </p>
              </div>
            </div>
            {/* ============================== */}
          </div>
          <div className="second_div_flex_right">
            <img src="./components.png" alt=" comonenys " />
          </div>
        </div>

        {/*  */}
      </div>
    </aside>
  );
};

export default DesignCoode;
