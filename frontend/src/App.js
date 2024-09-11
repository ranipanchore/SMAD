import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {  BrowserRouter , Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';

function App() {
  return (
  
   
    
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>        
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
