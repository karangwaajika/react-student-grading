import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function useAutoSignIn(url) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return isLoading;
}
