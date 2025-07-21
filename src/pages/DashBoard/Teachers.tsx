import React, { useState } from "react";
import assistant1 from "../../assets/images/assitants/assistant-1.png";
import assistant2 from "../../assets/images/assitants/assistant-2.png";
import assistant3 from "../../assets/images/assitants/assistant-3.png";
import assistant4 from "../../assets/images/assitants/assistant-4.png";
import assistant5 from "../../assets/images/assitants/assistant-5.png";
import assistant6 from "../../assets/images/assitants/assistant-6.png";
import assistant7 from "../../assets/images/assitants/assistant-7.png";
import assistant8 from "../../assets/images/assitants/assistant-8.png";
import assistant9 from "../../assets/images/assitants/assistant-9.png";
import assistant10 from "../../assets/images/assitants/assistant-10.png";
import assistant11 from "../../assets/images/assitants/assistant-11.png";
import assistant12 from "../../assets/images/assitants/assistant-12.png";
import assistant13 from "../../assets/images/assitants/assistant-13.png";
import assistant14 from "../../assets/images/assitants/assistant-14.png";
import assistant15 from "../../assets/images/assitants/assistant-15.png";
import assistant17 from "../../assets/images/assitants/assistant-17.png";
import assistant18 from "../../assets/images/assitants/assistant-18.png";
import assistant19 from "../../assets/images/assitants/assistant-19.png";
import assistant20 from "../../assets/images/assitants/assistant-20.png";
import assistant21 from "../../assets/images/assitants/assistant-21.png";
import assistant22 from "../../assets/images/assitants/assistant-22.png";
import assistant23 from "../../assets/images/assitants/assistant-23.png";

// Image array for instructor photos
const imgsAssitants = [
  assistant1,
  assistant2,
  assistant3,
  assistant4,
  assistant5,
  assistant6,
  assistant7,
  assistant8,
  assistant9,
  assistant10,
  assistant11,
  assistant12,
  assistant13,
  assistant14,
  assistant15,
  assistant17,
  assistant18,
  assistant19,
  assistant20,
  assistant21,
  assistant22,
  assistant23,
];

// Instructor data (with number of students)
const _assitants = [
  {
    instructorPhoto: "",
    rate: 5.0,
    instractorName: "Sayed Sobeh",
    instractorTitle: "Public Relations officer",
    students: 236568,
  },
  {
    instructorPhoto: "",
    rate: 4.9,
    instractorName: "Mejdi Daoud",
    instractorTitle: "Public Relations officer",
    students: 211434,
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Manel Hasni",
    instractorTitle: "Public Relations officer",
    students: 435597,
  },
  {
    instructorPhoto: "",
    rate: 4.7,
    instractorName: "Safaa Shorbagy",
    instractorTitle: "Public Relations officer",
    students: 1586236,
  },
  {
    instructorPhoto: "",
    rate: 4.5,
    instractorName: "Nadege Kammoun",
    instractorTitle: "Public Relations officer",
    students: 198247,
  },
  {
    instructorPhoto: "",
    rate: 4.9,
    instractorName: "Sonia Ben Sghaier",
    instractorTitle: "Public Relations officer",
    students: 102345,
  },
  {
    instructorPhoto: "",
    rate: 4.9,
    instractorName: "Yosra Ben Saad",
    instractorTitle: "Public Relations officer",
    students: 654729,
  },
  {
    instructorPhoto: "",
    rate: 4.9,
    instractorName: "Saida Hammrouni",
    instractorTitle: "Public Relations officer",
    students: 925874,
  },
  {
    instructorPhoto: "",
    rate: 5.0,
    instractorName: "Mouna Rais",
    instractorTitle: "Public Relations officer",
    students: 236568,
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Emna Triki",
    instractorTitle: "Public Relations officer",
    students: 298475,
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Souad Merdj",
    instractorTitle: "Public Relations officer",
    students: 958674,
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Ghada Fathi",
    instractorTitle: "Public Relations officer",
    students: 884572,
  },
  {
    instructorPhoto: "",
    rate: 4.9,
    instractorName: "Nana Abd Elstar",
    instractorTitle: "Public Relations officer",
    students: 567481,
  },
  {
    instructorPhoto: "",
    rate: 4.9,
    instractorName: "Rihem Ben Soltana",
    instractorTitle: "Public Relations officer",
    students: 874529,
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Intidhar Kobbi",
    instractorTitle: "Public Relations officer",
    students: 219874,
  },
  {
    instructorPhoto: "",
    rate: 4.7,
    instractorName: "Lilia Sassi",
    instractorTitle: "Public Relations officer",
    students: 136479,
  },
  {
    instructorPhoto: "",
    rate: 5.0,
    instractorName: "Noha Assal",
    instractorTitle: "Public Relations officer",
    students: 654872,
  },
  {
    instructorPhoto: "",
    rate: 4.6,
    instractorName: "Olfa Hamza",
    instractorTitle: "Public Relations officer",
    students: 287945,
  },
  {
    instructorPhoto: "",
    rate: 4.7,
    instractorName: "Emna Sahnoun",
    instractorTitle: "Public Relations officer",
    students: 312458,
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Nadege Kammoun",
    instractorTitle: "Public Relations officer",
    students: 219348,
  },
  {
    instructorPhoto: "",
    rate: 4.8,
    instractorName: "Fethia Dalhoumi",
    instractorTitle: "Public Relations officer",
    students: 584963,
  },
  {
    instructorPhoto: "",
    rate: 4.7,
    instractorName: "Tahra Maoun",
    instractorTitle: "Public Relations officer",
    students: 894571,
  },
];

// Assign photos to the instructors
for (const i in imgsAssitants) {
  _assitants[i].instructorPhoto = imgsAssitants[i];
}

const Teachers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter the instructors based on the search term
  const filteredInstructors = _assitants.filter((assistant) =>
    assistant.instractorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the total number of pages for pagination
  const totalPages = Math.ceil(filteredInstructors.length / itemsPerPage);

  // Get the current page's items
  const paginatedInstructors = filteredInstructors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Instructors ({_assitants.length})
          </h1>
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search in your teachers..."
            className="border border-gray-300 px-4 py-2 rounded-lg w-full md:w-[300px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Instructors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedInstructors.map((assistant, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            {/* Instructor Photo */}
            <img
              src={assistant.instructorPhoto}
              alt={assistant.instractorName}
              className="w-[400px] h-[280px] object-fit rounded-lg mb-4"
            />
            {/* Instructor Info */}
            <div className="text-center">
              <h3 className="font-bold text-lg object-cover">
                {assistant.instractorName}
              </h3>
              <p className="text-main-color mb-2">
                {assistant.instractorTitle}
              </p>

              {/* Ratings
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fa-star ${
                      i < Math.round(assistant.rate)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  ></i>
                ))}
              </div> */}

              {/* Ratings and Students */}
              <div
                className="flex justify-between
              border-t-2 items-center text-gray-600 pt-4"
              >
                <p className="flex items-center">
                  <i className="fas fa-star text-orange-500"></i>
                  <span className="ml-1">{assistant.rate}</span>
                </p>
                {/* <span className="mx-2">|</span> */}
                <p>{assistant.students.toLocaleString()} students</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="border border-gray-300 px-4 py-2 rounded-l-lg"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`border border-gray-300 px-4 py-2 ${
              currentPage === index + 1 ? "bg-gray-200" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="border border-gray-300 px-4 py-2 rounded-r-lg"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Teachers;
