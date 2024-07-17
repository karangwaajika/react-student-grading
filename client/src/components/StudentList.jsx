import { Link } from "react-router-dom";
export default function StudentList({ students, removeLinks }) {
  return (
    <div className="student-links">
      {students.length == 0 ? (
        <Link key={0} to="/dashboard/provide_marks" className="student-link" style={{color:"red"}}>
          Student not found
        </Link>
      ) : (
        students.map((student, index) => {
          return (
            <Link key={index} to={`/dashboard/provide_marks/${student.code}/subject-marks`} onClick={()=>removeLinks(student.code)} className="student-link">
              {student.name}
            </Link>
          );
        })
      )}
    </div>
  );
}
