import React from "react";
import '../styles/carrito.css';
import Button from './Button';
import { MdAddCircle } from "react-icons/md";
import { FaMinusCircle } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";

// recibe las propiedades para mostrar o cerrar el carrito
function Carrito({ mostrarCarrito, cerrarCarrito }) {
    return (
        <>
            <div className={`contenedorCarrito ${mostrarCarrito ? 'visible' : ''}`}>
                <h2>Tu carrito</h2>
                <div className="itemsCarrito">
                    <div className="itemsCarritoImagen"><img src="#" alt="foto del item"></img></div>
                    <p className="itemsCarritoNombre">Nombre del Producto</p>
                    <div className="accionesCarrito">
                        <FaMinusCircle />
                        <input className="cantidadItem"></input>
                        {/* <IoIosAddCircle /> */}
                        <MdAddCircle style={{fontSize:"20px"}}/>
                        <BsFillTrashFill style={{fontSize:"25px"}}/>
                    </div>
                </div>
                <Button clase="atencion" titulo="Cerrar" onClick={cerrarCarrito} />
            </div>
        </>
    )
}

export default Carrito;