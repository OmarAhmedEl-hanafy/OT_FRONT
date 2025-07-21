import { useEffect, useRef, useState } from "react";
import "./Section2.css";
import coachImage from "../../assets/images/About_Sec/Group 237695.png";
import Icon1 from "../../assets/images/About_Sec/Group 237691.png";
import Icon2 from "../../assets/images/About_Sec/unsplash_6ie6OjshvWg.png";
import Icon3 from "../../assets/images/About_Sec/Group 237693.png";
import Icon4 from "../../assets/images/About_Sec/Group 237692.png";
import Icon5 from "../../assets/images/About_Sec/Heart.png";

function CoachSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false); // Reset when the section leaves the viewport
        }
      },
      { threshold: 0.3 } // 30% visibility triggers the animation
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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
      className={`coach-section ${visible ? "visible" : ""}`}
    >
      <div className="coach-content-wrapper">
        <div className="coach-text-content">
          <h1 className="coach-main-heading">
            Purchase your awesome <br />
            courses and find your <span>Coach</span>
          </h1>
          <p className="coach-sub-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            habitant a tincidunt cras accumsan integer suscipit. Libero accumsan
            eget aliquet.
          </p>
          <button className="coach-cta-button">Book Your Courses</button>
        </div>
        <div className="coach-image-content">
          <div className="coach-image-container">
            <img src={coachImage} alt="Coach" className="coach-main-image" />
            <div className="coach-lessons-info">
              <img src={Icon5} alt="Icon 5" />
              <p>
                <span>1850+</span> <br />
                Lessons
              </p>
            </div>
            {/* Icons around the image */}
            <div className="coach-icons">
              <div className="icon1">
                <img src={Icon1} alt="Icon 1" />
              </div>
              <div className="icon2">
                <img src={Icon2} alt="Icon 2" />
              </div>
              <div className="icon3">
                <img src={Icon3} alt="Icon 3" />
              </div>
              <div className="icon4">
                <img src={Icon4} alt="Icon 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoachSection;
