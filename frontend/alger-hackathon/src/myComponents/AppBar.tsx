import React from "react";
import Logo from "../assets/Logo.png";
import profile from "../assets/profile.svg";
import todo from "../assets/task-square.svg";
import home from "../assets/home-2.svg";

export default function AppBar() {
  return (
    <div className="flex items-center justify-evenly w-[100%] h-[70px] bg-gradient-to-t from-[#F1F1F1] to-[white]">
      <div className="w-[37px] h-[37px]">
        <img src={Logo} alt="home" />
      </div>
      <div className="w-[237px] h-[55px] bg-[#F1F1F1] rounded-3xl flex justify-evenly items-center">
        <img className="h-[40px] w-[40px]" src={todo} alt="to do list" />
        <img className="h-[32px] w-[32px]" src={home} alt="home" />
        <img className="h-[32px] w-[32px]" src={profile} alt="profile" />
      </div>
    </div>
  );
}
