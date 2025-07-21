import CountUp from "react-countup";
import img1 from "../../assets/images/slider-middle/img-1.png";

function SliderInMiddle() {
  return (
    <section className="my-[50px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <div className="relative h-[500px] pr-[100px]">
              <img src={img1} alt="Spiritual side" />

              <div className="absolute bottom-0 left-0 w-[250px] h-[250px] -translate-x-1/4 translate-y-1/4 rounded-full bg-[#FFE0D8] border-8 border-white circle-nums">
                <span className="text-2xl font-bold font-raleway">
                  <CountUp
                    end={500}
                    duration={2}
                    enableScrollSpy={true}
                  />
                  +
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderInMiddle;

/* Ellipse 1479 */

// box-sizing: border-box;

// position: absolute;
// width: 321.27px;
// height: 308.4px;
// left: -30px;
// top: 629.94px;

// /* FFE0D8 */
// background: #FFE0D8;
// /* white */
// border: 8px solid #FFFFFF;
// transform: rotate(-19.82deg);
