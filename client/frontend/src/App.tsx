import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Teacher  from './pages/Teacher';
import StudentClasses from './pages/StudentClasses';
import Billing from './pages/Billing';
import './App.css';
import Login from './pages/Login';
import { Container, Navbar, Nav, Button, Card } from 'react-bootstrap';
import Register from './pages/Register';
import ChoosePassword from './pages/ChoosePassword';
import ChooseStaffs from './pages/ChooseStaffs';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated ? (
        <div className="app">
          <Sidebar onLogout={() => setIsAuthenticated(false)} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/teacher" element={<Teacher />} />
              <Route path="/student-classes" element={<StudentClasses />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/choose-password" element={<ChoosePassword />} />
          <Route path="/choose-staff" element={<ChooseStaffs />}/>
    
          <Route path="/Login" element={<Login onLogin={() => setIsAuthenticated(true)} />} /> 
          {/*<Route path="/login" element={!isAuthenticated ? <Login onLogin={() => setIsAuthenticated(true)} /> : <Sidebar onLogout={() => setIsAuthenticated(false)} /> }/>*/}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
