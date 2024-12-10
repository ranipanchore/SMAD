import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
 import { LiaEyeSolid } from "react-icons/lia";
 import { IoIosCheckmarkCircle } from "react-icons/io";
 import { FaDotCircle } from "react-icons/fa";
 import "../assets/styles/Password.css"
import { useState } from "react";
const ChoosePassword = () => {
    const [isVisiblePass,setVisibilityPass] = useState(false);
    const [isVisibleCPass,setVisibilityCPass] = useState(false);
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    
    const handleTogglePass  = () =>{
        setVisibilityPass(!isVisiblePass);
    }
    const handleToggleCPass  = () =>{
        setVisibilityCPass(!isVisibleCPass);
    }
    const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
      };
    const handleCPassChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setCPassword(e.target.value);
    }
     return(
     <div  className='min-h-screen text-center bg-stone-50'>
 
     <h1 className="mt-4 mb-8">Udemy school, Choose your password</h1>
             <div className='flex items-center justify-center text-center '>
                 
                 <div className='bg-white border py-14 px-36 text-slate-400'>
                 
                     <div className="p-2">
                         <div>
                             <label htmlFor="password" className="block text-sm font-medium leading-6 text-left text-slate-400">
                                 Choose a password
                             </label>
                             <div className="mt-2">
                              
                                <input  type={isVisiblePass ? 'text' : 'password'} value={password} onChange={handlePassChange} placeholder='Enter password' className="w-64 p-2 text-sm font-medium border rounded-md"/>
                                <div className="pass" onClick={handleTogglePass} style={{cursor:"pointer"}}>
                                        {
                                            isVisiblePass ? (<div><FaRegEyeSlash /></div>) :(<div><LiaEyeSolid /></div>)
                                        }
                                </div>
                             </div>
                         </div>
 
 
                         <div>
                             <label htmlFor="cpassoword" className="block mt-4 text-sm font-medium leading-6 text-left text-slate-400">
                                 Confirm password
                             </label>
                             <div className="mt-2">
                                 <input  type={isVisibleCPass ? 'text' : 'password'} value={cpassword} onChange={handleCPassChange} placeholder='Enter Confirm password' className="w-64 p-2 text-sm font-medium border rounded-md"/>
                                 <div className="cpass" onClick={handleToggleCPass} style={{cursor:"pointer"}}>
                                        {
                                            isVisibleCPass ? (<div><FaRegEyeSlash /></div>) :(<div><LiaEyeSolid /></div>)
                                        }
                                </div>
                                 
                             </div>
                         </div>
                         <p className="mt-4 ml-3 text-sm text-left text-gray-500 ">
                             Must be atleast 8 characters.{' '}
                         </p>
                         <div className='mt-3'>
                         <Link to="/choose-Staff" className="flex w-full no-underline justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next</Link>
                        
                         </div> 
                         
 
                     </div>
                 </div>
 
             </div>
              <div className='down-div'>
                 <hr className='' id='line'/>
                 <div className="flex iconsStatus ">
                    <div className="text-cyan-400"><IoIosCheckmarkCircle /></div>
                    <div className="ml-40 text-cyan-400"><FaDotCircle /></div>
                 </div>
                 <div className='status-div'>
                    

                 <div>
                     <i className="fa fa-check-square" style={{color:"blue"}}></i>
                     <h6>Your details</h6>
                     <p>Name and email</p>
                 </div>
                 <div>
                     <i className="fa fa-circle" style={{color:"blue"}}></i>
                     <h6>Choose a password</h6>
                     <p>Choose a secure password</p>
                 </div>
                 <div>
                     <div></div>
                     <i className="fa" style={{color:"blue"}}></i>
                     <h6>invite your team</h6>
                     <p>Start collaborating</p>
                 </div>
                 <div>
                     <i className="fa" style={{color:"blue"}}></i>
                     <h6>Upload school's document</h6>
                     <p>For account verification</p>
                 </div>
                 </div>
             </div>
     </div>
       
     )
 }
 export default ChoosePassword;