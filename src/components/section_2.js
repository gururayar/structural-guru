import React from "react";
import './section_2.css'

const section2 = () => {
  return (
    <section className="sec-2 show-animate">
      <div className="video-titles-div">
        <h1 className="yt-title1">
          ABOUT OUR PRACTICAL STRUCTURAL DESIGN CONSULTANCY TRAINING
        </h1>
        <div className="center-line-2"></div>
        <h2 className="yt-title2">Watch this explanation of the training!</h2>
      </div>
      <div className="video-div">
        <iframe
          width="900"
          height="550"
          src="https://www.youtube.com/embed/0npY5ja2xP8?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default section2;
