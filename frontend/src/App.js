import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {  BrowserRouter , Routes, Route } from "react-router-dom";
import Signup, { ChoosePassword, ChooseStaffs } from './Pages/Signup';
import Signin from './Pages/Signin';
import Dashboard from './Pages/Dashboard/Pages/Dashboard';
import Teacher from './Pages/Dashboard/Pages/Teacher/Teacher';
import Students from './Pages/Dashboard/Pages/Students/Students';
import Sidebar from './Pages/Dashboard/Components/Sidebar';

function App() {
  return (
    <div className="App" >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>  
        <Route path='/Choose-Password' element={<ChoosePassword/>}></Route> 
        <Route path='/Choose-Staffs' element={<ChooseStaffs/>}></Route>  
        <Route path='/Dashboard' element={<Dashboard/>}></Route>  
        <Route path='/Teachers' element={<Teacher/>}></Route>
        <Route path='/Students' element={<Students/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
