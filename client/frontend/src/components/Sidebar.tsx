import React from 'react';
import { Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
// import './Sidebar.css';
import '../assets/styles/Sidebar.css'
type LogoutProps = {
  onLogout: () => void;
};

const Sidebar: React.FC<LogoutProps> = ({ onLogout }) => {
  const navigate = useNavigate();
// const Sidebar = () => {
  const location = useLocation();
 
    const handlLogout = () => {
      onLogout()
      console.log("handlogout")
      navigate('/Login')
    };
  
  
 
  return (
    <div className="sidebar">
      <h2>Udemy School</h2>
      <nav>
        <Link className={location.pathname === '/' ? 'active' : ''} to="/">Dashboard</Link>
        <Link className={location.pathname === '/teacher' ? 'active' : ''} to="/teacher">Teacher</Link>
        <Link className={location.pathname === '/student-classes' ? 'active' : ''} to="/student-classes">Student/Classes</Link>
        <Link className={location.pathname === '/billing' ? 'active' : ''} to="/billing">Billing</Link>
        <Link   to="/Login" onClick={handlLogout}>Logout</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
