import React from "react";
import Header from "../common/Header";
import "../assets/css/custom.css";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className="home-text-content">
        <div className="home-text-content-container">
          <div className="home-text-content-container-txt ">
            <div className="home-text-content-txt"> TACKLE MORE </div>
            <div className="home-text-content-txt-sec"> DEV AND MARKETING </div>
            <div className="home-text-content-txt-ter">PROJECTS </div>
            <div className="home-text-content-txt-f">
              WITHOUT GROWING YOUR PAYROLL
            </div>
          </div>
          <button className="home-button">GET OUR RATES</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
