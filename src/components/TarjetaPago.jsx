import React from "react";
import '../styles/tarjetaPago.css';
import { IoWifi } from "react-icons/io5";


function TarjetaPago({ formData }) {
    const { nroTarjeta } = formData;
    const formatCardNumber = (numeroTarjeta) => {
        // Asegurar que el número de tarjeta tiene exactamente 16 dígitos
        if (numeroTarjeta.length == 0) {
            return " ";
        }

        // Separar el número de la tarjeta en grupos de cuatro dígitos
        const group1 = numeroTarjeta.substring(0, 4);
        const group2 = numeroTarjeta.substring(4, 8);
        const group3 = numeroTarjeta.substring(8, 12);
        const group4 = numeroTarjeta.substring(12, 16);

        // Devolver el número de tarjeta formateado
        return `${group1} ${group2} ${group3} ${group4}`;
    }
    const numeroFormateado = formatCardNumber(nroTarjeta);


    const nombreFormateado = formData.nombreTarjeta.toUpperCase();

    return (
        <>
            <div className="tarjetaPago">
                <p className="tituloCard">PAY CARD</p>
                <div className="simbolosCard">
                    <div className="contenedorChip"> <img src="https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/fotos-proyecto-alkemy%2Fpng-transparent-integrated-circuit-icon-chip-angle-electronics-rectangle.png?alt=media&token=cf0bd224-7c17-4f2a-8b09-bbfb0413cd86" alt="circuito chip" /></div>
                    <IoWifi style={{ fontSize: "25px" }}></IoWifi>
                </div>
                <div className="numerosCard">
                    <p className="numeroTarjeta">{numeroFormateado}</p>
                    <p className="codigo">{formData.codigoTarjeta}</p>
                </div>

                <div className="fechaCard">
                    <p style={{ fontSize: "10px" }}>Valido hasta:</p>
                    <p>{formData.fechaTarjeta}</p>
                </div>
                <div className="nombreCard">
                    <p>{nombreFormateado}</p>
                </div>

            </div>
        </>
    )
}

export default TarjetaPago;