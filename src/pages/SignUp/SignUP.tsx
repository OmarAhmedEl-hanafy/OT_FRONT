// import { Button } from "@material-tailwind/react";
// import signImg from "../../assets/images/sign.png";
// import Logo from "../../components/Logo/Logo";
// import { useState } from "react";
// import InputPhoneNumber from "../../components/Inputs/InputPhoneNumber";
// import CheckboxWithLink from "../../components/Inputs/CheckboxWithLink";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import axios from "axios";
// import * as Yup from "yup";
// import { toast } from "react-toastify";
// import InputComponent from "../../components/Inputs/InputComponent";
// import InputPass from "../../components/Inputs/InputPass";
// import SocialSignupSection from "../../components/Inputs/SocialSignupSection";

// function SignUP() {
//   const [codCountry, setCodCountry] = useState("+20");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const settingInput = {
//     onPointerEnterCapture: "()=>{}",
//     onPointerLeaveCapture: "()=>{}",
//     crossOrigin: "",
//   };

//   const getCodCountry = (code: any) => {
//     register.values.phone = "";
//     setCodCountry(code);
//   };

//   // Send data user to API
//   function sendDataToApi(values: any) {
//     axios
//       .post(`${import.meta.env.VITE_APP_API_URL}/User/SignUp`, values)
//       .then(({}: any) => {
//         toast.success("Congratulations! Your account has been created.");
//         setLoading(false);

//         // Navigate to SetPassword page after successful signup
//         navigate("/auth/set-password");
//       })
//       .catch((err: any) => {
//         toast.error(err.response || "Error in Sign Up");
//         setLoading(false);
//       });
//   }

//   // Form validation using YUP
//   function validationSchema() {
//     const schema = Yup.object({
//       fname: Yup.string().min(3).max(30).required(),
//       lname: Yup.string().min(3).max(30).required(),
//       email: Yup.string().email().required(),
//       phone: Yup.string()
//         .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
//         .required(),
//       password: Yup.string()
//         .matches(
//           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//           "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
//         )
//         .required("Password is required"),
//       rePassword: Yup.string()
//         .oneOf([Yup.ref("password")], "Passwords must match")
//         .required("Confirm password is required"),
//     });

//     return schema;
//   }

//   const register = useFormik({
//     initialValues: {
//       fname: "",
//       lname: "",
//       name: "",
//       email: "",
//       phone: "",
//       password: "",
//       rePassword: "",
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       values.name = values.fname + " " + values.lname;
//       values.phone = codCountry + values.phone;
//       delete (values as { fname?: string }).fname;
//       delete (values as { lname?: string }).lname;
//       setLoading(true);

//       sendDataToApi(values);
//       register.resetForm();
//     },
//   });

//   return (
//     <section className="h-screen bg-white flex items-center border">
//       <div className="container" style={{ maxWidth: "1400px" }}>
//         <div
//           className="grid md:grid-cols-7 justify-between  md:gap-5 lg:gap-16"
//           style={{ display: "flex", alignItems: "center" }}
//         >
//           {/* Left Image with slide-in-left animation */}
//           <div className="hidden md:block col-span-7 md:col-span-3 slide-in-left">
//             <div className="img-sign h-[600px] w-[600px] rounded-[30px] overflow-hidden border border-main-color">
//               <img className="" src={signImg} alt="SignUp" />
//             </div>
//           </div>

//           {/* Right form section with fade-in animation */}
//           <div className="p-5 md:p-0 col-span-7 md:pr-4 md:col-span-5 fade-in h-[700px] w-[900px]">
//             <div className="">
//               <Logo height={100} />
//             </div>

//             <h1 className="text-4xl font-bold pl-3 mt-2">Sign up</h1>
//             <p className="pl-3 mt-2">
//               Let’s get you all set up so you can access your personal account.
//             </p>

