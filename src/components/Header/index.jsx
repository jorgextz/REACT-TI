import logo from './assets/img/logo1.png'
import menu from './assets/img/menu.png'
import logo2 from './assets/img/cruz.png'
import './assets/css/header.css'
import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <header>

            {/* <!-- ---------- LOGO ------------ --> */}

            <Link to='/' className="logo">
                <img className="logo_imagen" src={logo} alt="logo.png" />
                <h2 className="logo_titulo">Parthenon <br /> Futbol 5 </h2>
            </Link>

            {/* checkbox */}
            <input id="checkbox1" type="checkbox" />
            <img className='cerrar' src={logo2} alt="icono-cerrar" />
            <img className='hamburguesa' src={menu} alt="icono-menu" />
            

            {/* <!-- ---------- MENU ------------ --> */}
            <nav className="menu">
                <Link to="/">Parthenon</Link>
                <Link to="/">Nosotros</Link>
                <a href='#paquetes'>Mi Cuenta</a>
                <a href="#contactos_tag">Contacto</a>
            </nav>

        </header> 
    );
}

export default Header;