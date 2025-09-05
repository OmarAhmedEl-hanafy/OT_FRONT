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
      <div className="coach-content-wrapper flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="coach-text-content text-center lg:text-left max-w-xl">
          <h1 className="coach-main-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-4">
            Purchase your awesome <br />
            courses and find your <span>Coach</span>
          </h1>
          <p className="coach-sub-text text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            habitant a tincidunt cras accumsan integer suscipit. Libero accumsan
            eget aliquet.
          </p>
          <button className="coach-cta-button bg-main-color text-white px-6 py-3 rounded-lg shadow hover:opacity-90 transition">
            Book Your Courses
          </button>
        </div>

        {/* Image Section */}
        <div className="coach-image-content relative flex justify-center">
          <div className="coach-image-container relative w-auto sm:w-80 lg:w-[400px]">
            <img
              src={coachImage}
              alt="Coach"
              className="coach-main-image w-full h-auto"
            />
            {/* Lessons Info */}
            <div className="coach-lessons-info flex justify-center items-center mt-8 h-auto">
              <div className="rounded-lg flex flex-col items-center max-w-xs text-center">
                <img
                  src={Icon5}
                  alt="Icon 5"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <span className="font-bold text-main-color text-sm sm:text-base">
                  1850+
                </span>
                <p className="text-sm sm:text-base">Lessons</p>
              </div>
            </div>

            {/* Icons Around */}
            <div className="coach-icons">
              <div className="icon1 absolute top-0 left-0 w-44">
                <img src={Icon1} alt="Icon 1" className="w-full" />
              </div>
              <div className="icon2 absolute top-0 right-0 w-44">
                <img src={Icon2} alt="Icon 2" className="w-full" />
              </div>
              <div className="icon3 absolute bottom-0 left-0 w-44">
                <img src={Icon3} alt="Icon 3" className="w-full" />
              </div>
              <div className="icon4 absolute bottom-4 right-0 w-44">
                <img src={Icon4} alt="Icon 4" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoachSection;
