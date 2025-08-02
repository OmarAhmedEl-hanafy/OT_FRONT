import { Link } from "react-router-dom";
// import bg from "../../assets/images/bgFooter.png";
import Contact from "./Contact";
import { Button, Description, Field, Input } from "@headlessui/react";
import clsx from "clsx";

function Footer() {
  return (
    <footer className="relative w-full px-5 py-[50px] border-main-color bg-white z-0 text-white">
      <div className="container pt-[70px]">
        <div className="grid md:grid-cols-3 gap-5 items-center">
          <div className="">
            <Contact />
          </div>

          <div className="flex flex-col gap-5 text-main-color">
            <div className="">
              <Link className="text-main-color hover:text-main-color" to="/">Help Center</Link>
            </div>
            <div className="">
              <Link className="text-main-color hover:text-main-color" to="/">Privacy Policy</Link>
            </div>
            <div className="">
              <Link className="text-main-color hover:text-main-color" to="/">FAQ</Link>
            </div>
            <div className="">
              <Link className="text-main-color hover:text-main-color" to="/">Terms & Condition</Link>
            </div>
            <div className="">
              <Link className="text-main-color hover:text-main-color" to="/">Community</Link>
            </div>
          </div>

          <div className=" text-main-color">
            <div className="w-full max-w-md px-4">
              <Field>
                <Description className="text-center">
                  Stay up to date with the latest courses
                </Description>
                <div className="relative">
                  <Input
                    className={clsx(
                      "mt-3 block w-full shadow-2xl rounded-xl border-none bg-white py-4 px-3 text-sm/6 text-main-color",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-main-color"
                    )}
                    placeholder="Email"
                  />

                  <Button className="absolute top-[50%] -translate-y-1/2 right-3 inline-flex items-center gap-2 rounded-xl bg-main-color py-2 px-5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-opacity-80 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                   Send
                  </Button>
                </div>
              </Field>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img src={bg} />
      </div> */}
    </footer>
  );
}

export default Footer;
