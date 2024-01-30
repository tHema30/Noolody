// import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/SignUp";


import Header from "./components/Header";
import Footer from "./components/Footer" 

import Text from './components/Text';
import Contact from './components/Contact';
import About from "./components/About";
import Features from "./components/Features";
import Home from "./components/Home";
import Profile from "./components/Profile";



import './assets/css/bootstrap.min.css';

import './App.css';
import FormBook from "./components/FormBook";
import TailorRegister from "./components/TailorRegister";



function App() {
  return (
     <div>
      <Header/>
    <Routes>
    <Route path="/" element={<Text/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/features" element={<Features/>} />

    <Route path="/formbook" element={<FormBook/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/tailorregister" element={<TailorRegister/>} />


    </Routes>
    <Footer/>

  </div>
  
  );
}

export default App;

