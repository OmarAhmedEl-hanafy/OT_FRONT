import img2 from "../../assets/images/slider-middle/img-2.png";

function SliderInMiddleImg2() {
  return (
    <div className="relative h-[500px] w-[400px] overflow-hidden">
      <img src={img2} alt="Middle Image" />

      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] flex flex-col items-center justify-center -translate-x-1/4 translate-y-1/4 rounded-full bg-[#1a2b4c] border-8 border-white circle-nums">
        <span className="text-3xl font-bold ml-[55px]">
          <CountUp end={500} duration={2} enableScrollSpy={true} />+
        </span>
        <h5 className="ml-[50px]">Assistant</h5>
      </div>
    </div>
  );
}

export default SliderInMiddleImg2;
