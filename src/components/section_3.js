import React from "react";
import "./section_3.css";

const section3 = () => {
  return (
    <section className="sec-3 show-animate">
      <div className="feature-list">
        <h1 className="features-title">Key Features of The Training </h1>
        <div className="sec-3-center-line"></div>
        <ul>
          <li>200 Hrs Online Pre-Recorded Videos</li>
          <li>
            {" "}
            Life time doubts and clarifications support through WA, or SKYPE, or
            ZOOM.
          </li>
          <li> 25 yrs experienced teaching in practical way.</li>
          <li>
            Structural design concepts covered from basic scratch to advanced
            level.
          </li>
          <li>Get hands on Experience with industry experts. </li>
          <li> Live Project work reviews & guidance's. </li>
          <li> Life time access for xl files, manuals, books, notes. </li>
          <li>Life time after training technical guidance support. </li>
          <li>Academic project/thesis support guidance's.</li>
          <li>Paid internship workshops training for students.</li>
          <li>
            We Provide 100% cash back, if one joined with us in business
            development team (training will be provided by us) and completed 5
            nos sales of this same training by him/her.
          </li>
        </ul>

        <div className="more-content-div">
          <p className="more-content1">Wait there's more...</p>
          <p className="more-content1">Download the complete Course Brochure</p>
          <a
            href="https://img1.wsimg.com/blobby/go/2e42f0cb-874d-433d-b9df-6117d6050d2b/downloads/Syllabus%20for%20TR-1000-1%20PSDCT-V.pdf?ver=1668681551847"
            rel="noreferrer"
            target="_blank"
          >
            <button className="course-pdf">View Syllabus Brochure</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default section3;
