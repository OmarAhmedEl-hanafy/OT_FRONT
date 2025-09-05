// import React, { forwardRef, useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import Logo from "../Logo/Logo";
// import Legout from "../Legout/Legout";

// const Navbar = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
//   (props, ref) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [token, setToken] = useState("");

//     useEffect(() => {
//       setToken(
//         localStorage?.dataAuth ? JSON.parse(localStorage?.dataAuth) : ""
//       );
//     }, []);

//     useEffect(() => {
//       const handleScroll = () => {
//         if (ref && "current" in ref && ref.current) {
//           const parentElement = ref.current as HTMLElement;

//           if (window.scrollY > 130) {
//             parentElement.style.background = "#fffff";
//             parentElement.style.padding = "5px 10px";
//             parentElement.style.boxShadow = "0 0 15px 0 #3361A050";
//           } else {
//             parentElement.style.background = "transparent";
//             parentElement.style.padding = "15px 10px";
//             parentElement.style.boxShadow = "none";
//           }

//           if (window.scrollY < 3890) {
//             const childLinks = parentElement.querySelectorAll("navlink");
//             childLinks.forEach((link) => {
//               (link as HTMLElement).style.color = "rgb(5, 67, 153)";
//             });
//           } else if (window.scrollY > 3890 && window.scrollY < 4250) {
//             parentElement.style.background = "#fffff !important";
//           } else {
//             const childLinks = parentElement.querySelectorAll("navlink");
//             childLinks.forEach((link) => {
//               (link as HTMLElement).style.color = "rgb(5, 67, 153)";
//             });
//           }
//         }
//       };

//       window.addEventListener("scroll", handleScroll);
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     }, [ref]);

//     return (
//       <nav
//         ref={ref as React.RefObject<HTMLElement>}
//         {...props}
//         className="px-5 fixed  z-[99999] top-0 w-[100%] backdrop-blur-lg bg-gradient-blur transition-all duration-500"
//       >
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="">
//             <Logo height={60} />
//           </div>

//           <div className="block lg:hidden">
//             <button
//               className="text-main-color focus:outline-none"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </button>
//           </div>

//           <ul className="hidden lg:flex gap-5 flex-row ">
//             <li>
//               <NavLink
//                 end
//                 to="/"
//                 className="navlink text-main-color block py-2 px-4"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/careers"
//                 className="navlink text-main-color block py-2 px-4"
//               >
//                 Careers
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/about-us"
//                 className="navlink text-main-color block py-2 px-4"
//               >
//                 About Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/blog"
//                 className="navlink text-main-color block py-2 px-4"
//               >
//                 Blog
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/courses"
//                 className="navlink text-main-color block py-2 px-4"
//               >
//                 Courses
//               </NavLink>
//             </li>
//           </ul>

//           {token ? (
//             <div className="hidden lg:block">
//               <Legout />
//             </div>
//           ) : (
//             <ul className="hidden lg:flex gap-3">
//               <li>
//                 <NavLink
//                   end
//                   to="/auth/login"
//                   className="btn btn-white text-main-color bg-white block py-2 px-4"
//                   data-content="LOG IN"
//                 >
//                   LOG IN
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="auth/register"
//                   className="btn btn-main text-white bg-main-color block py-2 px-4"
//                   data-content="SIGN UP"
//                 >
//                   SIGN UP
//                 </NavLink>
//               </li>
//             </ul>
//           )}

//           <ul
//             className={`lg:hidden flex flex-col py-3 pl-5  justify-between bg-[#c9e4e9] absolute left-[5%] h-[70vh] w-[90%] rounded-lg shadow-2xl shadow-main-color transition-all duration-300 ease-in-out ${
//               isOpen ? "top-[100%]" : "top-[-70vh]"
//             }`}
//           >
//             <ul className="flex flex-col">
//               <li>
//                 <NavLink
//                   end
//                   to="/"
//                   className="navlink text-main-color block py-2 px-4"
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/careers"
//                   className="navlink text-main-color block py-2 px-4"
//                 >
//                   Careers
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/about-us"
//                   className="navlink text-main-color block py-2 px-4"
//                 >
//                   About Us
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/blog"
//                   className="navlink text-main-color block py-2 px-4"
//                 >
//                   Blog
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/courses"
//                   className="navlink text-main-color block py-2 px-4"
//                 >
//                   Courses
//                 </NavLink>
//               </li>
//             </ul>

