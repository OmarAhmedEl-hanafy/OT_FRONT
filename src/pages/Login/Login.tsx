// /* eslint-disable @typescript-eslint/no-explicit-any */
// // import { Button } from "@material-tailwind/react";
// import signImg from "../../assets/images/sign.png";
// import Logo from "../../components/Logo/Logo";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import axios from "axios";
// import { toast } from "react-toastify";
// import InputComponent from "../../components/Inputs/InputComponent";
// import InputPass from "../../components/Inputs/InputPass";
// import RememberMeCheckbox from "../../components/Inputs/RememberMeCheckbox";
// import ForgotPasswordLink from "../../components/Inputs/ForgotPass";
// import SocialLoginSection from "../../components/Inputs/SocialLoginSection"; // Adjust the import path
// import "./Login.css";

// function Login() {
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleRememberMeChange = () => {
//     setRememberMe(!rememberMe);
//   };
//   // const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   //   const [errorLogin,setErrorLogin] = useState('');

//   const settingInput = {
//     onPointerEnterCapture: "()=>{}",
//     onPointerLeaveCapture: "()=>{}",
//     crossOrigin: "",
//   };

//   function sendDataToApi(values: any) {
//     axios
//       .post(`${import.meta.env.VITE_APP_API_URL}/User/authenticate`, values)
//       .then(({ data }) => {
//         localStorage.setItem("dataAuth", JSON.stringify(data));
//         console.log(data);

//         if (data.role == "Admin" || data.role == "Active") {
//           navigate("/dashboard/main-dashboard");
//         } else {
//           navigate("/home");
//         }
//         // setLoading(false);
//       })
//       .catch((error) => {
//         // setErrorLogin(error.response.data.message);
//         toast.error(error.response.data.message || "Error in Login");
//         // setLoading(false);
//       });
//   }

//   const login = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit: (values) => {
//       const valuesAuth = {
//         username: values.email,
//         password: values.password,
//       };
//       // setLoading(true);
//       console.log(values);

//       sendDataToApi(valuesAuth);
//     },
//   });

//   return (
//     <section className="h-screen bg-white flex items-center">
//       <div className="container">
//         <div className="grid md:grid-cols-7 justify-between  md:gap-5 lg:gap-16">
//           <div className="p-5 md:p-0 col-span-7 md:pr-5 md:col-span-3 slide-in-left">
//             <div className="fade-in">
//               <Logo height={90} />
//             </div>

//             <h1 className="text-4xl font-bold pl-3 mt-2 fade-in-delay">
//               Login
//             </h1>
//             <p className="pl-3 mt-2 fade-in">
//               Login to access your Golobe account
//             </p>

//             <div className="sign-up-form fade-in-delay">
//               <form
//                 onSubmit={login.handleSubmit}
//                 onChange={login.handleChange}
//                 className="mt-10"
//               >
//                 <div className="grid md:grid-cols-1 mt-4">
//                   <div className="">
//                     <InputComponent
//                       value={login.values.email}
//                       handleChange={login.handleChange}
//                       label="Email"
//                       name="email"
//                       placeholder="Email"
//                       type="email"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid md:grid-cols-1 mt-4">
//                   <InputPass
//                     value={login.values.password}
//                     handlechange={login.handleChange}
//                     label="Password"
//                     name="password"
//                     placeholder="Password"
//                     error={undefined}
//                   />
//                 </div>

//                 {/* Your other form inputs */}
//                 <div
//                   style={{ display: "flex", justifyContent: "space-between" }}
//                 >
//                   <RememberMeCheckbox
//                     checked={rememberMe}
//                     handleChange={handleRememberMeChange}
//                   />

//                   {/* Forgot Password link */}
//                   <ForgotPasswordLink />
//                 </div>

//                 {/* Submit button */}
//                 <div className="grid md:grid-cols-1 mt-4">
//                   <Link
//                     to="/"
//                     // type="submit"
//                     className="!bg-main-color flex justify-center button-login"
//                     // loading={loading}
//                     {...settingInput}
//                     // placeholder={""}
//                     // fullWidth
//                   >
//                     Login
//                   </Link>
//                 </div>
//               </form>
//               <div className="login-container">
//                 {/* Social Login Section */}
//                 <SocialLoginSection />
//               </div>

//               {/* <div className="">
//                 <p className="text-center text-[14px] mt-4">
//                   Don’t have an account?
//                   <Link
//                     to="/auth/register"
//                     className="text-red-400 hover:text-main-color"
//                   >
//                     Sign up
//                   </Link>
//                 </p>
//               </div> */}
//             </div>
//           </div>
//           <div className="hidden md:block col-span-7 md:col-span-4 slide-in-right">
//             <div className="img-sign h-[600px] rounded-[30px] overflow-hidden border">
//               <img className="fade-in" src={signImg} alt="Login" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@material-tailwind/react";
import signImg from "../../assets/images/OT/OT_Logo.png";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import InputComponent from "../../components/Inputs/InputComponent";
import InputPass from "../../components/Inputs/InputPass";
import SocialLoginSection from "../../components/Inputs/SocialLoginSection";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //   const [errorLogin,setErrorLogin] = useState('');

  const settingInput = {
    onPointerEnterCapture: "()=>{}",
    onPointerLeaveCapture: "()=>{}",
    crossOrigin: "",
  };

  function sendDataToApi(values: any) {
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}/User/authenticate`, values)
      .then(({ data }) => {
        localStorage.setItem("dataAuth", JSON.stringify(data));
        console.log(data);

        if (data.role == "Admin" || data.role == "Active") {
          navigate("/dashboard/main-dashboard");
        } else {
          navigate("/home");
        }
        setLoading(false);
      })
      .catch((error) => {
        // setErrorLogin(error.response.data.message);
        toast.error(error.response.data.message || "Error in Login");
        setLoading(false);
      });
  }

  const login = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const valuesAuth = {
        username: values.email,
        password: values.password,
      };
      setLoading(true);
      console.log(values);

      sendDataToApi(valuesAuth);
    },
  });

  return (
    <section className="bg-white flex items-center">
      <div className="container">
        <div className="grid md:grid-cols-7 justify-between md:gap-5 lg:gap-16">
          <div className="p-5 md:p-0 col-span-7 md:pt-5 md:col-span-3">
            <div className="pt-12">
              <Logo />
            </div>

            <h1 className="text-4xl font-bold pl-3 mt-2">Login</h1>
            <p className="pl-3 mt-2">Login to access your Global Account</p>

            <div className="sign-up-form">
              <form
                onSubmit={login.handleSubmit}
                onChange={login.handleChange}
                className="mt-10"
              >
                <div className="grid md:grid-cols-1 mt-4">
                  <div className="">
                    <InputComponent
                      value={login.values.email}
                      handleChange={login.handleChange}
                      label="Email"
                      name="email"
                      placeholder="Email"
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-1 mt-4">
                  <InputPass
                    value={login.values.password}
                    handlechange={login.handleChange}
                    label="Password"
                    name="password"
                    placeholder="Password"
                    error={undefined}
                  />
                </div>
                <div className="grid md:grid-cols-1 mt-4">
                  <Button
                    type="submit"
                    className="!bg-main-color flex justify-center"
                    loading={loading}
                    {...settingInput}
                    placeholder={""}
                    fullWidth
                  >
                    Login
                  </Button>
                </div>
              </form>

              {/* Social Signup Section */}
              <div className="login-container social-signup bounce-animation">
                <SocialLoginSection />
              </div>
            </div>
          </div>
          <div className="hidden md:block col-span-7 md:col-span-4">
            <div className="img-sign h-[715px] overflow-hidden">
              <img className="" src={signImg} alt="SignIn" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
