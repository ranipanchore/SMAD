import React from 'react';

const Exam = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* <aside className="w-64 p-5 text-white bg-blue-900">
        <div className="mb-4 text-lg font-bold">Udemy Inter. school</div>
        <nav>
          <ul>
            <li className="py-2">
              <span className="font-semibold">Dashboard</span>
            </li>
            <li className="py-2 bg-blue-700">
              <span className="font-semibold">Teachers</span>
            </li>
            <li className="py-2">
              <span className="font-semibold">Students/ classes</span>
            </li>
            <li className="py-2">
              <span className="font-semibold">Billing</span>
            </li>
            <li className="py-2">
              <span className="font-semibold">Settings and profile</span>
            </li>
            <li className="py-2">
              <span className="font-semibold">Exams</span>
            </li>
            <li className="py-2">
              <span className="font-semibold">Features <span className="text-red-500">NEW</span></span>
            </li>
          </ul>
        </nav>
      </aside> */}
      <main className="flex-1 p-5">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Exams</h1>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-white bg-blue-500 rounded">Export CSV</button>
            <button className="px-4 py-2 text-white bg-blue-600 rounded">Add Teachers</button>
          </div>
        </header>
        <div className="flex items-center mb-4">
          <select className="px-2 py-1 mr-2 border rounded">
            <option>Add filter</option>
          </select>
          <input 
            type="text" 
            placeholder="Search for a student by name or email" 
            className="flex-1 px-2 py-1 border rounded"
          />
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl font-semibold">No Teachers at this time</h2>
          <p className="text-gray-600">Teachers will appear here after they enroll in your school.</p>
          <button className="px-4 py-2 mt-4 text-white bg-blue-900 rounded">Support</button>
        </div>
      </main>
    </div>
  );
}

export default Exam;