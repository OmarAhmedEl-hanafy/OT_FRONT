/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
// import bgAssistant from "../../assets/images/assitants/bg-assistant.png";
import ButtonMore from "../ButtonMore/ButtonMore";

type props = {
  assistant: any;
};

function AssistantDetails({ assistant }: props) {
  console.log(assistant);

  return (
    <div className="grid md:grid-cols-2 items-center mt-5 gap-y-5">
      <div
        style={{ boxShadow: "8px 8px 0px #9F2929" }}
        className="relative mx-auto "
      >
        <div className=" w-[220px] h-[350px]">
          <img
            className=""
            src={assistant.instructorPhoto}
            alt={assistant.instractorName}
          />
        </div>
        {/* <div className="absolute bottom-0 left-0 w-[120%] h-[310px] -z-10"> */}
        {/* <img src={bgAssistant} alt="background" /> */}
        {/* </div> */}
      </div>

      <div className=" text-center md:text-start">
        <div className="flex gap-1 max-w-max mx-auto md:mx-0">
          <div className="">
            <i className="fa-solid fa-star text-[#F8BC24]"></i>
            <i className="fa-solid fa-star text-[#F8BC24]"></i>
            <i className="fa-solid fa-star text-[#F8BC24]"></i>
            <i className="fa-solid fa-star text-[#F8BC24]"></i>
            <i className="fa-solid fa-star text-[#F8BC24]"></i>
          </div>
          <p>(4.8 Ratings)</p>
        </div>
        <h2 className="mt-4 mb-2 font-bold text-2xl">
          {assistant.instractorName}
        </h2>
        <h5 className="text-xl text-main-color">{assistant.instractorTitle}</h5>
        <p className="px-2 md:pr-60 my-3 ">{assistant.about}</p>
        <div className="links-social flex gap-2 max-w-max mx-auto md:mx-0">
          <Link
            style={{ boxShadow: "2.50435px 3.33913px 0px rgba(0, 0, 0, 0.25)" }}
            className="w-[40px] h-[40px] bg-white rounded-full hover:bg-main-color hover:text-white hover:opacity-100 opacity-70 transition-all duration-300 border flex items-center justify-center"
            to={assistant?.email}
          >
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
          <Link
            style={{ boxShadow: "2.50435px 3.33913px 0px rgba(0, 0, 0, 0.25)" }}
            className="w-[40px] h-[40px] bg-white rounded-full hover:bg-main-color hover:text-white hover:opacity-100 opacity-70 transition-all duration-300 border flex items-center justify-center"
            to={assistant?.email}
          >
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link
            style={{ boxShadow: "2.50435px 3.33913px 0px rgba(0, 0, 0, 0.25)" }}
            className="w-[40px] h-[40px] bg-white rounded-full hover:bg-main-color hover:text-white hover:opacity-100 opacity-70 transition-all duration-300 border flex items-center justify-center"
            to={assistant?.email}
          >
            <i className="fa-brands fa-whatsapp"></i>
          </Link>
          <Link
            style={{ boxShadow: "2.50435px 3.33913px 0px rgba(0, 0, 0, 0.25)" }}
            className="w-[40px] h-[40px] bg-white rounded-full hover:bg-main-color hover:text-white hover:opacity-100 opacity-70 transition-all duration-300 border flex items-center justify-center"
            to={assistant?.email}
          >
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </div>

        <div className="pl-5 md:pl-0 mt-5">
          <ButtonMore
            obj={{
              text: "Join My Class",
              link: "/",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AssistantDetails;
