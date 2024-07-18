import "../assets/marks.css";
import MarksNav from "../components/MarksNav";
import { Outlet, useParams } from "react-router-dom";
import StudentList from "../components/StudentList";
import { useState} from "react";
import useAutoCompleteFetchStudents from "../Hooks/useAutoCompleteFetchStudents";
import useFetchStudent from "../Hooks/useFetchStudent";
import FlashMessage from "../components/ui/FlashMessage";
import loadingPicture from '../../public/images/giphy-1.webp'

export default function ProvideMarks() {
  const [studentName, setStudentName] = useState("");
  const { students } = useAutoCompleteFetchStudents(studentName);
  const params = useParams()
  const [studentCode, setStudentCode] = useState(params.studentCode)
  const removeStudentList = (studentCode)=>{
    setStudentCode(studentCode)
    setStudentName("")
  }
  const {student, isLoading, responseMessage, removeMessage } = useFetchStudent(studentCode && studentCode)
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
        {student && <div className="student-info">{student.name} [<b>{student.code}</b>]</div>}
      </div>
      {responseMessage && (
        <FlashMessage
          message={responseMessage.message}
          success={responseMessage.success}
          removeMessage={removeMessage}
        />
      )}
      
      {isLoading && (
          <div className="loader">
            <img src={loadingPicture} width={100} height={100} />
          </div>
        )}
      <MarksNav studentCode={studentCode && studentCode} params = {params.studentCode}/>
      <Outlet />
    </>
  );
}
