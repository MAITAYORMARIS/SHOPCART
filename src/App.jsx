import React, { useEffect, useState } from 'react';
import './App.css';
// import TarjetaProducto from './components/tarjetaProducto';
import Header from './components/Header';
import AppContext from './context/AppContext';
import ListaProductos from './components/ListaProductos';
import axios from 'axios';

function App() {
  const [dataProductos, setDataProductos] = useState([
    // { id: 1, nombre: "producto 1", descripcion: "producto numero uno", precio: 25, imagen: "https://picsum.photos/200/300?random=1" },
    // { id: 2, nombre: "producto 2", descripcion: "producto numero dos", precio: 5, imagen: "https://picsum.photos/200/300?random=2" },
    // { id: 3, nombre: "producto 3", descripcion: "producto numero tres", precio: 235, imagen: "https://picsum.photos/200/300?random=3" },
    // { id: 4, nombre: "producto 4", descripcion: "producto numero cuatro", precio: 25, imagen: "https://picsum.photos/200/300?random=4" },
    // { id: 5, nombre: "producto 5", descripcion: "producto numero cinco", precio: 5, imagen: "https://picsum.photos/200/300?random=5" },
    // { id: 6, nombre: "producto 6", descripcion: "producto numero seis", precio: 235, imagen: "https://picsum.photos/200/300?random=6" }
  ])


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



  return (
    <>


      <AppContext.Provider value={{ dataProductos, carrito, eliminarProducto, agregarProducto, actualizarCantidad }}>
        <Header carrito={carrito} />
        <h1>Conoce nuestros Productos</h1>
        <ListaProductos />
      </AppContext.Provider>

    </>
  )
}

export default App;
