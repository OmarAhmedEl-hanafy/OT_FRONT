// import CountUp from "react-countup";
// import img1 from "../../assets/images/slider-middle/img-1.png";

// function SliderInMiddleImg1() {
//   return (
//     <div className="relative h-[500px] w-[400px] overflow-hidden">
//       <img src={img1} alt="Spiritual side" />

//       <div className="absolute bottom-0 left-0 w-[250px] h-[250px] flex flex-col items-center justify-center -translate-x-1/4 translate-y-1/4 rounded-full bg-[#1a2b4c] border-8 border-white circle-nums">
//         <span className="text-3xl font-bold ml-[55px]">
//           <CountUp end={500} duration={2} enableScrollSpy={true} />+
//         </span>
//         <h5 className="ml-[50px]">Assistant</h5>
//       </div>
//     </div>
//   );
// }

// export default SliderInMiddleImg1;

import CountUp from "react-countup";
import img1 from "../../assets/images/slider-middle/img-1.png";

function SliderInMiddleImg1() {
  return (
    <div className="relative w-full max-w-[400px] md:max-w-[400px] mx-auto">
      <img
        src={img1}
        alt="Spiritual side"
        className="w-full h-auto object-contain"
      />

      <div className="absolute bottom-0 left-0 w-[150px] h-[150px] md:w-[250px] md:h-[250px] flex flex-col items-center justify-center -translate-x-1/4 translate-y-1/4 rounded-full bg-[#1a2b4c] border-4 md:border-8 border-white circle-nums">
        <span className="text-lg md:text-3xl font-bold md:ml-[55px] ml-[25px]">
          <CountUp end={500} duration={2} enableScrollSpy={true} />+
        </span>
        <h5 className="md:ml-[50px] ml-[20px] text-sm md:text-base">
          Assistant
        </h5>
      </div>
    </div>
  );
}

export default SliderInMiddleImg1;
