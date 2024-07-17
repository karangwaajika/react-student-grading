import StudentTable from "../components/StudentTable";
import useFetchStudents from "../Hooks/useFetchStudents";
import FlashMessage from "../components/ui/FlashMessage";
import { useState } from "react";
import EditStudentModal from "../components/EditStudentModal";
import useRetrieveSubjects from "../Hooks/useRetrieveSubjects";
import DeleteStudentModal from "../components/DeleteStudentModal";

export default function ViewStudent() {
  const [isUpdated, setIsUpdated] = useState(false);
  const {
    isLoading,
    responseMessage,
    students,
    removeMessage,
    setResponseMessage,
  } = useFetchStudents(isUpdated);

  const { subjects } = useRetrieveSubjects();

  // managing update modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowToEditIndex, setRowToEditIndex] = useState(null);
  const getRowToEditIndex = (index) => {
    setRowToEditIndex(index);
    setIsModalOpen(true);
  };
  // managing delete modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [rowToDeleteIndex, setRowToDeleteIndex] = useState(null);
  const getRowToDeleteIndex = (index) => {
    setRowToDeleteIndex(index);
    setIsDeleteModalOpen(true);
  };
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
        <StudentTable
          students={students}
          getRowToEditIndex={getRowToEditIndex}
          getRowToDeleteIndex={getRowToDeleteIndex}
        />
      </div>
      {isModalOpen && (
        <EditStudentModal
          closeModal={() => setIsModalOpen(false)}
          studentToEdit={rowToEditIndex >= 0 && students[rowToEditIndex]}
          setIsUpdated={setIsUpdated}
          subjects={subjects}
          setResponseMessage={setResponseMessage}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteStudentModal
          closeModal={() => setIsDeleteModalOpen(false)}
          studentToDelete={rowToDeleteIndex >= 0 && students[rowToDeleteIndex]}
          setIsUpdated={setIsUpdated}
          setResponseMessage={setResponseMessage}
        />
      )}
    </>
  );
}