//             <div className="sign-up-form">
//               <form
//                 onSubmit={register.handleSubmit}
//                 onChange={register.handleChange}
//                 className="mt-5"
//               >
//                 {/* Name inputs */}
//                 <div className="grid md:grid-cols-2 gap-5">
//                   <div className="">
//                     <InputComponent
//                       value={register.values.fname}
//                       handleChange={register.handleChange}
//                       label="First Name"
//                       name="fname"
//                       placeholder="First Name"
//                       type="text"
//                       errors={register.errors.fname}
//                     />
//                   </div>
//                   <div className="">
//                     <InputComponent
//                       value={register.values.lname}
//                       handleChange={register.handleChange}
//                       label="Last Name"
//                       name="lname"
//                       placeholder="Last Name"
//                       type="text"
//                       errors={register.errors.lname}
//                     />
//                   </div>
//                 </div>

//                 {/* Email and Phone inputs */}
//                 <div className="grid md:grid-cols-2 gap-5 mt-2">
//                   <div className="">
//                     <InputComponent
//                       value={register.values.email}
//                       handleChange={register.handleChange}
//                       label="Email"
//                       name="email"
//                       placeholder="Email"
//                       type="email"
//                       errors={register.errors.email}
//                     />
//                   </div>

//                   <div className="">
//                     <InputPhoneNumber
//                       handlechange={register}
//                       getCodCountry={getCodCountry}
//                     />
//                   </div>
//                 </div>

//                 {/* Password inputs */}
//                 <div className="grid md:grid-cols-1 mt-2">
//                   <InputPass
//                     value={register.values.password}
//                     handlechange={register.handleChange}
//                     label="Password"
//                     name="password"
//                     placeholder="Password"
//                     error={register.errors.password}
//                   />
//                 </div>
//                 <div className="grid md:grid-cols-1 mt-2">
//                   <InputPass
//                     value={register.values.rePassword}
//                     handlechange={register.handleChange}
//                     label="Confirm Password"
//                     name="rePassword"
//                     placeholder="Confirm Password"
//                     error={register.errors.rePassword}
//                   />
//                 </div>

//                 {/* Checkbox and submit button */}
//                 <div className="grid md:grid-cols-1">
//                   <CheckboxWithLink link="/" />
//                 </div>
//                 <div className="grid md:grid-cols-1">
//                   <Button
//                     type="submit"
//                     className="!bg-main-color flex justify-center bounce-animation"
//                     loading={loading}
//                     {...settingInput}
//                     placeholder={""}
//                     fullWidth
//                   >
//                     Create Account
//                   </Button>
//                 </div>
//               </form>

//               {/* Social Signup Section */}
//               {/* <div className="login-container social-signup bounce-animation">
//                 <SocialSignupSection />
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SignUP;

import { Button } from "@material-tailwind/react";
import signImg from "../../assets/images/OT/step_1.jpg";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
// import InputPhoneNumber from "../../components/Inputs/InputPhoneNumber";
import CheckboxWithLink from "../../components/Inputs/CheckboxWithLink";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";
import InputComponent from "../../components/Inputs/InputComponent";
import InputPass from "../../components/Inputs/InputPass";
// import SocialSignupSection from "../../components/Inputs/SocialSignupSection";

// Define form values type
interface FormValues {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  password: string;
  rePassword: string;
  name?: string;
}

