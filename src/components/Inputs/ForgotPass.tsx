// import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function ForgotPasswordLink() {
  return (
    <div className="text-right mt-2">
      <Link
        to="/ForgotPassword"
        className="font-medium text-[14px] text-red-400 hover:text-blue-700 transition-colors"
        style={{ color: "blue" }}
      >
        {" "}
        {/* Inline style for non-tailwind properties */}
        Forgot Password?
      </Link>
    </div>
  );
}

export default ForgotPasswordLink;
