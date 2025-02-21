"use client"

import React, { useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState({
    username: "JohnDoe", // Example username (fetch from API later)
    email: "johndoe@example.com", // Example email (fetch from API later)
    gender: "",
    birthday: "",
    phone: "",
    password: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-10 bg-white shadow-lg rounded-lg border border-gray-300">
      <h2 className="text-3xl font-bold text-[#33A0FF] text-center mb-8">
        Profile Settings
      </h2>

      {/* Username & Email Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-gray-700 mb-2 font-semibold">Username</label>
          <div className="relative">
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#33A0FF] disabled:bg-gray-100"
            />
            <button 
              className="absolute right-3 top-4 text-[#33A0FF] font-semibold text-sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-semibold">Email</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#33A0FF] disabled:bg-gray-100"
            />
            <button 
              className="absolute right-3 top-4 text-[#33A0FF] font-semibold text-sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </div>

      {/* Other User Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <label className="block text-gray-700 mb-2 font-semibold">Gender</label>
          <select
            name="gender"
            value={user.gender}
            onChange={handleChange}
            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#33A0FF]"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-semibold">Birthday</label>
          <input
            type="date"
            name="birthday"
            value={user.birthday}
            onChange={handleChange}
            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#33A0FF]"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-semibold">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#33A0FF]"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      {/* Password Change */}
      <div className="mt-8">
        <label className="block text-gray-700 mb-2 font-semibold">New Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#33A0FF]"
          placeholder="Enter new password"
        />
      </div>

      {/* Update Button */}
      <button className="w-full bg-[#33A0FF] text-white p-4 rounded-md mt-8 font-semibold hover:bg-[#2A8BDE] transition">
        Update Profile
      </button>
    </div>
  );
};

export default ProfilePage;
