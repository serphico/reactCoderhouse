import logo from '../../../assets/img/NavBar/logo.svg';
import logo_m from '../../../assets/img/NavBar/logo-m.svg';
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink,Link} from 'react-router-dom'



const NavBar = ({links}) => { 




return(
    <header>
        <Link to='/'>
            <img className = "logoDesk" src={logo} alt="Marca para escritorio"/>
            <img className = "logoMobile" src={logo_m} alt="Marca para mobile"/>
        </Link>

        <nav className="menu">
            <ul>
            {
                links.map((element,index)=>{
                    return(
                        <li key={index}><NavLink  to={`/${element.url}`} exact>{element.nombre}</NavLink></li>
                    )
                })
            }
            </ul>
         </nav>
        <CartWidget/>
    </header>
);

}

export default NavBar;