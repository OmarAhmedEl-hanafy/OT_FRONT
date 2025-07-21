import { Link } from "react-router-dom";
import vid from "../../assets/images/video-2.mp4";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const h1Variants = {
  hidden: {
    opacity: 0,
    x: "20%",
  },
  visible: {
    opacity: 1,
    x: "0%",
  },
};

function WithUs() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="relative z-30 flex items-center ">
      <div className=" grid md:grid-cols-2 text-main-color w-full">
        <div className="">
          <div className="">
            <motion.h1
              ref={ref}
              variants={h1Variants}
              initial="hidden"
              animate={`${isInView ? "visible" : ""}`}
              transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase py-5"
            >
              With Us
            </motion.h1>
            <motion.p
              ref={ref}
              variants={h1Variants}
              initial="hidden"
              animate={`${isInView ? "visible" : ""}`}
              transition={{ ease: "easeOut", duration: 0.6, delay: 0.9 }}
              className="mt-3 font-medium "
            >
              Dare to Dream Big and Step <br /> into Your Power to Achieve Your
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 mt-5 py-5">
            <div className="">
              <ul className="text-xl mt-5 flex flex-col gap-4">
                <motion.li
                  variants={h1Variants}
                  initial="hidden"
                  animate={`${isInView ? "visible" : ""}`}
                  transition={{ ease: "easeOut", duration: 0.5, delay: 1.2 }}
                  className="flex gap-3 items-center"
                >
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Licensed Mentors</span>
                </motion.li>
                <motion.li
                  variants={h1Variants}
                  initial="hidden"
                  animate={`${isInView ? "visible" : ""}`}
                  transition={{ ease: "easeOut", duration: 0.5, delay: 1.5 }}
                  className="flex gap-3 items-center"
                >
                  <i className="fa-solid fa-check-circle"></i>
                  <span>High Performance</span>
                </motion.li>
                <motion.li
                  variants={h1Variants}
                  initial="hidden"
                  animate={`${isInView ? "visible" : ""}`}
                  transition={{ ease: "easeOut", duration: 0.5, delay: 1.8 }}
                  className="flex gap-3 items-center"
                >
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Clarifies goals and creates action plans</span>
                </motion.li>
              </ul>

              <motion.div
                variants={h1Variants}
                initial="hidden"
                animate={`${isInView ? "visible" : ""}`}
                transition={{ ease: "easeOut", duration: 0.5, delay: 2.1 }}
                className="mt-10"
              >
                <Link
                  data-content={`START`}
                  to={"/"}
                  className="btn btn-main  bg-main-color text-white gap-2"
                >
                  <span className="text-xl uppercase">Start</span>
                  <div className="bg-white animate-pulse flex items-center justify-center rounded-full w-[37px] h-[37px]">
                    <div className="rounded-full w-[27px] h-[27px] flex items-center justify-center  border-2 border-main-color">
                      <i className="fa-solid fa-chevron-right text-main-color"></i>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          variants={h1Variants}
          initial="hidden"
          animate={`${isInView ? "visible" : ""}`}
          transition={{ ease: "easeOut", duration: 1, delay: 1.8 }}
          className="relative h-[400px] self-end"
        >
          <div className="bg-main-color w-[50%] h-full ml-auto"></div>
          <div className="absolute md:pl-16 bg-main-color overflow-hidden top-0 right-0 w-full h-full border-[15px] border-main-color rounded-full">
            <video
              className="w-full h-full object-fill"
              src={vid}
              controls
              autoPlay
              loop
              muted
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WithUs;
