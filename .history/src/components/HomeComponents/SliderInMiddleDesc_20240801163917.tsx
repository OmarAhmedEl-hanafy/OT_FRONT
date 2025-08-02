/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

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
    <div>
      <h2 className="text-[55px] font-bold capitalize" >{sliderData.title}</h2>
      <p>{sliderData.desc}</p>
    </div>
  );
}

export default SliderInMiddleDesc;

