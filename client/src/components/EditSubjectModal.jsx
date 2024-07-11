import Button from "./ui/Button";
import InputField from "./ui/InputField";
import { useState } from "react";
import axios from "axios";
export default function EditSubjectModal({
  closeModal,
  subjectToEdit,
  setResponseMessage,
  setIsUpdated,
}) {
  const [form, setForm] = useState(
    subjectToEdit < 0
      ? {
          name: "",
          category: "",
          date: "",
          id: "",
        }
      : {
          name: subjectToEdit.name,
          category: subjectToEdit.category,
          date: subjectToEdit.date,
          id: subjectToEdit._id,
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
    axios
      .post(import.meta.env.VITE_REACT_APP_UPDATE_SUBJECT, form)
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
          <h2>Update Subject</h2>
          <div className="modal-close-button" onClick={closeModal}>
            <i className="fa fa-times"></i>
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
                placeholder="Subject Name"
                label="Subject Name"
                value={form.name}
              />
            </div>
            <div className="form-control">
              <InputField
                type="category"
                name="category"
                id="login-category"
                placeholder="Category"
                label="Category"
                handleChange={handleChange}
                value={form.category}
              />
            </div>
            <div className="form-control">
              <InputField
                type="date"
                name="date"
                id="date"
                placeholder="Date"
                label="Date Created"
                handleChange={handleChange}
                value={form.date}
              />
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
