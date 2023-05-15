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
                        <NavLink to="/">Utilisateurs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts">Posts</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}