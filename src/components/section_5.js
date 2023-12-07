import React from "react";
import "./section_5.css";

const section5 = () => {
  return (
    <section className="sec-5">
      <div className="payment-info-div">
        <h1 className="payment-title">
          Procedure to Enroll Online Video Mode Training
        </h1>

        <div className="payment-container">
          <div className="payment-method-1">
            <p className="payment-info1">
              Our present special discount Offer training fee of JUST <b className="font-bold-payment"> ₹ 3500/-
              ONLY</b> for the first come 100 registrations of PRACTICAL STRUCTURAL
              DESIGN CONSULTANCY TRAINING in 200 hrs video mode will expire
              soon, and there after the price of training will be increased.
              <br />Avail before offer expiry, from the below link :
            </p>
            <a
              href="https://rzp.io/l/phBlT9OqT"
              target="_blank"
              rel="noreferrer"
              className="payment-link"
            >
              https://rzp.io/l/phBlT9OqT
            </a>
          </div>

          <div className="payment-center-line-forcolumn">
            <p className="or">or</p>
          </div>
          <div className="payment-method-2">
            <p className="payment-info2">
              By paying Rs.3500/- directly to UPI gpay/phonepay/Paytm no.
              9629121300. After payment send receipt & gmail id to WhatsApp no. 
              {" "} <b className="font-bold-payment">+91-9629121300</b>. We will dispatch the course contents to your gmail
              id and google drive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default section5;
