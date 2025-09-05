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
      <div className="hiw-grid flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Left side with text */}
        <div className="hiw-text-content text-center lg:text-left max-w-xl">
          <h2 className="hiw-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Here’s how it{" "}
            <span className="hiw-highlight text-main-color">works</span>
          </h2>
          <p className="hiw-subtext text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            habitant a tincidunt cras accumsan integer suscipit. Libero accumsan
            eget aliquet.
          </p>

          <ul className="hiw-list space-y-6">
            <li className="hiw-list-item flex gap-4 items-start">
              <span className="hiw-icon text-main-color text-xl">
                <i className="fas fa-user"></i>
              </span>
              <div>
                <h3 className="hiw-list-heading font-semibold">
                  Find Your Teacher
                </h3>
                <p>
                  Choose your ideal teacher from over 10,000 qualified tutors.
                </p>
              </div>
            </li>

            <li className="hiw-list-item flex gap-4 items-start">
              <span className="hiw-icon text-main-color text-xl">
                <i className="fas fa-calendar-alt"></i>
              </span>
              <div>
                <h3 className="hiw-list-heading font-semibold">
                  Book a Lesson
                </h3>
                <p>Select a lesson time and add it to your calendar.</p>
              </div>
            </li>

            <li className="hiw-list-item flex gap-4 items-start">
              <span className="hiw-icon text-main-color text-xl">
                <i className="fas fa-book"></i>
              </span>
              <div>
                <h3 className="hiw-list-heading font-semibold">
                  Start Learning
                </h3>
                <p>Simple as that, you’re learning.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right side with image */}
        <div className="hiw-image-content flex justify-center">
          <img
            src={videoCallImage}
            alt="Video Call"
            className="hiw-image w-[600px] max-w-xs sm:max-w-sm lg:max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
