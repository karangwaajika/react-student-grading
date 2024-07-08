import { Link } from "react-router-dom";
import HomeNav from "../components/HomeNav";
import Footer from "../components/Footer";
export default function NotFoundPage() {
    const style = {
        margin:"auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem:"center",
        gap:"5px"
    }
    const imageStyle = {
        width: "100vh",
        height: "70vh",
    }
  return (
    <div className="home">
      <HomeNav />
      <div className="error-info" style={style}>
        <img src="images/404-error.jpg" alt="error-page" height={100} width={100} style={imageStyle} />
        <p style={{margin:"auto"}}>You are lost, please go <Link to="/" style={{textDecoration:"underline", fontWeight:"bold"}}>back</Link></p>
      </div>
      <Footer />
    </div>
  );
}
