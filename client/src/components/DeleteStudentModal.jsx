import axios from "axios";
export default function DeleteStudentModal({
  closeModal,
  studentToDelete,
  setResponseMessage,
  setIsUpdated,
}) {
  const studentInfo = {
    name: studentToDelete.name,
    code: studentToDelete.code,
    academicYear: studentToDelete.academicYear,
    favoriteSubject: studentToDelete.favoriteSubject.name,
    id: studentToDelete._id,
  };

  const deleteStudent = () => {
    axios.defaults.withCredentials = true;
    axios
      .post(import.meta.env.VITE_REACT_APP_DELETE_STUDENT, {
        id: studentInfo.id,
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
          <h2>{studentInfo.name}</h2>
          <div className="modal-close-button" onClick={closeModal}>
            <i className="fa fa-rectangle-xmark"></i>
          </div>
        </div>
        <div className="modal-body" style={bodyStyle}>
          <div className="info" style={infoStyle}>
            <span style={{ fontWeight: "bold" }}>Name</span>
            <span>{studentInfo.name}</span>
          </div>
          <div className="info" style={infoStyle}>
            <span style={{ fontWeight: "bold" }}>Code</span>
            <span>{studentInfo.code}</span>
          </div>
          <div className="info" style={infoStyle}>
            <span style={{ fontWeight: "bold" }}>Academic Year</span>
            <span>{studentInfo.academicYear}</span>
          </div>
          <div className="info" style={infoStyle}>
            <span style={{ fontWeight: "bold" }}>Favorite Subject</span>
            <span>{studentInfo.favoriteSubject}</span>
          </div>
        </div>
        <div className="modal-footer" style={footerStyle}>
          <div className="delete-options">
            <button className="cancel" onClick={closeModal}>
              Cancel
            </button>
            <button className="delete" onClick={deleteStudent}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
