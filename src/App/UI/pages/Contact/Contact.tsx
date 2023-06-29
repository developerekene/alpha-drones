import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Assets } from "../../../utils/Assets";
import "../Contact/Contact.css";
const Contact: React.FC<any> = ({}) => {
  return (
    <div>
      <MainContainer
        navView={<NavBar />}
        backgroundImage={`${Assets.images.contactHome}`}
      />
      {/* <section className="">
        <div className="t">
          <h2>CONTACT FORM</h2>
          <p>Please Use The FORM</p>
        </div>
      </section> */}
      <section className="generalcl">
        <div>
          <h3>Contact Us</h3>
          <p>
            Do you have a pre-sales question? Requesting a quote? Need help with{" "}
            <br />
            an existing order? We can help. With access to the latest products,{" "}
            <br />
            technical know-how, and best pricing we have everything you need to{" "}
            <br />
            start and maintain a successful drone program. Please fill out the{" "}
            <br />
            form below and one our drone specialists will get back to within the{" "}
            <br />
            next 24 hours. <br />
            For information on returns, please visit our returns center here.
          </p>
          <form className="">
            <div className="">
              <input type="text" className="formc" placeholder="Name" />
            </div>
            <div className="">
              <input type="email" className="formc" placeholder="Email" />
            </div>
            <div className="">
              <label className="visually-hidden">Preference</label>
              <select className="select">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
              </select>
            </div>
            <div className="">
              <textarea
                className="formc"
                placeholder="Enter your question or message here"
                style={{ height: 100 }}
              />
            </div>
            <div className="">
              <button type="submit" className="">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="access">
          <div className="one">
            <div>
              <div className="">
                <img src={`${Assets.images.email}`} width={"15%"} height={55} />
              </div>
              <p className="pr">Email</p>
              <p className="pr">Skyline@gmail.com</p>

              <div>
                <div className="time">
                  <img
                    src={`${Assets.images.call}`}
                    width={"10%"}
                    height={55}
                  />
                </div>
                <p className="pr">Phone</p>
                <p className="pr">
                  Toll Free: (866) 207-4499 <br /> Main: (315) 743-4285
                </p>
              </div>
            </div>

            <div>
              <div className="two">
                <img
                  src={`${Assets.images.location}`}
                  width={"10%"}
                  height={55}
                />
              </div>
              <p className="pr">Loction</p>
              <p>6171 Airport Rd.Syracuse, NY13209</p>
              <div>
                <div className="time">
                  <img
                    src={`${Assets.images.time}`}
                    width={"10%"}
                    height={55}
                  />{" "}
                  <p className="pr">Time</p>
                </div>

                <p className="pr">
                  Monday - Friday: 9:00AM - 4:00PM <br /> Saturday & Sunday:
                  Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
