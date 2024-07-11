import "../assets/home.css";
import Footer from "../components/Footer";
import HomeNav from "../components/HomeNav";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import useAutoSignIn from "../Hooks/useAutoSignIn";

function Home() {
  useAutoSignIn(import.meta.env.VITE_REACT_APP_PROTECT_PAGE);
  return (
    <div className="home">
      <HomeNav />
      <main className="forms-container">
        <SignUp />
        <SignIn />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
