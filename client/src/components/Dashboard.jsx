import axios from "axios";
import "../assets/dashboard.css";
import Main from "./Main";
import Nav from "./Nav";
import Profile from "./Profile";
import SideBar from "./SideBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3001/protected", {
        headers: {
          Authorization: token,
        },
      })
      .then()
      .catch((err) => {
        navigate("/");
      });
  }, []);
  return (
    <div className="dashboard-container">
      <aside className="left-side">
        <Profile />
        <SideBar />
      </aside>
      <aside className="right-side">
        <Nav />
        <Main />
      </aside>
    </div>
  );
}
