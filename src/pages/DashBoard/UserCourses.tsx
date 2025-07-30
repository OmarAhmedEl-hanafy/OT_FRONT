import React, { useState } from "react";
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
    title: "31. Learn More About Web Design",
    lesson: "Learn Ethical Hacking From Scratch",
    progress: 0,
    imgSrc: course1,
  },
  {
    title: "165. Font Properties Challenge 3 - Change",
    lesson: "SQL for NEWBS: Weekender Crash Course",
    progress: 2,
    imgSrc: course2,
  },
  {
    title: "7. Adding Content to Our Website",
    lesson: "Complete Adobe Lightroom Megacourse",
    progress: 0,
    imgSrc: course3,
  },
  {
    title: "651. CSS Font Property Challenge Solution",
    lesson: "Machine Learning A-Z™: Hands-On Python",
    progress: 23,
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
    <div className="course-card bg-white shadow-lg rounded-lg p-4 w-full sm:w-[330px]">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <div className="text-xs text-gray-500 mb-1">{lesson}</div>
      <div className="text-sm font-semibold text-gray-900 mb-4">{title}</div>
      <div className="border-t-2 border-gray-300 p-2 mb-2"></div>

      <div className="flex justify-between items-center">
        <button
          className="text-red-900 font-semibold px-4 py-2 rounded hover:!bg-red-900 hover:!text-white transition-all"
          style={{
            backgroundColor: "#1a2b4c",
            width: progress > 0 ? "auto" : "100%",
          }}
        >
          Watch Lecture
        </button>
        {progress > 0 && (
          <p className="text-green-600 text-sm pl-3 font-semibold">
            {progress}% Completed
          </p>
        )}
      </div>
    </div>
  );
};

// Dashboard component
const UserCourses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="dashboard-container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold pt-4 mb-8">Courses (957)</h2>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <input
            title="Search"
            type="text"
            placeholder="Search in your courses..."
            className="border border-gray-300 px-4 py-2 rounded-lg w-full sm:w-[300px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-4 items-center">
          <div>
            <label className="text-gray-500 mr-2">Sort by:</label>
            <select
              title="Sort by"
              className="border border-gray-300 px-4 py-2 rounded-lg"
              defaultValue="Latest"
            >
              <option value="Latest">Latest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>

          <div>
            <label className="text-gray-500 mr-2">Status:</label>
            <select
              title="Status"
              className="border border-gray-300 px-4 py-2 rounded-lg"
            >
              <option value="All Courses">All Courses</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
            </select>
          </div>

          <div>
            <label className="text-gray-500 mr-2">Teacher:</label>
            <select
              title="Teacher"
              className="border border-gray-300 px-4 py-2 rounded-lg"
            >
              <option value="All Teachers">All Teachers</option>
              <option value="Teacher 1">Teacher 1</option>
              <option value="Teacher 2">Teacher 2</option>
            </select>
          </div>
        </div>
      </div>

      {/* Course Cards Section */}
      <section className="course-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses
            .filter((course) =>
              course.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((course, index) => (
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

export default UserCourses;
