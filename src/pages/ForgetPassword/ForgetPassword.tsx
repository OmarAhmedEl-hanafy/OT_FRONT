import { useState } from "react";
import { Button } from "@material-tailwind/react";
import Logo from "../../assets/images/logo.svg";
import Passphoto from "../../assets/images/Passphoto.svg";
import { Link } from "react-router-dom";
import SocialForgetPassSection from "../../components/Inputs/SocialForgetPassSection";
import axios, { AxiosError } from "axios"; // For making the API call
import InputComponent from "../../components/Inputs/InputComponent";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      // Call the backend API to send the verification code
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/send-verification`,
        { email }
      );

      if (response.status === 200) {
        setMessage("A verification code has been sent to your email.");
      } else {
        setMessage("Something went wrong, please try again.");
      }
    } catch (error: AxiosError | any) {
      setMessage("Error: " + (error.response?.data?.message || "Server error"));
    }

    setIsSubmitting(false);
  };

  return (
    <div className="container h-screen lg:grid lg:grid-cols-2 items-center bg-white animate-fadeIn">
      {/* Left Section */}
      <div className="flex flex-col p-8 lg:p-10 mx-auto lg:mx-0">
        {/* Logo */}
        <div className="mb-6">
          <img
            src={Logo}
            alt="Logo"
            className="h-25"
            style={{ width: "150px" }}
          />
        </div>

        {/* Back to login */}
        <div className="mb-4">
          <Link to="/auth/login" className="text-red-900">
            <i className="fa-solid fa-chevron-left"></i> Back to login
          </Link>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold">Forgot your password?</h1>
        <p className="mt-4 mb-8 text-gray-600">
          Don’t worry, happens to all of us. Enter your email below to recover
          your password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="w-full mb-6">
            <InputComponent
              name="Email"
              placeholder="Enter Your Email"
              type="email"
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
              label="Email"
            />
          </div>

          {/* Message */}
          {message && (
            <p
              className={`text-center ${
                message.includes("Error") ? "text-red-500" : "text-green-500"
              } mb-4`}
            >
              {message}
            </p>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-red-900 hover:bg-red-900"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </form>

        {/* Social Login Section */}
        <div className="mt-6">
          <SocialForgetPassSection />
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex justify-center items-center h-screen">
        <div className="rounded-xl h-[650px] w-[600px] overflow-hidden">
          <img src={Passphoto} alt="Image Carousel" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
