import React from 'react';
import { Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
// import './Sidebar.css';
import '../assets/styles/Sidebar.css'
import { FaHome, FaChalkboardTeacher, FaUserGraduate, FaFileInvoice, FaCog, FaFileAlt } from 'react-icons/fa';
import { BsBadge3dFill } from "react-icons/bs";
import { SiTinyletter } from 'react-icons/si';
type LogoutProps = {
  onLogout: () => void;
};

const Sidebar: React.FC<LogoutProps> = ({ onLogout }) => {
  
// const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
 
    const handlLogout = () => {
      onLogout()
      // console.log("handlogout", onLogout())
      navigate('/Login')
    };
  
  
 
  return (
    <div className="sidebar">
      <div className='flex justify-content-center'>
        
         <div className='logo'>
         <div className="p-4 text-6xl text-cyan-400"><SiTinyletter /></div>
        </div> 
      </div>
    
      <h4 className='mt-2 mb-2 text-center'>Udemy School</h4>
      <hr></hr>
      <nav>
        <Link className={location.pathname === '/dashboard' ? 'active' : ''} to="/dashboard">
        <FaHome style={{ marginRight: '8px' }} /> Dashboard
        </Link>
        <Link className={location.pathname === '/teacher' ? 'active' : ''} to="/teacher">
        <FaChalkboardTeacher style={{ marginRight: '8px' }} /> Teachers
        </Link>
        <Link className={location.pathname === '/student' ? 'active' : ''} to="/student">
        <FaUserGraduate style={{ marginRight: '8px' }} /> Student/ Classes
        </Link>
        <Link className={location.pathname === '/billing' ? 'active' : ''} to="/billing">
        <FaFileInvoice style={{ marginRight: '8px' }} /> Billing
        </Link>
        <Link className={location.pathname === '/profile' ? 'active' : ''} to="/profile">
        <FaCog style={{ marginRight: '8px' }} /> Settings and Profile
        </Link>
        <Link className={location.pathname === '/exam' ? 'active' : ''} to="/exam">
        <FaFileAlt style={{ marginRight: '8px' }} /> Exams
        </Link>
        <Link   to="/Login" onClick={handlLogout}>Logout</Link>
      </nav>
      
      <nav className='down-nav'>
        <Link className={location.pathname === '/teacher' ? 'active' : ''} to="/teacher">
        <FaChalkboardTeacher style={{ marginRight: '8px' }} /> Features <BsBadge3dFill style={{marginLeft: '4rem' }}/>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
