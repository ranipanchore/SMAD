import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import './Sidebar.css';
import '../assets/styles/Sidebar.css'

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <nav>
        <Link className={location.pathname === '/' ? 'active' : ''} to="/">Dashboard</Link>
        <Link className={location.pathname === '/teacher' ? 'active' : ''} to="/teacher">Teacher</Link>
        <Link className={location.pathname === '/student-classes' ? 'active' : ''} to="/student-classes">Student/Classes</Link>
        <Link className={location.pathname === '/billing' ? 'active' : ''} to="/billing">Billing</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
