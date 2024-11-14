import { Link } from "react-router-dom";

const ChooseStaffs = () => {

    return(
    //   <div className='signin-component'>
    //     <div className="createAccount" >
    //         <h1 className="">Udemy school, Choose your staffs</h1>
    //         <div className='' className='form'>
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

        <h1 className="mt-4 mb-8 text-slate-600">Welcome, create your school account</h1>
        <div className='flex items-center justify-center text-center '>
            
            <div className='bg-white border py-14 px-36 text-slate-400'>
            
                <div className="p-2">
                    <h6 className='mb-4'>It is our great pleasure to have <br/> you on board</h6>
                    <div className='mt-2'>
                        <input placeholder='Number of staff' className="w-64 p-2 text-sm font-medium border rounded-md"/>
                    </div> 
                    <div className='mt-3'>
                        <input placeholder='School address' className="w-64 p-2 text-sm font-medium border rounded-md"/>
                    </div>
                    <div className='mt-3'>
                        <Link to="/login"  className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next</Link>
                   
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
                        <i className="fa fa-check-square" style={{color:"blue"}}></i>
                        <h6>Your details</h6>
                        <p>Name and email</p>
                    </div>
                    <div>
                    <i className="fa fa-check-square" style={{color:"blue"}}></i>
                        
                        <h6>Choose a password</h6>
                        <p>Choose a secure password</p>
                    </div>
                    <div>
                        <div></div>
                        <i className="fa fa-circle" style={{color:"blue"}}></i>
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
export default ChooseStaffs;