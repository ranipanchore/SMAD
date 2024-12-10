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
// import  {Header}  from './components/Header';
import  Header  from './components/Header';
import Student from './pages/Student';
import Exam from './pages/Exam';
import Profile from './pages/Profile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated ? (
        <div className="app">
          <Sidebar onLogout={() => setIsAuthenticated(false)} />
          {/* <Sidebar /> */}
          <div className="content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard onLogout={()=>setIsAuthenticated(false)}/>} />
              <Route path="/teacher" element={<Teacher onLogout={() => setIsAuthenticated(false)}/>} />
              <Route path="/student" element={<Student/>} />
              <Route path="/exam" element={<Exam/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/billing" element={<Billing/>} />
              <Route path="/header" element={<Header  onLogout={() => setIsAuthenticated(true)} />} />
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
          <Route path="*" element={<Navigate to="/Login" replace />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
