/* eslint-disable @typescript-eslint/no-unused-vars */

import Slider from "react-slick";
import { slidersData } from "./SliderInMiddleData";
import SliderInMiddleDesc from "./SliderInMiddleDesc";
import SliderInMiddleImg1 from "./SliderInMiddleImg1";
import SliderInMiddleImg2 from "./SliderInMiddleImg2";
import SliderInMiddleImg3 from "./SliderInMiddleImg3";
import SliderInMiddleImg4 from "./SliderInMiddleImg4";
import SliderInMiddleImg5 from "./SliderInMiddleImg5";
import SliderInMiddleImg6 from "./SliderInMiddleImg6";

const imgsComponents = [
  <SliderInMiddleImg1 />,
  <SliderInMiddleImg2 />,
  <SliderInMiddleImg3 />,
  <SliderInMiddleImg4 />,
  <SliderInMiddleImg5 />,
  <SliderInMiddleImg6 />,
];

function SliderInMiddle() {
  const data = slidersData;

  console.log(data);

  const settings1 = {
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="my-[50px]">
      <div className="container">
        <Slider {...settings1}>
          {data.map((item, index) => (
            <div key={index} className="!grid !grid-cols-1 md:!grid-cols-4">
              <div className="col-span-2">{imgsComponents[index]}</div>

              <div className="col-span-2">
                <SliderInMiddleDesc sliderData={item} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SliderInMiddle;
