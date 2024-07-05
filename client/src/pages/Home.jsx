import "../assets/home.css";
import Footer from "../components/Footer";
import FormsSection from "../components/FormsSection";
import HomeNav from "../components/HomeNav";
import useAutoSignIn from "../Hooks/useAutoSignIn";

function Home() {
  useAutoSignIn(import.meta.env.VITE_REACT_APP_PROTECT_PAGE);
  return (
    <div className="home">
      <HomeNav />
      <FormsSection />
      <Footer />
    </div>
  );
}

export default Home;
