import { useParams } from "react-router-dom";
import { useState } from "react";
import useRetrieveSubjects from "../Hooks/useRetrieveSubjects";
import FlashMessage from "./ui/FlashMessage";
import useResponseMessage from "../Hooks/useResponseMessage";
import InputField from "./ui/InputField";
import Button from "./ui/Button";
import axios from "axios";
import MarksResult from "./MarksResult";
import useFetchStudentMarks from "../Hooks/useFetchStudentMarks";

export default function SubjectMarks() {
  const params = useParams();
  const { subjects } = useRetrieveSubjects();
  const [isSubmitLoading, setSubmitLoading] = useState(false);
  const [isMarksInserted, setIsMarksInserted] = useState(false);
  const {studentMarks} = useFetchStudentMarks(isMarksInserted);
  const {
    responseMessage: submitMessage,
    removeMessage: removeSubmitMessage,
    setResponseMessage: setSubmitMessage,
  } = useResponseMessage();
  const [form, setForm] = useState({
    marks: "",
    subjectId: "",
    studentCode: params.studentCode,
    trimester: "",
  });
  //handle form field value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    axios
      .post(import.meta.env.VITE_REACT_APP_ADD_MARKS, form)
      .then((res) => {
        if(res.data.success){
          setIsMarksInserted(prevState => !prevState)
        }
        setSubmitMessage({
          success: res.data.success,
          message: res.data.message,
        });
      })
      .catch((e) => {
        setSubmitMessage({
          success: false,
          message: e.message,
        });
      })
      .finally(() => {
        setSubmitLoading(false);
      });
  };
  return (
    <div className="subject-marks-section">
      {submitMessage && (
        <FlashMessage
          message={submitMessage.message}
          success={submitMessage.success}
          removeMessage={removeSubmitMessage}
        />
      )}
      <div className="subject-marks-form">
        {isSubmitLoading && (
          <div className="loader">
            <img src="/images/giphy-1.webp" width={100} height={100} />
          </div>
        )}
        <form onSubmit={submitForm}>
          <div className="form-control">
            <select
              name="subjectId"
              value={form.subjectId}
              onChange={handleChange}
              id="subjectId"
              className=""
            >
              <option value="">Select favorite subject</option>
              {subjects &&
                subjects.map((subj, index) => {
                  return (
                    <option key={index} value={subj._id}>
                      {subj.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="form-control">
            <InputField
              type="text"
              name="marks"
              id="marks"
              handleChange={handleChange}
              placeholder="%"
              label="Marks"
              value={form.marks}
            />
          </div>
          <div className="form-control">
            <select
              name="trimester"
              value={form.trimester}
              onChange={handleChange}
              id="trimester"
              className=""
            >
              <option value="">Select Trimester</option>
              <option value="1">First</option>
              <option value="2">Second</option>
              <option value="3">Third</option>
              
            </select>
          </div>
          <div className="form-control">
            <Button text="Submit" />
          </div>
        </form>
      </div>
       {studentMarks.length > 0 ? <MarksResult marks = {studentMarks}/>: ''}
    </div>
  );
}
