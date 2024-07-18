import axios from "axios";
import { useEffect, useState } from "react";
import useResponseMessage from "./useResponseMessage";

export default function useFetchStudent(studentCode) {
  const [isLoading, setIsLoading] = useState(false);
  const [student, setStudent] = useState([]);
  const { responseMessage, setResponseMessage, removeMessage } =
    useResponseMessage();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    if(studentCode){
      setIsLoading(true);
      axios
      .get(import.meta.env.VITE_REACT_APP_FETCH_STUDENT + "/" + studentCode, {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        setStudent(res.data.student);
        //display response message only when there is an error
        if (!res.data.success) {
          setResponseMessage({
            success: res.data.success,
            message: res.data.message,
          });
        }
      })
      .catch((err) => {
        setResponseMessage({
          success: false,
          message: err.message,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
    
    return () => {
      cancelToken.cancel();
    };
  }, [studentCode]);

  return {
    isLoading,
    responseMessage,
    student,
    removeMessage,
    setResponseMessage,
  };
}
