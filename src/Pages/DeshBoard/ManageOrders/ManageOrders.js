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
import { useNavigate } from 'react-router';

const ManageOrders = () => {

    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [payment, setPayment] = useState(0)
    const history = useNavigate();
    useEffect(() => {
        fetch('https://jutecrafts-server1.onrender.com/orders').then(res => res.json()).then(data => setOrders(data))
    }, [orders])

    const handleDelete = data => {
        console.log(data)
        const isDelete = window.confirm("Are you confirm to delete?")
        if (isDelete) {
            fetch(`https://jutecrafts-server1.onrender.com/orders/${data._id}`, {
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
    const handleApprove = data => {
        data.status = "approved";
        fetch(`https://jutecrafts-server1.onrender.com/orders/${data._id}`, {
            method: "PUT", headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                alert('approved')
            }
        })
    }
    const handlePay = (id) => {
        history(`/payment/${id}`)
    }
    return (
        <div>
            <h1>Manage All Orders</h1>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                                Details
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell>User Email</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow key={row._id}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell align="right"> <Button title="If the product is ready to delivered. Click the pending button to make it approved " onClick={() => handleApprove(row)} variant="contained">{row.status === "approved" ? "shipped" : "pending"}</Button></TableCell>

                                <TableCell align="right"><Button onClick={() => handleDelete(row)} variant="contained" title="delivered?delete from order collection">Remove Product</Button></TableCell>
                                {
                                    payment ? "Paid" : <TableCell align="right"><Button variant="contained" onClick={() => handlePay(row._id)} >Pay</Button></TableCell>
                                }

                            </TableRow>
                        ))}


                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};





export default ManageOrders;