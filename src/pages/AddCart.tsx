import React from "react";
import { Link } from "react-router-dom";
import NewPaymentCards from "./GiftCourse/NewPaymentCards";
import course1 from "../assets/images/Dashboard/Course_Images.png";
import course2 from "../assets/images/Dashboard/Course_Images1.png";
import course3 from "../assets/images/Dashboard/Course_Images2.svg";

// Interface for courses
interface Course {
  title: string;
  instructor: string;
  price: string;
  originalPrice?: string;
  imgSrc: string;
}

// Courses data
const courses: Course[] = [
  {
    title: "Graphic Design Masterclass - Learn GREAT Design",
    instructor: "Courtney Henry",
    price: "$13.00",
    imgSrc: course1, // Replace with actual image URL
  },
  {
    title: "Learn Python Programming Masterclass",
    instructor: "Marvin McKinney",
    price: "$89.00",
    imgSrc: course2, // Replace with actual image URL
  },
  {
    title: "Instagram Marketing 2021: Complete Guide To Instagram",
    instructor: "Jacob Jones",
    price: "$32.00",
    originalPrice: "$62.00",
    imgSrc: course3, // Replace with actual image URL
  },
];

const AddCart: React.FC = () => {
  const subtotal = "$61.97 USD";
  const couponDiscount = "8%";
  const total = "$75.00 USD";

  return (
    <>
      {/* Checkout Header */}
      <div className="bg-red-50 py-6 mb-[70px] mt-[100px]">
        {" "}
        <div className="container mx-auto text-center pt-[20px] pb-[20px]">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-800">
            Shopping Cart
          </h1>
          {/* Breadcrumb Navigation */}
          <nav className="text-sm mt-2 text-gray-600">
            <Link to="/" className="hover:text-gray-700">
              Home{" "}
            </Link>
            /{" "}
            <Link to="/cart" className="hover:text-gray-700">
              Shopping Cart
            </Link>
            {/* / <span className="text-black">Shopping Cart</span> */}
          </nav>
        </div>
      </div>

      {/* Main Body - Payment and Summary */}

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-40 px-4 pb-20">
        {/* Payment Method Section */}
        <NewPaymentCards />

        {/* Order Summary Section */}
        <div className="bg-white border border-gray-300 rounded-lg p-6">
          {/* Courses List */}
          <h3 className="text-lg font-semibold mb-4">Courses 03</h3>
          <div className="space-y-4">
            {courses.map((course, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img
                  src={course.imgSrc}
                  alt={course.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <p className="text-sm font-medium">{course.title}</p>
                  <p className="text-xs text-gray-500">
                    Course by: {course.instructor}
                  </p>
                  <div className="text-red-900 font-semibold text-sm">
                    {course.price}{" "}
                    {course.originalPrice && (
                      <span className="text-gray-400 line-through ml-2">
                        {course.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="border-t border-gray-200 mt-6 pt-4">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Coupon Discount</span>
                <span>{couponDiscount}</span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold text-red-900">{total}</span>
            </div>
          </div>

          {/* Payment Button */}
          <button className="w-full bg-red-800 text-white py-3 mt-6 rounded-lg text-lg font-semibold hover:bg-red-900 transition-colors">
            Complete Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default AddCart;
