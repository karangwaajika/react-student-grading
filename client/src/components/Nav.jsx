import { Link, Outlet } from "react-router-dom";
import { UserContent } from "../pages/Dashboard";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const user = useContext(UserContent);
  const navigate = useNavigate();
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay = "";
  if (hours < 12) {
    timeOfDay = "Good morning";
  } else if (hours >= 12 && hours < 18) {
    timeOfDay = "Good afternoon";
  } else {
    timeOfDay = "Good evening";
  }
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <nav>
      <p>
        <b>{timeOfDay}</b>! Mr {user.fullname && user.fullname}
      </p>
      <ul className="links">
        <li className="link">
          {" "}
          <Link key="link1" to="/dashboard/home">
            Dashboard
          </Link>
        </li>
        <li className="link">
          <Link key="link1" to="/dashboard/view_student">
            Students
          </Link>
        </li>
        <li className="link">
          <Link key="link1" to="/dashboard/view_marks">
            Grades
          </Link>
        </li>
      </ul>
      <div className="profile">
        <div className="name">
          <h5>{user.email && user.email}</h5>
        </div>
        <p key="out" onClick={logout}>
          <i className="fa fa-sign-out"></i>
        </p>
      </div>
    </nav>
  );
}