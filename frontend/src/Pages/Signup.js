
import Form from 'react-bootstrap/Form';
import "./css/style.css"
import "./css/Signup.css"
import { Link } from "react-router-dom";

export default function Signup() {
    return(
    //   <div className='signin-component'>
    //     <div className="createAccount" >
    //         <h1 class="">Welcome, create your school account</h1>
    //         <div class='' className='form'>
    //             <h6>It is our great pleasure to have <br/> you on board</h6>

    //             <div className="">
    //             <br/>
    //             <form>
    //                 <input  type="text" placeholder='Enter the name of admin'/><br/><br/>
    //                 <input  type="text" placeholder='Enter the name of school'/><br/><br/>
    //                 <input  type="text" placeholder='Enter the school email'/><br/><br/>
    //                 <input value='Next' type='submit'/>
    //             </form>
    //                <p className='signup_redirect'>Already have an account?  
    //                 <Link to={"/Choose-Password"} className='redirect_signup'>  Next</Link>
    //                </p>
    //             </div>   
    //         </div>
    //     </div>
    //   </div>
    <div  class='bg-stone-50 text-center min-h-screen'>

    <h1 class="mb-8 mt-4 text-slate-600">Welcome, create your school account</h1>
    <div class='  text-center  flex items-center justify-center'>
           
        <div class='py-14 px-36 border text-slate-400 bg-white'>
        
            <div class="p-2">
                <h6 class='mb-4'>It is our great pleasure to have <br/> you on board</h6>
                <div className='mt-2'>
                    <input placeholder='Enter the name of admin' class="border p-2 w-64 text-sm rounded-md font-medium"/>
                </div> 
                <div className='mt-3'>
                    <input placeholder='Enter the name of school' class="border p-2 w-64 text-sm rounded-md font-medium"/>
                </div>
                <div className='mt-3'>
                    <input placeholder='Enter the school email' class="border p-2 w-64 text-sm rounded-md font-medium"/>
                </div>
                <div class='mt-3'>
                <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Next
              </button>
                </div> 
                <p className="mt-2 text-sm text-center text-gray-500 ">
                Already have an account?{' '}
                <a href="/Choose-Password" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Next
                </a>
          </p>  

            </div>
        </div>

    </div>
    </div>
    )
}






export function ChoosePassword() {
   function GoToChooseStaff(){
        // window.location.href = "/Choose-Staff"
    }
    return(
    //   <div className='signin-component'>
    //     <div className="createAccount" >
    //         <h1 class="">Udemy school, Choose your password</h1>
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
    //                 <i class="fa fa-check-square" style={{color:"blue"}}></i>
    //                 <h6>Your details</h6>
    //                 <p>Name and email</p>
    //             </div>
    //             <div>
    //                 <i class="fa fa-circle" style={{color:"blue"}}></i>
    //                 <h6>Choose a password</h6>
    //                 <p>Choose a secure password</p>
    //             </div>
    //             <div>
    //                 <div></div>
    //                 <i class="fa fa" style={{color:"blue"}}></i>
    //                 <h6>invite your team</h6>
    //                 <p>Start collaborating</p>
    //             </div>
    //             <div>
    //                 <i class="fa fa" style={{color:"blue"}}></i>
    //                 <h6>Upload school's document</h6>
    //                 <p>For account verification</p>
    //             </div>
    //             </div>
    //         </div>
    //     </div>
    //   </div>
    <div  class='bg-stone-50 text-center min-h-screen'>

    <h1 class="mb-8 mt-4">Udemy school, Choose your password</h1>
            <div class='  text-center  flex items-center justify-center'>
                
                <div class='py-14 px-36 border text-slate-400 bg-white'>
                
                    <div class="p-2">
                        <h6 class='mb-4'>It is our great pleasure to have <br/> you on board</h6>

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
                                <input placeholder='Enter the name of school' class="border p-2 w-64 text-sm rounded-md font-medium"/>
                            </div>
                        </div>


                        <div>
                            <label htmlFor="email" className="block mt-2 text-sm font-medium leading-6 text-left text-slate-400">
                                Confirm password
                            </label>
                            <div className="mt-2">
                                <input placeholder='Enter the name of school' class="border p-2 w-64 text-sm rounded-md font-medium"/>
                            </div>
                        </div>
                        <p className="mt-2 text-sm text-left text-gray-500 ">
                            Must be atleast 8 characters.{' '}
                            {/* <a href="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Signin
                            </a> */}
                        </p>
                        <div class='mt-3'>
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {/* Next */}
                        <a href="/Choose-Staffs" className="font-semibold leading-6 text-white text-indigo-600 no-underline hover:text-indigo-500">
                        Next
                            </a>
                    </button>
                        </div> 
                        

                    </div>
                </div>

            </div>
             <div className='down-div'>
                <hr className='' id='line'/>
                <div className='status-div'>
                <div>
                    <i class="fa fa-check-square" style={{color:"blue"}}></i>
                    <h6>Your details</h6>
                    <p>Name and email</p>
                </div>
                <div>
                    <i class="fa fa-circle" style={{color:"blue"}}></i>
                    <h6>Choose a password</h6>
                    <p>Choose a secure password</p>
                </div>
                <div>
                    <div></div>
                    <i class="fa fa" style={{color:"blue"}}></i>
                    <h6>invite your team</h6>
                    <p>Start collaborating</p>
                </div>
                <div>
                    <i class="fa fa" style={{color:"blue"}}></i>
                    <h6>Upload school's document</h6>
                    <p>For account verification</p>
                </div>
                </div>
            </div>
    </div>
      
    )
}


