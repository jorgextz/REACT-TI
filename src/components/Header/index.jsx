import logo from './assets/img/logo1.png'
import menu from './assets/img/menu.png'
import './assets/css/header.css'



const Header = () => {
    return (
        <header>

            {/* <!-- ---------- LOGO ------------ --> */}

            <a href="/" className="logo">
                <img className="logo_imagen" src={logo} alt="logo.png" />
                <h2 className="logo_titulo">Parthenon <br /> Futbol 5 </h2>
            </a>

            <label className='menuH' htmlFor="checkbox1">
                <img src={menu} alt="menu" />
            </label>
            <input id="checkbox1" type="checkbox" />

            {/* <!-- ---------- MENU ------------ --> */}
            <nav className="menu">
                <a href="/">Parthenon</a>
                <a href="/">Nosotros</a>
                <a target="_blank" href="/">Mi Cuenta</a>
                <a href="/">Contacto</a>
            </nav>

        </header>
    );
}

export default Header;