// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useRef, useState } from "react";
// import Slider from "react-slick";

// import img1 from "../../assets/images/slider-header/step_1.png";
// import img2 from "../../assets/images/slider-header/step_2.png";
// import img3 from "../../assets/images/slider-header/step_3.png";
// import img4 from "../../assets/images/slider-header/step_4.png";
// import img5 from "../../assets/images/slider-header/step_5.png";

// function Carousel() {
//   let sliderRef1: any = useRef(null);
//   let sliderRef2: any = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const settings1 = {
//     autoplay: true,
//     autoplaySpeed: 10000,
//     pauseOnHover: false,
//     vertical: true,
//     arrows: false,
//     infinite: true,
//     speed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     afterChange: (current: number) => setCurrentIndex(current),
//   };

//   const settings2 = {
//     autoplay: true,
//     autoplaySpeed: 10000,
//     pauseOnHover: false,
//     arrows: false,
//     infinite: true,
//     speed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     afterChange: (current: number) => setCurrentIndex(current),
//   };

//   const next = () => {
//     sliderRef1.slickNext(currentIndex);
//     sliderRef2.slickNext(currentIndex);
//   };

//   const previous = () => {
//     sliderRef1.slickPrev(currentIndex);
//     sliderRef2.slickPrev(currentIndex);
//   };

//   return (
//     <div className="pb-[100px] text-white">
//       <div className="relative">
//         <div className="">
//           <Slider
//             ref={(slider) => {
//               sliderRef1 = slider;
//             }}
//             {...settings1}
//           >
//             <div className="h-[350px] sm:h-[400px] md:h-[450px] relative">
//               {/* <img className="w-full h-full" src={img1} alt="" /> */}
//               <div className="desc mt-[70px] absolute bottom-0 left-[50px] md:w-1/2 md:bottom-auto flex flex-col justify-center">
//                 <h2 className="text-main-color text-2xl md:text-2xl lg:text-6xl md:leading-10 tracking-[3px] md:w-[90%] font-extrabold">
//                   Achieve academic success with expert tutoring.
//                 </h2>
//                 <p className="w-[90%] hidden md:block tracking-[2px] text-black/95 mt-5">
//                   Get the support you need to excel in international school
//                   programs with personalized lessons for SAT, ACT, and EST —
//                   tailored to help you build confidence, improve your skills,
//                   and reach your highest potential.
//                 </p>
//               </div>
//             </div>
//             <div className="h-[450px] relative">
//               {/* <img className="w-full h-full" src={img2} alt="" /> */}
//               <div className="desc mt-[70px] absolute bottom-0 left-[50px] md:w-1/2 md:bottom-auto flex flex-col justify-center">
//                 <h2 className="text-main-color text-xl md:text-2xl lg:text-6xl md:leading-10 tracking-[3px] md:w-[90%] font-extrabold">
//                   Reach your academic goals with professional tutoring.
//                 </h2>
//                 <p className="w-[90%] hidden md:block tracking-[2px] text-black/95 mt-5">
//                   Get the right guidance to overcome study challenges, prepare
//                   effectively for SAT, ACT, and EST exams, and achieve
//                   outstanding academic results. Each lesson is tailored to your
//                   needs to help you stay motivated and succeed with confidence.
//                 </p>
//               </div>
//             </div>
//             <div className="h-[450px] relative">
//               {/* <img className="w-full h-full" src={img3} alt="" /> */}
//               <div className="desc mt-[70px] absolute bottom-0 left-[50px] md:w-1/2 md:bottom-auto flex flex-col justify-center">
//                 <h2 className="text-main-color text-xl md:text-2xl lg:text-6xl md:leading-10 tracking-[3px] md:w-[90%] font-extrabold">
//                   Unlock your potential and excel in international exams.
//                 </h2>

