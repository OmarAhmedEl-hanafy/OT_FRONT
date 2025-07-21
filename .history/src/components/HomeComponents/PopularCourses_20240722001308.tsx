import TabsHome from "./TabsHome";

import imgcourse1 from "../../assets/images/courses/course-1.png";
import imgcourse2 from "../../assets/images/courses/course-2.png";
import imgcourse3 from "../../assets/images/courses/course-3.png";
import imgcourse4 from "../../assets/images/courses/course-4.png";
import axios from "axios";
import { useQuery } from "react-query";
import LoadingPage from "../LoadingPage/LoadingPage";

const imgsCourses = [imgcourse1, imgcourse2, imgcourse3, imgcourse4];

function PopularCourses() {
  const getCourses = () => {
    return axios.get(
      `${import.meta.env.VITE_APP_API_URL}/Courses/GetHomeCourses`
    );
  };

  const { data: courses, isLoading } = useQuery("getCourses", getCourses, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  if (isLoading) return <LoadingPage />;

  return (
    <section className="my-[50px]">
      <div className="container">
        <h2 className="text-main-color text-4xl font-bold max-w-max mx-auto rounded-line ">
          Popular Courses
        </h2>

        {/* <h2 className="text-[#FD661F] font-bold mt-10 ml-5 animate-bounce"></h2> */}

        <div className="mt-[70px]">
          <TabsHome imgsCourses={imgsCourses} courses={courses} inHome = {true} />
        </div>
      </div>
    </section>
  );
}

export default PopularCourses;
