import React, { useState } from "react";
import { Assets } from "../../../utils/Assets";
import { Link } from "react-router-dom";

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
    <div className="container">
      <div className="text-center">
        <h2>Create an Account</h2>
      </div>
      <div className="justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              value={email}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="d-grid gap-2">
            <button className="btn btn-warning" type="button">
              Sign In
            </button>
            <button className="btn border border-warning" type="button">
              <img src={`${Assets.images.drone}`} width={"4%"} height={20} />
              Sign Up with Google
            </button>
          </div>
          <div className="mt-3">
            <p>
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
