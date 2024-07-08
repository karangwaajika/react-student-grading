import { Link } from "react-router-dom";
export default function Main() {
  return (
    <>
      <div className="header">
        <h1>Tasks to cover</h1>
      </div>
      <div className="content">
        <div className="card">
          <Link key="card-1" to="">
            <h3>Add Subject</h3>
          </Link>
        </div>
        <div className="card">
          <Link key="card-2" to="">
            <h3>Add Subject</h3>
          </Link>
        </div>
        <div className="card">
          <Link key="card-3" to="">
            <h3>Add Subject</h3>
          </Link>
        </div>
        <div className="card">
          <Link key="card-4" to="">
            <h3>Add Subject</h3>
          </Link>
        </div>
        <div className="card">
          <Link key="card-5" to="">
            <h3>Add Subject</h3>
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
