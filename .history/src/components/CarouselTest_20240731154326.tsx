/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import Slider from "react-slick";

import img1 from "../assets/images/slider-header/step_1.png";
import img2 from "../assets/images/slider-header/step_2.png";
import img3 from "../assets/images/slider-header/step_3.png";
import img4 from "../assets/images/slider-header/step_4.png";
import img5 from "../assets/images/slider-header/step_5.png";

function Carousel() {
  let sliderRef1: any = useRef(null);
  let sliderRef2: any = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings1 = {
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover:false,
    vertical: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentIndex(current),
  };

  const settings2 = {
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover:false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentIndex(current),
    // responsive: [
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    // ]
  };

  const next = () => {
    sliderRef1.slickNext(currentIndex);
    sliderRef2.slickNext(currentIndex);
  };

  const previous = () => {
    sliderRef1.slickPrev(currentIndex);
    sliderRef2.slickPrev(currentIndex);
  };

  return (
    <div className="pb-[100px] text-white">
      <div className="relative">
        <div className="">
          <Slider
            ref={(slider) => {
              sliderRef1 = slider;
            }}
            {...settings1}
          >
            <div className="h-[450px] relative ">
              {/* <img className="w-full h-full" src={img1} alt="" /> */}
              <div className="desc mt-[70px] absolute w-1/2 left-[50px] flex flex-col justify-center">
                <h2 className="text-main-color text-2xl md:text-4xl leading-10 tracking-[3px] md:w-[75%] font-extrabold">
                  Transform your life with personalized coaching.
                </h2>
                <p className="w-[90%] tracking-[2px] text-black/95 mt-5">
                  Empower yourself to unlock your full potential and transform
                  your life with personalized life coaching that guides you
                  towards clarity, confidence, and success.
                </p>
              </div>
            </div>
            <div className="h-[450px] relative">
              {/* <img className="w-full h-full" src={img2} alt="" /> */}
              <div className="desc mt-[70px] absolute w-1/2 left-[50px] flex flex-col justify-center">
                <h2 className="text-main-color text-2xl md:text-4xl leading-10 tracking-[3px] md:w-[75%] font-extrabold">
                  Achieve your goals and live your best life with expert
                  coaching.
                </h2>
                <p className="w-[90%] tracking-[2px] text-black/95 mt-5">
                  Discover the power of life coaching to help you overcome
                  challenges, set meaningful goals, and achieve personal growth.
                  Our tailored coaching sessions provide support and guidance to
                  empower you to create a fulfilling and successful life.
                </p>
              </div>
            </div>
            <div className="h-[450px] relative">
              {/* <img className="w-full h-full" src={img3} alt="" /> */}
              <div className="desc mt-[70px] absolute w-1/2 left-[50px] flex flex-col justify-center">
                <h2 className="text-main-color text-2xl md:text-4xl leading-10 tracking-[3px] md:w-[75%] font-extrabold">
                  Realize Your Dreams and Excel with Professional Coaching.
                </h2>

                <p className="w-[90%] tracking-[2px] text-black/95 mt-5">
                  Experience a journey of growth and success with our expert
                  life coaching. We provide personalized support to help you
                  reach your goals, overcome obstacles, and live your most
                  fulfilling life.
                </p>
              </div>
            </div>
            <div className="h-[450px] relative">
              {/* <img className="w-full h-full" src={img4} alt="" /> */}
              <div className="desc mt-[70px] absolute w-1/2 left-[50px] flex flex-col justify-center">
                <h2 className="text-main-color text-2xl md:text-4xl leading-10 tracking-[3px] md:w-[75%] font-extrabold">
                  Embrace elegance, ignite adventure, relish serenity, savor.
                </h2>
                <p className="w-[90%] tracking-[2px] text-black/95 mt-5">
                  Ready to dive into luxury? Take a lightning tour through our
                  hotel's highlights, igniting your anticipation for the lavish
                  comforts and exclusive experiences that await your arrival.
                </p>
              </div>
            </div>
            <div className="h-[450px] relative">
              {/* <img className="w-full h-full" src={img5} alt="" /> */}
              <div className="desc mt-[70px] absolute w-1/2 left-[50px] flex flex-col justify-center">
                <h2 className="text-main-color text-2xl md:text-4xl leading-10 tracking-[3px] md:w-[75%] font-extrabold">
                  Enter the realm, luxuriate in opulence, depart.
                </h2>
                <p className="w-[90%] tracking-[2px] text-black/95 mt-5">
                  Prepare for a glimpse into paradise! Embark on a
                  lightning-fast journey through our hotel's offerings, teasing
                  the luxurious amenities and captivating experiences that await
                  your stay.
                </p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="absolute top-0 w-full h-full flex place-items-center text-main-color bg-white bg-opacity-5 ">
          <div className="">
            <div className="navs absolute bottom-[50px] left-[55%] translate-x-1/4 flex gap-5">
              <button
                onClick={previous}
                type="button"
                className="text-main-color bg-white bg-opacity-30 rounded-full w-[40px] h-[40px] flex items-center justify-center"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button
                onClick={next}
                type="button"
                className="text-main-color bg-white bg-opacity-30 rounded-full w-[40px] h-[40px] flex items-center justify-center"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>

              <div className="count-item text-white flex items-center font-bold">
                <p className="">
                  <span>0{currentIndex+1}</span> - <span>05</span>
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-max max-h-max ">
            <div className="w-[100vw]">
              <Slider
                ref={(slider) => {
                  sliderRef2 = slider;
                }}
                {...settings2}
              >
                <div className="">
                  <div className="h-[300px]  max-w-[488px] m-auto  md:ranslate-x-[50%]">
                    <img className="w-full h-full" src={img1} alt="" />
                  </div>
                </div>
                <div className="">
                  <div className="h-[300px]   max-w-[488px] m-auto md:translate-x-[50%]">
                    <img className="w-full h-full" src={img2} alt="" />
                  </div>
                </div>
                <div className="">
                  <div className="h-[300px]   max-w-[488px] m-auto md:translate-x-[50%]">
                    <img className="w-full h-full" src={img3} alt="" />
                  </div>
                </div>
                <div className="">
                  <div className="h-[300px]   max-w-[488px] m-auto md:translate-x-[50%]">
                    <img className="w-full h-full" src={img4} alt="" />
                  </div>
                </div>
                <div className="">
                  <div className="h-[300px]   max-w-[488px] m-auto md:translate-x-[50%]">
                    <img className="w-full h-full" src={img5} alt="" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
