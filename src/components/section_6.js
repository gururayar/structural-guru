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
      <div className="reviews-parent-div">
        <div className="reviews-upper-div">
          <div className="text-review">
            <div className="star-img">
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
            </div>
            <p className="review">"Professionalism, Responsiveness"</p>
            <h2 className="reviewer-name">Abdul Shukoor P</h2>
          </div>

          <div className="text-review">
            <div className="star-img">
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
            </div>
            <p className="review">
              "If you are looking to learn structural designing, then the
              content of the webinars which contains both theory and practical
              in software will enhance you to start designing independently.
              It's not necessary to have any knowledge on design, they shall
              start from basics and explain with very good practical examples.
              And the best thing is that, they will clarify your doubts even
              after the completion of course and very supportive."
            </p>
            <h2 className="reviewer-name">Aditya Kumar Paturi</h2>
          </div>

          <div className="text-review">
            <div className="star-img">
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
            </div>
            <p className="review">
              "Dear Sir, you have set very high standards being a teacher. Your
              great efforts are highly appreciated. I have no words to thank
              you. Still I will give you standing ovation."
            </p>
            <h2 className="reviewer-name">Akhilesh Dubey</h2>
          </div>

          <div className="text-review">
            <div className="star-img">
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
            </div>
            <p className="review">
              "I will highly recommend the courses offered by "Gururayar
              Associates". I get all my doubts cleared about structural design,
              even after session they helped me regarding my doubts"
            </p>
            <h2 className="reviewer-name">Akhilesh Singh Shahi</h2>
          </div>

          <div className="text-review">
            <div className="star-img">
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
            </div>
            <p className="review">
              "From basic to top current industry knowledge explained in very
              easy to understand way. Best part is Mr. Raghu sir is very kind
              and down to earth person who adjusts and doesn't complaint
              regarding missing classes or postponing them due to your working
              schedule if you miss few of them. With my case he has already
              adjusted and changed even my batches twice according to my
              convince, as my working schedule is a mess. Thank you sir so
              much!"
            </p>
            <h2 className="reviewer-name">Anudatta Kulkarni</h2>
          </div>

          <div className="text-review">
            <div className="star-img">
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
            </div>
            <p className="review">
              "Best course for all civil engineers/ structuralengineers
              (Freshers as well as Practicing engineers). Gururayar associates
              has highly qualified and experienced professionals having in-depth
              knowledge of structural engg subjects, softwares, codes and also
              consulting industry practices. I recommend to join this practical
              structure design course."
            </p>
            <h2 className="reviewer-name">Anushree</h2>
          </div>

          <div className="text-review">
            <div className="star-img">
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
              <img src={starLogo} alt="star" />
            </div>
            <p className="review">
              "I got an opportunity to get trained from a highly professional
              instructor. I got a clear view about the structure design both
              theoretically and practically. I am fully satisfied with the way
              they delivered the course content. It will be an honor to get
              enrolled in more courses in the future. Also, I strongly recommend
              anyone willing to join the course without any hesitation no matter
              whether you are professional or beginners."
            </p>
            <h2 className="reviewer-name">Basanta Khadka</h2>
          </div>

          {/* second pair */}

          
        </div>
        

      </div>
    </section>
  );
};

export default section6;
