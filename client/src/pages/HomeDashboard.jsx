import { Link } from "react-router-dom";
export default function Main() {
  return (
    <>
      <div className="header">
        <h1>Tasks to cover</h1>
      </div>
      <div className="content">
        <div className="card">
          <Link key="card-1" to="/dashboard/add_subject">
            <h3>Add Subject</h3>
          </Link>
        </div>
        <div className="card">
          <Link key="card-2" to="/dashboard/add_student">
            <h3>Add Student</h3>
          </Link>
        </div>
        <div className="card">
          <Link key="card-3" to="/dashboard/view_student">
            <h3>View Student</h3>
          </Link>
        </div>
        <div className="card">
          <Link key="card-4" to="/dashboard/provide_marks">
            <h3>Give Marks</h3>
          </Link>
        </div>
        <div className="card">
          <Link key="card-5" to="/dashboard/view_marks">
            <h3>View Marks</h3>
          </Link>
        </div>
        <div className="card">
          <Link key="card-6" to="">
            <h3>Add Subject</h3>
          </Link>
        </div>
        <div className="card">
          <Link key="card-7" to="">
            <h3>Add Subject</h3>
          </Link>
        </div>
        <div className="card">
          <Link key="card-8" to="">
            <h3>Add Subject</h3>
          </Link>
        </div>
        <div className="card">
          <Link key="card-9" to="">
            <h3>Add Subject</h3>
          </Link>
        </div>
      </div>
    </>
  );
}
