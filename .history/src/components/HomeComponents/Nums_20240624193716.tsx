import CountUp from "react-countup";
import numImg from "../../assets/images/numsImg.png";

function Nums() {
  return (
    <section className="bg-main-color text-white px-5 pt-8">
      <div className="mx-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold capitalize">
              <div className=" flex items-center">
                Thousands of
                <span className="inline-block text-white relative ml-2 mb-2">
                  <span className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] ">
                    {" "}
                    Courses
                  </span>
                  <svg
                    className="w-[150px] md:w-[181px]"
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
              Join the most powerful practical training courses
            </h2>
          </div>

          <div className="relative grid md:grid-cols-2 gap-5 text-center">
            <div className="text-5xl font-semibold flex flex-col">
              <span>
                <span>
                  <CountUp end={20} duration={2} enableScrollSpy={true} />
                </span>
                K+
              </span>
              <span className="text-xl font-[300]">Countries</span>
            </div>

            <div className="hidden md:block absolute top-0 left-[50%] translate-x-1/2 rounded-[2px] h-[45%] w-[3px] bg-gradient-line"></div>

            <div className="text-5xl font-semibold flex flex-col">
              <span>
                <span>
                  <CountUp end={1000} duration={2} enableScrollSpy={true} />
                </span>
                +
              </span>
              <span className="text-xl font-[300]">Clients</span>
            </div>

            <div className="text-5xl font-semibold flex flex-col">
              <span>
                <span>
                  <CountUp end={600} duration={2} enableScrollSpy={true} />
                </span>
                +
              </span>
              <span className="text-xl font-[300]">Team</span>
            </div>

            <div className="hidden md:block absolute bottom-0 left-[50%] translate-x-1/2 rounded-[2px] h-[45%] w-[3px] bg-gradient-line"></div>

            <div className="text-5xl font-semibold flex flex-col">
              <span>
                <span>
                  <CountUp end={4} duration={2} enableScrollSpy={true} />
                </span>
                +
              </span>
              <span className="text-xl font-[300]">Office</span>
            </div>
          </div>

          <div className="">
            <img src={numImg} alt="OT" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nums;
