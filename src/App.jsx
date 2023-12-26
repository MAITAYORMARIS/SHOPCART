import React, { useEffect, useState } from 'react';
import './App.css';
// import TarjetaProducto from './components/tarjetaProducto';
import Header from './components/Header';
import PasarelaPago from './components/PasarelaPago';
import AppContext from './context/AppContext';
import ListaProductos from './components/ListaProductos';
import ResumenCompra from './components/ResumenCompra';
import Footer from './components/Footer'
import axios from 'axios';


function App() {
  const [dataProductos, setDataProductos] = useState([])


  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setDataProductos(response.data))

  }, []);

  // manejar las acciones sobre el carrito a nivel global
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
      // Si el producto existe, actualiza la cantidad en 1
      actualizarCantidad(producto.id, productoExistente.cantidad + 1);
    }
    else {

      setCarrito([...carrito, { ...producto, cantidad: 1 }])
    };
  };

  const eliminarProducto = (productoId) => {
    setCarrito(carrito.filter(item => item.id !== productoId));
  };

  const actualizarCantidad = (productoId, cantidad) => {
    setCarrito(carrito.map(item => (item.id === productoId ? { ...item, cantidad } : item)));
  };


  // gestionar pasarela de pago
  const [mostrarPasarela, setMostrarPasarela] = useState(false);
  const [mostrarResumen, setMostrarResumen]=useState(false);
  const mostrarPasarelaPago = () => {
    setMostrarPasarela(true);
    setMostrarResumen(true);
  };
  const ocultarPasarelaPago = () => {
    setMostrarPasarela(false);
    setMostrarResumen(false);
  };
  const resetCompra = () => {
    setCarrito([]); // Vaciar el carrito
    ocultarPasarelaPago();
  };


  return (
    <>


      <AppContext.Provider value={{ dataProductos, carrito, eliminarProducto, agregarProducto, actualizarCantidad, mostrarPasarela, mostrarPasarelaPago, ocultarPasarelaPago, resetCompra }}>
        <Header carrito={carrito} />
        {mostrarPasarela && <PasarelaPago />}
        

        {!mostrarPasarela && (
          <div className='listaProductos'>
            <h1>Conoce nuestros Productos</h1>
            <ListaProductos />
          </div>
        )}
        {/* <div className='listaProductos'>
          <h1>Conoce nuestros Productos</h1>
          <ListaProductos />
        </div> */}
<Footer />
      </AppContext.Provider>

    </>
  )
}

export default App;
