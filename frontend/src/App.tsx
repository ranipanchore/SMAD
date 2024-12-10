import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';

// import  {Header}  from './components/Header';
import  Header  from './components/Header';
import Dashboard from './Pages/Dashboard';
import Teacher from './Pages/Teacher';
import Student from './Pages/Student';
import Exam from './Pages/Exam';
import Profile from './Pages/Profile';
import Billing from './Pages/Billing';
import Register from './Pages/Register';
import ChoosePassword from './Pages/ChoosePassword';
import ChooseStaffs from './Pages/ChooseStaffs';
import Login from './Pages/Login';
;

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
