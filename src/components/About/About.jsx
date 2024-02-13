import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <div className="about-title">
      <div className="text-wrapper">
        <Link to="/home">X</Link>
        <h2>
          Ushbu sahifada ishlatilgan API bizga USER lar ustida bajariladigan
          amallarga cheklov qo'ygan shu sababli ayrim kamchiliklar uchun uzur
          so'raymiz
        </h2>
      </div>
    </div>
  );
}

export default About;
