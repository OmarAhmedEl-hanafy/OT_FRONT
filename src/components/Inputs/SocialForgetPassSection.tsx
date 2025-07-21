// import { Link } from "react-router-dom";
// import { Typography } from "@material-tailwind/react";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";

function SocialForgetPassSection() {
  const handleSocialLogin = (provider: string) => {
    // Add logic to handle social login with provider (Facebook, Google, or Apple)
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="text-center mt-6">
      <div className="relative mt-6">
        <div className="flex items-center justify-center">
          <span className="mx-2 text-gray-500">Or login with</span>
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-6">
        {/* Facebook */}
        <button
          onClick={() => handleSocialLogin("facebook")}
          className="border-2 border-red-400 p-3 rounded-lg w-16 h-16 flex items-center justify-center hover:bg-red-50"
          style={{ width: "200px" }}
        >
          <FaFacebookF size={25} className="text-blue-600" />
        </button>

        {/* Google */}
        <button
          onClick={() => handleSocialLogin("google")}
          className="border-2 border-red-400 p-3 rounded-lg w-16 h-16 flex items-center justify-center hover:bg-red-50"
          style={{ width: "200px" }}
        >
          <FaGoogle size={25} className="text-red-500" />
        </button>

        {/* Apple */}
        <button
          onClick={() => handleSocialLogin("apple")}
          className="border-2 border-red-400 p-3 rounded-lg w-16 h-16 flex items-center justify-center hover:bg-red-50"
          style={{ width: "200px" }}
        >
          <FaApple size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
}

export default SocialForgetPassSection;
