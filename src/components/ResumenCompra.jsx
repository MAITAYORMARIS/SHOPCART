import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function ResumenCompra() {
    const { carrito} = useContext(AppContext);
    const rows = carrito

    let total = 0; // variable para almacenar el total

    // Calcula el total recorriendo todo el array de productos en el carrito
    carrito.forEach((producto) => {
        total += producto.price * producto.cantidad; // Suma el precio * cantidad de cada producto al total
    });
    return (
        <TableContainer style={{width:"85%", marginLeft:"7.5%"}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Articulo</TableCell>
                        <TableCell align="right">Cantidad</TableCell>
                        <TableCell align="right">Total Item (USD)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.title.substring(0,15)}
                            </TableCell>
                            <TableCell align="right">{row.cantidad}</TableCell>
                            <TableCell align="right">{row.price * row.cantidad}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <p style={{fontWeight:"bold", fontSize:"15px", textAlign:"right"}}>Total a pagar: (USD) {total}</p>
        </TableContainer>
    );
}