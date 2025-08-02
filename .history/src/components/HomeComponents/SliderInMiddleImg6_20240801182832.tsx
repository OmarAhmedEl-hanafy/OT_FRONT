import img6 from "../../assets/images/slider-middle/img-6.png";
import img7 from "../../assets/images/slider-middle/img-7.png";

function SliderInMiddleImg6() {
  return (
    <div className="relative h-[500px] border-2 border-red-500 ">
      <div className="relative w-[270px]">
        <img src={img6} alt="Career professional side" />

        <div className="absolute h-[250px] w-[230px] bottom-0 right-0">
          <img src={img7} alt="Career professional side" />
        </div>
      </div>
    </div>
  );
}

export default SliderInMiddleImg6;
