import { useState } from "react";
import "../assets/add-subject.css";
import useResponseMessage from "../Hooks/useResponseMessage";
import FlashMessage from "../components/ui/FlashMessage";
import useFetchSubject from "../Hooks/useFetchSubject";
import SubjectForm from "../components/SubjectForm";
import SubjectTable from "../components/SubjectTable";

export default function AddSubject() {
  const { responseMessage, setResponseMessage, removeMessage } =
    useResponseMessage();
  const [isLoading, setIsLoading] = useState(false);
  const [subjects, setSubjects] = useState([]);

  //fetch subject from api
  useFetchSubject(
    import.meta.env.VITE_REACT_APP_VIEW_SUBJECTS,
    setResponseMessage,
    setIsLoading,
    setSubjects
  );

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
        <SubjectTable subjects={subjects} />
      </div>
    </>
  );
}