//                 <p className="w-[90%] hidden md:block tracking-[2px] text-black/95 mt-5">
//                   Take the right steps toward success with expert tutoring for
//                   SAT, ACT, and EST. Personalized lessons are designed to
//                   strengthen your skills, overcome difficulties, and help you
//                   achieve the scores you aim for.
//                 </p>
//               </div>
//             </div>
//             <div className="h-[450px] relative">
//               {/* <img className="w-full h-full" src={img4} alt="" /> */}
//               <div className="desc mt-[70px] absolute bottom-0 left-[50px] md:w-1/2 md:bottom-auto flex flex-col justify-center">
//                 <h2 className="text-main-color text-xl md:text-2xl lg:text-6xl md:leading-10 tracking-[3px] md:w-[90%] font-extrabold">
//                   Master the test, embrace success, secure your future.
//                 </h2>
//                 <p className="w-[90%] hidden md:block tracking-[2px] text-black/95 mt-5">
//                   Get a quick overview of our tutoring programs designed for
//                   SAT, ACT, and EST preparation. Each course is built to boost
//                   your confidence, sharpen your skills, and prepare you for top
//                   results in your exams.
//                 </p>
//               </div>
//             </div>
//             <div className="h-[450px] relative">
//               {/* <img className="w-full h-full" src={img5} alt="" /> */}
//               <div className="desc mt-[70px] absolute bottom-0 left-[50px] md:w-1/2 md:bottom-auto flex flex-col justify-center">
//                 <h2 className="text-main-color text-xl md:text-2xl lg:text-6xl md:leading-10 tracking-[3px] md:w-[90%] font-extrabold">
//                   Step into learning, invest in success, achieve your goals.
//                 </h2>
//                 <p className="w-[90%] hidden md:block tracking-[2px] text-black/95 mt-5">
//                   Take the first step toward academic excellence with focused
//                   SAT, ACT, and EST preparation. Our tutoring programs give you
//                   the tools, strategies, and confidence to excel in your exams
//                   and secure a brighter future.
//                 </p>
//               </div>
//             </div>
//           </Slider>
//         </div>

//         <div className="absolute top-0 w-full h-full flex place-items-center text-main-color bg-opacity-5 pl-[0px] md:pl-[100px]">
//           <div className="border-2 border-white">
//             <div className="navs absolute bottom-[10px] left-[30%] md:bottom-[5px] md:left-[65%] translate-x-1/4 flex gap-5">
//               <button
//                 onClick={previous}
//                 type="button"
//                 className="text-main-color bg-white bg-opacity-30 rounded-full w-[40px] h-[40px] hover:bg-main-color hover:text-white flex items-center justify-center"
//               >
//                 <i className="fa-solid fa-arrow-left"></i>
//               </button>
//               <button
//                 onClick={next}
//                 type="button"
//                 className="text-main-color bg-white bg-opacity-30 rounded-full w-[40px] h-[40px] hover:bg-main-color hover:text-white flex items-center justify-center"
//               >
//                 <i className="fa-solid fa-arrow-right"></i>
//               </button>

//               <div className="count-item text-white flex items-center font-bold">
//                 <p className="">
//                   <span>0{currentIndex + 1}</span> - <span>05</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="max-w-max max-h-max">
//             <div className="w-[100vw]">
//               <Slider
//                 ref={(slider) => {
//                   sliderRef2 = slider;
//                 }}
//                 {...settings2}
//               >
//                 <div className="">
//                   <div className="h-[380px] md:max-w-[400px] lg:max-w-[488px] m-auto right-1 md:translate-x-[50%]">
//                     <img
//                       className="w-full h-full"
//                       src={img1}
//                       alt=""
//                       style={{ objectFit: "fill", borderRadius: "20px" }}
//                     />
//                   </div>
//                 </div>
//                 <div className="">
//                   <div className="h-[380px] md:max-w-[400px] lg:max-w-[488px] m-auto md:translate-x-[50%]">
//                     <img
//                       className="w-full h-full"
//                       src={img2}
//                       alt=""
//                       style={{ objectFit: "fill", borderRadius: "20px" }}
//                     />
//                   </div>
//                 </div>
//                 <div className="">
//                   <div className="h-[380px] md:max-w-[400px] lg:max-w-[488px] m-auto md:translate-x-[50%]">
//                     <img
//                       className="w-full h-full"
//                       src={img3}
//                       alt=""
//                       style={{ objectFit: "fill", borderRadius: "20px" }}
//                     />
//                   </div>
//                 </div>
//                 <div className="">
//                   <div className="h-[380px] md:max-w-[400px] lg:max-w-[488px] m-auto md:translate-x-[50%]">
//                     <img
//                       className="w-full h-full"
//                       src={img4}
//                       alt=""
//                       style={{ objectFit: "fill", borderRadius: "20px" }}
//                     />
//                   </div>
//                 </div>
//                 <div className="">
//                   <div className="h-[380px] md:max-w-[400px] lg:max-w-[488px] m-auto md:translate-x-[50%]">
//                     <img
//                       className="w-full h-full"
//                       src={img5}
//                       alt=""
//                       style={{
//                         objectFit: "fill",
//                         borderRadius: "20px",
//                       }}
//                     />
//                   </div>
//                 </div>
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carousel;

