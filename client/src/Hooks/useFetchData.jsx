import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useFetchData(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({})
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
      .then((res)=>{
        setData(res.data)
      })
      .catch((err) => {
        navigate("/");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return {isLoading, data};
}
