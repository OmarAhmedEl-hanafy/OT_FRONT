// import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function ForgotPasswordLink() {
  return (
    <div className="text-right mt-2">
      <Link
        to="/ForgotPassword"
        className="font-medium text-[14px] text-blue-300 hover:text-blue-900 transition-colors"
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
