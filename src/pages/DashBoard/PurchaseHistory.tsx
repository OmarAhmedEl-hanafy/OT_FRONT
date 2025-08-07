import React, { useState } from "react";
import course1 from "../../assets/images/Dashboard/Course_Images1.png";
import course2 from "../../assets/images/Dashboard/Course_Images2.svg";
import {
  FaChevronDown,
  FaChevronUp,
  FaBook,
  FaDollarSign,
  FaCreditCard,
} from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

import "./PurchaseHistory.css";

// Course data for purchase history
interface Course {
  imgSrc: string;
  title: string;
  price: string;
  instructor: string;
  rating: number;
  reviews: number;
}

// Purchase data structure
interface Purchase {
  date: string;
  time: string;
  coursesCount: number;
  totalPrice: string;
  paymentMethod: string;
  first4digits: string;
  expDate: string;
  courses: Course[];
}

const purchases: Purchase[] = [
  {
    date: "1st September, 2021",
    time: "11:30 PM",
    coursesCount: 3,
    totalPrice: "75.00 USD",
    paymentMethod: "Credit Card",
    first4digits: "4142 **** **** ****",
    expDate: "04/27",
    courses: [
      {
        imgSrc: course1,
        title: "Learn Ethical Hacking From Scratch",
        price: "$13.99",
        instructor: "Marvin McKinney",
        rating: 4.7,
        reviews: 45144,
      },
      {
        imgSrc: course2,
        title: "Mega Digital Marketing Course A-Z: 12 Courses in 1 + Updates",
        price: "$49.00",
        instructor: "Esther Howard",
        rating: 4.7,
        reviews: 45144,
      },
    ],
  },
  {
    date: "31st August, 2021",
    time: "11:30 PM",
    coursesCount: 52,
    totalPrice: "5070.00 USD",
    paymentMethod: "Credit Card",
    first4digits: "1234",
    expDate: "08/24",
    courses: [],
  },
  {
    date: "24th August, 2021",
    time: "6:34 PM",
    coursesCount: 1,
    totalPrice: "9.00 USD",
    paymentMethod: "Credit Card",
    first4digits: "5678",
    expDate: "09/23",
    courses: [],
  },
  {
    date: "1st September, 2021",
    time: "8:47 PM",
    coursesCount: 1,
    totalPrice: "25.00 USD",
    paymentMethod: "Credit Card",
    first4digits: "1111",
    expDate: "05/24",
    courses: [],
  },
  {
    date: "17th July, 2021",
    time: "10:51 AM",
    coursesCount: 7,
    totalPrice: "140.00 USD",
    paymentMethod: "Credit Card",
    first4digits: "2222",
    expDate: "12/23",
    courses: [],
  },
];

const PurchaseHistory: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close on click
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Purchase History</h2>

      {purchases.map((purchase, index) => (
        <div key={index} className="mb-4 border border-gray-200 rounded-lg">
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            {/* Left section: Date, Courses, Price, Payment Method */}
            <div>
              <h3 className="font-semibold text-gray-800">
                {purchase.date} at {purchase.time}
              </h3>
              <div className="flex items-center text-gray-500 text-sm">
                {/* Courses count with book icon */}
                <div className="flex items-center mr-4">
                  <FaBook className="text-blue-500 mr-1" />
                  <span>{purchase.coursesCount} Courses</span>
                </div>
                {/* Total price with dollar icon */}
                <div className="flex items-center mr-4">
                  <FaDollarSign className="text-red-900 mr-1" />
                  <span>{purchase.totalPrice}</span>
                </div>
                {/* Payment method with credit card icon */}
                <div className="flex items-center">
                  <FaCreditCard className="text-green-500 mr-1" />
                  <span>{purchase.paymentMethod}</span>
                </div>
              </div>
            </div>

            {/* Right section: Dropdown arrow */}
            <div>
              {openIndex === index ? (
                <FaChevronUp className="text-main-color" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
          </div>

          {/* If accordion is open, show expanded content */}
          {openIndex === index && (
            <div className="bg-gray-50 px-4 py-4 border-t border-gray-200 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Left Section: Courses */}
                <div className="space-y-4">
                  {purchase.courses.length > 0 ? (
                    purchase.courses.map((course, courseIndex) => (
                      <div
                        key={courseIndex}
                        className="flex items-center bg-white p-4 rounded-lg shadow-md"
                      >
                        <img
                          src={course.imgSrc}
                          alt={course.title}
                          className="w-20 h-20 rounded-lg object-cover mr-4"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold">{course.title}</h4>
                          <div className="flex items-center text-sm text-orange-500 my-1">
                            <span>{course.rating}</span>
                            <BsStarFill className="ml-1" />
                            <span className="text-gray-500 ml-2">
                              ({course.reviews.toLocaleString()} Reviews)
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">
                            Course by: {course.instructor}
                          </p>
                        </div>
                        <p className="text-lg font-bold text-second-color">
                          {course.price}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center">
                      No course details available.
                    </p>
                  )}
                </div>

                {/* Right Section: Payment Details */}
                {purchase.courses.length > 0 && (
                  <div
                    className="bg-white rounded-lg shadow-md flex pl-8 justify-center"
                    style={{ flexDirection: "column" }}
                  >
                    <h4
                      className="font-semibold pb-6"
                      style={{ fontSize: "25px" }}
                    >
                      {purchase.date} at {purchase.time}
                    </h4>
                    <div className="flex items-center text-gray-600 text-m pb-6">
                      {/* Courses count with book icon */}
                      <div className="flex items-center mr-4">
                        <FaBook className="text-blue-500 mr-1" />
                        <span>{purchase.coursesCount} Courses</span>
                      </div>
                      {/* Total price with dollar icon */}
                      <div className="flex items-center mr-4">
                        <FaDollarSign className="text-red-900 mr-1" />
                        <span>{purchase.totalPrice}</span>
                      </div>
                      {/* Payment method with credit card icon */}
                      <div className="flex items-center">
                        <FaCreditCard className="text-green-500 mr-1" />
                        <span>{purchase.paymentMethod}</span>
                      </div>
                    </div>
                    <p className="flex w-[90%] text-[15px] justify-between">
                      <p>Omar Tawfik </p>
                      <p> {purchase.first4digits} </p>
                      <p> {purchase.expDate} </p>
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="text-center text-sm text-gray-500 mt-4">
        Yay! You have seen all your purchase history. 😎
      </div>
    </div>
  );
};

export default PurchaseHistory;
