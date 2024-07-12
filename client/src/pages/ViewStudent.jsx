import StudentTable from "../components/StudentTable";
import useFetchStudents from "../Hooks/useFetchStudents";
import FlashMessage from "../components/ui/FlashMessage";

export default function ViewStudent() {
  const { isLoading, responseMessage, students, removeMessage } =
    useFetchStudents();
  return (
    <>
      <h1>View student</h1>
      {responseMessage && (
        <FlashMessage
          message={responseMessage.message}
          success={responseMessage.success}
          removeMessage={removeMessage}
        />
      )}
      <div className="students-section">
        {isLoading && (
          <div className="loader">
            <img src="../images/giphy-1.webp" width={100} height={100} />
          </div>
        )}
        <StudentTable students={students} />
      </div>
    </>
  );
}
