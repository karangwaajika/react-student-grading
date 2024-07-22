import useFetchMarks from "../Hooks/useFetchMarks";
import MarksTable from "../components/MarksTable";
import FlashMessage from "../components/ui/FlashMessage";

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

      <MarksTable marks={marks} />
    </div>
  );
}
