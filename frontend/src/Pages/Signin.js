import Form from 'react-bootstrap/Form';
import "./css/Signin.css";
import { Link } from "react-router-dom";
function Signin(){
    return(
      <div className='signin-component'>
         <div class="" >
            <h1 class="">Welcome, Log into you account</h1>
            <div class='' className='form'>
                <h6>It is our great pleasure to have <br/> you on board</h6>

                <div className="">
                <br/>
                <form>
                    <input  type="text" placeholder='Enter the name of school'/><br/><br/>
                    <input  type="text" placeholder='Enter password'/><br/><br/>
                    <input value='Login' type='submit'/>
                </form>
                    {/* <p className='singup_redirect'>Already have an account?  */}
             
                    <Link to="/signup">     sign up</Link>
                        {/* </p> */}
                </div>   
            </div>
       </div>
      </div>
        
    )
}

export default Signin;