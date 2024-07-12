import { useState } from "react";
import "../assets/add-subject.css";
import useResponseMessage from "../Hooks/useResponseMessage";
import FlashMessage from "../components/ui/FlashMessage";
import useFetchSubject from "../Hooks/useFetchSubject";
import SubjectForm from "../components/SubjectForm";
import SubjectTable from "../components/SubjectTable";
import EditSubjectModal from "../components/EditSubjectModal";
import DeleteSubjectModal from "../components/DeleteSubjectModal";

export default function AddSubject() {
  const { responseMessage, setResponseMessage, removeMessage } =
    useResponseMessage();
  const [isLoading, setIsLoading] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  //fetch subject from api
  useFetchSubject(
    import.meta.env.VITE_REACT_APP_VIEW_SUBJECTS,
    setResponseMessage,
    setIsLoading,
    setSubjects,
    isUpdated
  );
  // managing update modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowToEditIndex, setRowToEditIndex] = useState(null);
  const handleRowToEdit = (index) => {
    setRowToEditIndex(index);
    setIsModalOpen(true);
  };

  // managing delete modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [rowToDeleteIndex, setRowToDeleteIndex] = useState(null);
  const handleRowToDelete = (index) => {
    setRowToDeleteIndex(index);
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <h1>Add subject</h1>
      {responseMessage && (
        <FlashMessage
          message={responseMessage.message}
          success={responseMessage.success}
          removeMessage={removeMessage}
        />
      )}
      <div className="subject-section">
        {isLoading && (
          <div className="loader">
            <img src="../images/giphy-1.webp" width={100} height={100} />
          </div>
        )}
        <SubjectForm
          setResponseMessage={setResponseMessage}
          setSubjects={setSubjects}
          setIsLoading={setIsLoading}
        />
        <SubjectTable
          subjects={subjects}
          openModal={() => setIsModalOpen(true)}
          rowToEdit={handleRowToEdit}
          rowToDelete={handleRowToDelete}
        />
      </div>
      {isModalOpen && (
        <EditSubjectModal
          closeModal={() => setIsModalOpen(false)}
          subjectToEdit={rowToEditIndex >= 0 && subjects[rowToEditIndex]}
          setIsUpdated={setIsUpdated}
          setResponseMessage={setResponseMessage}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteSubjectModal
          closeModal={() => setIsDeleteModalOpen(false)}
          subjectToDelete={rowToDeleteIndex >= 0 && subjects[rowToDeleteIndex]}
          setIsUpdated={setIsUpdated}
          setResponseMessage={setResponseMessage}
        />
      )}
    </>
  );
}
