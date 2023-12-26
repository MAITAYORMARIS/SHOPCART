import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import '../styles/tarjetaProducto.css';
import Button from './Button';
// import '../styles/button.css';

function TarjetaProducto({producto}) {
 const {agregarProducto} = useContext(AppContext);
 const handleAgregarProducto = () => {
    agregarProducto(producto);
  };

    return (
        <>
            <div className="tarjeta">
                <img src={producto.image} className="imgTarjeta" alt={producto.title} style={{ width: "100%" , height: "45%"}}/>
                <div className="cuerpoTarjeta" style={{ width: "100%" , height: "55%"}}>
                    <h5 className="tituloTarjeta">{producto.title.substring(0,15)}</h5>
                    <p className="textoTarjeta">{producto.description.substring(0,50)}</p>
                    <p className="textoTarjeta" style={{fontWeight:"bold"}}>Precio: USD {producto.price}</p>
                    <Button className="accion" titulo="Agregar al Carrito" mensaje="Producto agregado al carrito"  onClick={handleAgregarProducto} />
                </div>
            </div>
          
        </>
    );
}
export default TarjetaProducto;