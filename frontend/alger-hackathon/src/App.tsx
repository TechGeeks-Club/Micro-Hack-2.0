import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Navbar from "./myComponents/Navbar";
import Tasks from "./pages/Tasks/Tasks";
import { useAuth } from "./contexts/AuthContext";

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <div className="flex flex-col justify-between bg-[#F1F1F1]">
        <Navbar />
        <div>
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
