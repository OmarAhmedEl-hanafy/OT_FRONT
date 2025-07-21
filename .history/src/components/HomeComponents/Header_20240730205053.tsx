/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import GlobalAca from "./GlobalAca";
import WithUs from "./WithUs";
import { useRef } from "react";
import bg from "../../assets/images/bgHeader.png";

function Header() {
  let sliderRef1: any = useRef(null);

  const settings = {
    arrows:false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const next = () => {
    sliderRef1.slickNext();
  };

  const previous = () => {
    sliderRef1.slickPrev();
  };
  return (
    <section className="relative mt-[100px] border-2 border-red-500 overflow-hidden">
      <div className="pl-[30px] max-w-[1440px] mx-auto">
        <Slider
          ref={(slider) => {
            sliderRef1 = slider;
          }}
          {...settings}
        >
          <div className="">
            <GlobalAca />
          </div>

          <div className="">
            <WithUs />
          </div>
        </Slider>
      </div>

      <div className="absolute top-[50%] left-0 right-0 px-2 -translate-y-1/2 flex">
        <button
          onClick={next}
          className=" w-[30px] h-[30px] md:w-[40px] md:h-[40px] hover:bg-main-color hover:text-[#c9e4e9] rounded-full bg-[#c9e4e9] border"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <button
          onClick={previous}
          className="block ml-auto w-[30px] h-[30px] md:w-[40px] md:h-[40px] hover:bg-main-color hover:text-[#c9e4e9] rounded-full bg-[#c9e4e9] border"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="absolute top-0 left-0 w-full ml-20 h-[93vh] -z-10 border-2 border-blue-gray-600 ">
        <img className="border-2 border-green-500" src={bg} />
      </div>
    </section>
  );
}

export default Header;
