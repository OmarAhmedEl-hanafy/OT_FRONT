import { Typography } from "@material-tailwind/react";
import IconsStudents from "./IconsStudents";
import { Link } from "react-router-dom";
import TruncateText from "../TruncateText ";

function Course({ course , inHome }: any) {
  console.log(course);
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden ">
      <div className="img-course">
        <img src={course.coursePhoto} alt={course.shortDesc} />
      </div>

      <div className="px-6">
        <div className="rounded-3xl bg-[#FAFAFA] -translate-y-1/2 flex items-center max-w-max mx-auto  py-2 px-3">
          <div className="-translate-x-[50%] w-[50%]">
            <IconsStudents />
          </div>

          <div className="w-[50%]">
            <h4 className="font-bold text-[16px]">
              +<span className="font-raleway">{course.numStudent || 40}</span>{" "}
              students
            </h4>
          </div>
        </div>

        <div className="">
          {/* <p className="font-raleway font-semibold">{course.date}</p> */}
        </div>

        <h2 className="my-3 text-main-color font-bold text-xl">
          <TruncateText text={course.courseNameEn} maxLength={3} />
        </h2>

        <Typography
          className="opacity-90 font-semibold text-[12px]"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <TruncateText text={course.fullDesc} maxLength={inHome ? 30 : 'Max'} />
        </Typography>
      </div>

      <div className="px-6 mt-4 pb-5 flex items-center justify-between">
        <div className="flex gap-2 text-xl font-bold">
          <span className="line-through opacity-75">${course.oldPrice}</span>
          <span className="text-[#FD661F] ">${course.price}</span>
        </div>

        <Link
          to={`/courses/${course.courseId}`}
          data-content="Enroll Now"
          className="relative btn btn-main border-4 bg-main-color text-[14px] font-bold text-white min-w-[max-content!important] px-[12px!important] rounded-[10px!important]"
        >
          Enroll Now
          <span className="absolute animate-ping top-0 right-0 w-[8px] h-[8px] m-1 rounded-full bg-[#FD661F]"></span>
        </Link>
      </div>
    </div>
  );
}

export default Course;
