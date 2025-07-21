import CountUp from "react-countup";
import img6 from "../../assets/images/slider-middle/img-6.png";
import img7 from "../../assets/images/slider-middle/img-7.png";

function SliderInMiddleImg6() {
  return (
    <div className="relative h-[500px] flex justify-around mt-10">
      <div className="absolute bottom-0 left-0 w-[250px] h-[430px] ">
        <img src={img6} alt="Career professional side" />

        <div className="absolute h-[230px] w-[200px] bottom-0 right-0 translate-x-1/4 -translate-y-8">
          <img src={img7} alt="Career professional side" />
        </div>
      </div>

      <div className="relative w-[200px] h-[230px] bg-main-color -translate-y-12 translate-x-1/2">
        <div className="">
          <div className="">
            <svg
              width="68"
              height="91"
              viewBox="0 0 68 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.9721 90.8813C52.7344 90.8813 67.9443 70.5368 67.9443 45.4406C67.9443 20.3445 52.7344 0 33.9721 0C15.2098 0 0 20.3445 0 45.4406C0 70.5368 15.2098 90.8813 33.9721 90.8813Z"
                fill="white"
              />
            </svg>

            <CountUp end={10} duration={2} enableScrollSpy={true} />+
            </div>
        </div>
        <div className="absolute w-full h-full top-0 left-0 border-2 border-main-color border-dashed -translate-x-[15px] -translate-y-[15px]"></div>
      </div>
    </div>
  );
}

export default SliderInMiddleImg6;
