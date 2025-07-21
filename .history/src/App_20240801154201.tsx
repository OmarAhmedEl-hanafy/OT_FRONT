import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import MainLayout from "./layouts/MainLayout";
import AboutUs from "./pages/AboutUs/AboutUs";
import Careers from "./pages/Careers/Careers";
import Blog from "./pages/Blog/Blog";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import SingleCourse from "./pages/Courses/SingleCourse";
import CoursesLayout from "./layouts/CoursesLayout";
import AuthLayout from "./layouts/AuthLayout";
import SignUP from "./pages/SignUp/SignUP";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFound/NotFound";
import Login from "./pages/Login/Login";

const Home = lazy(() => import("./pages/Home/Home"));
const Courses = lazy(() => import("./pages/Courses/Courses"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={''}>
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
          </Route>
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<SignUP />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer style={{minWidth:'max-content'}} theme="colored" />
    </>
  );
}

export default App;
