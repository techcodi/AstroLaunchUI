import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="first_footer">
          <div className="first_footer_left">
            <h2>AstroLaunch UI Pro</h2>
            <p>Easy to use for Tailwind CSS and Material Design.</p>
            <div className="footer_icon">
              <span>
                <FacebookOutlinedIcon />
              </span>
              <span>
                <TwitterIcon />
              </span>
              <span>
                <LanguageIcon />
              </span>
              <span>
                <GitHubIcon />
              </span>
              <span>
                <InstagramIcon />
              </span>
            </div>
          </div>
          <div className="footer_right">
            <div className="second_footer_right">
              <div className="footer_right_coln">
                <ul>
                  <li>Company</li>
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Github</li>
                  <li>Free Products</li>
                </ul>
              </div>
              <div className="footer_right_coln">
                <ul>
                  <li> Help and Support</li>
                  <li>Knowledge Center</li>
                  <li>Contact Us</li>
                  <li>Premium Support</li>
                  <li>Pricing</li>
                </ul>
              </div>
            </div>

            <div className="second_footer_right">
              <div className="footer_right_coln">
                <ul>
                  <li>Company</li>
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Github</li>
                  <li>Free Products</li>
                </ul>
              </div>
              <div className="footer_right_coln">
                <ul>
                  <li> Help and Support</li>
                  <li>Knowledge Center</li>
                  <li>Contact Us</li>
                  <li>Premium Support</li>
                  <li>Pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
