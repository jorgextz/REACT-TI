import './assets/css/main.css'
import logoPaso1 from './assets/img/numero-1.png'
import logoPaso2 from './assets/img/numero-2.png'
import logoPaso3 from './assets/img/numero-3.png'
import logoEspacio1 from './assets/img/001-campeonato-de-futbol.png'
import logoEspacio2 from './assets/img/002-pastel-de-cumpleaos.png'
import logoEspacio3 from './assets/img/003-amistad.png'
import imgGalery1 from './assets/img/img1.jpg'
import imgGalery2 from './assets/img/img2.jpg'
import imgGalery3 from './assets/img/img3.jpg'
import imgGalery4 from './assets/img/img4.jpg'
import imgGalery5 from './assets/img/img5.jpg'
import imgGalery6 from './assets/img/img6.jpg'
import imgGalery7 from './assets/img/img7.jpg'
import imgGalery8 from './assets/img/img8.jpg'
import imgGalery9 from './assets/img/img9.jpg'
import Cardprice from './Cardprice'


const Main = () => {
    return (
        <div>
            {/* ---------- PRIMERA SECTION ------------ */}
            <section className="home" id="alquila_tag">
                <div className="home_texto">
                    <h1>Parthenon</h1>
                    <p>Representa el espiritu deportivo que todos llevamos dentro, ven y alquila con nosotros!</p>
                </div>
                <a href="#paquetes" className="home_button">
                    <h2>Reserva Ya!</h2>
                </a>
            </section>
            {/* ---------- SEGUNDA SECTION ------------ */}
            <section id="paquetes" className="paquetes">
                <div className="paquetes-1">
                    <Cardprice name="Techada" priceOne="11.000" priceTwo="12.000" />
                    <Cardprice name="Destechada" priceOne="10.000" priceTwo="11.000" />
                </div>
                <div className="paquetes-2">
                    <h2><strong>Alquila</strong> tu cancha en <strong>3</strong> simples <strong>pasos..</strong></h2>
                    <div className="pasos paso1">
                        <img src={logoPaso1} alt="logo" />
                        <h3><strong>Selecciona</strong> el tipo de <strong>cancha</strong> que te guste</h3>
                    </div>
                    <div className="pasos paso2">
                        <img src={logoPaso2} alt="logo" />
                        <h3><strong>Presionar Alquilar</strong> para acceder a los <strong>dias</strong> y <strong>horarios</strong> disponibles</h3>
                    </div>
                    <div className="pasos paso3">
                        <img src={logoPaso3} alt="logo" />
                        <h3><strong>Selecciona</strong> el <strong>dia</strong> y la <strong>hora</strong> que quieras y <strong>paga</strong></h3>
                    </div>
                </div>

            </section>
            {/* ---------- TERCERA SECTION ------------ */}
            <article className="eventos">
                <div className="eventos_title">
                    <h2>En <strong>Parthenon</strong> tenemos los espacios para todo tipo de <strong>eventos</strong>: </h2>
                </div>
                <div className="izquierda_eventos">
                    <img className="izquierda_imagen" src={logoEspacio2} alt="" />
                    <div className="eventos_text">
                        <h3>Cumpleaños</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, alias. Numquam mollitia in debitis harum quae? Ullam eos consequuntur provident.</p>
                    </div>
                </div>
                <div className="izquierda_eventos">
                    <img className="izquierda_imagen" src={logoEspacio1} alt="" />
                    <div className="eventos_text">
                        <h3>Campeonatos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laboriosam modi accusamus voluptates eligendi iure aliquid ipsum facere fugit saepe!</p>
                    </div>
                </div>
                <div className="izquierda_eventos">
                    <img className="izquierda_imagen" src={logoEspacio3} alt="" />
                    <div className="eventos_text">
                        <h3>Juntadas</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quisquam inventore omnis commodi voluptates sequi illum quas ipsa alias delectus.</p>
                    </div>
                </div>
            </article>
            {/* ---------- GALERY ------------ */}
            <div className="galery">
                <img src={imgGalery1} alt="" className="galery_img" />
                <img src={imgGalery2} alt="" className="galery_img" />
                <img src={imgGalery3} alt="" className="galery_img" />
                <img src={imgGalery4} alt="" className="galery_img" />
                <img src={imgGalery5} alt="" className="galery_img" />
                <img src={imgGalery6} alt="" className="galery_img" />
                <img src={imgGalery7} alt="" className="galery_img" />
                <img src={imgGalery8} alt="" className="galery_img" />
                <img src={imgGalery9} alt="" className="galery_img" />

            </div>

        </div>

    );
}

export default Main;