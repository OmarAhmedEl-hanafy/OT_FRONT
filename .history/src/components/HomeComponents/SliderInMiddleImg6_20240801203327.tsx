import img6 from "../../assets/images/slider-middle/img-6.png";
import img7 from "../../assets/images/slider-middle/img-7.png";

function SliderInMiddleImg6() {
  return (
    <div className="relative h-[500px] flex justify-around border-2 border-green-500">
      <div className="absolute bottom-0 left-0 w-[220px] h-[400px] border-2 border-green-500 ">
        <img src={img6} alt="Career professional side" />

        <div className="absolute h-[220px] w-[200px] bottom-0 right-0 translate-x-1/4 -translate-y-5">
          <img src={img7} alt="Career professional side" />
        </div>
      </div>

      <div className="w-[200px] h-[280px] bg-main-color ml-[200px]">

      </div>
    </div>
  );
}

export default SliderInMiddleImg6;
