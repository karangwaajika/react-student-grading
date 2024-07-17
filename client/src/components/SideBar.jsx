import { NavLink } from "react-router-dom";
export default function SideBar() {
  return (
    <nav className="left-nav">
      <ul className="left-ul">
        <li>
          <div className="fontawesome">
            <i className="fa fa-home "></i>
          </div>
          <NavLink to="/dashboard" className="link">
            Home
          </NavLink>
        </li>
        <li>
          <div className="fontawesome">
            <i className="fa-solid fa-chalkboard"></i>
          </div>
          <NavLink to="/dashboard/add_subject" className="link">
            Add subject
          </NavLink>
        </li>
        <li>
          <div>
            <i className="fa fa-users "></i>
          </div>
          <NavLink to="/dashboard/add_student" className="link">
            Add student
          </NavLink>
        </li>
        <li>
          <div>
            <i className="fa fa-folder-o "></i>
          </div>
          <NavLink to="/dashboard/view_student" className="link">
            View student
          </NavLink>
        </li>
        <li>
          <div>
            <i className="fa-regular fa-bell"></i>
          </div>
          <NavLink to="/dashboard/provide_marks" className="link">
            Give Marks
          </NavLink>
        </li>
        <li>
          <div>
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <NavLink to="/dashboard/view_marks" className="link">
            View Marks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
