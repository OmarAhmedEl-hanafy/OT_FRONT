import AnimationText from "../AnimationText";
import BoxWhy from "./BoxWhy/BoxWhy";

function WhyTraining() {
  const boxesWhy = [
    {
      title: "Spiritual side",
      description:
        " A life coach can help you gain clarity and focus by asking the right questions, helping you identify your strengths and values, and guiding you toward a clearer vision of your future.",
    },
    {
      title: "Family side",
      description:
        " A life coach can help you gain clarity and focus by asking the right questions, helping you identify your strengths and values, and guiding you toward a clearer vision of your future.",
    },
    {
      title: "Health side",
      description:
        "Whether it's a lack of confidence, a fear of failure, or a personal roadblock, a life coach can help you overcome these obstacles by providing accountability, support, and guidance.",
    },

    {
      title: "Social side",
      description:
        "Whether it's a lack of confidence, a fear of failure, or a personal roadblock, a life coach can help you overcome these obstacles by providing accountability, support, and guidance.",
    },
    {
      title: "Personal side",
      description:
        "A life coach can help you tap into your full potential by setting clear goals, creating a plan action, and providing ongoing support. guide you to achieve the success you've always dreamed.",
    },
    {
      title: "Career professional side ",
      description:
        "A life coach can help you tap into your full potential by setting clear goals, creating a plan action, and providing ongoing support. guide you to achieve the success you've always dreamed.",
    },
  ];

  const desc = ' Whatever your situation, a life coach can help you gain clarity, overcome obstacles, and unlock your full potential. Here are reasons why you might need a life coach'
  return (
    <section className="py-[50px] px-5">
      <div className="container">
        <h2 className="text-xl md:text-3xl font-bold max-w-max mx-auto text-center">
          
          <AnimationText obj={{ text:'Why is training and coaching important in your life?' }} />
        </h2>
        <p className="lg:px-3 text-center lg:w-[60%] mx-auto my-3">
         
          <AnimationText obj={{ text: desc }} />
        </p>

        <div className="grid md:grid-cols-2 gap-x-5 gap-y-10 mt-10">
          {boxesWhy.map((box) => (
            <BoxWhy key={box.title} boxWhy={box} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyTraining;
