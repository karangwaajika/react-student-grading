import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useResponseMessage from "./useResponseMessage";

export default function useAutoSignIn(url) {
  const navigate = useNavigate();
  const { setResponseMessage, responseMessage, removeMessage } =
    useResponseMessage();
  const [isLoading, setIsLoading] = useState(false)  
  useEffect(() => {
    setIsLoading(true)
    const token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        setResponseMessage({
          success: false,
          message: "You are not authenticated, please log in",
        });
        navigate("/");
      }).finally(()=>{
        setIsLoading(false)
      });
  }, []);
  return {isLoading, responseMessage, removeMessage}
}
