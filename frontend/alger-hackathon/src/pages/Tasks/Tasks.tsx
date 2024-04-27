import AppBar from "@/myComponents/AppBar";
import "./Tasks.css";
import { CiSearch } from "react-icons/ci";
import ToDo from "@/myComponents/ToDo";
import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";


export default function Tasks() {
  const { accessToken } = useContext(AuthContext);

  const [tasksData, setTasks] = useState<Task[]>([]);

  const eventID = 1200;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/task/my_tasks/${eventID}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${accessToken}`,
          },
        });
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [eventID]);

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
        <div className="w-[100%] h-[1px] bg-black opacity-10 mb-3"></div>
        <div className="flex flex-col w-[100%] justify-center">
          <header className="main-header">
            <span className="ml-3">All results - No filters</span>
            <div className="search-space">
              <label htmlFor="task-search">
                <input
                  type="search"
                  name="tasks-search"
                  className="w-[100%] rounded-3xl"
                  id=""
                />
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
          <div className="overflow-x-auto h-[420px] bg-lightbackground p-4 rounded-lg mt-3">
          
          </div>
        </div>
        <AppBar />
      </div>
    </>
  );
}
