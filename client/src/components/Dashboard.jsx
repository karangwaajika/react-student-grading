import '../assets/dashboard.css'
import Main from './Main'
import Nav from './Nav'
import Profile from './Profile'
import SideBar from './SideBar'
export default function Dashboard(){
    return (
        <div className="dashboard-container">
            <aside className='left-side'>
                <Profile />
                <SideBar />
            </aside>
            <aside className='right-side'>
                <Nav />
                <Main />
            </aside>
        </div>
    )
}