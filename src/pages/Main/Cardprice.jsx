

const Cardprice = (props) => {
    return (
        <div className="box box-1">
            <h3>{props.name}</h3>
            <p>Valores: <br />
                <strong>8-18hs: {props.priceOne} $</strong> <br />
                <strong>18-00hs: {props.priceTwo}  $</strong></p>
            <a href="/">Alquilar</a>
        </div>
    );
}

export default Cardprice;