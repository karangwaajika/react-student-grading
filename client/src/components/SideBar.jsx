import { Link, NavLink } from "react-router-dom";
export default function SideBar() {
  return (
    <nav>
      <ul>
        <li>
          <div>
            <i className="fa fa-home "></i>
          </div>
          <Link to="/dashboard/home" className="link">
            Home
          </Link>
        </li>
        <li>
          <div>
            <i className="fa-solid fa-chalkboard"></i>
          </div>
          <Link to="/dashboard/add_subject" className="link">
            Add subject
          </Link>
        </li>
        <li>
          <div>
            <i className="fa fa-users "></i>
          </div>
          <Link to="/dashboard/add_student" className="link">
            Add student
          </Link>
        </li>
        <li>
          <div>
            <i className="fa fa-folder-o "></i>
          </div>
          <Link to="/dashboard/view_student" className="link">
            View student
          </Link>
        </li>
        <li>
          <div>
            <i className="fa-regular fa-bell"></i>
          </div>{" "}
          <Link to="/dashboard/provide_marks" className="link">
            Give Marks
          </Link>
        </li>
        <li>
          <div>
            <i className="fa-solid fa-location-dot"></i>
          </div>{" "}
          <Link to="/dashboard/view_marks" className="link">
            View Marks
          </Link>
        </li>
      </ul>
    </nav>
  );
}
