/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import assistant1 from "../../assets/images/assitants/assistant-1.png";
import assistant2 from "../../assets/images/assitants/assistant-2.png";
import assistant3 from "../../assets/images/assitants/assistant-3.png";
import assistant4 from "../../assets/images/assitants/assistant-4.png";
import assistant5 from "../../assets/images/assitants/assistant-5.png";
import assistant6 from "../../assets/images/assitants/assistant-6.png";
import assistant7 from "../../assets/images/assitants/assistant-7.png";
import assistant8 from "../../assets/images/assitants/assistant-8.png";
import assistant9 from "../../assets/images/assitants/assistant-9.png";
import assistant10 from "../../assets/images/assitants/assistant-10.png";
import assistant11 from "../../assets/images/assitants/assistant-11.png";
import assistant12 from "../../assets/images/assitants/assistant-12.png";
import assistant13 from "../../assets/images/assitants/assistant-13.png";
import assistant14 from "../../assets/images/assitants/assistant-14.png";
import assistant15 from "../../assets/images/assitants/assistant-15.png";
import assistant17 from "../../assets/images/assitants/assistant-17.png";
import assistant18 from "../../assets/images/assitants/assistant-18.png";
import assistant19 from "../../assets/images/assitants/assistant-19.png";
import assistant20 from "../../assets/images/assitants/assistant-20.png";
import assistant21 from "../../assets/images/assitants/assistant-21.png";
import assistant22 from "../../assets/images/assitants/assistant-22.png";
import assistant23 from "../../assets/images/assitants/assistant-23.png";
import AssistantDetails from "./AssistantDetails";
import { useRef, useState } from "react";

const imgsAssitants = [
  assistant1,
  assistant2,
  assistant3,
  assistant4,
  assistant5,
  assistant6,
  assistant7,
  assistant8,
  assistant9,
  assistant10,
  assistant11,
  assistant12,
  assistant13,
  assistant14,
  assistant15,
  assistant17,
  assistant18,
  assistant19,
  assistant20,
  assistant21,
  assistant22,
  assistant23,
];

const _assitants = [
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Sayed sobeh",
    instractorTitle: "Public Relations officer",
    about: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    linksSocial: ["/", "/", "/", "/"],
    classLink: "/",
  },
];

for (const i in imgsAssitants) {
  _assitants[i].instructorPhoto = imgsAssitants[i];
}

function AssitantsSlider({ assitants }: any) {
  let sliderRef1: any = useRef(null);
  let sliderRef2: any = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
  };

  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    afterChange: (current: any) => setActiveSlide(current),
  };

  const next = () => {
    sliderRef1.slickNext();
    sliderRef2.slickNext();
  };

  const previous = () => {
    sliderRef1.slickPrev();
    sliderRef2.slickPrev();
  };

  const goTo = (index: number) => {
    sliderRef1.slickGoTo(index);
    sliderRef2.slickGoTo(index);
  };

  return (
    <>
      <div className="">
        +
        <Slider
          ref={(slider) => {
            sliderRef1 = slider;
          }}
          {...settings1}
        >
          {assitants
            ? assitants.map((assitant: any, index: number) => (
                <div onClick={() => goTo(index)} key={index}>
                  <AssistantDetails assistant={assitant} />
                </div>
              ))
            : _assitants.map((assitant: any, index: number) => (
                <div onClick={() => goTo(index)} key={index}>
                  <AssistantDetails assistant={assitant} />
                </div>
              ))}
        </Slider>
      </div>
      <div className="relative mt-10 py-5 px-[50px] md:px-[70px] mx-3 bg-white border border-[#D0D0D0] rounded-[50px] md:rounded-[100px]">
        <Slider
          {...settings2}
          ref={(slider) => {
            sliderRef2 = slider;
          }}
        >
          {imgsAssitants.map((img, index) => (
            <div key={index} className="">
              <div
                onClick={() => goTo(index)}
                className={`h-[100px] w-[100px] md:h-[120px] md:w-[120px] cursor-pointer rounded-full overflow-hidden mx-auto ${
                  index === activeSlide
                    ? "border-4 border-main-color box-border"
                    : "slide"
                }`}
              >
                <img
                  className="cursor-pointer"
                  onClick={() => goTo(index)}
                  src={img}
                  alt={"Assitant RS"}
                />
              </div>
            </div>
          ))}
        </Slider>

        <div className="absolute top-[50%] left-0 right-0 -translate-y-1/2 px-5 flex">
          <button
            onClick={next}
            style={{ boxShadow: "2px 4px 0px #382900" }}
            className=" w-[30px] h-[30px] md:w-[40px] md:h-[40px] hover:bg-main-color hover:text-[#ffffff] rounded-full bg-main-color border"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>

          <button
            onClick={previous}
            style={{ boxShadow: "2px 4px 0px #382900" }}
            className="block ml-auto w-[30px] h-[30px] md:w-[40px] md:h-[40px] hover:bg-main-color hover:text-[#ffffff] rounded-full bg-main-color border"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default AssitantsSlider;
