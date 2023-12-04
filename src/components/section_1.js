import React from "react";
import { useState, useEffect } from "react";
import "./section_1.css";

const Section1 = () => {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer;

    if (minutes === 0 && seconds === 1) {
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
    <section className="sec-1">
      <div className="sec-1-div">
        <div className="logo-img">
          {/* <img src={img1} alt="" width={100} height={100} /> */}
        </div>

        <div className="quotes">
          <p className="quotes-2">
            WELCOME TO PRACTICAL STRUCTURAL DESIGN CONSULTANCY TRAINING !
          </p>
        </div>
        <div className="quotes-center">
          <div className="quote-1-div">
            <p className="quotes-1">200 Hrs Online Pre-Recorded Videos</p>
          </div>
        </div>
        <div className="course-main-div">
          <div className="courese-inner-div">
            <div className="left-div">
              <h1 className="left-title">Why You Should Join?</h1>
              <ul>
                <li>You Unlock Secrets To Create Time & Wealth In Business</li>
                <li>
                  You Learn Strong Foundational Activities To Win In Your
                  Business
                </li>
                <li>Your Business Growth With Increased Revenue & Cashflow</li>
                <li>
                  More Profit, More Freedom, More Scale Is Guaranteed If You
                  Follow The Exact Steps Covered In The Workshop
                </li>
              </ul>
            </div>

            <div className="center-line"></div>

            <div className="right-div">
              <h1 className="right-title">What Happens When You Join?</h1>
              <ul>
                <li>You Unlock Secrets To Create Time & Wealth In Business</li>
                <li>
                  You Learn Strong Foundational Activities To Win In Your
                  Business
                </li>
                <li>Your Business Growth With Increased Revenue & Cashflow</li>
                <li>
                  More Profit, More Freedom, More Scale Is Guaranteed If You
                  Follow The Exact Steps Covered In The Workshop
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h1>{`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
            2,
            "0"
          )}`}</h1>
        </div>
      </div>
    </section>
  );
};

export default Section1;
