import './assets/css/login.css'

const Login = () => {
    return (
        <form action className="formulario">
            <h1 className='loginTittle'>Login</h1>
            <div className="contenedor">
                <div className="input-contenedor">
                    <i className="fa-solid fa-envelope icon" />
                    <input type="text" placeholder="Correo Electronico" />
                </div>
                <div className="input-contenedor">
                    <i className="fa-solid fa-key icon" />
                    <input type="password" placeholder="Contraseña" />
                </div>
                <div>
                    <input type="submit" defaultValue="Iniciar" className="button" />
                    <p>¿No tienes cuenta? <a className="link" href="./register.html">Registrate</a></p>
                </div>
            </div>
        </form>

    );
}

export default Login;