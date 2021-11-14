import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

const YourOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const history = useHistory();
    useEffect(() => {
        fetch(`https://rocky-dawn-44434.herokuapp.com/order?email=${user.email}`).then(res => res.json()).then(data => setOrders(data))
    }, [orders]);

    const handleDelete = data => {
        console.log(data)
        const isDelete = window.confirm("Are you confirm to delete?")
        if (isDelete) {
            fetch(`https://rocky-dawn-44434.herokuapp.com/orders/${data._id}`, {
                method: "DELETE", headers: {
                    'content-type': "application/json"
                }
            }).then(res => res.json()).then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert("deleted successfully")
                }
            })
        }
    }
    return (
        <div>
            <h1>Manage Your Orders</h1>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                                Details
                            </TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Total Cost</TableCell>
                            <TableCell align="right">Manage Order</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow key={row._id}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{parseInt(row.price) * parseInt(row.quantity)}</TableCell>
                                <TableCell align="right"><Button onClick={() => handleDelete(row)} variant="contained">Remove Product</Button></TableCell>
                            </TableRow>
                        ))}


                    </TableBody>
                </Table>
            </TableContainer>
            <Button sx={{ my: 5 }} variant="contained" onClick={() => history.push('/dashboard/payment')}>Check Out</Button>
        </div>
    );
};

export default YourOrders;