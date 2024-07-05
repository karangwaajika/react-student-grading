import { useState } from "react";

export default function useResponseMessage() {
  const [responseMessage, setResponseMessage] = useState();

  const removeMessage = () => {
    setResponseMessage();
  };

  return { responseMessage, setResponseMessage, removeMessage };
}
