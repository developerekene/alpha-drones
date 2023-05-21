import React from "react";
import MainContainer, {
  windowWidth,
} from "../../components/MainContainer/MainContainer";
import NavBar from "../../components/NavBar/NavBar";
import { Assets } from "../../../utils/Assets";
import "../Bookings/Bookings.css";

const contactForm = (
  <div className="formDiv">
    <div
      className="formDivTwo"
      style={{
        width: windowWidth / 2,
      }}
    >
      <h2>Book for an Event with Alpha - Drone</h2>
      <p>Please fill out the form to book for an event with us.</p>
      <input className="input" type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" className="input" />
      <input type="email" placeholder="Email" className="input" />
      <input type="number" placeholder="Phone Number" className="input" />
      <input type="text" placeholder="Service" className="input" />
      <input type="date" placeholder="Date" className="input" />

      <div className="buttonMainDiv">
        <a href="#">
          <button 
          // onClick={} 
          className="buttonMain">Book My Event</button>
        </a>
      </div>
    </div>
  </div>
);
const Bookings: React.FC<any> = () => {
  return (
    <div>
      <MainContainer
        navView={<NavBar />}
        backgroundImage={`${Assets.images.contactBackground}`}
        contactForm={contactForm}
      />
    </div>
  );
};

export default Bookings;
