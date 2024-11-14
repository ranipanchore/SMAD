import { ImUserPlus } from "react-icons/im";
import Support from "../components/Support";
import { IoSchoolOutline } from "react-icons/io5";
import { LuSchool } from "react-icons/lu";
const Dashboard = () => {
  return (
    
        <div className="relative mt-32 font-sans ml-36 ">
              <h2 className="">Welcome to your dashboard, Udemy school</h2>
              <h4 className="mt-6 ml-20">Uyo/school/@teachable.com</h4>
              <div className="px-20 h-1/5 py-14 ">
                    <div className="mb-8 ">
                        <div className="flex">
                            <ImUserPlus className="bg-blue-200 border rounded"/> 
                            <h5 className="ml-6">Add other admins</h5>
                        </div>
                        <div className="p-0 text-sm ml-11">
                            create rich course content and coaching products for your students.<br/>
                            When you give them a pricing plan, they'll appear on your site!
                        </div>
                    
                    </div>
                    <div className="mb-8">
                        <div className="flex">
                            <LuSchool  className="bg-blue-200 border rounded"/> 
                            <h5 className="ml-6">Add classes</h5>
                        </div>
                        <div className="p-0 text-sm ml-11">
                            create rich course content and coaching products for your students.<br/>
                            When you give them a pricing plan, they'll appear on your site!
                        </div>
                    
                    </div>
                    <div className="mb-8">
                        <div className="flex">
                            <IoSchoolOutline className="bg-blue-200 border rounded"/> 
                            <h5 className="ml-6">Add students</h5>
                            <Support/>
                        </div>
                        <div className="p-0 text-sm ml-11">
                            create rich course content and coaching products for your students.<br/>
                            When you give them a pricing plan, they'll appear on your site!
                        </div>
                    
                    </div>
              </div>
              <div className="support">
                <Support />
              </div>
              
       </div>
     )
}


export default Dashboard;
