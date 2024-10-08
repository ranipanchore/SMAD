
import "../css/Teacher.css";
import { FaRegBell } from "react-icons/fa";
import "../../Components/css/Tophead.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Support from "../../Components/Support";

 export  function  TeachTop(){
    return(
        <div className="fixed z-0 content-end w-10/12 min-h-0 text-base text-left">
        <div className="flex justify-end">
            
            <div className="flex items-center pb-3 text-sm mr-28 gap-x-7">
                
                <FaRegBell className="text-xl" /> 
                
                <button className="px-4 py-1 ">Logout</button>
                
            </div>
        </div>
    </div>
    )
}

  export default function Teacher(){
    return(
        
        <div className="relative mt-12">
            <div className="flex items-center justify-between text-sm ">
                <div className="ml-4">
                    Teachers
                </div>
                <div  className="flex mr-4 gap-x-7">
                    <div className="flex items-center text-blue-500 cursor-pointer">Export CSV</div>
                    <div className="px-4 py-1 text-white bg-blue-400 border rounded cursor-pointer">Add Teachers</div>
                </div>
            </div>
            <div  className="flex w-11/12 px-2 py-2 mt-4 ml-20 border text-slate-300">
                <div className="flex items-center mr-8 text-sm">Add filter <RiArrowDropDownLine className="text-md"/></div>
                <CiSearch className="mr-3 text-md"/>
                <input placeholder="Search for a student by name or email" className="w-10/12 text-sm text-slate-300 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-sky-500"/>
                {/* <input type="text" value="" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/> */}
            </div>
            <div className="flex items-center justify-center w-11/12 h-full mt-4 ml-20 text-sm border px-44 py-44">
                <div className=""> 
                    <h3 className="p-0 m-0">No Teachers at this time</h3>
                    <div className="">Teachers will appear here after they enroll in your school</div>
                </div>
                <Support  className="mr-0"/>
            </div>
        </div>
       
    )
}
