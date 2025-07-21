import { useEffect, useRef, useState } from "react";
import "./AboutUs.css";
import CoachSection from "./Section2";
import WhatWillYouGet from "./Section3";
import HowItWorks from "./Section4";
import P1 from "../../assets/images/OnlineStudents/Ellipse3.png";
import P2 from "../../assets/images/OnlineStudents/Ellipse4.png";
import P3 from "../../assets/images/OnlineStudents/Ellipse5.png";
import P4 from "../../assets/images/OnlineStudents/Ellipse6.png";

function AboutUs() {
  const sectionRef = useRef<HTMLElement | null>(null); // Set ref type
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleVisibility = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setVisible(true);
      }
    };

    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.1,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleInitialLoad = () => {
      if (sectionRef.current && window.scrollY === 0) {
        setVisible(true);
      }
    };

    handleInitialLoad();

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section1 ${visible ? "visible" : ""}`}
    >
      <div className="container">
        {" "}
        {/* Bootstrap container */}
        <div className="row content-wrapper">
          <div className="col-md-6 text-content">
            {" "}
            {/* Bootstrap grid */}
            <h5 className="small-heading">
              We are The Best ــــــــــــــــــــــــــ
            </h5>
            <h1 className="main-heading">
              Learn From Home <br />
              With <span>The Best</span> <br />
              Global Academy
            </h1>
            <p className="sub-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              interdum dui mollis. Suspendisse nulla:
            </p>
            <div>
              <button className="cta-button">Try Free Lessons</button>
            </div>
          </div>
          <div className="col-md-6 image-content">
            <div className="profile-image" />
            <div className="student-info">
              <p>200+ students Online</p>
              <div className="students-images">
                <img src={P1} alt="Student 1" />
                <img src={P2} alt="Student 2" />
                <img src={P3} alt="Student 3" />
                <img src={P4} alt="Student 4" />
                <div className="more-students">3+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CoachSection />
      </div>
      <div>
        <WhatWillYouGet />
      </div>
      <div>
        <HowItWorks />
      </div>
    </section>
  );
}

export default AboutUs;