//             {token ? (
//               <Legout />
//             ) : (
//               <ul className="flex flex-col gap-5 w-[50%]">
//                 <li>
//                   <NavLink
//                     end
//                     to="/auth/login"
//                     className="btn btn-white text-main-color bg-white block py-2 px-4"
//                     data-content="LOG IN"
//                   >
//                     LOG IN
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/auth/register"
//                     className="btn btn-main text-white bg-main-color block py-2 px-4"
//                     data-content="SIGN UP"
//                   >
//                     SIGN UP
//                   </NavLink>
//                 </li>
//               </ul>
//             )}
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// );
// export default Navbar;

//======================================== 1 =================================================
// import React, { forwardRef, useEffect, useState, useMemo } from "react";
// import { NavLink } from "react-router-dom";
// import Logo from "../Logo/Logo";
// import "./Navbar.css"; // Add this for additional CSS

// const Navbar = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
//   (props, ref) => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [username, setUsername] = useState<string>("");
//     const [token, setToken] = useState<string>("");

//     useEffect(() => {
//       const dataAuth = localStorage.getItem("dataAuth");

//       if (dataAuth) {
//         try {
//           const userData = JSON.parse(dataAuth);

//           // حفظ التوكن
//           setToken(userData?.tokens?.access || "");

//           // جلب أول حرف من first_name
//           const firstName = userData?.user?.first_name || "";
//           setUsername(firstName.charAt(0).toUpperCase());
//         } catch (error) {
//           console.error("Error parsing dataAuth:", error);
//           setUsername("T"); // fallback
//           setToken("");
//         }
//       } else {
//         setUsername("T"); // fallback لو مفيش user
//         setToken("");
//       }
//     }, []);

//     // Handle scroll for navbar styling
//     useEffect(() => {
//       const handleScroll = () => {
//         if (ref && "current" in ref && ref.current) {
//           const parentElement = ref.current as HTMLElement;

//           if (window.scrollY > 60) {
//             parentElement.style.background = "#ffffff";
//             parentElement.style.padding = "5px 5px";
//             parentElement.style.boxShadow = "0 0 15px 0 #3361A050";
//           } else {
//             parentElement.style.background = "transparent";
//             parentElement.style.padding = "5px 5px";
//             parentElement.style.boxShadow = "none";
//           }
//         }
//       };

//       window.addEventListener("scroll", handleScroll);
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     }, [ref]);

//     // Toggle sidebar visibility when profile icon is clicked
//     const toggleSidebar = () => {
//       setIsSidebarOpen(!isSidebarOpen);
//     };

//     // Get the first letter of the username
//     const userInitial = username.charAt(0).toUpperCase();

//     // Memoized Logo component
//     const logoMemo = useMemo(() => <Logo />, []);

//     return (
//       <nav
//         ref={ref as React.RefObject<HTMLElement>}
//         {...props}
//         className="px-5 fixed z-[99999] top-0 w-[100%] backdrop-blur-lg bg-gradient-blur transition-all duration-500"
//       >
//         <div className="container mx-auto flex justify-between items-center">
//           <div>{logoMemo}</div>

//           {/* Mobile Menu Button */}
//           <div className="block lg:hidden">
//             <button
//               className="text-main-color focus:outline-none "
//               onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden lg:flex gap-5 flex-row">
//             <li>
//               <NavLink
//                 end
//                 to="/"
//                 className="navlink text-main-color block py-2 px-4"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/careers"
//                 className="navlink text-main-color block py-2 px-4"
//               >
//                 Careers
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/about-us"
//                 className="navlink text-main-color block py-2 px-4"
//               >
//                 About Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/blog"
//                 className="navlink text-main-color block py-2 px-4"
//               >
//                 Blog
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/courses"
//                 className="navlink text-main-color block py-2 px-4"
//               >
//                 Courses
//               </NavLink>
//             </li>
//           </ul>

