import { motion } from "framer-motion";

type props = {
  obj: {
    text: string;
  };
};

const spanVariants = {
  hidden: {
    opacity: 0,
    x: "-20%",
  },
  visible: {
    opacity: 1,
    x: "0%",
  },
};

function AnimationText({ obj }: props) {
  const text = obj.text;

  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          variants={spanVariants}
          initial="hidden"
          // animate={"visible"}
          whileInView={"visible"}
          transition={{ ease: "easeOut", duration: 1, delay: (0.3+index/10) }}
          key={index}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}

export default AnimationText;
