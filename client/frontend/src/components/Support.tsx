
// import "./css/Support.css"
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Support= ()=>{
    return(
        <div className="fixed flex text-sm">
           <div className="flex items-center px-3 py-3 text-white border rounded-full bg-blue-950">
                <TfiHeadphoneAlt className="mr-3"/>
                Support
                <RiArrowDropDownLine className="ml-10"/>
           </div>
        </div>
    )
}
export default Support;