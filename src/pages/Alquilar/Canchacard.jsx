import canchaImg from './assets/img/cancha-deafault.jpg'
import {useHistory } from 'react-router-dom'


const Canchacard = ({canchaData}) => {
    let history = useHistory();
   const price = canchaData.hour.hour > 18 ?  canchaData.priceNight : canchaData.priceDay;
   canchaData['price']=price;
   const onClickBtn = (event) => {
        history.push({pathname: '/detalle', state:{
            canchaData
        }})
   }
    return (
        <>
    <div className="rCard">
        <img className="rCardImage" src={canchaImg} alt='cancha' />
        <p className='canchaTittle'>CANCHA {canchaData.number}</p>
        <div className="rCardInfo">
            <p><strong>Precio:</strong> {price} $</p>
            <p><strong>Tipo:</strong> {canchaData.category}</p>
            <p><strong>Dia:</strong> {canchaData.day}</p>
            <p><strong>Hora:</strong> {canchaData.hour.hour} hs</p>
        </div>
        <button onClick={onClickBtn}  className="btn-rCard">Alquilar</button>
    </div>
   
        </>
    );
}

export default Canchacard;