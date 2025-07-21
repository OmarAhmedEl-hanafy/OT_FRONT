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

      <div className="relative w-[200px] h-[230px] bg-main-color -translate-y-12">
        <div className="absolute w-full h-full top-0 left-0 border-2 border-main-color border-dashed -translate-x-[15px] -translate-y-[15px]"></div>
      </div>
    </div>
  );
}

export default SliderInMiddleImg6;