// import { useRef, useState } from "react";
// import Slider from "react-slick";

// import img1 from "../../assets/images/slider-header/step_1.png";
// import img2 from "../../assets/images/slider-header/step_2.png";
// import img3 from "../../assets/images/slider-header/step_3.png";
// import img4 from "../../assets/images/slider-header/step_4.png";
// import img5 from "../../assets/images/slider-header/step_5.png";

// const Carousel = () => {
//   const textSlider = useRef<Slider | null>(null);
//   const imageSlider = useRef<Slider | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       title: "Step into learning, invest in success, achieve your goals.",
//       desc: "Take the first step toward academic excellence with focused SAT, ACT, and EST preparation. Our tutoring programs give you the tools, strategies, and confidence to excel in your exams and secure a brighter future.",
//       img: img1,
//     },
//     {
//       title: "Achieve academic success with expert tutoring.",
//       desc: "Get a quick overview of our tutoring programs designed for SAT, ACT, and EST preparation. Each course is built to boost your confidence, sharpen your skills, and prepare you for top results in your exams.",
//       img: img2,
//     },
//     {
//       title: "Confidence starts with the right guidance.",
//       desc: "Take the right steps toward success with expert tutoring for SAT, ACT, and EST. Personalized lessons are designed to strengthen your skills, overcome difficulties, and help you achieve the scores you aim for.",
//       img: img3,
//     },
//     {
//       title: "Personalized lessons for your success.",
//       desc: "Every student learns differently — our approach adapts to your style for maximum results.",
//       img: img4,
//     },
//     {
//       title: "Your future starts here.",
//       desc: "Unlock opportunities with better exam results and a brighter academic path ahead.",
//       img: img5,
//     },
//   ];

//   const commonSettings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 800,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     pauseOnHover: false,
//     cssEase: "ease-in-out",
//   };

//   const textSettings = {
//     ...commonSettings,
//     fade: true,
//     afterChange: (index: number) => {
//       setCurrentIndex(index);
//       imageSlider.current?.slickGoTo(index);
//     },
//   };

//   const imageSettings = {
//     ...commonSettings,
//     afterChange: (index: number) => {
//       setCurrentIndex(index);
//       textSlider.current?.slickGoTo(index);
//     },
//   };

//   const next = () => {
//     textSlider.current?.slickNext();
//     imageSlider.current?.slickNext();
//   };

//   const prev = () => {
//     textSlider.current?.slickPrev();
//     imageSlider.current?.slickPrev();
//   };

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div className="flex flex-col md:flex-row items-center">
//         {/* النصوص */}
//         <div className="md:w-1/2 w-full px-6 md:pl-[100px] text-center md:text-left mt-10 md:mt-0">
//           <Slider ref={textSlider} {...textSettings}>
//             {slides.map((slide, i) => (
//               <div key={i} className="animate-slide-up">
//                 <h2 className="text-main-color text-2xl lg:text-5xl font-extrabold tracking-wide leading-snug transition-all duration-700">
//                   {slide.title}
//                 </h2>
//                 <p className="mt-4 text-black/80 tracking-wide text-sm md:text-lg transition-opacity duration-700">
//                   {slide.desc}
//                 </p>
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* الصور */}
//         <div className="md:w-1/2 w-full max-w-[500px] px-6 mt-6 md:mt-0 md:ml-28">
//           <Slider ref={imageSlider} {...imageSettings}>
//             {slides.map((slide, i) => (
//               <div key={i} className="animate-slide-left">
//                 <img
//                   src={slide.img}
//                   alt={`Slide ${i + 1}`}
//                   className="w-full h-[300px] md:h-[450px] object-cover rounded-2xl shadow-md transition-all duration-700"
//                 />
//               </div>
//             ))}
//           </Slider>

