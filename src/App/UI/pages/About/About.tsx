import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Assets } from "../../../utils/Assets";
import "../About/About.css";

const About: React.FC<any> = ({}) => {
  return (
    <div className="">
      <MainContainer
        navView={<NavBar />}
        backgroundImage={`${Assets.images.contactHome}`}
      />
      <div className="ab">
        <h2>About Us</h2>
      </div>
      <section>
        <div className=" vision">
          <div>
            <h3 className="">Our Vision</h3>
            <p className="vis">
              But now they are on the offensive. It is not flattering for the
              <br />
              mass nor the dui that he has now suspended the basketball <br />
              pregnancy, it was said in brown to invest in the Jaculis now, but
              <br />
              he is promoting the cartoon of the life of the football homework.
              <br />
              But now they are on the offensive. It is not flattering for the
              <br />
              mass nor the dui that he has now suspended the basketball <br />
              pregnancy, it was said in brown to invest in the Jaculis now, but
              <br />
              he is promoting the cartoon of the life of the football homework.
            </p>
          </div>
          <div className="img">
            <img src={`${Assets.images.imageF}`} width={"165%"} height={400} />
          </div>
        </div>
      </section>
      <section>
        <div className="team">
          <h3>Our Team</h3>
        </div>
        <div className="row">
          <div className="col">
            <img src={`${Assets.images.imageA}`} width={"100%"} height={300} />
            <p className="p">Terry Eda</p>
          </div>
          <div className="col">
            <img src={`${Assets.images.imageB}`} width={"100%"} height={300} />
            <p className="p">Terry Eda</p>
          </div>
          <div className="col">
            <img src={`${Assets.images.imageC}`} width={"100%"} height={300} />
            <p className="p">Terry Eda</p>
          </div>
        </div>
      </section>
      <section>
        <div className="">
          <h3>Our Mission</h3>
        </div>
        <div className="mission">
          <div className="vis">
            <p>
              But now they are on the offensive. It is not flattering for the{" "}
              <br />
              mass nor the dui that he has now suspended the basketball <br />
              pregnancy, it was said in brown to invest in the Jaculis now, but{" "}
              <br />
              he is promoting the cartoon of the life of the football homework.{" "}
              <br />
              But now they are on the offensive. It is not flattering for the{" "}
              <br />
              mass nor the dui that he has now suspended the basketball <br />
              pregnancy, it was said in brown to invest in the Jaculis now, but{" "}
              <br />
              he is promoting the cartoon of the life of the football homework.
            </p>
          </div>
          <div className="img">
            <img src={`${Assets.images.imageE}`} width={"180%"} height={400} />
          </div>
        </div>
      </section>
      <section>
        <div>
          <form className="contact">
            <div className="us">
              <h2>Contact Us</h2>
            </div>
            <div>
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Inquiry Type"
              />
            </div>
            <div>
              <textarea
                className="form-control"
                placeholder="Enter your question or message here"
                style={{ height: 100 }}
              />
            </div>
            <div>
              <button className="bt" type="button">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;
