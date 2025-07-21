/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import "./Section3.css";
import GirlImage from "../../assets/images/About_third_Sec/GirlImage.png"; // Replace with the correct image path

const WhatWillYouGet = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`wwyg-section ${visible ? "visible" : ""}`}
    >
      <div className="wwyg-grid">
        {/* Left side with image */}
        <div className="wwyg-image-content">
          <img src={GirlImage} alt="Student" className="wwyg-student-image" />
        </div>

        {/* Right side with text and items */}
        <div className="wwyg-text-content">
          <h2 className="wwyg-heading">
            What Will You <span className="wwyg-highlight">Get</span> ?
          </h2>
          <p className="wwyg-subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id interdum
            dui mollis. Suspendisse nulla:
          </p>

          <ul className="wwyg-list">
            <li className="wwyg-list-item">
              <i className="fa-solid fa-square-check fa-bounce wwyg-icon"></i>
              <div>
                <h3 className="wwyg-list-heading">
                  1-on-1 Courses in more than 150 topics
                </h3>
                <p>
                  Learn from certified coaches with proven experience...{" "}
                  <span className="wwyg-read-more">read more</span>
                </p>
              </div>
            </li>

            <li className="wwyg-list-item">
              <i className="fa-solid fa-square-check fa-bounce wwyg-icon"></i>
              <div>
                <h3 className="wwyg-list-heading">
                  Practice for free with the academy community
                </h3>
                <p>
                  Develop skills by building connections with others...{" "}
                  <span className="wwyg-read-more">read more</span>
                </p>
              </div>
            </li>

            <li className="wwyg-list-item">
              <i className="fa-solid fa-square-check fa-bounce wwyg-icon"></i>
              <div>
                <h3 className="wwyg-list-heading">
                  Take learning beyond the classroom
                </h3>
                <p>
                  Learn from certified coaches with proven experience...{" "}
                  <span className="wwyg-read-more">read more</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatWillYouGet;
