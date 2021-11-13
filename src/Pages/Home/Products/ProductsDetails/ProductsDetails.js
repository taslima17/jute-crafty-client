import { Grid } from '@material-ui/core';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ProductsDetails.css'
import useAuth from '../../../../Hooks/useAuth';

const ProductsDetails = () => {
    const id = useParams().id;
    const [item, setItem] = useState([]);
    const { user } = useAuth()
    const [quantity, setQuantity] = useState(1);
    const [order, setOrder] = useState([]);

    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    const handleAddtoCart = (data) => {
        data.quantity = quantity;
        data.email = user.email;
        data.status = "pending";
        // fetch('http://localhost:5000/addtoCart')
        // .then(res=>res.json())
        // .then(data=>setOrder(data));
        // if(order.includes(data.name)){

        // }

        fetch('http://localhost:5000/addtoCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                alert('item added successfully');
            }
            )
    }

    return (
        <div style={{ padding: "50px" }} className="details">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                    <img style={{ width: "50%" }} src={item.img} alt="" />

                </Grid>
                <Grid item xs={12} md={6} >
                    <h1>{item.name}</h1>
                    <h3>Price: {item.price}</h3>
                    <p>{item.description}</p>

                    <div aria-label="Basic example">

                        <Button onClick={() => { setQuantity(quantity <= 2 ? 1 : quantity - 1); }} variant="secondary"><i class="fas fa-minus"></i></Button>
                        <Button variant="danger">{quantity}</Button>

                        <Button onClick={() => { setQuantity(quantity + 1); }} variant="secondary"><i class="fas fa-plus"></i></Button>
                        <br />
                        <Button variant="danger" onClick={() => { handleAddtoCart(item); }}>Add to Cart</Button>
                    </div>

                </Grid>

            </Grid>

        </div>
    );
};

export default ProductsDetails;