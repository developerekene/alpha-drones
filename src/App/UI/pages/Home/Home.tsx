import React from "react";
import { Button, colors } from "@mui/material";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Assets } from "../../../utils/Assets";
import NavBar from "../../components/NavBar/NavBar";
import "../Home/Home.css";

const Home: React.FC<any> = ({}) => {
  return (
    <div>
      <MainContainer
        navView={<NavBar />}
        backgroundImage={`${Assets.images.homeBackground}`}
        headerTitle={"King of Birds"}
        subTitle={
          "With over 1000 drones at your service, Alpha - Drones can get your goods and services to you faster, cover all your events and still have time to watch over your home while you sleep."
        }
        buttonView={
          <a href="/bookings">
            <button className="buttonMain">Book us for an Event</button>
          </a>
        }
        secondButtonView={
          <a href="">
            <button className="secondButtonMain">See our Album</button>
          </a>
        }
      />
      <div>
        <div className="middleContainerDiv">
          <h2 className="middleHeading">Say Hi to</h2>
          <h2 className="middleParagraph">DJI Mini 2 SE</h2>
        </div>
        <div className="droneImageDiv">
          <img
            src={`${Assets.images.homeMainDrone}`}
            width={"100%"}
            height={500}
          />
        </div>
        <div className="titleDiv">
          <div>
            <img src={`${Assets.images.thermalCamera}`} />
            <h3 className="headings">Thermal Camera</h3>
            <p className="paragraph">
              A thermal imaging camera is a type of the thermographic camera
              used in firefighting
            </p>
          </div>
          <div>
            <img src={`${Assets.images.roboticArm}`} />
            <h3 className="headings">Robotic platform</h3>
            <p className="paragraph">
              ROP is aims to make hardware designs of robots available under an
              Open Hardware license .
            </p>
          </div>
          <div>
            <img src={`${Assets.images.mpCamera}`} />
            <h3 className="headings">48 MP Camera</h3>
            <p className="paragraph">
              For most photos, the quad-pixel sensor combines every four pixels
              into one large quad pixel..
            </p>
          </div>
          <div>
            <img src={`${Assets.images.fiveG}`} />
            <h3 className="headings">5G Internet Connection</h3>
            <p className="paragraph">
              It is a new global wireless standard after 1G, 2G, 3G, and 4G
              networks
            </p>
          </div>
        </div>
        <div className="buttonMiddle">
          <a href="#">
            <button className="buttonMainOrder">Order a Personal Drone</button>
          </a>
        </div>
        <div className="contactDiv">
          <div>
            <img src={`${Assets.images.contact}`} />
          </div>
          <div className="contactForm">
            <h2 className="contactDivP">
              TELL US ABOUT YOUR INTERESTS AND WE WILL BE HAPPY TO GET BACK TO
              YOU SHORTLY.
            </h2>

            <input className="inputHome" placeholder="Full Name" />
            <input className="inputHome" placeholder="Email" />
            <input className="inputHome" placeholder="Title" />
            <input className="inputHome" placeholder="Message" />

            <a href="#">
              <button className="buttonMainContact">
                Or send us a WhatsApp message
              </button>
            </a>
          </div>
        </div>
        <div>
        <div className="middleContainerDiv">
          <h2 className="middleHeading">Explore what we offer</h2>
          {/* <h2 className="middleParagraph">DJI Mini 2 SE</h2> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
