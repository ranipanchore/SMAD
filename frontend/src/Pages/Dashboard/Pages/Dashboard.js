
import logo from "../../../assets/ss1.png"
import "./css/Dashboard.css"
import { Link } from "react-router-dom";
import Students from "./Students/Students";
import { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Maindash from "./Dash/Maindash";
import Tophead from "../Components/Tophead";
import { Navigate } from "react-router-dom";
import Teacher, {TeachTop } from "./Teacher/Teacher";

function Dashboard(){

    const maindashboard = () =>{
        let dashboard1 = document.getElementById("dashboard1");
        dashboard1.style.display="block";
        let teachers1 = document.getElementById("teachers1");
        teachers1.style.display="none";
        let students1 = document.getElementById("students1");
        students1.style.display="none";
        
    }

    const teacher = () => {
        let dashboard1 = document.getElementById("dashboard1");
        dashboard1.style.display="none";
        let teachers1 = document.getElementById("teachers1");
        teachers1.style.display="block";
        let students1 = document.getElementById("students1");
        students1.style.display="none";
        // window.location.href = "Teachers"
      }
    
    const students = () =>{
        let dashboard1 = document.getElementById("dashboard1");
        dashboard1.style.display="none";
        let teachers1 = document.getElementById("teachers1");
        teachers1.style.display="none";
        let students1 = document.getElementById("students1");
        students1.style.display="block";
    }
    var header = document.getElementById("myDIV");
    var btns = document.getElementsByClassName("btn");
    useEffect(()=>{
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
            });
          }
    })
    

  

    return(
    <div className="bd">
    <div className="wrapper">
        {/* <div className="sidebar">
            <div className="logo">
                <img src={logo} alt = "udemy" className='logoBg'/><br/>
                <span className="title">Udemy Inter. school</span>
            </div>
            <hr/>
            <div  className="dashPages">
                <div>
                    <ul className="menu-item d-grid" id="myDIV">
                        <li className="dash btn active " onClick={maindashboard}>
                        <i class="fa fa-home" style={{color:"blue"}}></i>
                            <Link to={"/Dashboard"}>Dashboard</Link>
                        </li>
                        <li onClick={teacher} className="btn">
                        <i class="fa fa-tty" style={{color:"blue"}} ></i>
                            <Link to={""} >Teachers</Link>
                        </li>
                        <li onClick={students} className="btn">
                        <i class="fa fa-graduation-cap" style={{color:"blue"}}></i>
                            <Link to={""} >Students/ classes</Link>
                        </li>
                        <li className="btn">
                        <i class="fa fa-home" style={{color:"blue"}}></i>
                            <Link to={"/Billing"}>Billing</Link>
                        </li>
                        <li className="btn">
                        <i class="fa fa-cog" style={{color:"blue"}}></i>
                            <Link to={"/Profile"}>Setting and profile</Link>
                        </li>
                        <li className="btn">
                        <i class="fa fa-tasks" style={{color:"blue"}}></i>
                            <Link to={"/Exams"}>Exams</Link>
                        </li>
                    </ul>
                    <ul  className="footer-menu">
                        <li className="btn">
                            <i class="fa fa-home" style={{color:"blue"}}></i>
                                <Link to={"/Dashboard"}>
                                Features
                                </Link>
                                
                                <span className="new">New</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div> */}


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
                <li className="mt-4 text-left" onClick={maindashboard} >

                    <i class="fa fa-home text-white text-sm pr-4"></i>
                    <Link to={""} className="pr-2 text-sm text-white no-underline">Dashboard</Link>
                </li>
                <li className="mt-2 text-left" onClick={teacher}>
                    <i class="fa fa-home text-white text-sm pr-4"></i>
                    <Link to={""} className="pr-2 text-sm text-white no-underline" >Teachers</Link>
                </li>
                <li className="mt-2 text-left" onClick={students}>
                    <i class="fa fa-home text-white text-sm pr-4"></i>
                    <Link to={""} className="pr-2 text-sm text-white no-underline">Students/ clases</Link>
                </li>
                <li className="mt-2 text-left">
                    <i class="fa fa-home text-white text-sm pr-4"></i>
                    <Link to={""} className="pr-2 text-sm text-white no-underline">Billing</Link>
                </li>
                <li className="mt-2 text-left">
                    <i class="fa fa-home text-white text-sm pr-4"></i>
                    <Link to={""} className="pr-2 text-sm text-white no-underline">Setting and profile</Link>
                </li>
                <li className="mt-2 text-left">
                    <i class="fa fa-home text-white text-sm pr-4"></i>
                    <Link to={""} className="pr-2 text-sm text-white no-underline">exam</Link>
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
        

        
        <div className="main">
               {/* <div className="dashboard" id="dashboard1">
                    <div className="top-info">
                    <div className="top-para">
                        <p className="top-para1">Learn how to launch faster</p>
                        <p className="top-para2">watch our webinar for tips from our team experts and get a limited time offer.</p>
                    </div>
                    <div className="bell-out">
                    <i class="fa fa-home" style={{color:"white"}}></i>
                        <button className="logout">Log out</button>
                    </div>
                    </div>
                    <h1 className="heading">Welcome to your dashboard, Udemy school</h1>
                    <div className="dash-body">
                        
                        <div className="sub-heading">
                            <h4>Uyo/school/@teachable.com</h4>
                        </div>

                        <div className="add-div">
                            <div className="add-admins">
                                <div className="icon-head">
                                    <i class="fa fa-home"></i>
                                    <h3>Add other admins</h3>
                                </div>
                                <p className="paraTag">create rich course content and coaching products for your students.</p>
                                <p className="paraTag">When you give them a pricing plan, they'll appear on your site!</p>
                            </div>

                            <div className="add-admins">
                                <div className="icon-head">
                                    <i class="fa fa-home"></i>
                                    <h3>Add classes</h3>
                                </div>
                                <p className="paraTag">create rich course content and coaching products for your students.</p>
                                <p className="paraTag">When you give them a pricing plan, they'll appear on your site!</p>
                            </div>

                            <div className="add-admins">
                                <div className="icon-head">
                                    <i class="fa fa-home"></i>
                                    <h3>Add students</h3>
                                </div>
                                <p className="paraTag">create rich course content and coaching products for your students.</p>
                                <p className="paraTag">When you give them a pricing plan, they'll appear on your site!</p>
                                
                            </div>
                        </div>

                    
                    </div>
                    <div className="uppper-support">
                        <div className="support-btn1">
                                    <i class="fa fa-headphones"></i>
                                    <span>Support</span>
                                    <i class="fa fa-caret-down"></i> 
                            </div>
                    </div>
               </div> */}
               <div className="dashboard" id="dashboard1">
                <Tophead/>
                    <Maindash/>
               </div>
               <div className="teachers" id="teachers1" >
               {/* <TeachTop/> */}
               {TeachTop()}
                <Teacher/>
                    
               </div>
               <div className="students" id="students1">
                    <TeachTop/>
                    <Students/>
               </div>

        </div>
     </div>
           
    </div>
    
    )
}

export default Dashboard;