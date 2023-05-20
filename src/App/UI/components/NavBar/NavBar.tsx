import * as React from "react";
import "../NavBar/NavBar.css";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className="navBar">
      <div >
        <a className="logoDiv" href="/">
          <p style={{color: "#ffffff"}}>Alpha</p>
          <p>-</p>
          <p>Drones</p>
        </a>
        
      </div>
      <div>
        <ul className="navUl">
          <li className="navUlLi">
            <a className="navUlA" href="/about">
              About Me
            </a>
          </li>
          <li className="navUlLi">
            <a className="navUlA" href="/contact">
              Contact
            </a>
          </li>
          <li className="navUlLi">
            <a className="navUlA" href="/product">
              Product
            </a>
          </li>
          <li className="navUlLi">
            <a className="navUlA" href="/services">
              Services
            </a>
          </li>
          <li className="navUlLi">
            <a className="navUlA" href="/pricing">
              Pricing
            </a>
          </li>
        </ul>
      </div>
      <div >
        <ul className="lastSection">
          <li className="navUlLi">
            <a className="navUlA" href="/pricing">
              Contact Us
            </a>
          </li>
          <li className="navUlLi">
            <a className="navUlA" href="/pricing">
              Subscribe
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
