import "../assets/dashboard.css";
import Main from "../components/Main";
import Nav from "../components/Nav";
import Profile from "../components/Profile";
import SideBar from "../components/SideBar";
import useProtectPage from "../Hooks/useProtectPage";
import { createContext } from "react";

export const UserContent = createContext();
export default function Dashboard() {
  const { isLoading, userInfo } = useProtectPage(
    import.meta.env.VITE_REACT_APP_PROTECT_PAGE
  );
  return (
    <div className="dashboard-container">
      {isLoading && (
        <div className="loader">
          <img src="images/giphy-1.webp" width={100} height={100} />
        </div>
      )}
      <UserContent.Provider value={userInfo}>
        <aside className="left-side">
          <Profile />
          <SideBar />
        </aside>
        <aside className="right-side">
          <Nav />
          <Main />
        </aside>
      </UserContent.Provider>
    </div>
  );
}