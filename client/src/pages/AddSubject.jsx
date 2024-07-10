import axios from "axios";
import { useState } from "react";
import "../assets/add-subject.css";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import useResponseMessage from "../Hooks/useResponseMessage";
import FlashMessage from "../components/ui/FlashMessage";
import useFetchSubject from "../Hooks/useFetchSubject";

export default function AddSubject() {
  const { responseMessage, setResponseMessage, removeMessage } =
    useResponseMessage();
  const [isLoading, setIsLoading] = useState(false);
  const [subjects, setSubjects] = useState([]);
  useFetchSubject(
    import.meta.env.VITE_REACT_APP_VIEW_SUBJECTS,
    setResponseMessage,
    setIsLoading,
    setSubjects
  );

  const [form, setForm] = useState({
    name: "",
    category: "",
    date: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(import.meta.env.VITE_REACT_APP_ADD_SUBJECT, form)
      .then((res) => {
        setResponseMessage({
          success: res.data.success,
          message: res.data.message,
        });
        if (Object.keys(res.data.subject).length > 0) {
          console.log("from add")
          setSubjects((prevSubjects) => [...prevSubjects, res.data.subject]);
        }
      })
      .catch((e) => {
        setResponseMessage({
          success: false,
          message: e.message,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
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
        <table>
          <caption>Subject List</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Date Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {subjects.length > 0 ? (
              subjects.map((subject, index) => (
                <tr key={index}>
                  <td data-cell="nbr">{index + 1}</td>
                  <td data-cell="name">{subject.name}</td>
                  <td data-cell="category">{subject.category}</td>
                  <td data-cell="date">{subject.date}</td>
                  <td data-cell="action">
                    <i className="fa fa-pencil"></i>{" "}
                    <i className="fa fa-trash" style={{ color: "red" }}></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>No data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
