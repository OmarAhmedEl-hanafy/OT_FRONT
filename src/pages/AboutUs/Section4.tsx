/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import "./Section4.css";
import videoCallImage from "../../assets/images/About_4th_Sec/videoCallImage.png"; // Replace with the actual path to your image

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false); // Reset animation when section leaves the viewport
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
      className={`hiw-section ${visible ? "visible" : ""}`}
    >
      <div className="hiw-grid">
        {/* Left side with text and items */}
        <div className="hiw-text-content">
          <h2 className="hiw-heading">
            Here’s how it <span className="hiw-highlight">works</span>
          </h2>
          <p className="hiw-subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            habitant a tincidunt cras accumsan integer suscipit. Libero accumsan
            eget aliquet.
          </p>

          <ul className="hiw-list">
            <li className="hiw-list-item">
              <span className="hiw-icon">
                <i className="fas fa-user"></i>
              </span>
              <div>
                <h3 className="hiw-list-heading">Find Your Coach</h3>
                <p>
                  Choose your ideal teacher from over 10,000 qualified language
                  tutors.
                </p>
              </div>
            </li>

            <li className="hiw-list-item">
              <span className="hiw-icon">
                <i className="fas fa-calendar-alt"></i>
              </span>
              <div>
                <h3 className="hiw-list-heading">Book a Course</h3>
                <p>Select a course time and add it to their calendar.</p>
              </div>
            </li>

            <li className="hiw-list-item">
              <span className="hiw-icon">
                <i className="fas fa-book"></i>
              </span>
              <div>
                <h3 className="hiw-list-heading">Start learning</h3>
                <p>Simple as that, you’re learning.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right side with image */}
        <div className="hiw-image-content">
          <img src={videoCallImage} alt="Video Call" className="hiw-image" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
