import "../assets/home.css";
import Footer from "../components/Footer";
import HomeNav from "../components/HomeNav";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import useAutoSignIn from "../Hooks/useAutoSignIn";
import FlashMessage from "../components/ui/FlashMessage";

function Home() {
  const { isLoading, removeMessage, responseMessage } = useAutoSignIn(
    import.meta.env.VITE_REACT_APP_PROTECT_PAGE
  );
  return (
    <div className="home">
      <HomeNav />
      {responseMessage && (
        <FlashMessage
          message={responseMessage.message}
          success={responseMessage.success}
          removeMessage={removeMessage}
        />
      )}
      {isLoading && (
          <div className="loader">
            <img src="/images/giphy-1.webp" width={100} height={100} />
          </div>
        )}
      <main className="forms-container">
        <SignUp />
        <SignIn />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