//           {/* أزرار + Counter تحت الصور */}
//           <div className="flex items-center justify-center gap-6 mt-5">
//             <button
//               onClick={prev}
//               className="text-main-color bg-white bg-opacity-60 rounded-full w-10 h-10 hover:bg-main-color hover:text-white flex items-center justify-center transition"
//             >
//               <i className="fa-solid fa-arrow-left"></i>
//             </button>
//             <div className="text-main-color font-bold">
//               <span>0{currentIndex + 1}</span> - <span>05</span>
//             </div>
//             <button
//               onClick={next}
//               className="text-main-color bg-white bg-opacity-60 rounded-full w-10 h-10 hover:bg-main-color hover:text-white flex items-center justify-center transition"
//             >
//               <i className="fa-solid fa-arrow-right"></i>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Animations */}
//       <style>{`
//         .animate-slide-up {
//           animation: slideUp 0.8s ease;
//         }
//         .animate-slide-left {
//           animation: slideLeft 0.8s ease;
//         }
//         @keyframes slideUp {
//           from { transform: translateY(50px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes slideLeft {
//           from { transform: translateX(-50px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Carousel;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/images/slider-header/step_1.png";
import img2 from "../../assets/images/slider-header/step_2.png";
import img3 from "../../assets/images/slider-header/step_3.png";
import img4 from "../../assets/images/slider-header/step_4.png";
import img5 from "../../assets/images/slider-header/step_5.png";

const slides = [
  {
    title: "Step into learning, invest in success, achieve your goals.",
    desc: "Take the first step toward academic excellence with focused SAT, ACT, and EST preparation. Our tutoring programs give you the tools, strategies, and confidence to excel in your exams and secure a brighter future.",
    img: img1,
  },
  {
    title: "Achieve academic success with expert tutoring.",
    desc: "Get a quick overview of our tutoring programs designed for SAT, ACT, and EST preparation. Each course is built to boost your confidence, sharpen your skills, and prepare you for top results in your exams.",
    img: img2,
  },
  {
    title: "Confidence starts with the right guidance.",
    desc: "Take the right steps toward success with expert tutoring for SAT, ACT, and EST. Personalized lessons are designed to strengthen your skills, overcome difficulties, and help you achieve the scores you aim for.",
    img: img3,
  },
  {
    title: "Personalized lessons for your success.",
    desc: "Every student learns differently — our approach adapts to your style for maximum results.",
    img: img4,
  },
  {
    title: "Your future starts here.",
    desc: "Unlock opportunities with better exam results and a brighter academic path ahead.",
    img: img5,
  },
];

function Carousel() {
  const sliderRef = useRef<Slider | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true, // الصورة تتحرك من الشمال لليمين
    lazyLoad: "ondemand" as const,
    afterChange: (i: number) => setCurrentIndex(i),
  };

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

  const active = slides[currentIndex];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="container mx-auto px-4 md:px-10 py-12 md:py-0 flex flex-col md:flex-row items-center gap-8 md:gap-14"
        // style={{ paddingTop: "0px !important" }}
      >
        {/* الصورة: موبايل فوق / ديسكتوب يمين وبُعد أكبر */}
        <div className="w-full md:w-1/2 md:order-2 md:ml-16">
          <Slider ref={sliderRef} {...imageSettings}>
            {slides.map((s, i) => (
              <div key={i}>
                <div
                  className="w-full h-[360px] sm:h-[400px] md:h-[450px] rounded-2xl shadow-lg bg-center bg-contain overflow-hidden"
                  style={{ backgroundImage: `url(${s.img})` }}
                />
              </div>
            ))}
          </Slider>

          {/* الأسهم + العدّاد تحت الصورة */}
          <div className="flex items-center justify-center gap-6 mt-5">
            <button
              onClick={prev}
              aria-label="Previous"
              className="text-main-color bg-white/70 rounded-full w-10 h-10 hover:bg-main-color hover:text-white flex items-center justify-center transition"
            >
              <i className="fa-solid fa-arrow-left" />
            </button>
            <div className="text-main-color font-bold">
              <span>0{currentIndex + 1}</span> - <span>05</span>
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="text-main-color bg-white/70 rounded-full w-10 h-10 hover:bg-main-color hover:text-white flex items-center justify-center transition"
            >
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>

        {/* النص: موبايل تحت / ديسكتوب يسار */}
        <div className="w-full md:w-1/2 md:order-1 text-center md:text-left">
          {/* key لإعادة تركيب العنصر وتشغيل أنيميشن الدخول من تحت لفوق كل مرّة */}
          <div key={currentIndex} className="animate-text-in-up">
            <h2 className="text-main-color text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-wide leading-snug">
              {active.title}
            </h2>
            <p className="mt-4 text-black/80 tracking-wide text-sm md:text-lg">
              {active.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .animate-text-in-up {
          animation: textInUp .7s ease both;
        }
        @keyframes textInUp {
          from { transform: translateY(40px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default Carousel;
