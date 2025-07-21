import img6 from "../../assets/images/slider-middle/img-6.png";
import img7 from "../../assets/images/slider-middle/img-7.png";

function SliderInMiddleImg6() {
  return (
    <div className="relative h-[500px] flex justify-arrownd">
      <div className="relative w-[270px]">
        <img src={img6} alt="Career professional side" />

        <div className="absolute h-[250px] w-[230px] bottom-0 right-0 translate-x-1/4 -translate-y-12">
          <img src={img7} alt="Career professional side" />
        </div>
      </div>

      <div className="w-[243px] h-[325px] bg-main-color">

      </div>
    </div>
  );
}

export default SliderInMiddleImg6;
