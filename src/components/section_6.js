import React from "react";
import starLogo from "../assets/star-logo.png";
import "./section_6.css";

const section6 = () => {
  return (
    <section className="sec-6 show-animate">
      <div className="google-review-div">
        <h1 className="google-review-title">
          VIEW GOOGLE REVIEWS OF THE TRAINING
        </h1>
        <div className="google-div animate">
          <iframe
            width="900"
            height="550"
            src="https://www.youtube.com/embed/XDGgj2UELBI?si=bhSTa7UduJbwELxp"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="text-review-div animate">
        <div className="text-review" style={{ "--i": 0 }}>
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"It's a good platform to start from basics."</p>
          <h2 className="reviewer-name">Manik Reddy</h2>
        </div>

        <div className="text-review" style={{ "--i": 1 }}>
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "If you want to be structural artist, this is the best platform."
          </p>
          <h2 className="reviewer-name">Shashi Shekhar Singh</h2>
        </div>

        <div className="text-review" style={{ "--i": 2 }}>
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">"Great course."</p>
          <h2 className="reviewer-name">Sanjay Kakade</h2>
        </div>

        <div className="text-review" style={{ "--i": 3 }}>
          <div className="star-img">
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
            <img src={starLogo} alt="star" />
          </div>
          <p className="review">
            "Very helpful for me. Got great exposure for structural engineering
            here. Great response for any query by their side."
          </p>
          <h2 className="reviewer-name">VK Mishra</h2>
        </div>
      </div>
    </section>
  );
};

export default section6;