//           {/* Profile Initial */}
//           {token ? (
//             <div className="hidden lg:block relative h-[100%] ">
//               <div
//                 onClick={toggleSidebar}
//                 className="cursor-pointer bg-main-color text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold"
//               >
//                 {userInitial}
//               </div>

//               {/* Sidebar / Drawer */}
//               <div
//                 className={`sidebar bg-white shadow-lg fixed top-0 right-0 w-64 z-[1000] transition-transform duration-300 h-[1000px] ${
//                   isSidebarOpen ? "translate-x-0" : "translate-x-full"
//                 }`}
//               >
//                 <div className="p-4 relative ">
//                   <button
//                     onClick={toggleSidebar}
//                     className="absolute top-2 right-4 text-gray-500"
//                   >
//                     <i className="fa fa-times" />
//                   </button>
//                   <ul className="mt-2">
//                     <li className="py-2">
//                       <NavLink
//                         to="/MainDashboard"
//                         className="text-gray-700 block px-4"
//                       >
//                         Dashboard
//                       </NavLink>
//                     </li>
//                     <li className="py-2">
//                       <NavLink
//                         to="/packages"
//                         className="text-gray-700 block px-4"
//                       >
//                         Packages
//                       </NavLink>
//                     </li>
//                     <li className="py-2">
//                       <NavLink to="/cart" className="text-gray-700 block px-4">
//                         Cart
//                       </NavLink>
//                     </li>
//                     <li className="py-2">
//                       <button
//                         onClick={() => {
//                           localStorage.clear();
//                           window.location.href = "/";
//                         }}
//                         className="text-gray-700 block px-4 w-full text-left"
//                       >
//                         Logout
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <ul className="hidden lg:flex gap-3">
//               <li>
//                 <NavLink
//                   end
//                   to="/signin/"
//                   className="btn btn-white text-main-color bg-white block py-2 px-4"
//                   data-content="LOG IN"
//                 >
//                   LOG IN
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/signup"
//                   className="btn btn-main text-white bg-main-color block py-2 px-4"
//                   data-content="SIGN UP"
//                 >
//                   SIGN UP
//                 </NavLink>
//               </li>
//             </ul>
//           )}
//         </div>
//       </nav>
//     );
//   }
// );

// export default Navbar;

//======================================================= 2 ==============================================================

