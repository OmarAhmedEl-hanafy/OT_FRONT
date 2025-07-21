import "./WatchCourse.css";
import video from "../../assets/images/video-1.mp4";
// import { Breadcrumb } from "../../components/Breadcrumb";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const Watchcourse = () => {
  const getCourses = () => {
    return axios.get(
      `${import.meta.env.VITE_APP_API_URL}/Courses/GetHomeCourses`
    );
  };
  const courseId = useParams().id;

  // Fetch courses using react-query
  const {
    data: courses,
    isLoading,
    // error,
  } = useQuery("getCourses", getCourses, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  // Find the course matching the courseId
  const myCourse = courses?.data?.find(
    (course: { courseId: number; courseNameEn: string }) =>
      course.courseId === Number(courseId)
  );

  // Fallback links for the breadcrumb if course is not found
  // const links = myCourse ? [myCourse.courseNameEn] : ["Loading..."];

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>; // You can customize this loader as per your needs
  }

  // Handle error state
  // if (error) {
  //   return <div>Error loading courses: {error.message}</div>;
  // }

  // Handle the case where no course is found
  if (!myCourse) {
    return <div>Course not found</div>;
  }

  return (
    <div className="coaching-section pt-20">
      <div className="container">
        <div className="header flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <button className="back-button text-gray-600 text-xl mr-4">
              <i className="fas fa-arrow-left"></i>
            </button>
            <h2 className="course-title text-lg font-semibold text-red-600">
              {myCourse.courseNameEn}
            </h2>
          </div>

          <div className="flex gap-4">
            <button className="review-button text-red-600 text-sm font-semibold">
              Write A Review
            </button>
            <button className="next-lecture-button bg-red-900 text-white py-2 px-4 rounded-md text-sm font-semibold">
              Next Lecture
            </button>
          </div>
        </div>
        <div className="flex justify-between pl-10 mb-8 items-center">
          {/* Left side: Curriculum */}
          {/* <div className="text-2xl font-bold">Curriculum</div> */}

          {/* Right side: Sections, Lectures, Time */}
          <div className="flex items-center">
            <span className="text-red-600">
              {/* <i className="fa fa-folder"></i> {curriculumData.length}{" "} */}
              <i className="fa fa-folder"></i> 6 Sections
            </span>
            <span className="ml-4 text-blue-500">
              <i className="fa fa-video"></i> 202 lectures
            </span>
            <span className="ml-4 text-orange-500">
              <i className="fa fa-clock"></i> 19h 37m
            </span>
          </div>
        </div>

        <div className="video-container">
          <video
            src={video}
            controls
            className="video-player"
            poster="video_poster_image"
          />
        </div>

        <div className="course-info">
          <h2 className="font-bold text-red-900">
            {myCourse.courseId}. {myCourse.courseNameEn}
          </h2>
          <div className="student-info">
            <span>512</span>

            <span>Students watching</span>
          </div>
          <div className="comments">
            <div className="space"></div>
            <span>Last updated: Oct 26, 2020</span>
            <span>Comments: 154 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchcourse;
