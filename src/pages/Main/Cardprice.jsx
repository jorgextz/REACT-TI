import {Link} from 'react-router-dom'

const Cardprice = ({name,priceOne,priceTwo}) => {
    return (
        <div className="box box-1">
            <h3>{name}</h3>
            <p>Valores: <br />
                <strong>8-18hs: {priceOne} $</strong> <br />
                <strong>18-00hs: {priceTwo}  $</strong></p>
            <Link to="/alquilar">Alquilar</Link>
        </div>
    );
}

export default Cardprice;