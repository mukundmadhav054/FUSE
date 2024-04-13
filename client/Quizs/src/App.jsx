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
import Lenis from '@studio-freight/lenis'

function App() {
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
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
