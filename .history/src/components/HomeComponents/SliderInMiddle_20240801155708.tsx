import img1 from "../../assets/images/slider-middle/img-1.png";

function SliderInMiddle() {
  return (
    <section className="my-[50px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <div className="h-[500px] pr-[100px]">
              <img src={img1} alt="Spiritual side" />

              <div className="bg-[#1a2b4c] border-8 border-white circle-nums"></div>
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

// /* 1a2b4c */
// background: #1a2b4c;
// /* white */
// border: 8px solid #FFFFFF;
// transform: rotate(-19.82deg);
