import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import axios from "axios";
import { useState } from "react";
import useResponseMessage from "../Hooks/useResponseMessage";
import useRetrieveSubjects from "../Hooks/useRetrieveSubjects";
import FlashMessage from "../components/ui/FlashMessage";

export default function AddStudent() {
  const { isLoading, responseMessage, subjects } = useRetrieveSubjects();
  const [isSubmitLoading, setSubmitLoading] = useState(false);
  const {
    responseMessage: submitMessage,
    removeMessage: removeSubmitMessage,
    setResponseMessage: setSubmitMessage,
  } = useResponseMessage();
  const [form, setForm] = useState({
    name: "",
    code: "",
    academicYear: "",
    favoriteSubject: "",
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
      .post(import.meta.env.VITE_REACT_APP_ADD_STUDENT, form)
      .then((res) => {
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
    <>
      <h1>Add student</h1>
      {responseMessage && (
        <FlashMessage
          message={responseMessage.message}
          success={responseMessage.success}
          removeMessage={removeMessage}
        />
      )}
      {submitMessage && (
        <FlashMessage
          message={submitMessage.message}
          success={submitMessage.success}
          removeMessage={removeSubmitMessage}
        />
      )}
      <div className="studentSection">
        {isLoading && (
          <div className="loader">
            <img src="/images/giphy-1.webp" width={100} height={100} />
          </div>
        )}
        {isSubmitLoading && (
          <div className="loader">
            <img src="/images/giphy-1.webp" width={100} height={100} />
          </div>
        )}
        <form onSubmit={submitForm}>
          <div className="form-control">
            <InputField
              type="text"
              name="name"
              id="name"
              handleChange={handleChange}
              placeholder="Subject Name"
              label="Subject Name"
              value={form.name}
            />
          </div>
          <div className="form-control">
            <InputField
              type="text"
              name="code"
              id="code"
              handleChange={handleChange}
              placeholder="Roll number"
              label="Roll number"
              value={form.code}
            />
          </div>
          <div className="form-control">
            <InputField
              type="text"
              name="academicYear"
              id="academicYear"
              handleChange={handleChange}
              placeholder="Academic Year"
              label="Academic Year"
              value={form.academicYear}
            />
          </div>
          <div className="form-control">
            <select
              name="favoriteSubject"
              value={form.favoriteSubject}
              onChange={handleChange}
              id="fav"
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
            <Button text="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}
