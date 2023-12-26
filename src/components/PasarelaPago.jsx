import React, { useState, useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import '../styles/pasarela.css';
import Tarjeta from './TarjetaPago';
import Button from './Button';
import ButtonAlert from '@mui/material/Button';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
import ResumenCompra from "./ResumenCompra";
import Swal from 'sweetalert2';

function PasarelaPago() {
    // manejo de pasarela de pago
    const { resetCompra, ocultarPasarelaPago } = useContext(AppContext);
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        nroTarjeta: "",
        nombreTarjeta: "",
        fechaTarjeta: "",
        codigoTarjeta: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    // manejo de errores para datos del formulario
    const [errors, setErrors] = useState({});
    // manejo de alerta de pago exitoso
    const [pagoSuccess, setPagoSuccess] = useState(false);


    // Nuevo estado para manejar la visibilidad de la alerta
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (pagoSuccess) {
            Swal.fire({
                title: "Pago exitoso",
                text: `${formData.nombre}, Gracias por tu compra`,
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed || result.isDismissed) {
                    resetCompra();
                    setShowAlert(false);  // Oculta la alerta después de manejarla
                }
            });

            // Establece el estado para mostrar la alerta
            setShowAlert(true);
        }
    }, [pagoSuccess]); // Dependencia del efecto



    // verificacion de datos del formulario al hacer click en pagar
    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        // Validar que todos los campos estén llenos
        if (!formData.nombre) {
            newErrors.nombre = "El nombre es requerido";
        }

        if (!formData.apellido) {
            newErrors.apellido = "El apellido es requerido";
        }

        //   verificar el campo mail
        var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        if (!validEmail.test(formData.correo)) {
            newErrors.correo = 'Correo invalido, por favor verifique';
        }
        // Verificar si el telefono contiene solo 10 dígitos numéricos
        var telefonoStr = formData.telefono.toString()
        if (telefonoStr.length !== 10) {
            newErrors.telefono = "El campo 'telefono' debe contener 10 digitos";
        }

        // VERIFICACION DE DATOS DE LA TARJETA
        // Verificar que el numero de tarjeta tenga 16 dígitos numéricos
        var nroTarjetaStr = formData.nroTarjeta.toString()
        if (nroTarjetaStr.length !== 16) {
            newErrors.nroTarjeta = "El campo 'Numero de Tarjeta' debe contener 16 digitos";
        }
        //  ingreso del nombre
        if (!formData.nombreTarjeta) {
            newErrors.nombreTarjeta = "El nombre de la tarjeta es requerido";
        }
        //   verificar que la fecha seleccionada no sea pasada
        var hoy = new Date();
        var fechaFormulario = new Date(formData.fechaTarjeta);

        // Comparamos solo las fechas =>  Lo iniciamos a 00:00 horas
        hoy.setHours(0, 0, 0, 0); //
        fechaFormulario.setHours(0, 0, 0, 0);

        if (hoy > fechaFormulario) {
            newErrors.fechaTarjeta = "Su tarjeta esta caducada. Verifique";
        }
        // Verificar que el numero de cvv tenga 3 dígitos numéricos
        var codigoTarjetaStr = formData.codigoTarjeta.toString()
        if (codigoTarjetaStr.length !== 3) {
            newErrors.codigoTarjeta = "El campo 'CVV' debe contener 3 digitos";
        }

        // Si hay errores, establecerlos en el estado y evitar continuar
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Si no hay errores, continua con la acción de pago
        if (Object.keys(newErrors).length === 0) {
            setPagoSuccess(true);
        }
    };




    return (
        <>
            <h1>Resumen de Compra</h1>
            <ResumenCompra />
            <h1 style={{marginTop:"60px"}}>Pasarela de Pago</h1>
            <div className="contenedorPasarela">

                <div className="contenedorForm">
                    <form onSubmit={handleSubmit} className="formularioPasarela">
                        <div className="entradasPasarela">
                            <label htmlFor="nombre" >Nombre</label>
                            <input type="text" id="nombre" name="nombre" value={formData.nombre || ""} onChange={handleChange} />
                            {errors.nombre && <p className="error-message">{errors.nombre}</p>}
                        </div>
                        <div className="entradasPasarela">
                            <label htmlFor="apellido" >Apellido</label>
                            <input type="text" id="apellido" name="apellido" value={formData.apellido || ""} onChange={handleChange} />
                            {errors.apellido && <p className="error-message">{errors.apellido}</p>}
                        </div>
                        <div className="entradasPasarela">
                            <label htmlFor="correo" >Email</label>
                            <input type="email" id="correo" name="correo" value={formData.correo || ""} onChange={handleChange} />
                            {errors.correo && <p className="error-message">{errors.correo}</p>}
                        </div>
                        <div className="entradasPasarela">
                            <label htmlFor="telefono" >Telefono</label>
                            <input type="number" id="telefono" name="telefono" value={formData.telefono || ""} onChange={handleChange} />
                            {errors.telefono && <p className="error-message">{errors.telefono}</p>}
                        </div>
                        {/* datos de la tarjeta */}
                        <div className="entradasPasarela">
                            <label htmlFor="nroTarjeta" >N° Tarjeta</label>
                            <input type="number" id="nroTarjeta" name="nroTarjeta" value={formData.nroTarjeta || ""} onChange={handleChange} />
                            {errors.nroTarjeta && <p className="error-message">{errors.nroTarjeta}</p>}
                        </div>
                        <div className="entradasPasarela">
                            <label htmlFor="nombreTarjeta" >Nombre en la Tarjeta</label>
                            <input type="text" id="nombreTarjeta" name="nombreTarjeta" value={formData.nombreTarjeta || ""} onChange={handleChange} />
                            {errors.nombreTarjeta && <p className="error-message">{errors.nombreTarjeta}</p>}
                        </div>
                        <div className="entradasPasarela">
                            <label htmlFor="fechaTarjeta" >Fecha de Vencimiento</label>
                            <input type="date" id="fechaTarjeta" name="fechaTarjeta" value={formData.fechaTarjeta || ""} onChange={handleChange} />
                            {errors.fechaTarjeta && <p className="error-message">{errors.fechaTarjeta}</p>}
                        </div>
                        <div className="entradasPasarela">
                            <label htmlFor="codigoTarjeta" >CVV</label>
                            <input type="number" id="codigoTarjeta" name="codigoTarjeta" value={formData.codigoTarjeta || ""} onChange={handleChange} />
                            {errors.codigoTarjeta && <p className="error-message">{errors.codigoTarjeta}</p>}
                        </div>
                        <Button type="submit" className="accion" titulo="Pagar" />
                    </form>
                </div>
                <div className="contenedorTarjeta">
                    <Tarjeta formData={formData} />
                </div>

            </div>

            {showAlert && (
                <div>
                    Gracias por tu compra. Redirigiendo a la lista de productos...
                </div>
            )}
        </>
    )
}

export default PasarelaPago;