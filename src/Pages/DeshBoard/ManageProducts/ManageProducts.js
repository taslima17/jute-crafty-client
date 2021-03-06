import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('https://rocky-dawn-44434.herokuapp.com/products')
            .then(res => res.json()).then(data => setProducts(data))

    }, [products]);

    const handleDelete = data => {
        console.log(data)
        const isDelete = window.confirm("Are you confirm to delete?")
        if (isDelete) {
            fetch(`https://rocky-dawn-44434.herokuapp.com/product/${data._id}`, {
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
            <h1>Manage All Products</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead>

                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Manage Products</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow key={row._id}>
                                <TableCell>{row.name}</TableCell>



                                <TableCell align="right"><Button onClick={() => handleDelete(row)} variant="contained" title="ddelete from product collection">Remove Product</Button></TableCell>
                            </TableRow>
                        ))}


                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default ManageProducts;