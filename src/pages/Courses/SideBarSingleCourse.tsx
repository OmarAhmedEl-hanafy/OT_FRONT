// import { useState } from "react";
import "./SideBarSingleCourse.css";
import { useNavigate } from "react-router-dom";

function SideBarSingleCourse({
  course,
}: {
  course: {
    totalHouers: number;
    price: number;
    oldPrice?: number;
    courseId: number;
  };
}) {
  const navigate = useNavigate();
  // const handleGiftCourse = () => {
  //   navigate(`/courses/${course.courseId}/GiftCourse`);
  // };// Initialize the navigate hook

  const infoCourse = [
    {
      icon: (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeMiterlimit={10}
          />
          <path
            d="M12 6.75V12H17.25"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Course Duration",
      info: `${course.totalHouers} Hours`,
    },
    {
      icon: (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20V10"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 20V4"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 20V16"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Course Level",
      info: "Beginner and Intermediate",
    },
    {
      icon: (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.25 15C10.9424 15 13.125 12.8174 13.125 10.125C13.125 7.43261 10.9424 5.25 8.25 5.25C5.55761 5.25 3.375 7.43261 3.375 10.125C3.375 12.8174 5.55761 15 8.25 15Z"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeMiterlimit={10}
          />
          <path
            d="M14.5698 5.43149C15.2403 5.24257 15.9436 5.19953 16.6321 5.30528C17.3207 5.41102 17.9786 5.66309 18.5615 6.0445C19.1444 6.42592 19.6389 6.92782 20.0115 7.51641C20.3841 8.105 20.6263 8.76661 20.7217 9.45667C20.8171 10.1467 20.7635 10.8492 20.5645 11.5168C20.3655 12.1844 20.0258 12.8017 19.5682 13.3269C19.1107 13.8522 18.5458 14.2733 17.9118 14.5619C17.2777 14.8505 16.5892 14.9998 15.8926 14.9999"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.49951 18.5059C2.26089 17.4229 3.27166 16.539 4.4465 15.9288C5.62133 15.3186 6.92574 15.0001 8.24959 15C9.57344 14.9999 10.8779 15.3184 12.0528 15.9285C13.2276 16.5386 14.2385 17.4225 14.9999 18.5054"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8926 15C17.2166 14.999 18.5213 15.3171 19.6962 15.9273C20.8712 16.5375 21.8819 17.4218 22.6426 18.5054"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Students Enrolled",
      info: "69,419,618",
    },
    {
      icon: (
        <svg
          width={18}
          height={18}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 7.5H13.5"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 10.5H13.5"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 0.75H1.5C1.08579 0.75 0.75 1.08579 0.75 1.5V16.5C0.75 16.9142 1.08579 17.25 1.5 17.25H16.5C16.9142 17.25 17.25 16.9142 17.25 16.5V1.5C17.25 1.08579 16.9142 0.75 16.5 0.75Z"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 0.75V17.25"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Language",
      info: "Mandarin",
    },
    {
      icon: (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12.0005H15"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 15.0005H15"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.25 3.75049H18.75C18.9489 3.75049 19.1397 3.82951 19.2803 3.97016C19.421 4.11081 19.5 4.30158 19.5 4.50049V18.7505C19.5 19.3472 19.2629 19.9195 18.841 20.3415C18.419 20.7634 17.8467 21.0005 17.25 21.0005H6.75C6.15326 21.0005 5.58097 20.7634 5.15901 20.3415C4.73705 19.9195 4.5 19.3472 4.5 18.7505V4.50049C4.5 4.30158 4.57902 4.11081 4.71967 3.97016C4.86032 3.82951 5.05109 3.75049 5.25 3.75049Z"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 2.25049V5.25049"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2.25049V5.25049"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 2.25049V5.25049"
            stroke="#A1A5B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Subtitle Language",
      info: "English",
    },
  ];

  course.oldPrice ? "" : (course.oldPrice = course.price + 0);

  const discount = (
    ((course.oldPrice - course.price) / course.oldPrice) *
    100
  ).toFixed(0);

  return (
    <div className="shadow-lg p-4 rounded-lg border border-[#dddddd]">
      <div className="flex justify-between font-semibold items-center mb-4">
        <div className="flex flex-col">
          <div className="text-[24px] font-bold">${course.price}</div>
          <p className="text-[#A1A5B3] line-through text-sm">
            ${course.oldPrice}
          </p>
        </div>

        <div className="bg-[#E7F1FF] py-1 px-3 rounded-md text-red-600 text-s font-bold">
          {discount}% OFF
        </div>
      </div>

      <div className="text-red-600 text-sm font-semibold mb-3 flex items-center">
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5.625V10H14.375"
            stroke="#E34444"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875Z"
            stroke="#E34444"
            strokeWidth="1.3"
            strokeMiterlimit={10}
          />
          <path
            d="M15.3032 2.04517L17.9549 4.69682"
            stroke="#E34444"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.04492 4.69682L4.69657 2.04517"
            stroke="#E34444"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="ml-2">2 days left at this price!</span>
      </div>

      <div className="border-b border-[#dddddd] pb-4">
        {infoCourse.map((info, index) => (
          <div
            key={index}
            className="flex justify-between items-center my-3 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-[14px]">{info.icon}</span>
              <span>{info.title}</span>
            </div>
            <p className="text-right">{info.info}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <button className="w-full bg-red-600 text-white py-2 rounded-lg mb-3 hover:bg-red-900 transition-colors">
          Add To Cart
        </button>

        <button className="w-full bg-transparent border-2 border-red-600 text-red-600 py-2 rounded-lg hover:bg-red-50 transition-colors">
          Buy Now
        </button>

        <div className="mt-4 flex flex-row gap-3">
          <button className="w-full border border-[#dddddd] text-red-700 py-2 rounded-lg bg-gray-50 hover:bg-red-900 hover:text-white hover:font-bold">
            Add to wishlist
          </button>
          <button
            className="w-full border border-[#dddddd] text-red-700 py-2 rounded-lg bg-gray-50 hover:bg-red-900 hover:text-white hover:font-bold"
            onClick={() => navigate(`/courses/${course.courseId}/GiftCourse`)} // Navigation on click
          >
            Gift Course
          </button>
        </div>
      </div>

      <div className="mt-4 text-xs text-center text-gray-700">
        <p>Note: All courses have a 30-day money-back guarantee</p>
      </div>
      {/* Course includes section */}
      <div className="course-includes mt-6">
        <h2 className="font-semibold text-lg mb-4">This course includes:</h2>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <i className="fas fa-clock text-red-600 text-lg"></i>
            <span>Lifetime access</span>
          </li>
          <li className="flex items-center space-x-3">
            <i className="fas fa-dollar-sign text-red-600  pl-1 text-lg"></i>
            <span>30-days money-back guarantee</span>
          </li>
          <li className="flex items-center space-x-3">
            <i className="fas fa-file-download text-red-600  pl-1 text-lg"></i>
            <span>Free exercises file & downloadable resources</span>
          </li>
          <li className="flex items-center space-x-3">
            <i className="fas fa-trophy text-red-600 text-lg"></i>
            <span>Shareable certificate of completion</span>
          </li>
          <li className="flex items-center space-x-3">
            <i className="fas fa-tv text-red-600 text-lg"></i>
            <span>Access on mobile, tablet, and TV</span>
          </li>
          <li className="flex items-center space-x-3">
            <i className="fas fa-closed-captioning text-red-600 text-lg"></i>
            <span>English subtitles</span>
          </li>
          <li className="flex items-center space-x-3">
            <i className="fas fa-layer-group text-red-600 text-lg"></i>
            <span>100% online course</span>
          </li>
        </ul>
      </div>

      {/* Share this course section */}
      <div className="mt-4 border-t border-[#dddddd] pt-4">
        <h2 className="font-semibold text-lg mb-3">Share this course:</h2>

        <div className="flex items-center gap-3">
          <button className="bg-gray-200 p-4 rounded-lg text-gray-700 flex items-center gap-2">
            <i className="fas fa-link"></i>
            Copy link
          </button>
          <button
            className="bg-gray-200 p-2 rounded-lg text-gray-700"
            style={{ width: "58px", fontSize: "25px" }}
          >
            <i className="fab fa-facebook"></i>
          </button>
          <button
            className="bg-gray-200 p-2 rounded-lg text-gray-700 gap-2"
            style={{ width: "58px", fontSize: "25px" }}
          >
            <i className="fab fa-twitter"></i>
          </button>
          <button
            className="bg-gray-200 p-2 rounded-lg text-gray-700"
            style={{ width: "58px", fontSize: "25px" }}
          >
            <i className="fas fa-envelope"></i>
          </button>
          <button
            className="bg-gray-200 p-2 rounded-lg text-gray-700"
            style={{ width: "58px", fontSize: "25px" }}
          >
            <i className="fab fa-whatsapp"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBarSingleCourse;
