import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Signup from "./components/Authentication/Signup";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import CoursePage from "./components/CoursePage";
import Dsacourse from "./components/courses/Dsacourse";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dsacourse" element={<Dsacourse />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </>
  );
}

export default App;
