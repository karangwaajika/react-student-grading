import Button from "./ui/Button";
import InputField from "./ui/InputField";
import { useState } from "react";
import axios from "axios";
export default function DeleteSubjectModal({
  closeModal,
  subjectToDelete,
  setResponseMessage,
  setIsUpdated,
}) {
  const subjectInfo = {
    name: subjectToDelete.name,
    category: subjectToDelete.category,
    date: subjectToDelete.date,
    id: subjectToDelete._id,
  };

  const deleteSubject = () => {
    axios
      .post(import.meta.env.VITE_REACT_APP_DELETE_SUBJECT, {
        id: subjectInfo.id,
      })
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

  const bodyStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  };
  const infoStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  const footerStyle = {
    marginTop: "30px",
    borderTop: "1px solid #707474ee",
    paddingTop: "30px",
  };
  return (
    <div className="modal" onClick={handleCloseModal}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{subjectInfo.name} Subject</h2>
          <div className="modal-close-button" onClick={closeModal}>
            <i className="fa fa-rectangle-xmark"></i>
          </div>
        </div>
        <div className="modal-body" style={bodyStyle}>
          <div className="info" style={infoStyle}>
            <span style={{ fontWeight: "bold" }}>Name</span>
            <span>{subjectInfo.name}</span>
          </div>
          <div className="info" style={infoStyle}>
            <span style={{ fontWeight: "bold" }}>Category</span>
            <span>{subjectInfo.category}</span>
          </div>
          <div className="info" style={infoStyle}>
            <span style={{ fontWeight: "bold" }}>Created date</span>
            <span>{subjectInfo.date}</span>
          </div>
        </div>
        <div className="modal-footer" style={footerStyle}>
          <div className="delete-options">
            <button className="cancel" onClick={closeModal}>
              Cancel
            </button>
            <button className="delete" onClick={deleteSubject}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
