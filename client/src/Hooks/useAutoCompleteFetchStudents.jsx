import axios from "axios";
import { useEffect, useState } from "react";
import useResponseMessage from "./useResponseMessage";

export default function useAutoCompleteFetchStudents(name) {
  const [isLoading, setIsLoading] = useState(false);
  const [students, setStudents] = useState();
  const { responseMessage, setResponseMessage, removeMessage } =
    useResponseMessage();

  useEffect(() => {
    setIsLoading(true);
    const cancelToken = axios.CancelToken.source();
    axios
      .get(
        import.meta.env.VITE_REACT_APP_AUTO_FETCH_STUDENT +
          "?name=" +
          name +
          "",
        {
          cancelToken: cancelToken.token,
        }
      )
      .then((res) => {
        setStudents(res.data.students);
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
    return () => {
      cancelToken.cancel();
    };
  }, [name]);

  return {
    isLoading,
    responseMessage,
    students,
    removeMessage,
    setResponseMessage,
  };
}
