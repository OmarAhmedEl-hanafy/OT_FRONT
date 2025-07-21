import React, { useState } from "react";
import InputComponent from "../../components/Inputs/InputComponent";
import NewPaymentCards from "./NewPaymentCards";
import CourseSummary from "./CourseSummary";
import "./GiftCourse.css";

const GiftCourse = () => {
  const [recipient, setRecipient] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRecipient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipient.name || !recipient.email) {
      console.log("Please fill in all required fields.");
      return;
    }
    console.log("Gift course form data:", recipient);
    // Add your submission logic here
  };

  return (
    <>
      <div className="gift-course-container grid mx-3 lg:grid-cols-5 gap-5">
        <form
          onSubmit={handleSubmit}
          className="gift-course-form lg:col-span-3"
        >
          <h2 className="title">Gift Course</h2>

          {/* Recipient's Information */}
          <div className="recipient-info">
            <h3 className="section-title">Recipient's Information</h3>

            <div className="form-group">
              <label htmlFor="name">Recipient's Name</label>
              <InputComponent
                value={recipient.name} // Controlled field, make sure to have onChange
                placeholder="Recipient's Name"
                type="text"
                name="name"
                handleChange={handleInputChange} // onChange handler added here
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Recipient's Email</label>
              <InputComponent
                value={recipient.email} // Controlled field, make sure to have onChange
                placeholder="Recipient's Email"
                type="email"
                name="email"
                handleChange={handleInputChange} // onChange handler added here
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Personal Message</label>
              <textarea
                name="message"
                value={recipient.message} // Controlled field, make sure to have onChange
                onChange={handleInputChange} // onChange handler added here
                placeholder="Add your personal message here..."
                className="custom-textarea"
                rows={4}
              />
            </div>
          </div>

          <div>
            <NewPaymentCards />
          </div>
        </form>

        {/* Course Summary Section */}
        <div className="mt-6 lg:col-span-2 ml-20">
          <CourseSummary />
        </div>
      </div>
    </>
  );
};

export default GiftCourse;
