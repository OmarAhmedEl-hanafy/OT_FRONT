import React from "react";
import course1 from "../../assets/images/DashBoard/Course_Images.png";
import course2 from "../../assets/images/DashBoard/Course_Images1.png";
import course3 from "../../assets/images/DashBoard/Course_Images3.svg";

interface WishlistItem {
  imgSrc: string;
  title: string;
  courseBy: string;
  reviews: number;
  rating: number;
  price: number;
  originalPrice?: number;
}

const wishlistItems: WishlistItem[] = [
  {
    imgSrc: course1,
    title: "The Ultimate Drawing Course - Beginner to Advanced",
    courseBy: "Harry Pother • John Wick",
    reviews: 45144,
    rating: 4.8,
    price: 37,
    originalPrice: 49,
  },
  {
    imgSrc: course2,
    title: "Digital Marketing Masterclass - 23 Courses in 1",
    courseBy: "Nobody",
    reviews: 45144,
    rating: 4.8,
    price: 24,
  },
  {
    imgSrc: course3,
    title: "Angular - The Complete Guide (2021 Edition)",
    courseBy: "Kevin Gilbert",
    reviews: 45144,
    rating: 4.7,
    price: 13,
  },
];

const Wishlist: React.FC = () => {
  return (
    <div className="wishlist-container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">
        Wishlist ({wishlistItems.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="py-3 px-4 text-gray-500">COURSE</th>
              <th className="py-3 px-4 text-gray-500">PRICES</th>
              <th className="py-3 px-4 text-gray-500">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="w-20 h-20 rounded-lg object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-md font-semibold">{item.title}</h3>
                      <div className="flex items-center text-sm text-yellow-500 my-1">
                        <span className="mr-1">{item.rating}</span>
                        <i className="fa-solid fa-star"></i>
                        <span className="text-gray-500 ml-2">
                          ({item.reviews.toLocaleString()} Reviews)
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm">
                        Course by: {item.courseBy}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center text-lg font-bold text-red-900">
                    ${item.price.toFixed(2)}
                    {item.originalPrice && (
                      <span className="text-gray-400 text-sm line-through ml-2">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    <button className="bg-gray-100 text-gray-800 py-2 px-6 font-bold rounded hover:bg-gray-300 transition-all">
                      Buy Now
                    </button>
                    <button className="bg-red-800 text-white py-2 px-8 rounded font-bold hover:bg-red-900 transition-all">
                      Add To Cart
                    </button>
                    <button className="w-[40px] h-[40px] bg-red-100 text-red-500 rounded hover:text-red-900 transition-all">
                      <i className="fa-solid fa-heart w-[25px]"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
