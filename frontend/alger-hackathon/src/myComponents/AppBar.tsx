import React from "react";
import Logo from "../assets/Logo.png";
import profile from "../assets/profile.svg";
import todo from "../assets/task-square.svg";
import home from "../assets/home-2.svg";
import { Link } from "react-router-dom";

export default function AppBar() {
  return (
    <>
      <div className="fixed bottom-0 w-[100%]">
        <div className="flex items-center justify-evenly w-[100%] h-[70px] bg-gradient-to-t from-[#F1F1F1] to-lightbackground">
          <div className="w-[37px] h-[37px]">
            <img src={Logo} alt="home" />
          </div>
          <div className="w-[100%] h-[55px] bg-[#F1F1F1] rounded-3xl flex justify-evenly items-center">
            <Link to="/tasks">
              {" "}
              <img className="h-[40px] w-[40px]" src={todo} alt="to do list" />
            </Link>
            <Link to="/">
              <img className="h-[32px] w-[32px]" src={home} alt="home" />
            </Link>
            <Link to="/profile">
              <img className="h-[32px] w-[32px]" src={profile} alt="profile" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
