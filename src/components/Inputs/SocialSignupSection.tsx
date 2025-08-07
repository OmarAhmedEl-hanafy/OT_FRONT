// import { Link } from "react-router-dom";
// import { Typography } from "@material-tailwind/react";
// import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
// import {
//   auth,
//   FacebookAuthProvider,
//   GoogleAuthProvider,
//   OAuthProvider,
// } from "./firebase"; // No need to add .ts in import

// import { signInWithPopup } from "firebase/auth";

// function SocialSignupSection() {
//   const handleSocialLogin = async (providerName: string) => {
//     let provider;

//     switch (providerName) {
//       case "facebook":
//         provider = new FacebookAuthProvider();
//         break;
//       case "google":
//         provider = new GoogleAuthProvider();
//         break;
//       case "apple":
//         provider = new OAuthProvider("apple.com");
//         break;
//       default:
//         return;
//     }

//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       console.log(`Logged in with ${providerName}`, user);
//     } catch (error) {
//       console.error(`Error logging in with ${providerName}:`, error);
//     }
//   };

//   return (
//     <div className="text-center mt-6">
//       {/* Sign in link */}
//       <Typography
//         className="text-[14px]"
//         placeholder={undefined}
//         onPointerEnterCapture={undefined}
//         onPointerLeaveCapture={undefined}
//       >
//         Already have an account?{" "}
//         <Link to="/auth/login" className="text-blue-400 hover:text-blue-800">
//           Sign in
//         </Link>
//       </Typography>

//       {/* Divider text */}
//       <div className="relative mt-2">
//         <div className="flex items-center justify-center">
//           <span className="mx-2 text-gray-500">Or Signup with</span>
//         </div>
//       </div>

//       {/* Social login buttons */}
//       <div className="flex justify-center mt-4 space-x-4">
//         {/* Facebook */}
//         <button
//           onClick={() => handleSocialLogin("facebook")}
//           className="border-2 border-gray-300 p-3 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
//           style={{ width: "100%" }}
//         >
//           <FaFacebookF size={25} className="text-blue-600" />
//         </button>

//         {/* Google */}
//         <button
//           onClick={() => handleSocialLogin("google")}
//           className="border-2 border-gray-300 p-3 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
//           style={{ width: "100%" }}
//         >
//           <FaGoogle size={25} className="text-red-500" />
//         </button>

//         {/* Apple */}
//         <button
//           onClick={() => handleSocialLogin("apple")}
//           className="border-2 border-gray-300 p-3 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
//           style={{ width: "100%" }}
//         >
//           <FaApple size={25} className="text-black" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SocialSignupSection;
