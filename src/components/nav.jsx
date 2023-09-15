import React from "react";
import { useState } from "react";
import "./nav.css";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import DeveloperModeOutlinedIcon from "@mui/icons-material/DeveloperModeOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      <div className="nav_container">
        <div className="nav_Logo">
          <span>AstroLaunch UI Pro</span>
        </div>
        {/*  */}
        <div className="nav_Right">
          <div className="pages-drop">
            <span>
              {" "}
              <LayersOutlinedIcon />
              Pages
              <ExpandMoreOutlinedIcon />
            </span>
            <div className="pages_details">
              <ul>
                <li>About us </li>
                <li>Landing Page</li>
                <li>Billing Page</li>
                <li>Blog Page</li>
                <li>Our Team</li>
                <li>Blog Post</li>
                <li>Marketing Page</li>
              </ul>
            </div>
          </div>

          <span>
            {" "}
            <LayersOutlinedIcon />
            Account
            <ExpandMoreOutlinedIcon />
          </span>
          <span>
            <DeveloperModeOutlinedIcon />
            Docs
          </span>
          <small>
            <GitHubIcon />
          </small>
          <button>GET STARTED</button>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            FREE DOWNLOAD
          </a>
          <MenuIcon
            className="menu"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
        </div>
      </div>
      <div className={`menu_mobile ${openMenu ? "active" : null}`}>
        <span>
          {" "}
          <LayersOutlinedIcon />
          Pages
        </span>
        <ul>
          <li>About us </li>
          <li>Landing Page</li>
          <li>Billing Page</li>
          <li>Blog Page</li>
          <li>Our Team</li>
          <li>Blog Post</li>
          <li>Marketing Page</li>
        </ul>
        <button className="mobile_btn">GET STARTED</button>
      </div>
    </nav>
  );
};

export default Nav;
