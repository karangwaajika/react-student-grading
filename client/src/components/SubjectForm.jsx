import axios from "axios";
import { useState } from "react";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";

export default function SubjectForm({
  setSubjects,
  setResponseMessage,
  setIsLoading,
}) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    date: "",
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
    setIsLoading(true);
    axios
      .post(import.meta.env.VITE_REACT_APP_ADD_SUBJECT, form)
      .then((res) => {
        setResponseMessage({
          success: res.data.success,
          message: res.data.message,
        });
        if (Object.keys(res.data.subject).length > 0) {
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
    </>
  );
}
