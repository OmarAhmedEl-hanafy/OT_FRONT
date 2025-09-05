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
        <div className="row content-wrapper align-items-center">
          {/* Text Section */}
          <div className="col-12 col-md-6 text-content text-center text-md-start mb-4 mb-md-0">
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

          {/* Image Section */}
          <div className="col-12 col-md-6 image-content text-center">
            <div className="profile-image mx-auto mb-3" />
            <div className="student-info">
              <p className="mb-2">200+ students Online</p>
              <div className="students-images d-flex justify-content-center justify-content-md-start flex-wrap gap-2">
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
