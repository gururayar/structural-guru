import React from "react";
import "./section_5.css";
import tick from "../assets/tick-symbol.png";

const section5 = () => {
  return (
    <section className="sec-5 show-animate">
      <div className="payment-info-div">
        <h1 className="payment-title">
          Procedure to Enroll Online Video Mode Training
        </h1>

        <div className="payment-container">
          <div className="payment-method-1">
            <div className="basic-plan-column">
              <h1 className="plans-h1">Basic</h1>

              <p className="plans-p">
                <b>₹ 3,500/-</b> <span>for lifetime Access </span>
              </p>
              <p className="plans-p2">
                Get started with our Basic Plan Kickstart your learning journey
              </p>

              <div className="payment-center-line"></div>

              <ul className="basic-plan-features">
                <li>
                  <img src={tick} alt="" />
                  work range of workout videos
                </li>
                <li>
                  <img src={tick} alt="" />
                  work range of workout videos
                </li>
                <li>
                  <img src={tick} alt="" />
                  work range of workout videos
                </li>
                <li>
                  <img src={tick} alt="" />
                  work range of workout videos
                </li>
              </ul>

              <a href="https://rzp.io/l/phBlT9OqT">
                <button className="plans-button">Buy Now</button>
              </a>
            </div>
            <div className="pro-plan-column">
              <h1 className="plans-h1">Pro</h1>

              <p className="plans-p">
                <b>₹ 50,000/-</b> <span>for lifetime Access </span>
              </p>
              <p className="plans-p2">
                Get started with our Basic Plan Kickstart your learning journey
              </p>

              <div className="payment-center-line"></div>

              <ul className="basic-plan-features">
                <li>
                  <img src={tick} alt="" />
                  work range of workout videos
                </li>
                <li>
                  <img src={tick} alt="" />
                  work range of workout videos
                </li>
                <li>
                  <img src={tick} alt="" />
                  work range of workout videos
                </li>
                <li>
                  <img src={tick} alt="" />
                  work range of workout videos
                </li>
              </ul>

              <a href="https://rzp.io/l/phBlT9OqT">
                <button className="plans-button">Buy Now</button>
              </a>
            </div>
            <div className="pro-plus-column">
              <h1 className="plans-h1">Pro Plus</h1>

              <p className="plans-p">
                <b>₹ 1,00,000/-</b> <span>for lifetime Access </span>
              </p>
              <p className="plans-p2">
                Get started with our Basic Plan Kickstart your learning journey
              </p>

              <div className="payment-center-line"></div>

              <ul className="basic-plan-features">
                <li>
                  <img src={tick} alt="" />
                  work range of workout videos
                </li>
                <li>
                  <img src={tick} alt="" />
                  work range of workout videos
                </li>
                <li>
                  <img src={tick} alt="" />
                  work range of workout videos
                </li>
                <li>
                  <img src={tick} alt="" />
                  work range of workout videos
                </li>
              </ul>

              <a href="https://rzp.io/l/phBlT9OqT">
                <button className="plans-button">Buy Now</button>
              </a>
            </div>
          </div>

          <div className="payment-center-line-forcolumn">
            <p className="or">or</p>
          </div>
          <div className="payment-method-2 animate">
            <p className="payment-info2">
              By paying Rs.3500/- directly to UPI gpay/phonepay/Paytm no.
              9629121300. After payment send receipt & gmail id to WhatsApp no.{" "}
              <b className="font-bold-payment">+91-9629121300</b>. We will
              dispatch the course contents to your gmail id and google drive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default section5;
