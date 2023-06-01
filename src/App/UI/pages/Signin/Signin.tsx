import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Assets } from "../../../utils/Assets";
import { Link } from "react-router-dom";

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-6">
          <img src={`${Assets.images.groupa}`} width={"80%"} height={500} />
        </div>
        <div className="col-lg-6">
          <div className="text-center">
            <h2>WELCOME BACK</h2>
            <p>Please fill out the form to book for an event with us.</p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
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
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-between mt-4">
                <div>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
                <p>Forgot Password</p>
              </div>
              <div className="d-grid gap-2">
                <button className="btn" type="button">
                  Sign In
                </button>
                <button className="btn border border-warning" type="button">
                  <img
                    src={`${Assets.images.drone}`}
                    width={"4%"}
                    height={20}
                  />
                  Sign Up with Google
                </button>
              </div>
              <div className="mt-3">
                <p>
                  Don't have an account? <Link to="/community">Sign Up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
