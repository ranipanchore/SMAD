import { Link } from "react-router-dom";

const ChoosePassword = () => {
    function GoToChooseStaff(){
         // window.location.href = "/Choose-Staff"
     }
     return(
     //   <div className='signin-component'>
     //     <div className="createAccount" >
     //         <h1 className="">Udemy school, Choose your password</h1>
     //         <div className='form'>
     //             <h6>It is our great pleasure to have <br/> you on board</h6>
 
     //             <div className="">
     //             <br/>
     //             <form className='createPwd-form'>
     //                 <div className='left_text'>Choose a password</div><br/>
     //                 <input  type="Password" placeholder='Enter the name of admin'/><br/><br/>
     //                 <div>Confirm password</div><br/>
     //                 <input  type="Password" placeholder='Enter the name of school'/><br/><br/>
     //                 <div>Must be atleast 8 characters.</div><br/>
     //                 {/* <input  type="text" placeholder='Enter the school email'/><br/><br/> */}
     //                 {/* <input value='Next' type='submit' onSubmit={GoToChooseStaff}/> */}
     //                 <div className='primary'><Link to={"/Choose-Staffs"} className='redirect_signup'>  Next</Link></div>
     //             </form>
     //                {/* <p className='signup_redirect'>Already have an account?  
     //                 <Link to={"Signup"} className='redirect_signup'>  Next</Link>
     //                </p> */}
     //             </div>   
     //         </div>
     //         <div className='down-div'>
     //             <hr className='' id='line'/>
     //             <div className='status-div'>
     //             <div>
     //                 <i className="fa fa-check-square" style={{color:"blue"}}></i>
     //                 <h6>Your details</h6>
     //                 <p>Name and email</p>
     //             </div>
     //             <div>
     //                 <i className="fa fa-circle" style={{color:"blue"}}></i>
     //                 <h6>Choose a password</h6>
     //                 <p>Choose a secure password</p>
     //             </div>
     //             <div>
     //                 <div></div>
     //                 <i className="fa" style={{color:"blue"}}></i>
     //                 <h6>invite your team</h6>
     //                 <p>Start collaborating</p>
     //             </div>
     //             <div>
     //                 <i className="fa" style={{color:"blue"}}></i>
     //                 <h6>Upload school's document</h6>
     //                 <p>For account verification</p>
     //             </div>
     //             </div>
     //         </div>
     //     </div>
     //   </div>
     <div  className='min-h-screen text-center bg-stone-50'>
 
     <h1 className="mt-4 mb-8">Udemy school, Choose your password</h1>
             <div className='flex items-center justify-center text-center '>
                 
                 <div className='bg-white border py-14 px-36 text-slate-400'>
                 
                     <div className="p-2">
                         <h6 className='mb-4'>It is our great pleasure to have <br/> you on board</h6>
 
                         <div>
                             <label htmlFor="email" className="block text-sm font-medium leading-6 text-left text-slate-400">
                                 Choose a password
                             </label>
                             <div className="mt-2">
                                 {/* <input
                                 id="email"
                                 name="email"
                                 type="email"
                                 required
                                 autoComplete="email"
                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 /> */}
                                 <input placeholder='Enter the name of school' className="w-64 p-2 text-sm font-medium border rounded-md"/>
                             </div>
                         </div>
 
 
                         <div>
                             <label htmlFor="email" className="block mt-2 text-sm font-medium leading-6 text-left text-slate-400">
                                 Confirm password
                             </label>
                             <div className="mt-2">
                                 <input placeholder='Enter the name of school' className="w-64 p-2 text-sm font-medium border rounded-md"/>
                             </div>
                         </div>
                         <p className="mt-2 text-sm text-left text-gray-500 ">
                             Must be atleast 8 characters.{' '}
                             {/* <a href="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                             Signin
                             </a> */}
                         </p>
                         <div className='mt-3'>
                         <Link to="/choose-Staff" className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next</Link>
                        
                         </div> 
                         
 
                     </div>
                 </div>
 
             </div>
              <div className='down-div'>
                 <hr className='' id='line'/>
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