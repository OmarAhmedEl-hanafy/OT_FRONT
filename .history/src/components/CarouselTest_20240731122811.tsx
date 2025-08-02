/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import Slider from "react-slick";

import img1 from "../assets/images/blogers/1.jpg";
import img2 from "../assets/images/blogers/2.jpg";
import img3 from "../assets/images/blogers/3.jpg";

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
    <div className=" text-danger vh-100 overflow-hidden ">
      <div className="position-relative">
        {/* slider in background  */}
        <div className="">
          <Slider
            ref={(slider) => {
              sliderRef1 = slider;
            }}
            {...settings1}
          >
            <div style={{ height: "450px" }} className="position-relative">
              <img className="w-100 h-100 object-fit-fill" src={img1} alt="" />
              <div className="desc position-absolute bottom-50 translate-middle-y ">
                <p className="w-50 px-5 mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere tempore nulla, esse voluptatem ratione assumenda
                  numquam. Praesentium recusandae quisquam in.
                </p>
              </div>
            </div>
            <div style={{ height: "450px" }} className="position-relative">
              <img className="w-100 h-100 object-fit-fill" src={img2} alt="" />
              <div className="desc position-absolute bottom-50 translate-middle-y z-3">
                <p className="w-50 px-5 mt-5">
                  numquam Praesentium recusandae quisquam in elit. Facere
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, architecto.
                </p>
              </div>
            </div>
            <div style={{ height: "450px" }} className="position-relative">
              <img className="w-100 h-100 object-fit-fill" src={img3} alt="" />
              <div className="desc position-absolute bottom-50 translate-middle-y z-3">
                <p className="w-50 px-5 mt-5">
                  numquam Praesentium recusandae quisquam in elit. Facere
                  tempore nulla, esse voluptatem ratione assumenda numquam.
                  Praesentium recusandae quisquam in.
                </p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="fixed-top h-100 d-flex align-items-center bg-black bg-opacity-25 ">
          {/* buttons next & prev  */}
          <div className="navs position-absolute start-50 bottom-0 mb-5 d-flex gap-2 z-3">
            <button
              onClick={previous}
              type="button"
              className="bg-main-color px-3"
            >
              Prev
            </button>
            <button onClick={next} type="button" className="bg-main-color px-3">
              Next
            </button>
          </div>

          {/* slider in front  */}
          <div className="mw-100 mh-100 ">
            <div className="vw-100">
              <Slider
                ref={(slider) => {
                  sliderRef2 = slider;
                }}
                {...settings2}
              >
                <div className="">
                  <div
                    style={{ height: "200px", maxWidth: "400px" }}
                    className="ms-auto pe-5 "
                  >
                    <img
                      className="w-100 h-100 object-fit-fill"
                      src={img1}
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div
                    style={{ height: "200px", maxWidth: "400px" }}
                    className=" ms-auto pe-5"
                  >
                    <img
                      className="w-100 h-100 object-fit-fill"
                      src={img2}
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div
                    style={{ height: "200px", maxWidth: "400px" }}
                    className=" ms-auto pe-5"
                  >
                    <img
                      className="w-100 h-100 object-fit-fill"
                      src={img3}
                      alt=""
                    />
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
