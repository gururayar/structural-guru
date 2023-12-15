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
              <h1 className="plans-h1 basic-h1">Basic <span>Recommended</span></h1>

              <p className="plans-p">
                <b>₹ 3,500/-</b> <span>for 1-year access to videos and lifetime access to files. </span>
              </p>
              <p className="plans-p2">
                Get started with our Basic Plan and Kickstart your learning journey.
              </p>

              <div className="payment-center-line"></div>

              <ul className="basic-plan-features">
                <li>
                  <img src={tick} alt="" />
                  200 hrs pre-recorded videos.

                </li>
                <li>
                  <img src={tick} alt="" />
                  Doubts & clarification in online/phone

                </li>
                <li>
                  <img src={tick} alt="" />
                  Pdf Code books, Notes, 250+E-Books collection, IS, American & 300+ BS code design xl sheets supply.

                </li>
                <li>
                  <img src={tick} alt="" />
                  Bonus consultancy set up Training videos.

                </li>
                <li>
                  <img src={tick} alt="" />
                  Bonus Digital marketing campaign 1 no set up.

                </li>
                <li>
                  <img src={tick} alt="" />
                  Certification.

                </li>
              </ul>

              <a href="https://rzp.io/l/phBlT9OqT">
                <button className="plans-button">Buy Now</button>
              </a>
            </div>
            <div className="pro-plan-column">
              <h1 className="plans-h1">Pro</h1>

              <p className="plans-p">
                <span><b>₹ 6,250/</b>month(for 8 months)</span> <span>for 1-year access to videos and lifetime access to files.</span>
              </p>
              <p className="plans-p2">
                Get started with our Pro Plan and Kickstart your learning journey
              </p>

              <div className="payment-center-line"></div>

              <ul className="basic-plan-features">
                <li>
                  <img src={tick} alt="" />
                  Live zoom webinars 3 hrs per week.

                </li>
                <li>
                  <img src={tick} alt="" />
                  200 hrs pre-recorded videos.

                </li>
                <li>
                  <img src={tick} alt="" />
                  Doubts & clarification in live zoom webinar.

                </li>
                <li>
                  <img src={tick} alt="" />
                  Pdf Code books, Notes, 250+E-Books collection, IS, American & 300+ BS code design xl sheets supply.

                </li>
                <li>
                  <img src={tick} alt="" />
                  Bonus consultancy set up Training videos.


                </li>
                <li>
                  <img src={tick} alt="" />
                  Bonus Digital marketing campaign 1 no set up.

                </li>
                <li>
                  <img src={tick} alt="" />
                  Certification.

                </li>
              </ul>

              <a href="https://rzp.io/l/kHucYoACi1" target="_blank" rel="noreferrer">
                <button className="plans-button">Buy Now</button>
              </a>
            </div>
            <div className="pro-plus-column">
              <h1 className="plans-h1">Pro Plus</h1>

              <p className="plans-p">
                <b>₹ 1,00,000/-</b> <span>for 1-year access to videos and lifetime access to files.</span>
              </p>
              <p className="plans-p2">
                Get started with our Pro Plus Plan and Kickstart your learning journey
              </p>

              <div className="payment-center-line"></div>

              <ul className="basic-plan-features">
                <li>
                  <img src={tick} alt="" />
                  Live offline class 3 hrs per day except Sunday.
                </li>
                <li>
                  <img src={tick} alt="" />
                  200 hrs pre-recorded videos.

                </li>
                <li>
                  <img src={tick} alt="" />
                  Doubts & clarification in direct class itself.

                </li>
                <li>
                  <img src={tick} alt="" />
                  Pdf Code books, Notes, 250+E-Books collection, IS, American & 300+ BS code design xl sheets supply.

                </li>
                <li>
                  <img src={tick} alt="" />
                  Bonus consultancy set up Training videos.

                </li>
                <li>
                  <img src={tick} alt="" />
                  Bonus Digital marketing campaign 1 no set up.

                </li>
                <li>
                  <img src={tick} alt="" />
                  Certification.

                </li>
              </ul>

              <a href="https://rzp.io/l/KLM5qG4aOl" target="_blank" rel="noreferrer">
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
