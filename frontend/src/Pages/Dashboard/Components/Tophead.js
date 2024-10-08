import "./css/Tophead.css"
import { FaRegBell } from "react-icons/fa";

function Tophead()
{
    return(
        
            <div className="fixed z-0 content-end w-10/12 mt-2 text-base text-left bg-slate-50 min-h-24">
                <div className="flex justify-around">
                    <div>
                        <div className="-mb-2">
                        Learn how to launch faster
                        </div>
                        <div>
                        watch our webinar for tips from our team experts and get a limited time offer.
                        </div>
                    </div>
                    <div className="flex items-center pb-3 text-sm gap-x-7">
                        
                        <FaRegBell className="text-xl" /> 
                        
                        <button className="px-4 py-1 text-white bg-blue-400 border rounded">Logout</button>
                        
                    </div>
                </div>
            </div>
    )
}
export default Tophead