import { useRef } from "react";
import "./BoxWhy.css";
import { useInView, motion } from "framer-motion";

const divLeftVariants = {
  hidden: {
    opacity: 0,
    x: "-20%",
  },
  visible: {
    opacity: 1,
    x: "0%",
  },
};

function PopularCourses({ boxWhy }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      variants={divLeftVariants}
      initial="hidden"
      animate={`${isInView ? "visible" : ""}`}
      transition={{ ease: "backIn", duration: 1, delay: 0.3 }}
      className={`box-hover ${
        boxWhy.title === "Spiritual side" || boxWhy.title === "Family side"
          ? "box-why"
          : ""
      } `}
    >
      <h2 className="font-bold">{boxWhy.title}</h2>
      <p className="my-3 leading-[26px]">{boxWhy.description}</p>
    </motion.div>
  );
}

export default PopularCourses;
