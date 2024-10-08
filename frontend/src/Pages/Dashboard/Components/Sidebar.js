import logo from "../../../assets/ss1.png"

import { Link } from "react-router-dom";
import Teacher from "../Pages/Teacher/Teacher";
import Students from "../Pages/Students/Students";
import { useEffect } from "react";
import "./css/Sidebar.css"
import Dashboard from "../Pages/Dashboard";
function Sidebar(){

  
   
    let dashPage = false;
    let teachersPage = false;
    let studentsPage = false;
    let dashboardp = document.getElementById("dashboard");
    let teachersp = document.getElementById("teachers");
    let studentsp = document.getElementById("students");

    const dashboard = () =>{ 
       dashPage=true;
        teachersPage=false;
        studentsPage=false;
        dashboardp.style.display="block";
        teachersp.style.display="none";
        studentsp.style.display="none";
        console.log("dashboard")

       }

   const teachers = () =>{ 
   dashPage=false;
       teachersPage=true;
        studentsPage=false;
        teachersp.style.display="block"
        dashboardp.style.display="none"
        studentsp.style.display="none"
    console.log("teachers")
   }
   const students = () =>{ 
    dashPage=false;
        teachersPage=false;
        studentsPage=true;
        studentsp.style.display="block"
        teachersp.style.display="none"
        dashboardp.style.display="none"
    console.log(" students")
   }


    return (
    //   <div className="bd">
    //     <div className="wrapper">
    //       <div className="sidebar">
    //         <div className="flex items-center justify-center mt-4">
    //           <img src={logo} alt="logo" class="min-w-20 max-w-20" />
    //           <br />
    //         </div>
    //         <h4 className="mt-2 text-sm text-center text-white">
    //           Udemy Inter. school
    //         </h4>
    //         <div className="">
    //         <ul className="mr-4 text-center">
    //         <li className="mt-4 text-left" >

    //             <i class="fa fa-home text-white text-sm pr-4"></i>
    //             <Link to={"/Dashboard"} className="pr-2 text-sm text-white no-underline">Dashboard</Link>
    //         </li>
    //         <li className="mt-2 text-left" >
    //             <i class="fa fa-home text-white text-sm pr-4"></i>
    //             <Link to={"/Teachers"} className="pr-2 text-sm text-white no-underline" >Teachers</Link>
    //         </li>
    //         <li className="mt-2 text-left" >
    //             <i class="fa fa-home text-white text-sm pr-4"></i>
    //             <Link to={"/Students"} className="pr-2 text-sm text-white no-underline">Students/ clases</Link>
    //         </li>
    //         <li className="mt-2 text-left">
    //             <i class="fa fa-home text-white text-sm pr-4"></i>
    //             <Link to={"/"} className="pr-2 text-sm text-white no-underline">Billing</Link>
    //         </li>
    //         <li className="mt-2 text-left">
    //             <i class="fa fa-home text-white text-sm pr-4"></i>
    //             <Link to={"/"} className="pr-2 text-sm text-white no-underline">Setting and profile</Link>
    //         </li>
    //         <li className="mt-2 text-left">
    //             <i class="fa fa-home text-white text-sm pr-4"></i>
    //             <Link to={"/"} className="pr-2 text-sm text-white no-underline">exam</Link>
    //         </li>
    //         </ul>

    //         <ul className="mr-4"> 
    //           <li className="mt-20 text-center">
    //             <i class="fa fa-home text-white text-sm pr-4"></i>
    //             <Link to={"/"} className="pr-2 text-sm text-white no-underline">Features</Link>
    //             <span className="px-2 pt-px pb-px ml-2 text-sm text-white border rounded">New</span>
    //           </li>
    //         </ul>
    //         </div>
    //       </div>

    //       <div className="main" >
    //         <div className="dashboard" id="dashboard">
    //             <h1>main Dashboard</h1>
    //         </div>
    //         <div className="teachers" id="teachers">
    //           <Teacher />
    //         </div>
    //         <div className="students" id="students">
    //           <Students />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    <div className="bd">
        <div className="wrapper">
          <div className="sidebar">
            <div className="flex items-center justify-center mt-4">
              <img src={logo} alt="logo" class="min-w-20 max-w-20" />
              <br />
            </div>
            <h4 className="mt-2 text-sm text-center text-white">
              Udemy Inter. school
            </h4>
            <div className="">
            <ul className="mr-4 text-center">
            <li className="mt-4 text-left" >

                <i class="fa fa-home text-white text-sm pr-4"></i>
                <Link to={"/Dashboard"} className="pr-2 text-sm text-white no-underline">Dashboard</Link>
            </li>
            <li className="mt-2 text-left" >
                <i class="fa fa-home text-white text-sm pr-4"></i>
                <Link to={"/Teachers"} className="pr-2 text-sm text-white no-underline" >Teachers</Link>
            </li>
            <li className="mt-2 text-left" >
                <i class="fa fa-home text-white text-sm pr-4"></i>
                <Link to={"/Students"} className="pr-2 text-sm text-white no-underline">Students/ clases</Link>
            </li>
            <li className="mt-2 text-left">
                <i class="fa fa-home text-white text-sm pr-4"></i>
                <Link to={"/"} className="pr-2 text-sm text-white no-underline">Billing</Link>
            </li>
            <li className="mt-2 text-left">
                <i class="fa fa-home text-white text-sm pr-4"></i>
                <Link to={"/"} className="pr-2 text-sm text-white no-underline">Setting and profile</Link>
            </li>
            <li className="mt-2 text-left">
                <i class="fa fa-home text-white text-sm pr-4"></i>
                <Link to={"/"} className="pr-2 text-sm text-white no-underline">exam</Link>
            </li>
            </ul>

            <ul className="mr-4"> 
              <li className="mt-20 text-center">
                <i class="fa fa-home text-white text-sm pr-4"></i>
                <Link to={"/"} className="pr-2 text-sm text-white no-underline">Features</Link>
                <span className="px-2 pt-px pb-px ml-2 text-sm text-white border rounded">New</span>
              </li>
            </ul>
            </div>
          </div>
          </div>
          </div>
    );
}

export default Sidebar;