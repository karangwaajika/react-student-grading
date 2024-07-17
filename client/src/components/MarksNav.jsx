import { NavLink, Link } from "react-router-dom";
export default function MarksNav() {
  return (
    <ul className="marks-nav">
      <li className="nav-item">
        <NavLink key={0} to="/dashboard/provide_marks/subject-marks" className="nav-link">
          Subject Marks
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink key={1} to="/dashboard/provide_marks/behavior-marks" className="nav-link">
          Behavior Marks
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink key={2} to="/dashboard/provide_marks/sport-marks" className="nav-link">
          Sport Marks
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink key={3} to="/dashboard/provide_marks/social-marks" className="nav-link">
          Social Interaction
        </NavLink>
      </li>
    </ul>
  );
}
