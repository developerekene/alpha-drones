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
        <p>khfsugiusgdcusg</p>
        <i className="fa-sharp fa-regular fa-drone"></i>
      </div>
    </div>
  );
};

export default Home;
