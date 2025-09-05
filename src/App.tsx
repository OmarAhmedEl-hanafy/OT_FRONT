import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./layouts/MainLayout";
import AboutUs from "./pages/AboutUs/AboutUs";
import Careers from "./pages/Careers/Careers";
import Blog from "./pages/Blog/Blog";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import SingleCourse from "./pages/Courses/SingleCourse";
import CoursesLayout from "./layouts/CoursesLayout";
// import AuthLayout from "./layouts/AuthLayout";
import SignUP from "./pages/SignUp/SignUP";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFound/NotFound";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgetPassword/ForgetPassword"; // Import the SetPassword component
import SetPassword from "./pages/SetPassword/SetPassword"; // Import the SetPassword component
import VerifyCode from "./pages/VerifyCode/VerifyCode"; // Import the SetPassword component
import PaymentMethod from "./pages/AddPaymentMethod/AddPaymentMethod";
import GiftCourse from "./pages/GiftCourse/GiftCourse";
import WatchCourse from "./pages/Courses/WatchCourse";
import MainDashboard from "./pages/DashBoard/MainDashboard";
import Teachers from "./pages/DashBoard/Teachers"; // Adjust the import path as per your directory structure

import Home from "./pages/Home/Home";
import AddCart from "./pages/AddCart";
// import ForgotPasswordLink from "./components/Inputs/ForgotPass"; // Your forgot password link component

// const Home = lazy(() => import("./pages/Home/Home"));
const Courses = lazy(() => import("./pages/Courses/Courses"));
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<LoadingPage />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="home"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Home />
              </Suspense>
            }
          />
          <Route path="careers" element={<Careers />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="blog" element={<Blog />} />
          <Route
            path="courses"
            element={
              <Suspense fallback={<LoadingPage />}>
                <CoursesLayout />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Courses />
                </Suspense>
              }
            />
            <Route path=":id" element={<SingleCourse />} />
            <Route path=":id/GiftCourse" element={<GiftCourse />} />
            <Route path=":id/WatchCourse" element={<WatchCourse />} />
          </Route>
          <Route path="MainDashboard" element={<MainDashboard />} />
          <Route path="Teachers" element={<Teachers />} />
          <Route path="Cart" element={<AddCart />} />
        </Route>

        {/* <Route path="/auth" element={<AuthLayout />}> */}
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<SignUP />} />
        {/* </Route> */}

        <Route path="ForgotPassword" element={<ForgotPassword />} />
        <Route path="SetPassword" element={<SetPassword />} />

        <Route path="PaymentMethod" element={<PaymentMethod />} />
        <Route path="VerifyCode" element={<VerifyCode />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer style={{ minWidth: "max-content" }} theme="colored" />
    </>
  );
}

export default App;
