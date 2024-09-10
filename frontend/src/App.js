import logo from './logo.svg';
import './App.css';
import {  BrowserRouter , Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';

function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Signin/>}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/signup" element= {<Signup/>} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
