// import { useState } from "react";
// import { Button } from "@material-tailwind/react";
// import Logo from "../../assets/images/BlueLogo.svg";
// import Passphoto from "../../assets/images/Passphoto.svg";
// import "./SetPassword.css";
// import InputComponent from "../../components/Inputs/InputComponent";

// function SetPassword() {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handlePasswordToggle = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleConfirmPasswordToggle = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   return (
//     <>
//       <div className="grid lg:grid-cols-2 h-screen items-center bg-white animate-fadeIn">
//         {/* Left Section */}
//         <div className="flex flex-col justify-center items-start p-10 max-w-lg mx-auto animate-slideLeft">
//           {/* Logo */}
//           <div className="mb-6">
//             <img src={Logo} alt="Logo" className="h-16" />
//           </div>

//           {/* Heading */}
//           <h1 className="text-4xl font-bold">Set a password</h1>
//           <p className="mt-4 mb-8 text-gray-600">
//             Your previous password has been reset. Please set a new password for
//             your account.
//           </p>

//           {/* Password Inputs */}
//           <div className="w-full">
//             {/* Create Password */}
//             <div className="mb-6 relative animate-slideUp">
//               <InputComponent
//                 name="password"
//                 placeholder="Create Password"
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 handleChange={(e) => setPassword(e.target.value)}
//                 label="Create Password"
//                 icon={
//                   <span
//                     className="cursor-pointer"
//                     onClick={handlePasswordToggle}
//                   >
//                     <i
//                       className={`fa-solid fa-${
//                         showPassword ? "eye" : "eye-slash"
//                       }`}
//                     />
//                   </span>
//                 }
//               />
//             </div>

//             {/* Re-enter Password */}
//             <div className="mb-6 relative animate-slideUp">
//               <InputComponent
//                 name="Re-enter Password"
//                 placeholder="Re-enter Password"
//                 type={showConfirmPassword ? "text" : "password"}
//                 value={confirmPassword}
//                 handleChange={(e) => setConfirmPassword(e.target.value)}
//                 label="Re-enter Password"
//                 icon={
//                   <span
//                     className="cursor-pointer"
//                     onClick={handleConfirmPasswordToggle}
//                   >
//                     <i
//                       className={`fa-solid fa-${
//                         showConfirmPassword ? "eye" : "eye-slash"
//                       }`}
//                     />
//                   </span>
//                 }
//               />
//             </div>

//             {/* Set Password Button */}
//             <Button className="w-full bg-red-500 hover:bg-red-900 transition-transform transform hover:scale-105 duration-300 ease-out animate-slideUp">
//               Set password
//             </Button>
//           </div>
//         </div>

//         {/* Right Section - Image */}
//         <div className="hidden lg:flex justify-center items-center h-screen animate-slideRight">
//           <div className="rounded-xl h-[650px] w-[600px] animate-zoomIn">
//             <img
//               src={Passphoto}
//               alt="Password Reset"
//               className="w-full h-full"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SetPassword;
