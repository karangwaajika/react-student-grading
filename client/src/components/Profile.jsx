import { UserContent } from "../pages/Dashboard"
import { useContext } from "react"
export default function Profile(){
    const user = useContext(UserContent)
    return(
        <article>
            <figure>
            <img src={`${import.meta.env.VITE_REACT_APP_USER_IMAGE}${user.image}`} alt="profile-pic" width={200} height={200} />
            <figcaption>{user.fullname && user.fullname}</figcaption>
            </figure>
            <p>{user.email && user.email}</p>
        </article>
    )
}