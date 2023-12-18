import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import TarjetaProducto from './TarjetaProducto';
import '../styles/listaProductos.css';

function ListaProductos() {
    const dataProductos  = useContext(AppContext);
   
    return (
        <>
            <div className="contenedorLista">
                {dataProductos.map((producto) => (
                    <TarjetaProducto key={producto.id} producto={producto} />
                ))}
            </div>
        </>
    )
}

export default ListaProductos;