import React, { forwardRef, useEffect, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Navbar.css"; // Add this for additional CSS

const Navbar = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [username, setUsername] = useState<string>("");
    const [token, setToken] = useState<string>("");

    useEffect(() => {
      const dataAuth = localStorage.getItem("dataAuth");

      if (dataAuth) {
        try {
          const userData = JSON.parse(dataAuth);

          // حفظ التوكن
          setToken(userData?.tokens?.access || "");

          // جلب أول حرف من first_name
          const firstName = userData?.user?.first_name || "";
          setUsername(firstName.charAt(0).toUpperCase());
        } catch (error) {
          console.error("Error parsing dataAuth:", error);
          setUsername("T"); // fallback
          setToken("");
        }
      } else {
        setUsername("T"); // fallback لو مفيش user
        setToken("");
      }
    }, []);

    // Handle scroll for navbar styling
    useEffect(() => {
      const handleScroll = () => {
        if (ref && "current" in ref && ref.current) {
          const parentElement = ref.current as HTMLElement;

          if (window.scrollY > 60) {
            parentElement.style.background = "#ffffff";
            parentElement.style.padding = "5px 5px";
            parentElement.style.boxShadow = "0 0 15px 0 #3361A050";
          } else {
            parentElement.style.background = "transparent";
            parentElement.style.padding = "5px 5px";
            parentElement.style.boxShadow = "none";
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [ref]);

    // Toggle sidebar visibility when profile icon is clicked
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    // Get the first letter of the username
    const userInitial = username.charAt(0).toUpperCase();

    // Memoized Logo component
    const logoMemo = useMemo(() => <Logo />, []);

    return (
      <nav
        ref={ref as React.RefObject<HTMLElement>}
        {...props}
        className="px-5 fixed z-[99999] top-0 w-[100%] backdrop-blur-lg bg-gradient-blur transition-all duration-500"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div>{logoMemo}</div>

          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <button
              className="text-main-color focus:outline-none "
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-5 flex-row">
            <li>
              <NavLink
                end
                to="/"
                className="navlink text-main-color block py-2 px-4"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/careers"
                className="navlink text-main-color block py-2 px-4"
              >
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className="navlink text-main-color block py-2 px-4"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="navlink text-main-color block py-2 px-4"
              >
                Blog
              </NavLink>
            </li>
            {token && (
              <li>
                <NavLink
                  to="/courses"
                  className="navlink text-main-color block py-2 px-4"
                >
                  Courses
                </NavLink>
              </li>
            )}
          </ul>

          {/* Profile Initial */}
          {token ? (
            <div className="hidden lg:block relative h-[100%] ">
              <div
                onClick={toggleSidebar}
                className="cursor-pointer bg-main-color text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold"
              >
                {userInitial}
              </div>

              {/* Desktop Sidebar / Drawer */}
              <div
                className={`sidebar bg-white shadow-lg fixed top-0 right-0 w-64 z-[1000] transition-transform duration-300 h-[1000px] ${
                  isSidebarOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="p-4 relative ">
                  <button
                    onClick={toggleSidebar}
                    className="absolute top-2 right-4 text-gray-500"
                  >
                    <i className="fa fa-times" />
                  </button>
                  <ul className="mt-2">
                    <li className="py-2">
                      <NavLink
                        to="/MainDashboard"
                        className="text-gray-700 block px-4"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="py-2">
                      <NavLink
                        to="/packages"
                        className="text-gray-700 block px-4"
                      >
                        Packages
                      </NavLink>
                    </li>
                    <li className="py-2">
                      <NavLink to="/cart" className="text-gray-700 block px-4">
                        Cart
                      </NavLink>
                    </li>
                    <li className="py-2">
                      <button
                        onClick={() => {
                          localStorage.clear();
                          window.location.href = "/";
                        }}
                        className="text-gray-700 block px-4 w-full text-left"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <ul className="hidden lg:flex gap-3">
              <li>
                <NavLink
                  end
                  to="/signin/"
                  className="btn btn-white text-main-color bg-white block py-2 px-4"
                  data-content="LOG IN"
                >
                  LOG IN
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className="btn btn-main text-white bg-main-color block py-2 px-4"
                  data-content="SIGN UP"
                >
                  SIGN UP
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        {/* Mobile Sidebar Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-64 h-screen bg-white z-[1000] transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 relative h-full">
            <button
              onClick={toggleSidebar}
              className="absolute top-2 right-4 text-gray-500"
            >
              <i className="fa fa-times" />
            </button>
            <ul className="mt-10 space-y-4">
              <li>
                <NavLink
                  to="/"
                  onClick={toggleSidebar}
                  className="block px-4 py-2 text-gray-700"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/careers"
                  onClick={toggleSidebar}
                  className="block px-4 py-2 text-gray-700"
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  onClick={toggleSidebar}
                  className="block px-4 py-2 text-gray-700"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  onClick={toggleSidebar}
                  className="block px-4 py-2 text-gray-700"
                >
                  Blog
                </NavLink>
              </li>
              {token && (
                <li>
                  <NavLink
                    to="/courses"
                    onClick={toggleSidebar}
                    className="block px-4 py-2 text-gray-700"
                  >
                    Courses
                  </NavLink>
                </li>
              )}
              {token ? (
                <>
                  <li>
                    <NavLink
                      to="/MainDashboard"
                      onClick={toggleSidebar}
                      className="block px-4 py-2 text-gray-700"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        localStorage.clear();
                        window.location.href = "/";
                      }}
                      className="block px-4 py-2 text-gray-700 w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/signin"
                      onClick={toggleSidebar}
                      className="block px-4 py-2 text-main-color"
                    >
                      LOG IN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/signup"
                      onClick={toggleSidebar}
                      className="block px-4 py-2 bg-main-color text-white rounded"
                    >
                      SIGN UP
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
);

export default Navbar;
