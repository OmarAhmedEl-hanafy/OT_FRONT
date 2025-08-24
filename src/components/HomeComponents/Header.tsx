/* eslint-disable @typescript-eslint/no-explicit-any */
// import bg from "../../assets/images/bgHeader.png";
import Carousel from "./SliderHeader";

function Header() {
  return (
    <section className="relative mt-[100px] h-screen">
      <Carousel />
      <div className="absolute top-0 right-0 w-full h-[85%] -z-10">
        {/* <img alt="" className="" src={bg} /> */}
      </div>
    </section>
  );
}

export default Header;
