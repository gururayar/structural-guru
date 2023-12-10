import React from "react";
import img1 from "../assets/sg-logo-1.jpg";
import img2 from "../assets/sg-logo-2.jpg";
import img3 from "../assets/sg-logo-3.jpg";
import img4 from "../assets/sg-logo-4.jpg";
import "./companyLogo.css";

const Logos = () => {
  return (
    <div className="logos">
      <div className="logos-slide">
        <img src={img1} alt="3M Logo" />
        <img src={img2} alt="Barstool Store Logo" />
        <img src={img3} alt="Budweiser Logo" />
        <img src={img4} alt="Budweiser Logo" />
      </div>
      <div className="logos-slide">
        <img src={img1} alt="3M Logo" />
        <img src={img2} alt="Barstool Store Logo" />
        <img src={img3} alt="Budweiser Logo" />
        <img src={img4} alt="Budweiser Logo" />
      </div>
      <div className="logos-slide">
        <img src={img1} alt="3M Logo" />
        <img src={img2} alt="Barstool Store Logo" />
        <img src={img3} alt="Budweiser Logo" />
        <img src={img4} alt="Budweiser Logo" />
      </div>
      <div className="logos-slide">
        <img src={img1} alt="3M Logo" />
        <img src={img2} alt="Barstool Store Logo" />
        <img src={img3} alt="Budweiser Logo" />
        <img src={img4} alt="Budweiser Logo" />
      </div>
    </div>
  );
};

export default Logos;
