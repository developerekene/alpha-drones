import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.css";

const Contact: React.FC<any> = ({}) => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <section>
        <div className="text-center">
          <h2>CONTACT FORM</h2>
          <p>Please Use The FORM</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>
            Do you have a pre-sales question? Requesting a quote? Need help with
            an existing order? We can help. With access to the latest products,
            technical know-how, and best pricing we have everything you need to
            start and maintain a successful drone program. Please fill out the
            form below and one our drone specialists will get back to within the
            next 24 hours. <br />
            For information on returns, please visit our returns center here.
          </p>
        </div>
      </section>
      <section className="contact">
        <div className="row">
          <form className="">
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
            <div className="col-12">
              <label className="visually-hidden">
                Preference
              </label>
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
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Enter your question or message here"
                style={{ height: 100 }}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div>
              
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
