import {Outlet, NavLink} from 'react-router-dom';
import './style/nav.css';

export default function Nav() {
    return (
        <>
            <nav id="navBar">
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/page1">Utilisateurs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/page2">Posts</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}