import React from "react";
import './footer.css'
import { useState, useEffect } from "react";


  

const Footer = () => {

  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer;

    if (minutes === 0 && seconds === 0) {
      // Timer reached 00:01, stop the timer
      clearInterval(timer);
    } else {
      timer = setInterval(() => {
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [minutes, seconds]);

  useEffect(() => {
    // Save the timer state to localStorage
    localStorage.setItem("timer", JSON.stringify({ minutes, seconds }));
  }, [minutes, seconds]);

  useEffect(() => {
    // Check if there's a saved timer in localStorage and set the timer accordingly
    const savedTimer = JSON.parse(localStorage.getItem("timer"));
    if (savedTimer) {
      setMinutes(savedTimer.minutes);
      setSeconds(savedTimer.seconds);
    }
  }, []);

  return (
    <footer>
      <div className="price">
        <div className="price-div">
          <div className="price-1">
            <h1>₹3500</h1>
          </div>
          <div className="price-2">
            {" "}
            <h1>₹7000</h1>
          </div>
        </div>
        <h3>Offer Ends in <span class="minutes">{String(minutes).padStart(2, "0")}</span><span>:</span><span class="seconds">{String(seconds).padStart(2, "0")}</span> Mins</h3>
      </div>
      <a href="https://rzp.io/l/phBlT9OqT" target="_blank" rel="noreferrer">
        <button>Book Your Spot Now</button>
      </a>
    </footer>
  );
};

export default Footer;
