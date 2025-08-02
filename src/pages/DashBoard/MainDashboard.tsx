import React, { useState } from "react";
import "./MainDashBoard.css";
// import ProfilePhoto from "../../assets/images/Dashboard/ProfilePhoto.svg";
import Dashboard from "./DashBoard";
import Teachers from "./Teachers";
import AccountSettings from "./AccountSettings";
import PurchaseHistory from "./PurchaseHistory";
import Wishlist from "./Wishlist";
import UserCourses from "./UserCourses";

const MainDashboard: React.FC = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState<string>("Dashboard");

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />; // Render the Dashboard component
      case "Courses":
        return <UserCourses />;
      case "Teachers":
        return <Teachers />;
      case "Wishlist":
        return <Wishlist />;
      case "Purchase History":
        return <PurchaseHistory />;
      case "Settings":
        return <AccountSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="Dashboard-container mx-auto px-4 py-8">
      {/* Profile Card */}
      <div className="profile-card bg-main-color p-6 rounded-lg shadow-md flex justify-between items-center">
        <div className="profile-info flex items-center">
          {/* <img
            src={ProfilePhoto} // Replace with user's profile image
            alt="Profile"
            className="rounded-full w-20 h-20 mr-6"
          /> */}
          <div>
            <h2
              className="text-xl font-bold"
              style={{ color: "#ffffff !important" }}
            >
              Omar Tawfik
            </h2>
            <p className="text-white">Web Developer & Designer</p>
          </div>
        </div>
        {/* <div>
          <button className=" text-main-color bg-[#ffffff] font-semibold px-4 py-2 rounded-lg hover:!bg-blue-500 hover:!text-white">
            Become Instructor <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div> */}
      </div>

      {/* Navigation Tabs */}
      <div className="tabs mt-6 border-b border-gray-200 overflow-x-auto">
        <nav className="flex flex-wrap justify-between gap-6 text-gray-600">
          {/* Set active tab based on which button is clicked */}
          <button
            className={`pb-2 ${
              activeTab === "Dashboard"
                ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
                : "hover:text-main-color"
            } whitespace-nowrap`}
            onClick={() => setActiveTab("Dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`pb-2 ${
              activeTab === "Courses"
                ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
                : "hover:text-main-color"
            } whitespace-nowrap`}
            onClick={() => setActiveTab("Courses")}
          >
            Courses
          </button>
          {/* <button
            className={`pb-2 ${
              activeTab === "Teachers"
                ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
                : "hover:text-main-color"
            } whitespace-nowrap`}
            onClick={() => setActiveTab("Teachers")}
          >
            Teachers
          </button> */}
          <button
            className={`pb-2 ${
              activeTab === "Wishlist"
                ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
                : "hover:text-main-color"
            } whitespace-nowrap`}
            onClick={() => setActiveTab("Wishlist")}
          >
            Wishlist
          </button>
          <button
            className={`pb-2 ${
              activeTab === "Purchase History"
                ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
                : "hover:text-main-color"
            } whitespace-nowrap`}
            onClick={() => setActiveTab("Purchase History")}
          >
            Purchase History
          </button>
          <button
            className={`pb-2 ${
              activeTab === "Settings"
                ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
                : "hover:text-main-color"
            } whitespace-nowrap`}
            onClick={() => setActiveTab("Settings")}
          >
            Settings
          </button>
        </nav>
      </div>

      {/* Render the active tab's content below the tabs */}
      <div className="tab-content mt-6">{renderContent()}</div>
    </div>
  );
};

export default MainDashboard;

// import React, { useState } from "react";
// import Dashboard from "./DashBoard"; // Import the Dashboard component

// const MainDashboard: React.FC = () => {
//   // State to track the active tab
//   const [activeTab, setActiveTab] = useState<string>("Dashboard");

//   // Function to render content based on active tab
//   const renderContent = () => {
//     switch (activeTab) {
//       case "Dashboard":
//         return <Dashboard />; // Render the Dashboard component
//       case "Courses":
//         return <p>This is the Courses content.</p>;
//       case "Teachers":
//         return <p>This is the Teachers content.</p>;
//       case "Wishlist":
//         return <p>This is the Wishlist content.</p>;
//       case "Purchase History":
//         return <p>This is the Purchase History content.</p>;
//       case "Settings":
//         return <p>This is the Settings content.</p>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="dashboard-container mx-auto">
//       {/* Navigation Tabs */}
//       <div className="tabs mt-6 border-b border-gray-200 overflow-x-auto">
//         <nav className="flex flex-wrap justify-between gap-6 text-gray-600">
//           <button
//             className={`pb-2 ${
//               activeTab === "Dashboard"
//                 ? "border-b-2 border-blue-500 text-black font-semibold"
//                 : "hover:text-black"
//             } whitespace-nowrap`}
//             onClick={() => setActiveTab("Dashboard")}
//           >
//             Dashboard
//           </button>
//           <button
//             className={`pb-2 ${
//               activeTab === "Courses"
//                 ? "border-b-2 border-blue-500 text-black font-semibold"
//                 : "hover:text-black"
//             } whitespace-nowrap`}
//             onClick={() => setActiveTab("Courses")}
//           >
//             Courses
//           </button>
//           <button
//             className={`pb-2 ${
//               activeTab === "Teachers"
//                 ? "border-b-2 border-blue-500 text-black font-semibold"
//                 : "hover:text-black"
//             } whitespace-nowrap`}
//             onClick={() => setActiveTab("Teachers")}
//           >
//             Teachers
//           </button>
//           <button
//             className={`pb-2 ${
//               activeTab === "Wishlist"
//                 ? "border-b-2 border-blue-500 text-black font-semibold"
//                 : "hover:text-black"
//             } whitespace-nowrap`}
//             onClick={() => setActiveTab("Wishlist")}
//           >
//             Wishlist
//           </button>
//           <button
//             className={`pb-2 ${
//               activeTab === "Purchase History"
//                 ? "border-b-2 border-blue-500 text-black font-semibold"
//                 : "hover:text-black"
//             } whitespace-nowrap`}
//             onClick={() => setActiveTab("Purchase History")}
//           >
//             Purchase History
//           </button>
//           <button
//             className={`pb-2 ${
//               activeTab === "Settings"
//                 ? "border-b-2 border-blue-500 text-black font-semibold"
//                 : "hover:text-black"
//             } whitespace-nowrap`}
//             onClick={() => setActiveTab("Settings")}
//           >
//             Settings
//           </button>
//         </nav>
//       </div>

//       {/* Render content based on active tab */}
//       <div className="tab-content mt-6">{renderContent()}</div>
//     </div>
//   );
// };

// export default MainDashboard;
