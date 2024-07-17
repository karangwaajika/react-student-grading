import { Link } from "react-router-dom";
export default function StudentList({ students }) {
  return (
    <div className="student-links">
      {students.length == 0 ? (
        <Link key={0} to="/" className="student-link" style={{color:"red"}}>
          Student not found
        </Link>
      ) : (
        students.map((student, index) => {
          return (
            <Link key={index} to="/" className="student-link">
              {student.name}
            </Link>
          );
        })
      )}
    </div>
  );
}
