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
              style={{ boxShadow: "9px 8px 0px #A02829" }}
            >
              <img src={ramy} alt="RS" />
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
                  {/* <svg
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
                  </svg> */}
                  <svg
                    width="189"
                    height="65"
                    viewBox="0 0 189 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_733_5702)">
                      <mask id="path-1-inside-1_733_5702" fill="white">
                        <path d="M4.58925 7.42266C60.5759 -1.14901 117.804 -2.3008 176.274 3.9673C179.07 4.31856 181.004 6.88352 180.582 9.68542C178.738 22.788 177.55 35.2425 177.021 47.049C176.982 49.4669 174.819 51.6153 172.204 51.844C117.8 57.5948 64.4473 58.4007 12.1437 54.262C9.60638 54.0577 7.2606 51.7786 6.89676 49.181C4.9882 36.8735 2.88175 24.7185 0.577439 12.716C0.0987025 10.2 1.88917 7.83926 4.57967 7.42266" />
                      </mask>
                      <path
                        d="M4.58925 7.42266C60.5759 -1.14901 117.804 -2.3008 176.274 3.9673C179.07 4.31856 181.004 6.88352 180.582 9.68542C178.738 22.788 177.55 35.2425 177.021 47.049C176.982 49.4669 174.819 51.6153 172.204 51.844C117.8 57.5948 64.4473 58.4007 12.1437 54.262C9.60638 54.0577 7.2606 51.7786 6.89676 49.181C4.9882 36.8735 2.88175 24.7185 0.577439 12.716C0.0987025 10.2 1.88917 7.83926 4.57967 7.42266"
                        fill="white"
                      />
                      <path
                        d="M176.274 3.9673L176.398 2.9751L176.389 2.97397L176.38 2.973L176.274 3.9673ZM180.582 9.68542L179.593 9.53666L179.592 9.54602L180.582 9.68542ZM177.021 47.049L176.022 47.0042L176.021 47.0186L176.021 47.0329L177.021 47.049ZM172.204 51.844L172.117 50.8478L172.108 50.8486L172.099 50.8495L172.204 51.844ZM12.1437 54.262L12.0634 55.2587L12.0648 55.2588L12.1437 54.262ZM6.89676 49.181L7.88709 49.0423L7.88608 49.035L7.88495 49.0278L6.89676 49.181ZM0.577439 12.716L-0.404937 12.9029L-0.404626 12.9045L0.577439 12.716ZM4.74059 8.41114C60.6387 -0.14697 117.78 -1.29765 176.167 4.9616L176.38 2.973C117.828 -3.30396 60.5131 -2.15106 4.43791 6.43418L4.74059 8.41114ZM176.149 4.9595C178.383 5.24016 179.932 7.28579 179.593 9.53667L181.571 9.83417C182.075 6.48126 179.756 3.39695 176.398 2.9751L176.149 4.9595ZM179.592 9.54602C177.744 22.6763 176.553 35.1625 176.022 47.0042L178.02 47.0938C178.547 35.3224 179.732 22.8997 181.572 9.82482L179.592 9.54602ZM176.021 47.0329C175.991 48.8714 174.291 50.6576 172.117 50.8478L172.292 52.8402C175.346 52.5729 177.973 50.0623 178.021 47.065L176.021 47.0329ZM172.099 50.8495C117.754 56.5941 64.4623 57.3988 12.2226 53.2651L12.0648 55.2588C64.4322 59.4026 117.847 58.5954 172.31 52.8384L172.099 50.8495ZM12.2239 53.2652C10.1769 53.1004 8.18928 51.1997 7.88709 49.0423L5.90643 49.3197C6.33193 52.3576 9.03585 55.015 12.0634 55.2587L12.2239 53.2652ZM7.88495 49.0278C5.97459 36.7087 3.86611 24.5419 1.5595 12.5274L-0.404626 12.9045C1.89739 24.8951 4.00181 37.0383 5.90857 49.3342L7.88495 49.0278ZM1.55981 12.5291C1.19857 10.6306 2.53719 8.75084 4.73269 8.41088L4.42665 6.43444C1.24115 6.92769 -1.00117 9.76941 -0.404936 12.9029L1.55981 12.5291Z"
                        fill="#C9E4E9"
                        mask="url(#path-1-inside-1_733_5702)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_733_5702"
                        x="0.5"
                        y="-0.00402832"
                        width="188.14"
                        height="64.8641"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="8" dy="8" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.623529 0 0 0 0 0.160784 0 0 0 0 0.160784 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_733_5702"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_733_5702"
                          result="shape"
                        />
                      </filter>
                    </defs>
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
