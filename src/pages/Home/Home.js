import React from "react";
import sreemongol from "../../images/Sreemongol.png";
import CoxBazar from "../../images/sundorbon.png";
import sajek from "../../images/Sajek.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-center mt-5">WelCome To Travel Bd</h1>
      <div className="w-50 text-center mx-auto">
        <p>
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it ...
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-25">
          <img className="w-50" src={sreemongol} alt="" />
          <h3>Sreemongol</h3>
        </div>
        <div className="w-25">
          <img className="w-50" src={CoxBazar} alt="" />
          <h3>CoxBazar</h3>
        </div>
        <div className="w-25">
          <img className="w-50" src={sajek} alt="" />
          <h3>Rangamati</h3>
        </div>
      </div>

      <div className="text-center mt-5 pb-5">
        <Link to="/bookform">
          <Button variant="warning">Book Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
