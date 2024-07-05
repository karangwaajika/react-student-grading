import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function useAutoSignIn(url) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then()
      .catch((err) => {
        navigate("/");
      });
  }, []);
}