export function ChooseStaffs() {

    return(
    //   <div className='signin-component'>
    //     <div className="createAccount" >
    //         <h1 class="">Udemy school, Choose your staffs</h1>
    //         <div class='' className='form'>
    //             <h6>It is our great pleasure to have <br/> you on board</h6>

    //             <div className="">
    //             <br/>
    //             <form>
    //                 <input  type="text" placeholder='Enter the name of admin'/><br/><br/>
                    
    //                 <input  type="text" placeholder='Enter the name of school'/><br/><br/>
                    
    //                 {/* <input  type="text" placeholder='Enter the school email'/><br/><br/> */}
    //                 {/* <input value='Next' type='submit'/><br/> */}
    //                 <div className='primary'><Link to={"/"} className='redirect_signup'>  Next</Link></div>
                   
    //                 <span>Must be atleast 8 characters.</span><br/>
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
    //                 <i class="fa fa-check-square" style={{color:"blue"}}></i>
    //                 <h6>Your details</h6>
    //                 <p>Name and email</p>
    //             </div>
    //             <div>
    //                 <i class="fa fa-circle" style={{color:"blue"}}></i>
    //                 <h6>Choose a password</h6>
    //                 <p>Choose a secure password</p>
    //             </div>
    //             <div>
    //                 <div></div>
    //                 <i class="fa fa" style={{color:"blue"}}></i>
    //                 <h6>invite your team</h6>
    //                 <p>Start collaborating</p>
    //             </div>
    //             <div>
    //                 <i class="fa fa" style={{color:"blue"}}></i>
    //                 <h6>Upload school's document</h6>
    //                 <p>For account verification</p>
    //             </div>
    //             </div>
    //         </div>
    //     </div>
    //   </div>
    <div  class='bg-stone-50 text-center min-h-screen'>

        <h1 class="mb-8 mt-4 text-slate-600">Welcome, create your school account</h1>
        <div class='  text-center  flex items-center justify-center'>
            
            <div class='py-14 px-36 border text-slate-400 bg-white'>
            
                <div class="p-2">
                    <h6 class='mb-4'>It is our great pleasure to have <br/> you on board</h6>
                    <div className='mt-2'>
                        <input placeholder='Number of staff' class="border p-2 w-64 text-sm rounded-md font-medium"/>
                    </div> 
                    <div className='mt-3'>
                        <input placeholder='School address' class="border p-2 w-64 text-sm rounded-md font-medium"/>
                    </div>
                    <div class='mt-3'>
                    <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {/* Next */}
                    <a href="/Dashboard" className="font-semibold leading-6 text-white text-indigo-600 no-underline hover:text-indigo-500">
                            Next
                            </a>
                </button>
                    </div> 
                    <p className="mt-5 text-sm text-left text-gray-500 ">
                            Must be atleast 8 characters.{' '}
                            
                    </p>  

                </div>
            </div>

        </div>
        <div className='down-div'>
                    <hr className='' id='line'/>
                    <div className='status-div'>
                    <div>
                        <i class="fa fa-check-square" style={{color:"blue"}}></i>
                        <h6>Your details</h6>
                        <p>Name and email</p>
                    </div>
                    <div>
                    <i class="fa fa-check-square" style={{color:"blue"}}></i>
                        
                        <h6>Choose a password</h6>
                        <p>Choose a secure password</p>
                    </div>
                    <div>
                        <div></div>
                        <i class="fa fa-circle" style={{color:"blue"}}></i>
                        <h6>invite your team</h6>
                        <p>Start collaborating</p>
                    </div>
                    <div>
                        <i class="fa fa" style={{color:"blue"}}></i>
                        <h6>Upload school's document</h6>
                        <p>For account verification</p>
                    </div>
                    </div>
        </div> 
    </div>
   
    )
}
