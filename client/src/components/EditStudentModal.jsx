import Button from "./ui/Button";
import InputField from "./ui/InputField";
import { useState } from "react";
import axios from "axios";
export default function EditStudentModal({
  closeModal,
  studentToEdit,
  setResponseMessage,
  setIsUpdated,
  subjects,
}) {
  const [form, setForm] = useState(
    studentToEdit < 0
      ? {
          name: "",
          code: "",
          academicYear: "",
          favoriteSubject: "",
          id: "",
        }
      : {
          name: studentToEdit.name,
          code: studentToEdit.code,
          academicYear: studentToEdit.academicYear,
          favoriteSubject: studentToEdit.favoriteSubject._id,
          id: studentToEdit._id,
        }
  );
  //handle form field value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .post(import.meta.env.VITE_REACT_APP_UPDATE_STUDENT, form)
      .then((res) => {
        setResponseMessage({
          success: res.data.success,
          message: res.data.message,
        });
        setIsUpdated((prevState) => !prevState);
      })
      .catch((e) => {
        setResponseMessage({
          success: false,
          message: e.message,
        });
      })
      .finally(() => {
        closeModal();
      });
  };
  //close the modal by clicking outside the modal card
  const handleCloseModal = (e) => {
    if (e.target.className == "modal") {
      closeModal();
    }
  };
  return (
    <div className="modal" onClick={handleCloseModal}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Update Student</h2>
          <div className="modal-close-button" onClick={closeModal}>
            <i className="fa fa-rectangle-xmark"></i>
          </div>
        </div>
        <div className="modal-body">
          <form onSubmit={submitForm}>
            <div className="form-control">
              <InputField
                type="text"
                name="name"
                id="name"
                handleChange={handleChange}
                placeholder="Student Name"
                label="Student Name"
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
                <option value={studentToEdit.favoriteSubject._id}>
                  {studentToEdit.favoriteSubject.name}
                </option>
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
        <div className="modal-footer"></div>
      </div>
    </div>
  );
}
