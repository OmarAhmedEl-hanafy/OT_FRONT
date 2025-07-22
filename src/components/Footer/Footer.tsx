// import { Link } from "react-router-dom";
// // import bg from "../../assets/images/bgFooter.png";
// import Contact from "./Contact";
// import { Button, Description, Field, Input } from "@headlessui/react";
// import clsx from "clsx";

// function Footer() {
//   return (
//     <footer className="relative w-full px-5 py-[50px] border-main-color bg-main-color z-0 text-white" >
//       <div className="container pt-[70px]">
//         <div className="grid md:grid-cols-3 gap-5 items-center">
//           <div className="">
//             <Contact />
//           </div>

//           <div className="flex flex-col gap-5 text-white">
//             <div className="">
//               <Link
//                 className="text-white hover:font-bold hover:underline transition-all duration-300"
//                 to="/"
//               >
//                 Help Center
//               </Link>
//             </div>
//             <div className="">
//               <Link
//                 className="text-white hover:font-bold hover:underline transition-all duration-300"
//                 to="/"
//               >
//                 Privacy Policy
//               </Link>
//             </div>
//             <div className="">
//               <Link
//                 className="text-white hover:font-bold hover:underline transition-all duration-300"
//                 to="/"
//               >
//                 FAQ
//               </Link>
//             </div>
//             <div className="">
//               <Link
//                 className="text-white hover:font-bold hover:underline transition-all duration-300"
//                 to="/"
//               >
//                 Terms & Condition
//               </Link>
//             </div>
//             <div className="">
//               <Link
//                 className="text-white hover:font-bold hover:underline transition-all duration-300"
//                 to="/"
//               >
//                 Community
//               </Link>
//             </div>
//           </div>

//           <div className=" text-white">
//             <div className="w-full max-w-md px-4">
//               <Field>
//                 <Description className="text-center text-white">
//                   Stay up to date with the latest courses
//                 </Description>
//                 <div className="relative">
//                   <Input
//                     className={clsx(
//                       "mt-3 block w-full shadow-2xl rounded-xl border-none bg-white py-4 px-3 text-sm/6 text-white",
//                       "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-main-color"
//                     )}
//                     placeholder="Email"
//                   />

//                   <Button className="absolute top-[50%] -translate-y-1/2 right-3 inline-flex items-center gap-2 rounded-xl bg-main-color py-2 px-5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-opacity-80 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
//                     Send
//                   </Button>
//                 </div>
//               </Field>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="absolute top-0 left-0 w-full h-full -z-10">
//         <img src={bg} />
//       </div> */}
//     </footer>
//   );
// }

// export default Footer;

import { Link } from "react-router-dom";
import Contact from "./Contact";
import { Button, Description, Field, Input } from "@headlessui/react";
import clsx from "clsx";

function Footer() {
  return (
    <footer className="relative w-full px-5 py-12 bg-main-color text-white rounded-t-[40px] md:rounded-t-[60px] overflow-hidden">
      <div className="container mx-auto pt-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Contact Section */}
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <Contact />
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            {[
              "Help Center",
              "Privacy Policy",
              "FAQ",
              "Terms & Condition",
              "Community",
            ].map((link) => (
              <div key={link}>
                <Link
                  className="text-white hover:text-opacity-80 transition-all duration-200 block py-2 px-3 rounded-lg hover:bg-white/10"
                  to="/"
                >
                  {link}
                </Link>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <div className="w-full">
              <Field>
                <Description className="text-center text-white mb-4 text-lg">
                  Stay up to date with the latest courses
                </Description>
                <div className="relative">
                  <Input
                    className={clsx(
                      "block w-full rounded-xl border-none bg-white/20 py-3.5 px-4 text-white placeholder-white/70",
                      "focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    )}
                    placeholder="Email"
                  />
                  <Button className="absolute top-1/2 right-2 transform -translate-y-1/2 inline-flex items-center gap-2 rounded-lg bg-white text-main-color py-2 px-4 font-medium hover:bg-opacity-90 transition-all">
                    Send
                  </Button>
                </div>
              </Field>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
