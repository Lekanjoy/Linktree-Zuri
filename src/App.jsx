import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Button from "./components/Button";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import Contacts from "./components/Contacts";
import Home from "./components/Home";


function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    
    </>
  );
}

export default App;
