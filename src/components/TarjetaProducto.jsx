import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import '../styles/tarjetaProducto.css';
import Button from './Button';

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
                    <h5 className="tituloTarjeta">{producto.title}</h5>
                    <p className="textoTarjeta">{producto.description}</p>
                    <p className="textoTarjeta">Precio: {producto.price}</p>
                    <Button clase="accion" titulo="Agregar al Carrito" mensaje="Producto agregado al carrito"  onClick={handleAgregarProducto} />
                </div>
            </div>
          
        </>
    );
}
export default TarjetaProducto;