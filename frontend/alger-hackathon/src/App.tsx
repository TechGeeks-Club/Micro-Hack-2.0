import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Navbar from "./myComponents/Navbar";
import Tasks from "./pages/Tasks/Tasks";

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-[100vh] position: 'relative', justify-between">
        <Navbar />
        <div className="mt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
