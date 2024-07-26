import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function useAutoSignIn(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({})
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    axios.defaults.withCredentials = true;
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then((res)=>{
        setUserInfo(res.data.user)
      })
      .catch((err) => {
        navigate("/");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return {isLoading, userInfo};
}
