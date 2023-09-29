import logo1 from './assets/img/logo1.png'
import logoFacebook from './assets/img/001-facebook.png'
import logoInstagram from './assets/img/002-instagram.png'
import logoWhatsapp from './assets/img/003-whatsapp.png'
import './assets/css/footer.css'


const Footer = () => {
    return (

        <footer className='footer' id="contactos_tag">
            <div className="footer_derecha">
                <nav className="menu">
                    <a href="/">Parthenon</a>
                    <a href="/">Nosotros</a>
                    <a target="_blank" href="/">Mi Cuenta</a>
                    <a href="#contactos_tag">Contacto</a>
                </nav>
            </div>

            <div className="footer_izquierda">
                <a href="/" className="logo">
                    <img className="logo_imagen" src={logo1} alt="logo.png" />
                    <h2 className="logo_titulo">Parthenon <br /> Futbol 5 </h2>
                </a>
                <h4>Siguenos en las redes sociales</h4>
                <div className="redes">
                    <a rel="noreferrer" target='_blank' href="/">
                        <img src={logoWhatsapp} alt="" />
                    </a>
                    <a rel="noreferrer" target='_blank' href="https://www.instagram.com/parthenonfutbol5/?hl=es-la">
                        <img src={logoInstagram} alt="" />
                    </a>
                    <a rel="noreferrer" target='_blank' href="https://www.facebook.com/Parthenonfutbol/?locale=es_LA">
                        <img src={logoFacebook} alt="" />
                    </a>
                </div>
                <div className='info_contacto'>
                    <p className='numero'><strong>Telefono:</strong> <a href="tel:+5891114362784">(11) 1436 2784</a></p>
                    <p><strong>E-mail:</strong> <a href="mailto:futbol5parthenon@gmail.com">futbol5parthenon@gmail.com</a></p>
                </div>

            </div>

            <p className="derechos_de_autor">© 2023 FullStackDeveloper | Todos los derechos reservados</p>
        </footer>

    );
}

export default Footer;