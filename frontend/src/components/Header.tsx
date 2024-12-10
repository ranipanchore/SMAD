import { useState } from "react";
import { Button } from "react-bootstrap";
import { LuBellDot } from "react-icons/lu";
import { Link } from "react-router-dom";

type LogoutProps = {
    onLogout: () => void;
  };
  

const Header: React.FC<LogoutProps>=({onLogout})=>{
    const handlelogout = () =>{
        onLogout();
        console.log(onLogout(),"logout") //undefine
    }
    // const [visibleNone, setVisibleNone] = useState(true);
    
    
    return(
        <div>
            
            <div className="flex justify-between w-full pl-32 bg-neutral-100">
                {/* dashboard header */}
                
                <div className="pt-12">
                    <p  className="p-0 m-0">Learn how to launch faster</p>
                    <p>watch our webinar for tips from our experts  and get a limited time offer.</p>
                </div>
                <div className="flex justify-between w-2/5 pt-12 pl-32 pr-64">
                    <div className="pr-16 text-4xl">
                    <LuBellDot />
                    </div>
                    <div>
                    {/* <Link className="px-4 py-1 no-underline" to={"/Login"} onClick={handlelogout}>Logout</Link> */}
                    {/* <Link to={"/Login"} onClick={handlelogout} className="no-underline text-cyan-700 text-">Logout</Link> */}
                    {/* <Link   to="/Login"  >Logout</Link> */}
                    </div>
                </div>
            </div>
       </div>
  )
}

export default Header
