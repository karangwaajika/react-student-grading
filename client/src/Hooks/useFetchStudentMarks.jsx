import axios from "axios";
import { useEffect, useState } from "react";
import useResponseMessage from "./useResponseMessage";
import { useParams } from "react-router-dom";

export default function useFetchStudentMarks(isMarksInserted) {
  const [isLoading, setIsLoading] = useState(false);
  const [studentMarks, setStudentMarks] = useState([]);
  const { responseMessage, setResponseMessage, removeMessage } =
    useResponseMessage();
  const params = useParams();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    if (params.studentCode) {
      setIsLoading(true);
      axios
        .get(
          import.meta.env.VITE_REACT_APP_FETCH_STUDENT_MARKS +
            "/" +
            params.studentCode,
          {
            cancelToken: cancelToken.token,
          }
        )
        .then((res) => {
          //display response message only when there is an error
          if (!res.data.success) {
            setStudentMarks([]);
          } else {
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
  }, [params.studentCode, isMarksInserted]);

  return {
    isLoading,
    responseMessage,
    studentMarks,
    removeMessage,
    setResponseMessage,
  };
}
