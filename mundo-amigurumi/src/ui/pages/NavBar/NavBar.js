import logo from '../../../assets/img/NavBar/logo.svg';
import logo_m from '../../../assets/img/NavBar/logo-m.svg';
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink,Link} from 'react-router-dom'



const NavBar = ({links}) => { 




return(
    <header>
        <Link to='/'>
            <img className = "logoDesk" src={logo}/>
            <img className = "logoMobile" src={logo_m} />
        </Link>

        <nav className="menu">
            <ul>
            {
                links.map((element,index)=>{
                    console.log(element.url)
                    return(
                        <li><NavLink to={`/${element.url}`} key={index} exact>{element.nombre}</NavLink></li>
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