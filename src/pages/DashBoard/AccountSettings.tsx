import React, { useState } from "react";
import ProfilePhoto from "../../assets/images/Dashboard/ProfilePhoto.svg";
import InputComponent from "../../components/Inputs/InputComponent";
import InputPass from "../../components/Inputs/InputPass";
const AccountSettings: React.FC = () => {
  // State for form fields
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle profile photo upload
  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setProfilePhoto(file);
    }
  };

  // Handle form submission
  const handleSaveChanges = () => {
    // Logic for updating account details
    console.log("Account Details Saved");
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("New Password and Confirm Password do not match");
      return;
    }
    // Logic for updating the password
    console.log("Password Changed");
  };

  return (
    <div className="container mx-auto p-6">
      {/* Account Settings Section */}
      <div className="bg-white shadow-md p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6">Account settings</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Photo */}
          <div className="flex flex-col items-center">
            <div className="relative w-[250px] h-[250px] mb-4">
              {profilePhoto ? (
                <img
                  src={URL.createObjectURL(profilePhoto)}
                  alt="Profile"
                  className="w-[250px] h-[250px] object-cover rounded-full"
                />
              ) : (
                <img
                  title="ProfilePhoto"
                  className=" bg-gray-200 rounded-full flex items-center"
                  src={ProfilePhoto}
                />
              )}
              <input
                title="ProfilePhoto"
                type="file"
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                onChange={handlePhotoUpload}
              />
              <div className="absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-60 text-white text-sm p-1 rounded-b-lg">
                Upload Photo
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Image size should be under 1MB and image ratio needs to be 1:1
            </p>
          </div>

          {/* Account Information */}
          <div className="space-y-4">
            Full Name
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputComponent
                name="First name"
                label="First name"
                type="text"
                placeholder="First name"
                value={firstName}
                handleChange={(e) => setFirstName(e.target.value)}
                // className="border border-gray-300 px-4 py-2 rounded-lg"
              />
              <InputComponent
                label="Last name"
                name="Last name"
                type="text"
                placeholder="Last name"
                value={lastName}
                handleChange={(e) => setLastName(e.target.value)}
              />
            </div>
            Username
            <InputComponent
              label="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              handleChange={(e) => setUsername(e.target.value)}
              //   className="border border-gray-300 px-4 py-2 rounded-lg w-full"
            />
            Email
            <InputComponent
              label="Email"
              name="Email"
              type="email"
              placeholder="Email address"
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
              //   className="border border-gray-300 px-4 py-2 rounded-lg w-full"
            />
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Your title, profession or small biography"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 px-4 py-2 rounded-lg w-full"
              />
              <span className="text-sm text-gray-400 pl-2">
                {title.length}/50
              </span>
            </div>
            <button
              onClick={handleSaveChanges}
              className="bg-red-900 text-white px-4 py-2 rounded-lg mt-4"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Change password</h2>
        <div className="space-y-4">
          <div className="relative">
            <InputPass
              label="password"
              name="password"
              placeholder="Current Password"
              value={currentPassword}
              handlechange={(e) => setCurrentPassword(e.target.value)}
            />
            <i className="fas fa-eye absolute right-4 top-3 text-gray-400 cursor-pointer"></i>
          </div>
          <div className="relative">
            <InputPass
              label="new password"
              name="new password"
              placeholder="new Password"
              value={newPassword}
              handlechange={(e) => setNewPassword(e.target.value)}
            />
            <i className="fas fa-eye absolute right-4 top-3 text-gray-400 cursor-pointer"></i>
          </div>
          <div className="relative">
            <InputPass
              label="Confirm new password"
              name="Confirm new password"
              placeholder="Confirm new password"
              value={confirmPassword}
              handlechange={(e) => setConfirmPassword(e.target.value)}
            />
            <i className="fas fa-eye absolute right-4 top-3 text-gray-400 cursor-pointer"></i>
          </div>
          <button
            onClick={handleChangePassword}
            className="bg-red-900 text-white px-4 py-2 rounded-lg mt-4"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
