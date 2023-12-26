import React, {useContext, useState} from "react";
import AppContext from "../context/AppContext";
import '../styles/header.css';
import { FaCartShopping } from "react-icons/fa6";
import Carrito from './Carrito';


function Header() {
    const { carrito, resetCompra} = useContext(AppContext);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const handleClick = () => {
        // Cambia el estado para mostrar u ocultar el carrito
        setMostrarCarrito(!mostrarCarrito);
    }

    const cerrarCarrito = () => {
        // Cierra el carrito estableciendo el estado mostrar en falso
        setMostrarCarrito(false);
    }

    const totalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    const handleLogoClick = () => {
        resetCompra();  
    }
    return (
        <>
            <div className="contenedorHeader">
                <div className="contenedorLogo" onClick={handleLogoClick}><img src="https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/fotos-proyecto-alkemy%2FEcommerce_Shopping_Logo__1_-removebg-preview.png?alt=media&token=5c9d7dc8-e40b-441a-b7cf-0bf7646ed6f6" alt="logo" /></div>
                <div className="contenidoHeader">
                    <h1>Shop Cart</h1>
                </div>
                <div className="carritoSigno" onClick={handleClick}><FaCartShopping style={{ fontSize: "25px" }}  /><p>{totalProductos}</p></div>
                {/* Pasa el estado y la función para cerrar el carrito como props */ }
                <Carrito mostrarCarrito={mostrarCarrito} cerrarCarrito={cerrarCarrito} />
            </div>
        </>
    )
}
export default Header;