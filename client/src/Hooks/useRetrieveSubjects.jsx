import axios from "axios";
import { useEffect, useState } from "react";
import useResponseMessage from "./useResponseMessage";
export default function useRetrieveSubjects() {
  const [isLoading, setIsLoading] = useState(false);
  const { responseMessage, setResponseMessage, removeMessage } =
    useResponseMessage();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const cancelToken = axios.CancelToken.source();
    axios.defaults.withCredentials = true;
    axios
      .get(import.meta.env.VITE_REACT_APP_VIEW_SUBJECTS, {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        setSubjects(res.data.subjects);
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
  }, []);

  return { isLoading, subjects, removeMessage, responseMessage };
}
