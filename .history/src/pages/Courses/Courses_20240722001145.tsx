import TabsHome from "../../components/HomeComponents/TabsHome";

import imgcourse1 from "../../assets/images/courses/course-1.png";
import imgcourse2 from "../../assets/images/courses/course-2.png";
import imgcourse3 from "../../assets/images/courses/course-3.png";
import imgcourse4 from "../../assets/images/courses/course-4.png";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import axios from "axios";
import { useQuery } from "react-query";
import Search from "../../components/Search";
import Select from "../../components/Select";

const imgsCourses = [imgcourse1, imgcourse2, imgcourse3, imgcourse4];

function Courses() {
  const placeholder = "Course Name";
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
    <>
      <div className="mt-[100px] ">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="">
              <Search placeholder={placeholder} />
            </div>
            <div className="flex justify-center">
              <Select placeholder={"Popular Course"} />
            </div>
          </div>

          <div className="mt-5">
            <TabsHome imgsCourses={imgsCourses} courses={courses} inHome = {false}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
