import { Link, useParams } from "react-router-dom";
import "./CourseSummary.css";
import { useQuery } from "react-query";
import axios from "axios";

function CourseSummary() {
  const getCourses = () => {
    return axios.get(
      `${import.meta.env.VITE_APP_API_URL}/Courses/GetHomeCourses`
    );
  };

  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery("getCourses", getCourses, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  const courseId = useParams().id;

  // Check if the courses data is available and non-empty
  const myCourse = courses?.data?.find(
    (course: { courseId: number; courseNameEn: string }) =>
      course.courseId === Number(courseId)
  );

  // Handling the loading state
  if (isLoading) {
    return <p>Loading course data...</p>;
  }

  // Handling the error state
  if (isError || !courses) {
    return <p>Error loading course data. Please try again later.</p>;
  }

  // Handling case where no course was found
  if (!myCourse) {
    return <p>Course not found.</p>;
  }

  return (
    <div className="course-summary-container gap-2 shadow-lg p-4 rounded-lg border">
      <h3 className="text-lg font-bold mb-4">Course</h3>

      <div className="course-info flex gap-4 items-center">
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
          alt="Course"
          className="course-image w-16 h-16 rounded-md"
        />
        <div className="course-details">
          <p className="course-instructor text-sm text-gray-500">
            Course by: <strong>Ramy Shoukry</strong>
          </p>
          <p className="course-title text-md font-semibold">
            {myCourse.courseNameEn}
          </p>
          <p className="course-price text-red-600 font-semibold">
            $15
            {/* ${myCourse.price} */}
          </p>
        </div>
      </div>

      <div className="order-summary mt-6">
        <h3 className="text-lg font-bold mb-2">Order Summary</h3>
        <div className="flex justify-between text-sm text-gray-500">
          <p>Subtotal</p>
          <p>$61.97 USD</p>
        </div>
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <p>Coupon Discount</p>
          <p>10%</p>
          {/* <p>{discount}</p> */}
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center text-lg font-bold">
          <p>Total:</p>
          <p>$75.00 USD</p>
        </div>
      </div>

      <div className="complete-payment-button mt-6">
        <Link
          to={`/courses/${courseId}/WatchCourse`}
          data-content="Complete Payment"
          className="relative btn btn-main border-4 bg-main-color text-[14px] font-bold text-white min-w-[max-content!important] px-[12px!important] rounded-[10px!important]"
        >
          Complete Payment
        </Link>
      </div>
    </div>
  );
}

export default CourseSummary;
