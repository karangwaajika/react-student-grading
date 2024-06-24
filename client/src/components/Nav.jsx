import {Link, Outlet} from 'react-router-dom'
export default function Nav(){
    return (
        <nav>
            <p>Good morning! Mr ajika</p>
            <ul className="links">
                <li className="link"> <Link key="link1" to="/dashboard">Link2</Link></li>
                <li className="link"><Link key="link1" to="/dashboard">Link2</Link></li>
                <li className="link"><Link key="link1" to="/dashboard">Link2</Link></li>
            </ul>
            <div className="profile">
                <div className="name">
                    <h5>Ajika@gmail.com</h5>
                </div>
                <Link key="out" to="/dashboard"><i className='fa fa-sign-out'></i></Link>
            </div>
        </nav>
    )
}