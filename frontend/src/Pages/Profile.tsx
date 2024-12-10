// const Profile = () => {
//     return <>
    
//     </>
//   };
  
//   export default Profile;// App.js
import React from 'react';
import 'tailwindcss/tailwind.css';

const Profile = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <div className="w-1/4 p-5 text-white bg-blue-800">
        <h1 className="text-lg font-bold">Udemy Inter.school</h1>
        <nav className="mt-5">
          <ul>
            <li className="mt-3"><a href="#" className="hover:text-blue-300">Dashboard</a></li>
            <li className="mt-3"><a href="#" className="hover:text-blue-300">Teachers</a></li>
            <li className="mt-3"><a href="#" className="hover:text-blue-300">Students/ classes</a></li>
            <li className="mt-3"><a href="#" className="hover:text-blue-300">Billing</a></li>
            <li className="mt-3"><a href="#" className="hover:text-blue-300">Settings and profile</a></li>
            <li className="mt-3"><a href="#" className="hover:text-blue-300">Exams</a></li>
          </ul>
        </nav>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-semibold">Profile</h2>
          <div>
            <button className="px-4 py-2 text-white bg-blue-600 rounded">Export CSV</button>
            <button className="px-4 py-2 ml-3 text-white bg-blue-600 rounded">Add Teachers</button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Search for a teacher by name or email"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Teacher Details */}
        <div className="p-5 bg-white rounded shadow">
          <div className="flex items-center">
            <img
              src="path/to/teacher-image.jpg"
              alt="Kristin Watson"
              className="w-24 h-24 border-2 border-blue-500 rounded-full"
            />
            <div className="ml-5">
              <h3 className="text-xl font-bold">Kristin Watson</h3>
              <p>Geology Teacher</p>
              <p className="mt-2">Age: 34</p>
              <p>Gender: Male</p>
            </div>
          </div>
          <div className="mt-5">
            <h4 className="font-semibold">About</h4>
            <p className="mt-2 text-gray-700">
              Nulla Lorem mollit cupidatat irure. Labore magna nulla...
            </p>
          </div>
        </div>

        {/* List of Teachers */}
        <div className="mt-5">
          <h4 className="text-lg font-semibold">Teachers from the same class</h4>
          <div className="grid grid-cols-3 gap-4 mt-3">
            {/* Repeat this block for each teacher */}
            <div className="p-3 bg-white rounded shadow">
              <p>Teacher Name</p>
            </div>
            {/* Add more teachers as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;