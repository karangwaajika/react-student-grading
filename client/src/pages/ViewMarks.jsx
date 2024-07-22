import useFetchMarks from "../Hooks/useFetchMarks";
import MarksTable from "../components/MarksTable";
import FlashMessage from "../components/ui/FlashMessage";
import loadingPicture from "/images/giphy-1.webp";

export default function ViewMarks() {
  const { marks, isLoading, responseMessage, removeMessage } = useFetchMarks();
  return (
    <div className="marks-section">
      {responseMessage && (
        <FlashMessage
          message={responseMessage.message}
          success={responseMessage.success}
          removeMessage={removeMessage}
        />
      )}
      {isLoading && (
        <div className="loader">
          <img src={loadingPicture} width={100} height={100} />
        </div>
      )}
      <MarksTable marks={marks} />
    </div>
  );
}
