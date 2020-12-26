import logo from '../../../assets/img/NavBar/logo.svg';
import logo_m from '../../../assets/img/NavBar/logo-m.svg';
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink,Link} from 'react-router-dom'



const NavBar = () => {


return(
    <header>
        <Link to='/'>
            <img className = "logoDesk" src={logo}/>
            <img className = "logoMobile" src={logo_m} />
        </Link>

        <nav className="menu">
            <ul>
                <li><NavLink to='/productos' exact>productos</NavLink></li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
);

}

export default NavBar;