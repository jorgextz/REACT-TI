import Canchacard from './Canchacard';
import {useState, useEffect} from 'react'

import './assets/css/alquilar.css'


const Alquilar = () => {

const [canchas, setCanchas] = useState([]);
const [selectDay, setSelectDay] = useState('');
const [selectType, setSelectType] = useState('');
const [selectHour, setSelectHour] = useState('');


const handleSelectDay = (event) => {
    setSelectDay(event.target.value);
}

const handleSelectType = (event) => {
    setSelectType(event.target.value);
}

const handleSelectHour = (event) => {
    setSelectHour(event.target.value);
}

const getCanchas = () => {
    fetch('http://localhost:3002/canchas/listar')
    .then(res => res.json())
    .then(data => {
        setCanchas(data)
        console.log(data)
    })
}

useEffect(getCanchas,[]);

let diasSemana = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];

    return (
        <>
        <div className="alquilar-container">
            <div className="aNav">
                 <select value={selectDay} onChange={handleSelectDay}  id="">
                        <option value="">Dia</option>
                    {diasSemana.map(day => (
                        <option value={day}>{day}</option>
                    ))}
                 </select>
                 <select value={selectType} onChange={handleSelectType} id="">
                    <option value="">Tipo</option>
                    <option value="Techada">Techada</option>
                    <option value="Destechada">Destechada</option>
                 </select>
                 <select value={selectHour} onChange={handleSelectHour} id="">
                    <option value="">Hora</option>
                    {(canchas.length !== 0) &&
                    canchas[0].days[0].horas.map(hora => (
                        <option value={hora.hour}>{hora.hour}</option>
                    ))
                    }
                 </select>
            </div>
            <div className="canchaResults">
                <h2>Resultado de canchas disponibles:{}</h2>
                <div className="results">
                    {canchas.map(cancha => (
                            (selectType === '' || selectType === cancha.category) &&  
                        cancha.days.map(day => ( 
                            (selectDay === '' || selectDay === day.dia) && 
                            day.horas.map(hora =>(
                                hora.status === 'libre'? 
                                 (selectHour.toString() === '' || selectHour.toString() === hora.hour.toString()) && ( 
                                <Canchacard canchaData={{
                                    id: cancha._id,
                                    priceDay:cancha.priceDay,
                                    priceNight:cancha.priceNight,
                                    day: day.dia,
                                    hour:hora,
                                    category: cancha.category,
                                    number:cancha.number
                                
                                }} />
                                ): null
                            ))
                        ))
                    ))}
                </div>
            </div>
        </div>

        </>
    );
}

export default Alquilar;