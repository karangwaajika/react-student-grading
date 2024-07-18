import "../assets/marks.css";
import MarksNav from "../components/MarksNav";
import { Outlet, useParams } from "react-router-dom";
import StudentList from "../components/StudentList";
import { useState} from "react";
import useAutoCompleteFetchStudents from "../Hooks/useAutoCompleteFetchStudents";

export default function ProvideMarks() {
  const [studentName, setStudentName] = useState("");
  const { students } = useAutoCompleteFetchStudents(studentName);
  const params = useParams()
  const [studentCode, setStudentCode] = useState(params.studentCode)
  const removeStudentList = (studentCode)=>{
    setStudentCode(studentCode)
    setStudentName("")
  }
  return (
    <>
      <h1>Provide Marks {params.studentCode}</h1>
      <div className="marks-header">
        <div className="form-control search-input">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Search student..."
            onChange={(e)=>setStudentName(e.target.value)}
            value={studentName}
          />
          {studentName && <StudentList students={students} removeLinks={removeStudentList}/>}
        </div>
      </div>
      <MarksNav studentCode={studentCode && studentCode} params = {params.studentCode}/>
      <Outlet />
    </>
  );
}
