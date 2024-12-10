    
// import "../css/Teacher.css";
import { FaRegBell } from "react-icons/fa";
// import "../../Components/css/Tophead.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Support from "../components/Support";
// import { Header2 } from "../components/Header";
import Header from "../components/Header"

import { useState } from "react";
import { Link } from "react-router-dom";
type LogoutProps = {
    onLogout():void;
}

// const Teacher = () => {
    const StudentClasses :    React.FC<LogoutProps>=({onLogout})=>{
        const handlelogout = () =>{
            onLogout();
        }
    const [isAuthenticated, setIsAuthenticated]=useState(false);
    const[isLogoutt, setLogoutt] = useState(false);
    return (
  <div>
   <main className="flex-1 p-5">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Teachers</h1>
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
        
    )
}


  
  export default StudentClasses ;
  