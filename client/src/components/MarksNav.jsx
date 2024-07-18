import { NavLink, Link } from "react-router-dom";
export default function MarksNav({ studentCode, params }) {
  const disableLink = (e) => {
    e.preventDefault();
  };
  return (
    <ul className="marks-nav">
      <li className="nav-item">
        <NavLink
          key={0}
          to={`/dashboard/provide_marks/${studentCode}/subject-marks`}
          onClick={params == undefined ? disableLink : ""}
          className={`nav-link ${params == undefined ? "active disabled" : ""}`}
        >
          Subject Marks
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          key={1}
          to={`/dashboard/provide_marks/${studentCode}/behavior-marks`}
          onClick={params == undefined ? disableLink : ""}
          className={`nav-link ${params == undefined ? "disabled" : ""}`}
        >
          Behavior Marks
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          key={2}
          to={`/dashboard/provide_marks/${studentCode}/sport-marks`}
          onClick={params == undefined ? disableLink : ""}
          className={`nav-link ${params == undefined ? "disabled" : ""}`}
        >
          Sport Marks
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          key={3}
          to={`/dashboard/provide_marks/${studentCode}/social-marks`}
          onClick={params == undefined ? disableLink : ""}
          className={`nav-link ${params == undefined ? "disabled" : ""}`}
        >
          Social Interaction
        </NavLink>
      </li>
    </ul>
  );
}
