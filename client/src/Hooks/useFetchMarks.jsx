import axios from "axios";
import { useEffect, useState } from "react";
import useResponseMessage from "./useResponseMessage";

export default function useFetchMarks() {
  const [isLoading, setIsLoading] = useState(false);
  const [marks, setMarks] = useState([]);
  const { responseMessage, setResponseMessage, removeMessage } =
    useResponseMessage();

  useEffect(() => {
    setIsLoading(true);
    const cancelToken = axios.CancelToken.source();
    axios
      .get(import.meta.env.VITE_REACT_APP_FETCH_ALL_MARKS, {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        setMarks(res.data.allMarks);
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

  return {
    isLoading,
    responseMessage,
    marks,
    removeMessage,
    setResponseMessage,
  };
}
