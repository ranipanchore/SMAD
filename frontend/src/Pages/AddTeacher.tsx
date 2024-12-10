// const StudentClasses = () => {
//     return(
//         <div className="StudentPage">
//         <div>
//             <div  className="top">
//                 <i className="fa fa-home"></i>
//                 <button className="">Logout</button>
//             </div>
//             <div className="teach1-div">
//                 <div>Teachers</div>
//                 <div>
//                     <div>
//                         <a>Export CSV</a>
//                     </div>
//                     <div>
//                         Add Teachers
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }

  
//   export default StudentClasses;
  // src/App.js
  import React from 'react';
  // import './StudentClasses.css'; // Make sure to include TailwindCSS in your CSS file
  
  function StudentClasses() {
    return (
      <div className="flex">
        {/* <Sidebar /> */}
        <MainContent />
      </div>
    );
  }
  
  const Sidebar = () => (
    <div className="w-64 h-screen p-5 text-white bg-blue-900">
      <h2 className="text-xl font-bold">Udemy Inter. school</h2>
      <nav className="mt-5">
        <ul>
          <li className="py-2"><a href="#dashboard">Dashboard</a></li>
          <li className="py-2"><a href="#teachers" className="p-2 bg-blue-700 rounded">Teachers</a></li>
          <li className="py-2"><a href="#students">Students/ classes</a></li>
          <li className="py-2"><a href="#billing">Billing</a></li>
          <li className="py-2"><a href="#settings">Settings and profile</a></li>
          <li className="py-2"><a href="#exams">Exams</a></li>
        </ul>
      </nav>
    </div>
  );
  
  const MainContent = () => (
    <div className="flex-1 p-10">
      <Header />
      <AddTeacherForm />
      <TeacherList />
    </div>
  );
  
  const Header = () => (
    <div className="flex items-center justify-between mb-5">
      <h1 className="text-2xl font-bold">Teachers</h1>
      <button className="px-4 py-2 text-white bg-blue-600 rounded">Add Teachers</button>
    </div>
  );
  
  const AddTeacherForm = () => (
    <div className="p-5 mb-5 bg-white rounded shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Add Teachers</h2>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input type="text" placeholder="Full Name" className="p-2 border rounded" />
        <input type="text" placeholder="Designation" className="p-2 border rounded" />
        <input type="email" placeholder="Email address" className="p-2 border rounded" />
        <input type="password" placeholder="Password" className="p-2 border rounded" />
        <input type="text" placeholder="Phone number" className="p-2 border rounded" />
        
        <select className="p-2 border rounded">
          <option>Class</option>
          <option>Class 1</option>
          <option>Class 2</option>
        </select>
        <select className="p-2 border rounded">
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <select className="p-2 border rounded">
          <option>Subject</option>
          <option>Math</option>
          <option>Science</option>
        </select>
      </div>
      
      <div className="mt-4">
        <button className="px-4 py-2 text-white bg-blue-600 rounded">Add Teacher</button>
        <button className="ml-2 text-blue-600">Add another</button>
      </div>
    </div>
  );
  
  const TeacherList = () => (
    <div className="p-5 bg-white rounded shadow-md">
      <h2 className="mb-4 text-xl font-semibold">No Teachers at this time</h2>
      <p>Teachers will appear here after they enroll in your school.</p>
    </div>
  );
  
  export default AddTeacherForm;