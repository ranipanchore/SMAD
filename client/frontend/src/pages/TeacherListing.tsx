// src/App.js
import React from 'react';

function TeacherListing() {
  const teachers = [
    { name: 'Kristin Watson', subject: 'Chemistry', class: 'J SS 2', email: 'michelle.rivera@example.com', gender: 'Female' },
    { name: 'Marvin McKinney', subject: 'French', class: 'JSS 3', email: 'debbie.baker@example.com', gender: 'Female' },
    // Add more teachers as needed
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      {/* <aside className="w-64 min-h-screen p-6 text-white bg-blue-900">
        <h1 className="text-xl font-bold">Udemy Inter.school</h1>
        <nav className="mt-6">
          <ul>
            <li className="mt-4"><a href="#" className="hover:text-blue-300">Dashboard</a></li>
            <li className="mt-4"><a href="#" className="hover:text-blue-300">Teachers</a></li>
            <li className="mt-4"><a href="#" className="hover:text-blue-300">Students/ Classes</a></li>
            <li className="mt-4"><a href="#" className="hover:text-blue-300">Billing</a></li>
            <li className="mt-4"><a href="#" className="hover:text-blue-300">Settings and Profile</a></li>
            <li className="mt-4"><a href="#" className="hover:text-blue-300">Exams</a></li>
          </ul>
        </nav>
      </aside> */}

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <header className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Teachers</h2>
          <div>
            <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded">Export CSV</button>
            <button className="px-4 py-2 text-white bg-blue-500 rounded">Add Teachers</button>
          </div>
        </header>

        <input
          type="text"
          placeholder="Search for a teacher by name or email"
          className="w-full p-2 mb-4 border rounded"
        />

        {/* Teachers Table */}
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4">Name</th>
              <th className="p-4">Subject</th>
              <th className="p-4">Class</th>
              <th className="p-4">Email Address</th>
              <th className="p-4">Gender</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-4">{teacher.name}</td>
                <td className="p-4">{teacher.subject}</td>
                <td className="p-4">{teacher.class}</td>
                <td className="p-4">{teacher.email}</td>
                <td className="p-4">{teacher.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default TeacherListing;