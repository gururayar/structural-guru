import React from "react";
import { useState, useEffect } from "react";
import "./section_1.css";
import tick from "../assets/tick-symbol.png";
import companyLogo from '../assets/sg-profile-logo.jpg'

const Section1 = () => {

  let sections = document.querySelectorAll('section');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;

      if (top >= offset && top <offset + height) {
        sec.classList.add('show-animate');
      }
      else{
        sec.classList.remove('show-animate');
      }
    })
  }

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
    <section className="sec-1 show-animate">
      <div className="sec-1-div ">
        <div className="logo-img">
          <img className="animate" src={companyLogo} alt="company-logo"  />
        </div>

        <div className="quotes">
          <p className="quotes-2">
            WELCOME TO PRACTICAL STRUCTURAL DESIGN
            CONSULTANCY TRAINING !
          </p>
          <div className="quotes-center-line"></div>
          <p className="motto-quote">
            Empower Your Potential, We Deliver, You Excel
          </p>
        </div>

        <div className="course-main-div">
          <div className="quotes-center">
            <p className="quotes-1">200 Hrs Online Pre-Recorded Videos</p>
          </div>
          <div className="courese-inner-div">
            <div className="left-div">
              <h1 className="left-title">Why You Should Join?</h1>
              <ul>
                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  You Unlock Secrets To Create Time & Wealth In Business
                </li>
                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  You Learn Strong Foundational Activities To Win In Your
                  Business
                </li>
                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  Your Business Growth With Increased Revenue & Cashflow
                </li>
                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  More Profit, More Freedom, More Scale Is Guaranteed If You
                  Follow The Exact Steps Covered In The Workshop
                </li>
              </ul>
            </div>

            <div className="center-line"></div>

            <div className="right-div">
              <h1 className="right-title">What Happens When You Join?</h1>
              <ul>
                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  You Unlock Secrets To Create Time & Wealth In Business
                </li>
                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  You Learn Strong Foundational Activities To Win In Your
                  Business
                </li>
                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  Your Business Growth With Increased Revenue & Cashflow
                </li>
                <li>
                  <span>
                    <img
                      className="tick-sym"
                      src={tick}
                      alt="tick symbol"
                      width={20}
                      height={20}
                    />
                  </span>
                  More Profit, More Freedom, More Scale Is Guaranteed If You
                  Follow The Exact Steps Covered In The Workshop
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="offer-timer-div">
          <div className="offer-end-main">
            <h3>Register in next</h3>

            <div class="offer-end-div">
              <div class="time-box">
                <span class="minutes">{String(minutes).padStart(2, "0")}</span>
                <span className="min">Minutes</span>
              </div>

              <div class="time-box">
                <span class="seconds">{String(seconds).padStart(2, "0")}</span>
                <span className="sec">Seconds</span>
              </div>
            </div>
          </div>

          
          <a className="offer-button" href="https://rzp.io/l/phBlT9OqT" target="_blank" rel="noreferrer">
            <button>Register Now at ₹3500/- Only</button>
          </a>
          
        </div>

      </div>
    </section>
  );
};

export default Section1;

