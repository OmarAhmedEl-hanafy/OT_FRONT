import img6 from "../../assets/images/slider-middle/img-6.png";
import img7 from "../../assets/images/slider-middle/img-7.png";

function SliderInMiddleImg6() {
  return (
    <div className="relative h-[450px] ">
      <div className="relative w-[290px]">
        <img src={img6} alt="Career professional side" />

        <div className="absolute h-[280px] w-[270px] bottom-0 right-0">
          <img src={img7} alt="Career professional side" />
        </div>
      </div>
    </div>
  );
}

export default SliderInMiddleImg6;
