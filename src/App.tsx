import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppEntry from "./App/UI/AppEntry";
import NavBar from "./App/UI/components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <AppEntry />
    </>
  );
}

export default App;
