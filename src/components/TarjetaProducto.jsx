import React from "react";
import '../styles/tarjetaProducto.css';
import Button from './Button';
function TarjetaProducto(props) {
 
    return (
        <>
            <div className="tarjeta">
                <img src={props.producto.imagen} className="imgTarjeta" alt={props.producto.nombre} style={{ width: "100%" , height: "45%"}}/>
                <div className="cuerpoTarjeta" style={{ width: "100%" , height: "55%"}}>
                    <h5 className="tituloTarjeta">{props.producto.nombre}</h5>
                    <p className="textoTarjeta">{props.producto.descripcion}</p>
                    <p className="textoTarjeta">Precio: {props.producto.precio}</p>
                    <Button clase="accion" titulo="Agregar al Carrito" mensaje="Producto agregado al carrito"/>
                </div>
            </div>
          
        </>
    );
}
export default TarjetaProducto;