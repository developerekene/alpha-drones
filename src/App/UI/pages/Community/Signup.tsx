import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Assets } from "../../../utils/Assets";
import "../Community/Community.css";
import "../Signin/Signin.css";

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <section>
      <div>
        <div>
          <MainContainer
            navView={<NavBar />}
            backgroundImage={`${Assets.images.contactBackground}`}
          />
          <div className="general-form">
            <div className="image">
              <img
                src={`${Assets.images.groupa}`}
                width={"120%"}
                height={450}
              />
            </div>

            <div className="form">
              <div className="wel">
                <h2>WELCOME BACK</h2>
                <p className="p">
                  Please fill out the form to book for an event with us.
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email:
                    </label>
                    <br />
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="form-label">
                      Password:
                    </label>
                    <br />
                    <input
                      className="form-control"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <div className="check">
                      <input type="checkbox" />
                      <span className="rem">Remember me</span>{" "}
                      <p>Forgot Password</p>
                    </div>
                  </div>
                  <div className="">
                    <button className="btn" type="button">
                      Sign In
                    </button>
                    <br />
                    <button className="button" type="button">
                      <img
                        src={`${Assets.images.drone}`}
                        width={"4%"}
                        height={20}
                      />
                      Sign Up with Google
                    </button>
                  </div>
                  <div className="">
                    <p>
                      Don't have an account?{" "}
                      <Link to="/community" className="sig">
                        {" "}
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <main>
      <MainContainer
        navView={<NavBar />}
        backgroundImage={`${Assets.images.contactHome}`}
      />

      <section className="general">
        <div className="an">
          <h2>Create an Account</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              className="form-controll"
              type="text"
              id="name"
              value={email}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              className="form-controll"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              className="form-controll"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button className="btnn" type="button">
              Create Account
            </button>
            <button className="buttonn" type="button">
              <img src={`${Assets.images.drone}`} width={"4%"} height={20} />
              Sign Up with Google
            </button>
          </div>
          <div className="sign">
            <p>
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
