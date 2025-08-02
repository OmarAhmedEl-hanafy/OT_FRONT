import { Breadcrumb } from "../../components/Breadcrumb";
import ViewVideo from "../../components/ViewVideo";
import video from "../../assets/images/video-1.mp4";
import TabsOverviewCourse from "./TabsOverviewCourse";
import SideBarSingleCourse from "./SideBarSingleCourse";
import axios from "axios";
import { useQuery } from "react-query";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import { useParams } from "react-router-dom";

function SingleCourse() {
  const courseId = useParams().id;

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

  const myCourse = courses?.data.find(
    (course: any) => course.courseId === Number(courseId)
  );

  if (isLoading) return <LoadingPage />;

  const links = ["home", "courses", myCourse.shortDesc];

  return (
    <section className="py-[100px] bg-white">
      <div className="container">
        <div className=" mx-3 grid lg:grid-cols-6 gap-5">
          <div className="lg:col-span-4 ">
            <div className="hidden md:block">
              <Breadcrumb links={links} />
            </div>

            <div className="">
              <h2 className="text-main-color md:text-3xl font-bold">
                {myCourse.shortDesc}
              </h2>
            </div>

            <div className="mt-3 w-3/4 md:w-full">
              <p>{myCourse.fullDesc}</p>
            </div>

            <div className="md:flex justify-between items-center mt-5">
              <div className="">
                <div className="flex gap-5 items-center">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 md:h-16 md:w-16 -mx-2.5 ring ring-white dark:ring-gray-900 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                      alt="OT"
                    />
                    {myCourse.instructors.map((inst: any, ind: number) => (
                      <img
                        key={ind}
                        className="h-10 w-10 md:h-16 md:w-16 -mx-1.5 md:-mx-2.5 ring ring-white dark:ring-gray-900 rounded-full object-cover"
                        src={inst.instructorPhoto}
                        alt="OT"
                      />
                    ))}
                  </div>

                  <div className="flex flex-col text-[12px] md:text-[14px]">
                    <p>Created by</p>
                    <div className="flex justify-around items-center gap-2 mt-2">
                      {myCourse.instructors.map((inst: any, ind: number) => (
                        <div key={ind} className="flex gap-2 items-center">
                          <p className="text-black font-medium">
                            {inst.instractorName}
                          </p>
                          <span className="block w-1 h-1 rounded-full bg-black"></span>
                        </div>
                      ))}
                      <div className="">
                        <p className="text-black font-medium">Dianne Russell</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex gap-1 max-w-max mx-auto md:mx-0">
                  <div className="">
                    <i className="fa-solid fa-star text-[#F8BC24]"></i>
                    <i className="fa-solid fa-star text-[#F8BC24]"></i>
                    <i className="fa-solid fa-star text-[#F8BC24]"></i>
                    <i className="fa-solid fa-star text-[#F8BC24]"></i>
                    <i className="fa-solid fa-star text-[#F8BC24]"></i>
                  </div>
                  <span className="font-semibold">4.8</span>
                  <p>(441,225 Ratings)</p>
                </div>
              </div>
            </div>

            {/* video overview  */}
            <div className="mt-5 overflow-hidden max-w-max">
              <ViewVideo vid={video} />
            </div>

            <div className="mt-10">
              <TabsOverviewCourse course={myCourse} />
            </div>
          </div>
          <div className="col-span-2 ">
            <div className="flex flex-col gap-5  ">
              <SideBarSingleCourse course={myCourse} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleCourse;
