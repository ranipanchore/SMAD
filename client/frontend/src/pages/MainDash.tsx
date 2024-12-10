import { ImUserPlus } from "react-icons/im";
import Support from "../components/Support";
import { IoSchoolOutline } from "react-icons/io5";
import { LuSchool } from "react-icons/lu";
// import {Header} from "../components/Header";
import Header from "../components/Header";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Teacher from "./Teacher";
import Billing from "./Billing";
import Student from "./Student";
import Exam from "./Exam";
import Profile from "./Profile";
type LogoutProps = {
    onLogout():void
}
// const Dashboard = () => {
const MainDash: React.FC<LogoutProps>=({onLogout})=>{
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const [isVisibleComponent, setVisibleComponent] = useState(false);
    const HandleLogout=()=>{
        onLogout();
    }
    const HandleLogin=()=>{
        // onLogout();
    }
    
  return (
  
        <div>
            <Header onLogout={HandleLogout}/>
            
            <div className="relative pt-12 pl-32 font-sans bg-white ">
                    
                    <h2 className="">Welcome to your dashboard, Udemy school</h2>
                    <h4 className="mt-6 ml-20">Uyo/school/@teachable.com</h4>
                    <div className="flex w-full h-auto pr-16">
                        <div className="px-20 h-1/5 pt-14 ">
                                <div className="mb-8 ">
                                    <div className="flex">
                                        <ImUserPlus className="text-2xl bg-blue-200 border rounded"/> 
                                        <h5 className="ml-6">Add other admins</h5>
                                    </div>
                                    <div className="p-0 text-sm ml-11">
                                        create rich course content and coaching products for your students.<br/>
                                        When you give them a pricing plan, they'll appear on your site!
                                    </div>
                                
                                </div>
                                <div className="mb-8">
                                    <div className="flex">
                                        <LuSchool  className="text-2xl bg-blue-200 border rounded"/> 
                                        <h5 className="ml-6">Add classes</h5>
                                    </div>
                                    <div className="p-0 text-sm ml-11">
                                        create rich course content and coaching products for your students.<br/>
                                        When you give them a pricing plan, they'll appear on your site!
                                    </div>
                                
                                </div>
                                <div className="mb-8">
                                    <div className="flex">
                                        <IoSchoolOutline className="text-2xl bg-blue-200 border rounded"/> 
                                        <h5 className="ml-6">Add students</h5>
                                        
                                    </div>
                                    <div className="p-0 text-sm ml-11">
                                        create rich course content and coaching products for your students.<br/>
                                        When you give them a pricing plan, they'll appear on your site!
                                    </div>
                                
                                </div>
                        </div>
                        <div className="flex mb-16 ml-32 align-items-end">
                            <Support />
                        </div>
                    </div>
                    
            </div>
       </div>
   
     )
}


export default MainDash;
