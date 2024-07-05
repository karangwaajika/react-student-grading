import "../assets/dashboard.css";
import Main from "../components/Main";
import Nav from "../components/Nav";
import Profile from "../components/Profile";
import SideBar from "../components/SideBar";
import useProtectPage from "../Hooks/useProtectPage";

export default function Dashboard() {
  useProtectPage(import.meta.env.VITE_REACT_APP_PROTECT_PAGE);
  return (
    <div className="dashboard-container">
      <aside className="left-side">
        <Profile />
        <SideBar />
      </aside>
      <aside className="right-side">
        <Nav />
        <Main />
      </aside>
    </div>
  );
}
