import { useEffect } from "react";
import axios from "axios";

export default function useFetchSubject(url, setResponseMessage ,setIsLoading, setData) {
  useEffect(() => {
    setIsLoading(true);
    const cancelToken = axios.CancelToken.source();
    axios
      .get(url, { cancelToken: cancelToken.token })
      .then((res) => {
        setData(res.data.subjects);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
        }
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
}
