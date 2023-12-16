import React, { useEffect, useRef } from "react";
import "./section_2.css";

const Section2 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Autoplay the video when section is in view
          const iframe = sectionRef.current.querySelector("iframe");
          iframe.src = iframe.src.replace("autoplay=0", "autoplay=1");
        } else {
          // Pause the video when section is out of view
          const iframe = sectionRef.current.querySelector("iframe");
          iframe.src = iframe.src.replace("autoplay=1", "autoplay=0");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(sectionRef.current);

    // Cleanup the observer when the component is unmounted
    return () => observer.disconnect();
  }, []);
  return (
    <section className="sec-2 show-animate" ref={sectionRef}>
      <div className="video-titles-div">
        <h1 className="yt-title1">
          ABOUT OUR PRACTICAL STRUCTURAL DESIGN CONSULTANCY TRAINING
        </h1>
        <div className="center-line-2"></div>
        <h2 className="yt-title2">Watch this explanation of the training!</h2>
      </div>
      <div className="video-div animate">
        <iframe
          width="900"
          height="550"
          src="https://www.youtube.com/embed/0npY5ja2xP8?autoplay=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Section2;
