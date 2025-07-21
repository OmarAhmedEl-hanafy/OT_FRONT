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
      <h2 className="text-4xl font-bold">{sliderData.title}</h2>
    </div>
  );
}

export default SliderInMiddleDesc;
