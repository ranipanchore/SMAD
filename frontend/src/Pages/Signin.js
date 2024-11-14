import Form from 'react-bootstrap/Form';

import { Link } from "react-router-dom";

function Signin(){
    return(
    //   <div className='signin-component'>
    //      <div class="" >
    //         <h1 class="">Welcome, Log into you account</h1>
    //         <div class='' className='form'>
    //             <h6>It is our great pleasure to have <br/> you on board</h6>

    //             <div className="">
    //             <br/>
    //             <form>
    //                 <input  type="text" placeholder='Enter the name of school'/><br/><br/>
    //                 <input  type="text" placeholder='Enter password'/><br/><br/>
    //                 {/* <input value='Login' type='submit'/> */}
    //                 <div className='primary'><Link to={"/Dashboard"} className='redirect_signup'>Login</Link></div>
    //                 </form>
    //             <p className='signup_redirect'>Already have an account?  
    //                 <Link to={"Signup"} className='redirect_signup'>  Signup</Link>
    //                </p>
    //             </div>   
    //         </div>
    //    </div>
    //   </div>
    <div  class='bg-stone-50 text-center min-h-screen'>

    <h1 class="mb-12 mt-28 text-slate-600">Welcome, Log into you account</h1>
    <div class='  text-center  flex items-center justify-center'>
           
        <div class='py-14 px-36 border text-slate-400 bg-white'>
        
            <div class="p-2">
                <h6 class='mb-4'>It is our great pleasure to have <br/> you on board</h6>
                <div className='mt-2'>
                    <input placeholder='Enter the name of school' class="border p-2 w-64 text-sm rounded-md font-medium"/>
                </div> 
                <div className='mt-3'>
                    <input placeholder='Enter password' class="border p-2 w-64 text-sm rounded-md font-medium"/>
                </div>

                <div class='mt-3'>
                <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {/* Login */}
                <a href="/Maindash" className="font-semibold leading-6 text-white text-indigo-600 no-underline hover:text-indigo-500">
                Login
                </a>
              </button>
                </div> 
                <p className="mt-2 text-sm text-center text-gray-500 ">
                Already have an account?{' '}
                <a href="/Signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Signup
                </a>
          </p>  

            </div>
        </div>

    </div>
    </div>
    )
}

export default Signin;