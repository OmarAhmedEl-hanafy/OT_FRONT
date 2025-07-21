/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import Slider from "react-slick";

import img1 from "../assets/images/slider-header/step_1.png";
import img2 from "../assets/images/slider-header/step_2.png";
import img3 from "../assets/images/slider-header/step_3.png";
import img4 from "../assets/images/slider-header/step_4.png";
import img5 from "../assets/images/slider-header/step_5.png";


function Carousel() {
  let sliderRef1: any = useRef(null);
  let sliderRef2: any = useRef(null);

  const settings1 = {
    vertical: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings2 = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const next = () => {
    sliderRef1.slickNext();
    sliderRef2.slickNext();
  };

  const previous = () => {
    sliderRef1.slickPrev();
    sliderRef2.slickPrev();
  };

  return (
    <div className=" pt-[120px] pb-[100px] text-white h-screen">
      <div className="relative">
        <div className="">
          <Slider
            ref={(slider) => {
              sliderRef1 = slider;
            }}
            {...settings1}
          >
            <div className="h-[450px] relative">
              <img className="w-full h-full" src={img} alt="" />
              <div className="desc absolute left-[50px]">
                <p className="text-three-color w-[50%] mt-[50px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere tempore nulla, esse voluptatem ratione assumenda
                  numquam. Praesentium recusandae quisquam in.
                </p>
              </div>
            </div>
            <div className="h-[450px] relative">
              <img className="w-full h-full" src={img4} alt="" />
              <div className="desc absolute left-[50px] z-40">
                <p className="text-three-color w-[50%] mt-[50px]">
                  numquam Praesentium recusandae quisquam in elit. Facere
                  tempore nulla, esse voluptatem ratione assumenda numquam.
                  Praesentium recusandae quisquam in.
                </p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="fixed top-0 w-full h-full flex place-items-center bg-white bg-opacity-5 ">
          <div className="navs absolute bottom-[150px] left-[50%] translate-x-1/2 flex gap-5">
            <button
              onClick={previous}
              type="button"
              className="bg-main-color px-3"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button onClick={next} type="button" className="bg-main-color px-3">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
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
                  <div className="h-[200px] m-auto translate-x-[50%] bg-main-color max-w-[400px]">
                    <img className="w-full h-full" src={img1} alt="" />
                  </div>
                </div>
                <div className="">
                  <div className="h-[200px]  m-auto translate-x-[50%] bg-main-color max-w-[400px]">
                    <img className="w-full h-full" src={img2} alt="" />
                  </div>
                </div>
                <div className="">
                  <div className="h-[200px]  m-auto translate-x-[50%] bg-main-color max-w-[400px]">
                    <img className="w-full h-full" src={img3} alt="" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
}

export default Carousel;
