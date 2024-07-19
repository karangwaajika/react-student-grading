import axios from "axios";
import { useEffect, useState } from "react";
import useResponseMessage from "./useResponseMessage";

export default function useFetchStudentMarks(studentCode, isMarksInserted) {
  const [isLoading, setIsLoading] = useState(false);
  const [studentMarks, setStudentMarks] = useState([]);
  const { responseMessage, setResponseMessage, removeMessage } =
    useResponseMessage();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    if(studentCode){
      setIsLoading(true);
      axios
      .get(import.meta.env.VITE_REACT_APP_FETCH_STUDENT_MARKS + "/" + studentCode, {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        //display response message only when there is an error
        if (!res.data.success) {
          setResponseMessage({
            success: res.data.success,
            message: res.data.message,
          });
        }else{
            setStudentMarks(res.data.studentMarks);
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
  }, [isMarksInserted]);

  return {
    isLoading,
    responseMessage,
    studentMarks,
    removeMessage,
    setResponseMessage,
  };
}