function SignUP() {
  // const [codCountry, setCodCountry] = useState("+20");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const settingInput = {
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    crossOrigin: "",
  };

  // Set country code and clear the phone input
  // const getCodCountry = (code: string) => {
  //   register.setFieldValue("phone", ""); // Clear phone number when country changes
  //   setCodCountry(code);
  // };

  // Send user data to the API
  // Define an interface for the error response structure
  interface ErrorResponse {
    message: string; // The structure expected from the API in case of an error
  }

  const sendDataToApi = async (values: FormValues) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/User/SignUp`,
        values
      );
      toast.success("Congratulations!");
      setLoading(false);
      navigate("/auth/login");
    } catch (err) {
      const axiosError = err as AxiosError<ErrorResponse>; // Define the error type to include expected error response structure
      const message = axiosError.response?.data?.message || "Error in Sign Up"; // Safely access the `message` property or use a default message
      toast.error(message);
      setLoading(false);
    }
  };

  // Form validation using Yup
  const validationSchema = Yup.object({
    fname: Yup.string().min(3).max(30).required(),
    lname: Yup.string().min(3).max(30).required(),
    email: Yup.string().email().required(),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required(),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
      )
      .required("Password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  // Use Formik to handle form state
  const register = useFormik<FormValues>({
    initialValues: {
      fname: "",
      lname: "",
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Concatenate first and last name into a full name
      values.name = `${values.fname} ${values.lname}`;
      // Prepend country code to phone number
      // values.phone = codCountry + values.phone;
      setLoading(true);
      sendDataToApi(values); // Send data to API
      register.resetForm();
    },
  });

  return (
    <section className="h-screen bg-white flex items-center border">
      <div className="container" style={{ maxWidth: "1400px" }}>
        <div
          className="grid md:grid-cols-7 justify-between  md:gap-5 lg:gap-16"
          style={{ display: "flex", alignItems: "center" }}
        >
          {/* Left Image with slide-in-left animation */}
          <div className="hidden md:block col-span-7 md:col-span-3 slide-in-left">
            <div className="img-sign h-[680px] w-[600px] rounded-[100px] overflow-hidden border object-contain">
              <img className="" src={signImg} alt="SignUp" />
            </div>
          </div>

          {/* Right Section */}
          <div className="p-5 md:p-0 col-span-7 md:pr-5 md:col-span-4 w-[800px]">
            <div className="">
              <Logo />
            </div>

            <h1 className="text-4xl font-bold pl-3 mt-1">Sign up</h1>
            <p className="pl-3 mt-2">
              Let’s get you all set up so you can access your personal account.
            </p>

            <div className="sign-up-form">
              <form onSubmit={register.handleSubmit} className="mt-2">
                <div className="grid md:grid-cols-2 gap-5">
                  <InputComponent
                    value={register.values.fname}
                    handleChange={register.handleChange}
                    label="First Name"
                    name="fname"
                    placeholder="First Name"
                    type="text"
                    errors={register.errors.fname}
                  />
                  <InputComponent
                    value={register.values.lname}
                    handleChange={register.handleChange}
                    label="Last Name"
                    name="lname"
                    placeholder="Last Name"
                    type="text"
                    errors={register.errors.lname}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5 mt-2">
                  <InputComponent
                    value={register.values.email}
                    handleChange={register.handleChange}
                    label="Email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    errors={register.errors.email}
                  />

                  {/* <InputPhoneNumber
                    handlechange={register}
                    getCodCountry={getCodCountry}
                  /> */}
                </div>

                <div className="grid md:grid-cols-1 mt-2">
                  <InputPass
                    value={register.values.password}
                    handlechange={register.handleChange}
                    label="Password"
                    name="password"
                    placeholder="Password"
                    error={register.errors.password}
                  />
                </div>

                <div className="grid md:grid-cols-1 mt-2">
                  <InputPass
                    value={register.values.rePassword}
                    handlechange={register.handleChange}
                    label="Confirm Password"
                    name="rePassword"
                    placeholder="Confirm Password"
                    error={register.errors.rePassword}
                  />
                </div>

                <div className="grid md:grid-cols-1">
                  <CheckboxWithLink link="/" />
                </div>

                <div className="grid md:grid-cols-1">
                  <Button
                    type="submit"
                    className="!bg-main-color flex justify-center"
                    disabled={loading} // Updated to use disabled prop instead of loading
                    {...settingInput}
                    placeholder={""}
                    fullWidth
                  >
                    {loading ? "Creating Account..." : "Create Account"}
                  </Button>
                </div>
              </form>

              {/* <div className="login-container social-signup bounce-animation">
                <SocialSignupSection />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUP;
