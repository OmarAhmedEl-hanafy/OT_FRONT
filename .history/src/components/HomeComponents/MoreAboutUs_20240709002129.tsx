import { motion, useInView } from "framer-motion";
import ramy from "../../assets/images/assitants/RS/rs-7.jpg";
import word from "../../assets/images/aboutUsImg.svg";
import ButtonMore from "../ButtonMore/ButtonMore";
import HighLight from "../HighLight/HighLight";
import { useRef } from "react";

const divLeftVariants = {
  hidden: {
    opacity: 0,
    x: "-50%",
  },
  visible: {
    opacity: 1,
    x: "0%",
  },
};

const divRightVariants = {
  hidden: {
    opacity: 0,
    x: "50%",
  },
  visible: {
    opacity: 1,
    x: "0%",
  },
};

function MoreAboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="my-[100px] pl-3 pr-5">
      <div className="container mx-2 md:mx-auto">
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            ref={ref}
            variants={divLeftVariants}
            initial="hidden"
            animate={`${isInView ? "visible" : ""}`}
            transition={{ ease: "easeOut", duration: 2, delay: 0.5 }}
            className="relative px-[50px] md:px-[100px]"
          >
            <div
              className="img-rs h-[450px] max-w-[562px] rounded-full overflow-hidden"
              style={{ boxShadow: "9px 8px 0px #32609E" }}
            >
              <img src={ramy} alt="OT" />
            </div>

            {/* <h2 className="hidden md:block rotate-[310deg] absolute top-[40%] left-[12%] uppercase font-bold">
              {rotateText.split("").map((char: any, index: any) => (
                <span
                  className={`absolute h-[350px] w-[300px]`}
                  key={index}
                  style={{ transform: `rotate(${(index + 1) * 4}deg)` }}
                >
                  <span
                    className="block max-w-max tracking-[5px]"
                    style={{ transform: `rotateZ(-${index + 1}deg)` }}
                  >
                    {char}
                  </span>
                </span>
              ))}
            </h2> */}

            <div className="absolute -top-[7%] md:-top-[10%] left-0 w-full px-5  md:px-10">
              <img
                src={word}
                alt="* education * system * can * make * change *"
              />
            </div>
          </motion.div>

          <motion.div
            variants={divRightVariants}
            initial="hidden"
            animate={`${isInView ? "visible" : ""}`}
            transition={{ ease: "easeOut", duration: 2, delay: 0.5 }}
            className=""
          >
            <HighLight text="Get More About Us" />
            <h2 className=" text-xl lg:text-3xl font-bold">
              <div className=" flex items-center">
                Thousand Of Top
                <span className="inline-block text-white relative ml-2">
                  <span className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] ">
                    {" "}
                    Courses
                  </span>
                  <svg
                    // className=" animate-pulse "
                    width="181"
                    height="59"
                    viewBox="0 0 181 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.08925 7.70565C60.0759 -1.18799 117.304 -2.38304 175.774 4.1205C178.57 4.48495 180.504 7.14626 180.082 10.0534C178.238 23.6481 177.05 36.5704 176.521 48.8204C176.482 51.3291 174.319 53.5582 171.704 53.7955C117.3 59.7623 63.9473 60.5985 11.6437 56.3043C9.10638 56.0924 6.7606 53.7277 6.39676 51.0325C4.4882 38.2627 2.38175 25.6511 0.0774385 13.1978C-0.401298 10.5873 1.38917 8.1379 4.07967 7.70565"
                      fill="#FFC224"
                    />
                  </svg>
                </span>
              </div>
              Now in One Place
            </h2>

            <p className="mt-2">
              He was the first to establish practical training in Egypt and the
              Arab world, as it relies in its application on the simplified
              scientific experiment and the scientific experiment that simulates
              the reality of life and influencing the feelings of the trainees
              and the subconscious mind to change negative convictions and
              rebuild positive basic skills. And now the president and founder
              of the Success System. <br /> RS GLOBAL ACADEMY
            </p>

            <ul className="mt-3">
              <li className="mt-3 flex items-center gap-2">
                <div className="bg-second-color w-[30px] h-[30px] flex items-center justify-center rounded-full border">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <p className="text-xl font-semibold">
                  The Most World Class Instructor
                </p>
              </li>
              <li className="mt-3 flex items-center gap-2">
                <div className="bg-second-color w-[30px] h-[30px] flex items-center justify-center rounded-full border">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <p className="text-xl font-semibold">
                  Access Your Class anywhere
                </p>
              </li>
              <li className="mt-3 flex items-center gap-2">
                <div className="bg-second-color w-[30px] h-[30px] flex items-center justify-center rounded-full border">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <p className="text-xl font-semibold">Flexible Course Plan</p>
              </li>
            </ul>

            <div className=" mt-5">
              <ButtonMore
                obj={{
                  text: "Learn More",
                  link: "/",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MoreAboutUs;
