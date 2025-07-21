import IconStudent1 from "../Icons/IconStudent1";
import IconStudent2 from "../Icons/IconStudent2";
import IconStudent3 from "../Icons/IconStudent3";
import IconStudent4 from "../Icons/IconStudent4";
import IconStudent5 from "../Icons/IconStudent5";

function IconsStudents() {
  return (
    <div className="flex max-w-max mx-auto ">
      <div className="translate-x-[200%] z-30">
        <IconStudent1 />
      </div>
      <div className="translate-x-[150%] z-20">
        <IconStudent2 />
      </div>
      <div className="translate-x-[100%] z-10">
        <IconStudent3 />
      </div>
      <div className="translate-x-1/2 ">
        <IconStudent4 />
      </div>
      <div className="">
        <IconStudent5 />
      </div>
    </div>
  );
}

export default IconsStudents;
