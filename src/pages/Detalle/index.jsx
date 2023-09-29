import './assets/css/detalle.css'
import detalleLogo from '../Alquilar/assets/img/cancha-deafault.jpg'
import { useLocation, useHistory} from 'react-router-dom';
import { useState } from 'react';
import swal from 'sweetalert';



const Detalle = () => {
    let history = useHistory();
    const [inputValue, setInputValue] = useState('');
    const location = useLocation();
    const recivedInfo = location.state.canchaData;
    console.log(recivedInfo)

    const handleInputValue = (event) => {
        setInputValue(event.target.value)
    }

   
    
    const sendData = (event) => {
        
        const rExpresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (inputValue === "") {
            swal(
                'Campo Vacio',
                'Por favor Introduce un Correo!',
                'error'
              )
        } else if (!rExpresion.test(inputValue)) {
            swal(
                'Correo Invalido',
                'Introduce un correo de tipo: user@gmail.com',
                'error'
              )    
        } else {
            swal({
                position: 'center',
                icon: 'success',
                title: 'Tu cancha se reservo con exito!',
                showConfirmButton: false,
                timer: 1000
              })

              let alquiler = {
                "cancha" : recivedInfo.number,
                "day": recivedInfo.day,
                "hour": recivedInfo.hour.hour,
                "user": inputValue
              }

              let dataSearch = {
                'day': recivedInfo.day,
                'hour': recivedInfo.hour.hour
            }

              const options = {
                  method: 'POST',
                  body: JSON.stringify(alquiler),
                  headers: {
                      'Content-Type': 'application/json',
                  }
              }

              const options2 = {
                method: 'PATCH',
                body: JSON.stringify(dataSearch),
                headers: {
                    'Content-Type': 'application/json',
                }
            }
      
            const url = 'http://127.0.0.1:3002/alquiler/alquilar';
            fetch(url, options)
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))
            
               

            const url2 = 'http://127.0.0.1:3002/cancha/editar/'+recivedInfo.id;
            fetch(url2, options2)
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))

            history.push('/alquilar')
            
            }
    
        }
    
    return ( 
        <>
        <div className='containerDetalle'> 
            <div className="dContainer">
                <img src={detalleLogo} alt="cancha" />
                <div className="dInfo">
                    <p><strong>Tipo:</strong> {recivedInfo.category}</p>
                    <p><strong>Precio:</strong> {recivedInfo.price}$</p>
                    <p><strong>Horario:</strong> {recivedInfo.hour.hour}hs</p>
                    <p><strong>Medidas:</strong> 60 x 27 mts</p>
                    <p><strong>Tipo de cesped:</strong> Sintetico con Arena</p>
                </div>
                <input type="email" value={inputValue} onChange={handleInputValue} placeholder='Introduce tu correo' required />
                <button onClick={sendData} className='d-btn'>Confirmar Reserva</button>

            </div>
        </div>
        </>
     );

}
 
export default Detalle;