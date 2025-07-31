import React from "react";
import course1 from "../../assets/images/Dashboard/Course_Images.png";
import course2 from "../../assets/images/Dashboard/Course_Images1.png";
import course3 from "../../assets/images/Dashboard/Course_Images2.svg";
import course4 from "../../assets/images/Dashboard/Course_Images3.svg";

// CourseProps interface for course card component
interface CourseProps {
  title: string;
  lesson: string;
  progress: number;
  imgSrc: string;
}

// Sample course data
const courses = [
  {
    title: "1. Introductions",
    lesson: "Reiki Level I, II and Master/Teacher Program",
    progress: 0,
    imgSrc: course1,
  },
  {
    title: "2. What You'll Need to Get Started",
    lesson: "The Complete 2021 Web Development Bootcamp",
    progress: 61,
    imgSrc: course2,
  },
  {
    title: "3. How to get started with figma",
    lesson: "Copywriting - Become a Freelance Copywriter",
    progress: 0,
    imgSrc: course3,
  },
  {
    title: "4. Advanced CSS - Selector Priority",
    lesson: "2021 Complete Python Bootcamp From Zero to Hero",
    progress: 12,
    imgSrc: course4,
  },
];

// CourseCard component
const CourseCard: React.FC<CourseProps> = ({
  title,
  lesson,
  progress,
  imgSrc,
}) => {
  return (
    <div className="course-card bg-white shadow-lg rounded-lg p-4 w-full sm:w-[300px] flex flex-col">
      {/* Image section with fixed aspect ratio */}
      <div className="relative w-full aspect-video mb-4">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Content section */}
      <div className="flex-grow flex flex-col">
        <div className="text-sm font-semibold text-gray-900 mb-4 line-clamp-2">
          {title}
        </div>
        <div className="text-xs text-gray-500 mb-1">{lesson}</div>

        {/* Divider */}
        {/* <div className="border-t-2 border-gray-300 my-2"></div> */}

        {/* Button section */}
        <div className="mt-auto border-t-2 border-gray-300 pt-3">
          <div className="flex justify-between items-center">
            <button
              className="text-white font-semibold px-4 py-2 rounded hover:bg-blue-900 hover:text-blue-300 transition-all"
              style={{
                backgroundColor: "#1a2b4c",
                width: progress > 0 ? "auto" : "100%",
              }}
            >
              Watch Lecture
            </button>
            {progress > 0 && (
              <p className="text-green-600 text-sm pl-3 font-bold">
                {progress}% Completed
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard component
const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h2 className="text-2xl font-bold pt-8">Dashboard</h2>

      <div className="dashboard-stats grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="stat-box bg-[#4a90e2] p-6 rounded-lg flex items-center hover:bg-[#4a90e2] transition-all">
          <div className="stat-icon w-14 h-14 bg-white rounded-md flex justify-center items-center mr-4">
            <i className="fas fa-play-circle text-blue-500 text-2xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">957</h3>
            <p className="text-white">Enrolled Courses</p>
          </div>
        </div>

        <div className="stat-box bg-[#32609E] p-6 rounded-lg flex items-center hover:bg-[#32609E] transition-all">
          <div className="stat-icon w-14 h-14 bg-white rounded-md flex justify-center items-center mr-4">
            <i className="fas fa-check-square text-blue-700 text-2xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">6</h3>
            <p className="text-white">Active Courses</p>
          </div>
        </div>

        <div className="stat-box bg-[#1D3479] p-6 rounded-lg flex items-center hover:bg-[#1D3479] transition-all">
          <div className="stat-icon w-14 h-14 bg-white rounded-md flex justify-center items-center mr-4">
            <i className="fas fa-trophy text-blue-900 text-2xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">951</h3>
            <p className="text-white">Completed Courses</p>
          </div>
        </div>

        <div className="stat-box bg-main-color p-6 rounded-lg flex items-center">
          <div className="stat-icon w-14 h-14 bg-white rounded-md flex justify-center items-center mr-4">
            <i className="fas fa-user-friends text-main-color text-2xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">241</h3>
            <p className="text-white">Course Instructors</p>
          </div>
        </div>
      </div>

      {/* Course Section */}
      <section className="course-section py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            Let's start learning,{" "}
            <span className="text-second-color text-3xl"> Omar</span>
          </h2>
          <div className="flex gap-2">
            <button className="bg-gray-200 p-2 rounded-full">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="bg-gray-200 p-2 rounded-full">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              lesson={course.lesson}
              title={course.title}
              progress={course.progress}
              imgSrc={course.imgSrc}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
