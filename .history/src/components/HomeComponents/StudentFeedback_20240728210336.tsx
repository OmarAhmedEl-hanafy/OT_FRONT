/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import IconStudent1 from "../../assets/images/students/student-1.png";
import IconStudent2 from "../../assets/images/students/student-2.png";
import IconStudent3 from "../../assets/images/students/student-3.png";

import StudentFeedBackBox from "./StudentFeedBackBox";
import { useRef } from "react";

const feedStudents = [
  {
    icon: IconStudent1,
    name: "Guy Hawkins",
    title: "UI-UX Designer",
    feedback:
      "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
  },
  {
    icon: IconStudent2,
    name: "Guy Hawkins",
    title: "UI-UX Designer",
    feedback:
      "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
  },
  {
    icon: IconStudent3,
    name: "Guy Hawkins",
    title: "UI-UX Designer",
    feedback:
      "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
  },
];

function StudentFeedback() {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  let sliderRef1: any = useRef(null);

  const next = () => {
    sliderRef1.slickNext();
  };

  const previous = () => {
    sliderRef1.slickPrev();
  };

  return (
    <section className="py-[50px]">
      <div className="container">
        <div className="pl-5">
          <h2 className="text-3xl font-bold text-main-color">
            Student Feedback
          </h2>
          <p className="mt-2">
            Various versions have evolved over the years, sometimes by accident,
          </p>
        </div>
        <div className="relative mt-5">
          <Slider
            ref={(slider) => {
              sliderRef1 = slider;
            }}
            {...settings}
          >
            {feedStudents.map((feeStud) => (
              <div key={feeStud.feedback} className="">
                <StudentFeedBackBox feeStu={feeStud} />
              </div>
            ))}
          </Slider>
          <div className="absolute top-[50%] left-0 right-0 -translate-y-1/2 px-5 flex">
            <button
              onClick={next}
              className="md:translate-x-[-150%] transition-all duration-300 w-[30px] h-[30px] md:w-[40px] md:h-[40px] hover:bg-[#FFC224] hover:text-white rounded-full bg-white shadow-lg"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <button
              onClick={previous}
              className="md:translate-x-[150%] transition-all duration-300 block ml-auto w-[30px] h-[30px] md:w-[40px] md:h-[40px] hover:bg-[#FFC224] hover:text-white rounded-full bg-white shadow-lg"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentFeedback;
