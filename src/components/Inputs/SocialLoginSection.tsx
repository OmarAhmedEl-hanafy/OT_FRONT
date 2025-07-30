import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";

function SocialLoginSection() {
  const handleSocialLogin = (provider: string) => {
    // Add logic to handle social login with provider (Facebook, Google, or Apple)
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="text-center mt-6">
      <Typography
        className="text-[14px]"
        placeholder={"Don’t have an account"}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Don’t have an account?{" "}
        <Link to="/auth/register" className="text-blue-400 hover:text-blue-900">
          Sign up
        </Link>
      </Typography>

      <div className="relative mt-6">
        <div className="flex items-center justify-center">
          <span className="mx-2 text-gray-500">Or login with</span>
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-6">
        {/* Facebook */}
        <button
          onClick={() => handleSocialLogin("facebook")}
          className="border-2 border-gray-400 p-3 rounded-lg w-16 h-16 flex items-center justify-center hover:bg-gray-200"
          style={{ width: "100%" }}
        >
          <FaFacebookF size={25} className="text-blue-600" />
        </button>

        {/* Google */}
        <button
          onClick={() => handleSocialLogin("google")}
          className="border-2 border-gray-400 p-3 rounded-lg w-16 h-16 flex items-center justify-center hover:bg-gray-200"
          style={{ width: "100%" }}
        >
          <FaGoogle size={25} className="text-red-500" />
        </button>

        {/* Apple */}
        <button
          onClick={() => handleSocialLogin("apple")}
          className="border-2 border-gray-400 p-3 rounded-lg w-16 h-16 flex items-center justify-center hover:bg-gray-200"
          style={{ width: "100%" }}
        >
          <FaApple size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
}

export default SocialLoginSection;
