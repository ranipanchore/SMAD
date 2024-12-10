import React, { useState } from 'react';
import "../assets/styles/Login.css"
import { Link, useLocation } from 'react-router-dom';


type LoginProps = {
  onLogin: () => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();

  const handleLogin = () => {
    onLogin();
    // if (username === 'admin' && password === 'password') {
    //   onLogin();
    // } else {
    //   alert('Invalid credentials');
    // }
  };

  return (
     <div  className='text-center bg-stone-50'>
      
     <h1 className="mb-12 mt-28 text-slate-600">Welcome, Log into you account</h1>
     <div className='flex items-center justify-center text-center '>
            
         <div className='bg-white border py-14 px-36 text-slate-400'>
         
             <div className="p-2">
                 <h6 className='mb-4'>It is our great pleasure to have <br/> you on board</h6>
                 <div className='mt-2'>
                     <input placeholder='Enter the name of school' className="w-64 p-2 border rounded-md"  type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                 </div> 
                 <div className='mt-3'>
                  
                     <input placeholder='Enter password' className="w-64 p-2 border rounded-md"  type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                 </div>
 
                 <div className='mt-3'>
                 <Link to="/dashboard" className="flex w-full justify-center no-underline rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleLogin}>Login</Link>
                
                 </div> 
                 <p className="mt-2 text-sm text-center text-gray-500 ">
                 Already have an account?{' '}  
                 <Link to="/register" className="font-semibold leading-6 text-indigo-600 no-underline hover:text-indigo-500">Sign up</Link>
                 
           </p>  
 
             </div>
         </div>
 
     </div>
     </div>
  );
};

export default Login;
