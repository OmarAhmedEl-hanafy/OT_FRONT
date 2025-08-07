// import { useState } from "react";
// import { Button } from "@material-tailwind/react";
// import { Link } from "react-router-dom";
// import Passphoto from "../../assets/images/Verify code.svg";
// import InputComponent from "../../components/Inputs/InputComponent";

// function VerifyCode() {
//   const [code, setCode] = useState("");
//   const [showCode, setShowCode] = useState(false);

//   const handleCodeToggle = () => {
//     setShowCode(!showCode);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Add logic for code verification
//     console.log("Code for verification:", code);
//   };

//   return (
//     <div className="container h-screen lg:grid lg:grid-cols-2 items-center bg-white animate-fadeIn">
//       {/* Left Section */}
//       <div className="flex flex-col p-8 lg:p-10 mx-auto lg:mx-0">
//         {/* Back to login */}
//         <div className="mb-4">
//           <Link to="/auth/login" className="text-red-500">
//             <i className="fa-solid fa-chevron-left"></i> Back to login
//           </Link>
//         </div>

//         {/* Heading */}
//         <h1 className="text-4xl font-bold">Verify code</h1>
//         <p className="mt-4 mb-8 text-gray-600">
//           An authentication code has been sent to your email.
//         </p>

//         {/* Code Input */}
//         <form onSubmit={handleSubmit} className="w-full mb-6 relative">
//           <InputComponent
//             name="Enter Code"
//             placeholder="Enter Code"
//             type={showCode ? "text" : "password"}
//             value={code}
//             handleChange={(e) => setCode(e.target.value)}
//             label="Enter Code"
//             icon={
//               <span className="cursor-pointer" onClick={handleCodeToggle}>
//                 <i
//                   className={`fa-solid fa-${showCode ? "eye" : "eye-slash"}`}
//                 />
//               </span>
//             }
//           />

//           {/* Resend Link */}
//           <p className="text-sm text-gray-900">
//             Didn’t receive a code?{" "}
//             <span className="text-blue-500 cursor-pointer">Resend</span>
//           </p>

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             className="w-full bg-blue-900 hover:bg-blue-900 mt-4"
//           >
//             Verify
//           </Button>
//         </form>
//       </div>

//       {/* Right Section */}
//       <div className="hidden lg:flex justify-center items-center h-screen">
//         <div className="rounded-xl h-[650px] w-[600px] overflow-hidden">
//           <img src={Passphoto} alt="Image Carousel" className="w-full h-full" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VerifyCode;
