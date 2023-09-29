import './assets/css/register.css'

const Register = () => {
    return (
        <>
            <div className='final'>
                <form action className="formulario" onsubmit="return enviar(this)">
                    <h1>Registro</h1>
                    <div className="contenedor">
                        <div className="input-contenedor">
                            <i className="fa-solid fa-envelope icon" />
                            <input name="email" id="input-email" type="text" placeholder="Correo Electronico" />
                        </div>
                        <div className="input-contenedor">
                            <i className="fa-solid fa-user icon" />
                            <input id="input-nombre" type="text" placeholder="Nombre" />
                        </div>
                        <div className="input-contenedor">
                            <i className="fa-solid fa-phone icon" />
                            <input id="input-telefono" type="tel" placeholder="Telefono" />
                        </div>
                        <div className="input-contenedor">
                            <i className="fa-solid fa-key icon" />
                            <input id="input-password" type="password" placeholder="Contraseña" />
                        </div>
                        <div>
                            <input type="submit" defaultValue="Registrate" className="button" />
                            <p>Al registrarte, aceptas nuestras condiciones de uso y política de privacidad</p>
                            <p>¿ Ya tienes cuenta? <a className="link" href="./login.html">Iniciar Sesion</a></p>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
}

export default Register;