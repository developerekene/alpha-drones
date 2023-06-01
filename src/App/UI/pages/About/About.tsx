import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import { Assets } from "../../../utils/Assets";
import MainContainer from "../../components/MainContainer/MainContainer";
import "../About/About.css";

const About: React.FC<any> = ({}) => {
  return (
    <div className="">
      <MainContainer
        navView={<NavBar />}
        backgroundImage={`${Assets.images.contactHome}`}
      />
      <div className="text-center mt-5">
        <h2>About Us</h2>
      </div>
      <section className="about_us container mt-5">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <h3 className="mb-5">Our Visison</h3>
            <p>
              But now they are on the offensive. It is not flattering for the
              mass nor the dui that he has now suspended the basketball
              pregnancy, it was said in brown to invest in the Jaculis now, but
              he is promoting the cartoon of the life of the football homework.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={`${Assets.images.imageF}`} width={"90%"} height={400} />
          </div>
        </div>
      </section>
      <section className="our_team mt-5">
        <div className="text-center mb-3">
          <h3>Our Team</h3>
        </div>
        <div className="team">
          <div className="row py-5 d-flex justify-content-center gap-5">
            <div className="col-lg-3">
              <img
                src={`${Assets.images.imageA}`}
                width={"100%"}
                height={300}
              />
            </div>
            <div className="col-lg-3">
              <img
                src={`${Assets.images.imageB}`}
                width={"100%"}
                height={300}
              />
            </div>
            <div className="col-lg-3">
              <img
                src={`${Assets.images.imageC}`}
                width={"100%"}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="our_mission mt-5 container">
        <div className="text-center mb-3">
          <h3>Our Mission</h3>
        </div>
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <p>
              But now they are on the offensive. It is not flattering for the
              mass nor the dui that he has now suspended the basketball
              pregnancy, it was said in brown to invest in the Jaculis now, but
              he is promoting the cartoon of the life of the football homework.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={`${Assets.images.imageE}`} width={"80%"} height={400} />
          </div>
        </div>
      </section>
      <section className="contact mt-5 align-items-center">
        <div className="text-center py-3">
          <h2>Contact Us</h2>
        </div>
        <div className="row justify-content-center align-items-center">
          <form className="col-lg-6">
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Inquiry Type"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Enter your question or message here"
                style={{ height: 100 }}
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn about_submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer>
        <Footer />
      </Footer>
    </div>
  );
};

export default About;
