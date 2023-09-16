import logo1 from './assets/img/logo1.png'
import logoFacebook from './assets/img/001-facebook.png'
import logoInstagram from './assets/img/002-instagram.png'
import logoWhatsapp from './assets/img/003-whatsapp.png'
import './assets/css/footer.css'


const Header = () => {
    return (

        <footer className='footer' id="contactos_tag">
            <div class="footer_derecha">
                <nav class="menu">
                    <a href="/">Parthenon</a>
                    <a href="/">Nosotros</a>
                    <a target="_blank" href="/">Mi Cuenta</a>
                    <a href="/">Contacto</a>
                </nav>
            </div>

            <div class="footer_izquierda">
                <a href="/" class="logo">
                    <img class="logo_imagen" src={logo1} alt="logo.png" />
                    <h2 class="logo_titulo">Parthenon <br /> Futbol 5 </h2>
                </a>
                <h4>Siguenos en las redes sociales</h4>
                <div class="redes">
                    <a href="/">
                        <img src={logoWhatsapp} alt="" />
                    </a>
                    <a href="/">
                        <img src={logoInstagram} alt="" />
                    </a>
                    <a href="/">
                        <img src={logoFacebook} alt="" />
                    </a>
                </div>
                <div className='info_contacto'>
                    <p className='numero'><strong>Telefono:</strong> (11) 1436 2784</p>
                    <p><strong>E-mail:</strong> futbol5parthenon@gmail.com</p>
                </div>

            </div>

            <p class="derechos_de_autor">© 2023 FullStackDeveloper | Todos los derechos reservados</p>
        </footer>

    );
}

export default Header;