import React from "react";
import './footer.css'

const footer = () => {
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
        <h3>Offer Ends in 15 Mins</h3>
      </div>
      <a href="https://rzp.io/l/phBlT9OqT" target="_blank" rel="noreferrer">
        <button>Book Your Spot Now</button>
      </a>
    </footer>
  );
};

export default footer;
