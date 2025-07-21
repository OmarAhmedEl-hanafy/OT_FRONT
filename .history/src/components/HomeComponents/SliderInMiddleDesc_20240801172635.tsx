/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import ButtonMore from "../ButtonMore/ButtonMore";

type props = {
  sliderData: {
    title: string;
    desc: string;
    icon1: any;
    elDesc1: string;
    icon2: any;
    elDesc2: string;
    link: string;
  };
};

function SliderInMiddleDesc({ sliderData }: props) {
  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold capitalize">{sliderData.title}</h2>
      <p className="md:w-[70%] text-[18px] mt-2">{sliderData.desc}</p>

      <div
        style={{ boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 0.06)" }}
        className="flex gap-4 p-5 md:w-[90%] mt-10 "
      >
        <div className="">{sliderData.icon1}</div>

        <div className="">
          <p>{sliderData.elDesc1}</p>
        </div>
      </div>

      <div
        style={{ boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 0.06)" }}
        className="flex gap-4 p-5 md:w-[90%] mt-5 "
      >
        <div className="">{sliderData.icon2}</div>

        <div className="">
          <p>{sliderData.elDesc2}</p>
        </div>
      </div>

      <div className="mt-7">
        <ButtonMore obj={{ link: "/", text: "Discover More" }} />
      </div>
    </div>
  );
}

export default SliderInMiddleDesc;
