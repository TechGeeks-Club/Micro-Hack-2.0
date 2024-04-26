import AppBar from "@/myComponents/AppBar";
import "./Tasks.css";
// import React, { Component } from "react";
import { CiSearch } from "react-icons/ci";


export default function Tasks() {
  return (
    <>
      <div className="huge-container">
        <header>
          <div className="upper-header">
            Welcome Back
            <span className="u-inside">John Doe - Dev team</span>
          </div>
          <div className="lower-header">
            <span className="l-inside">Current Project - Project 0018</span>
            Tasks Section
          </div>
        </header>

        <div className="main-container">
          <header className="main-header">
            <span>All results - No filters</span>
            <div className="search-space">
              <label htmlFor="task-search">
                <input type="search" name="tasks-search" className="w-[100%] rounded-3xl" id="" />
              </label>
              <div className="icon-abs">
                <div className="icon-container">
                  <svg
                    className="sort-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M3 6h18M6 12h12m-9 6h6"
                    />
                  </svg>
                  <CiSearch className="search-icon" />
                </div>
              </div>
            </div>
          </header>
          
        </div>
       
      </div>
       <AppBar />
    </>
  );
}
