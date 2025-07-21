import { useEffect, useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import ViewVideo from "../../components/ViewVideo";
import video from "../../assets/images/video-1.mp4";
import TabsOverviewCourse from "./TabsOverviewCourse";
import SideBarSingleCourse from "./SideBarSingleCourse";
import axios from "axios";
import { useQuery } from "react-query";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import { useParams } from "react-router-dom";

// New Curriculum Section Component
const CurriculumSection = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const curriculumData = [
    {
      sectionTitle: "Getting Started",
      lectures: [
        { title: "What's is Webflow?", type: "video", duration: "07:31" },
        { title: "Sign up in Webflow", type: "video", duration: "07:31" },
        {
          title: "Webflow Terms & Conditions",
          type: "document",
          size: "5.3 MB",
        },
        { title: "Teaser of Webflow", type: "video", duration: "07:31" },
        { title: "Practice Project", type: "document", size: "5.3 MB" },
      ],
      totalLectures: 4,
      totalDuration: "51m",
    },
    {
      sectionTitle: "Secret of Good Design",
      lectures: [
        { title: "Introduction to Design", type: "video", duration: "5h 49m" },
        // Add more lectures here
      ],
      totalLectures: 52,
      totalDuration: "5h 49m",
    },
    // Add more sections here
  ];

  const toggleSection = (index: number) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="curriculum-section mt-10">
      <h2 className="text-2xl font-bold mb-6">Curriculum</h2>
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-red-600">
            <i className="fa fa-folder"></i> {curriculumData.length} Sections
          </span>
          <span className="ml-3 text-blue-500">
            <i className="fa fa-video"></i> 202 lectures
          </span>
        </div>
        <span className="text-orange-500">
          <i className="fa fa-clock"></i> 19h 37m
        </span>
      </div>

      <div className="curriculum-list">
        {curriculumData.map((section, index) => (
          <div key={index} className="mb-6">
            <div
              className="section-header flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <h3 className="text-xl font-semibold">{section.sectionTitle}</h3>
              <div className="flex items-center">
                <span className="mr-4 text-blue-500">
                  <i className="fa fa-video"></i> {section.totalLectures}{" "}
                  lectures
                </span>
                <span className="text-orange-500">
                  <i className="fa fa-clock"></i> {section.totalDuration}
                </span>
              </div>
            </div>

            {activeSection === index && (
              <div className="lecture-list mt-4 animate-fadeIn">
                {section.lectures.map((lecture, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center mb-2"
                  >
                    <div className="flex items-center">
                      <i
                        className={`mr-2 fa ${
                          lecture.type === "video"
                            ? "fa-play-circle text-blue-500"
                            : "fa-file text-red-500"
                        }`}
                      ></i>
                      <span>{lecture.title}</span>
                    </div>
                    <div className="text-gray-600">
                      {lecture.type === "video" ? (
                        <span>{lecture.duration}</span>
                      ) : (
                        <span>{lecture.size}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

function SingleCourse() {
  const courseId = useParams().id;
  const [learningPoints, setLearningPoints] = useState<string[]>([]);
  const [whoThisCourseIsFor, setWhoThisCourseIsFor] = useState<string[]>([]);
  const [courseRequirements, setCourseRequirements] = useState<string[]>([]);

  const getCourses = () => {
    return axios.get(
      `${import.meta.env.VITE_APP_API_URL}/Courses/GetHomeCourses`
    );
  };

  const getLearningPoints = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}/Courses/GetLearningPoints`)
      .then((response) => {
        setLearningPoints(response.data);
      })
      .catch((error) => {
        console.error("Error fetching learning points", error);
      });
  };

  const getWhoThisCourseIsFor = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}/Courses/GetWhoThisCourseIsFor`)
      .then((response) => {
        setWhoThisCourseIsFor(response.data);
      })
      .catch((error) => {
        console.error("Error fetching course target audience", error);
      });
  };

  const getCourseRequirements = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}/Courses/GetCourseRequirements`)
      .then((response) => {
        setCourseRequirements(response.data);
      })
      .catch((error) => {
        console.error("Error fetching course requirements", error);
      });
  };

  useEffect(() => {
    getLearningPoints();
    getWhoThisCourseIsFor();
    getCourseRequirements(); // Fetch course requirements points
  }, []);

  const { data: courses, isLoading } = useQuery("getCourses", getCourses, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  const myCourse = courses?.data.find(
    (course: any) => course.courseId === Number(courseId)
  );

  if (isLoading) return <LoadingPage />;

  const links = ["home", "courses", myCourse.courseNameEn];

  return (
    <section className="py-[100px] bg-white">
      <div className="container">
        <div className=" mx-3 grid lg:grid-cols-6 gap-5">
          <div className="lg:col-span-4 ">
            <div className="hidden md:block">
              <Breadcrumb links={links} courseId={courseId} />
            </div>

            <div className="mt-3 w-3/4 md:w-full">
              <p>{myCourse.shortDesc}</p>
            </div>

            <div className="md:flex justify-between items-center mt-5">
              <div className="">
                <div className="flex gap-5 items-center">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 md:h-16 md:w-16 -mx-2.5 ring ring-white dark:ring-gray-900 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                      alt="RS"
                    />
                    {myCourse.instructors.map((inst: any, ind: number) => (
                      <img
                        key={ind}
                        className="h-10 w-10 md:h-16 md:w-16 -mx-1.5 md:-mx-2.5 ring ring-white dark:ring-gray-900 rounded-full object-cover"
                        src={inst.instructorPhoto}
                        alt="RS"
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
                        <p className="text-black font-medium">Ramy Shokry</p>
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
              <ViewVideo vid={myCourse.promocourse || video} />
            </div>

            {/* Description */}
            <div className="mt-10">
              <TabsOverviewCourse course={myCourse} />
            </div>

            {/* What you will learn section */}
            <div className="mt-10 what-you-will-learn">
              <h2 className="text-2xl font-bold mb-6">
                What you will learn in this course
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeInUp">
                {learningPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <i className="fas fa-check-circle text-green-600 text-lg"></i>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who this course is for section */}
            <div className="mt-10 who-this-course-is-for">
              <h2 className="text-2xl font-bold mb-6">
                Who this course is for:
              </h2>
              <div className="animate-fadeInLeft">
                {whoThisCourseIsFor.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4 mb-3">
                    <i className="fas fa-arrow-right text-red-500 text-lg"></i>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Requirements Section */}
            <div className="mt-10 course-requirements">
              <h2 className="text-2xl font-bold mb-6">Course requirements</h2>
              <div className="animate-fadeInUp">
                <ul className="list-disc pl-6">
                  {courseRequirements.map((requirement, index) => (
                    <li key={index} className="mb-2">
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Curriculum Section */}
            <CurriculumSection />
          </div>

          {/* add to cart */}
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
