
import { Link } from "react-router-dom";
import "../assets/styles/Signup.css"

const Register = () => {
    return (
        <div  className='text-center bg-stone-50'>

    <h1 className="mt-4 mb-8 text-slate-600">Welcome, create your school account</h1>
    <div className='flex items-center justify-center text-center '>
           
        <div className='bg-white border py-14 px-36 text-slate-400'>
        
            <div className="p-2">
                <h6 className='mb-4'>It is our great pleasure to have <br/> you on board</h6>
                <div className='mt-2'>
                    <input placeholder='Enter the name of admin' className="w-64 p-2 text-sm font-medium border rounded-md"/>
                </div> 
                <div className='mt-3'>
                    <input placeholder='Enter the name of school' className="w-64 p-2 text-sm font-medium border rounded-md"/>
                </div>
                <div className='mt-3'>
                    <input placeholder='Enter the school email' className="w-64 p-2 text-sm font-medium border rounded-md"/>
                </div>
                <div className='mt-3'>
                <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Next
              </button>
                </div> 
                <p className="mt-2 text-sm text-center text-gray-500 ">
                Already have an account?{' '}
                <Link to="/Login" className="font-semibold leading-6 text-indigo-600 no-underline hover:text-indigo-500">Sign In</Link>
          </p>  

            </div>
        </div>

    </div>
    </div>
    )
  };
  
  export default Register;






