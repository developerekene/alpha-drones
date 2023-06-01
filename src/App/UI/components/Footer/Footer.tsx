import React from "react";
import "../Footer/Footer.css";
import { windowWidth } from "../MainContainer/MainContainer";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footermainDiv">
      <div className="logoDiv">
        <p className="logoP">Alpha</p>
        <p className="logoP">-</p>
        <p className="logoPi">Drones</p>
      </div>
      <div className="footerSecondDiv">
        <p className="para-nice" style={{ width: windowWidth / 3 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="para">
          <p>Quick Links</p>
          <ul>
            <li>
              <a href="#">Night Watch</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Sky Body Guard</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </p>
        <p className="para">
          <p>Quick Links</p>
          <ul>
            <li>
              <a href="#">Night Watch</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Sky Body Guard</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </p>
      </div>
      <div className="copyright">
        <p>2023 All Rights Reserved - Alpha Drones</p>
      </div>
    </div>
  );
};

export default Footer;
