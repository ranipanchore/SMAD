import logo from "../../../assets/ss1.png";
import styles from "./css/Dashboard.css";
import { Link } from "react-router-dom";
import Students from "./Students/Students";
import { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Maindash from "./Dash/Maindash";
import Tophead from "../Components/Tophead";
import {  BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Teacher, { TeachTop } from "./Teacher/Teacher";

function Dashboard() {
  return (
    
    <Maindash/>
  );
}

export default Dashboard;
