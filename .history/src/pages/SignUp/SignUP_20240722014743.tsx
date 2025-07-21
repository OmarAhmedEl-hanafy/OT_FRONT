import { Button } from "@material-tailwind/react";
import signImg from "../../assets/images/sign.png";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import InputPhoneNumber from "../../components/Inputs/InputPhoneNumber";
import CheckboxWithLink from "../../components/Inputs/CheckboxWithLink";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";
import InputComponent from "../../components/Inputs/InputComponent";
import InputPass from "../../components/Inputs/InputPass";

function SignUP() {
  const [codCountry, setCodCountry] = useState("+20");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const settingInput = {
    onPointerEnterCapture: "()=>{}",
    onPointerLeaveCapture: "()=>{}",
    crossOrigin: "",
  };

  const getCodCountry = (code: any) => {
    register.values.phone = "";
    setCodCountry(code);
  };

  //send data user to api
  function sendDataToApi(values: any) {
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}/User/SignUp`, values)
      .then(({}: any) => {
        toast.success("congratulations!");
        setLoading(false);
        navigate("/auth/login");
      })
      .catch((err: any) => {
        toast.error(err.response.data);
        setLoading(false);
      });
  }

  //form validation using  YUP
  function validationSchema() {
    let schema = Yup.object({
      fname: Yup.string().min(3).max(30).required(),
      lname: Yup.string().min(3).max(30).required(),
      email: Yup.string().email().required(),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 number")
        .required(),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
        )
        .required("Password is required"),
      rePassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must be the same")
        .required("Confirm password is required"),
    });

    return schema;
  }

  const register = useFormik({
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
      values.name = values.fname + " " + values.lname;
      values.phone = codCountry + values.phone;
      delete (values as { fname?: string }).fname;
      delete (values as { lname?: string }).lname;
      setLoading(true);
      sendDataToApi(values);
      register.resetForm();
    },
  });

  return (
    <section className="h-screen bg-white flex items-center border">
      <div className="container">
        <div className="grid md:grid-cols-7 justify-between  md:gap-5 lg:gap-16">
          <div className="hidden md:block col-span-7 md:col-span-3">
            <div className="img-sign h-[550px] rounded-[30px] overflow-hidden border border-main-color">
              <img className="" src={signImg} alt="SignUp" />
            </div>
          </div>
          <div className="p-5 md:p-0 col-span-7 md:pr-5 md:col-span-4">
            <div className="">
              <Logo height={110} />
            </div>

            <h1 className="text-4xl font-bold pl-3 mt-2">Sign up</h1>
            <p className="pl-3 mt-2">
              Let’s get you all st up so you can access your personal account.
            </p>

            <div className="sign-up-form">
              <form
                onSubmit={register.handleSubmit}
                onChange={register.handleChange}
                className="mt-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="">
                    <InputComponent
                      handlechange={register}
                      label="First Name"
                      name="fname"
                      placeholder="First Name"
                      type="text"
                      error={register.errors.fname}
                    />
                  </div>
                  <div className="">
                    <InputComponent
                      handlechange={register}
                      label="Last Name"
                      name="lname"
                      placeholder="Last Name"
                      type="text"
                      error={register.errors.lname}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mt-2">
                  <div className="">
                    <InputComponent
                      handlechange={register}
                      label="Email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      error={register.errors.email}
                    />
                  </div>

                  <div className="">
                    <InputPhoneNumber
                      handlechange={register}
                      getCodCountry={getCodCountry}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-1 mt-2">
                  <InputPass
                    handlechange={register}
                    label="Password"
                    name="password"
                    placeholder="Password"
                    error={register.errors.password}
                  />
                </div>
                <div className="grid md:grid-cols-1 mt-2">
                  <InputPass
                    handlechange={register}
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
                    loading={loading}
                    {...settingInput}
                    placeholder={""}
                    fullWidth
                  >
                    Create Account
                  </Button>
                </div>
              </form>

              <div className="">
                <p className="text-center text-[14px] mt-2">
                  Already have an account?{" "}
                  <Link
                    to="/auth/login"
                    className="text-red-400 hover:text-main-color"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUP;
