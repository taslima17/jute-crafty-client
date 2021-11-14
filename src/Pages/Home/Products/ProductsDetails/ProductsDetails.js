import { Grid } from '@material-ui/core';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ProductsDetails.css'
import useAuth from '../../../../Hooks/useAuth';
import { useForm } from "react-hook-form";

const ProductsDetails = () => {
    const id = useParams().id;
    const [item, setItem] = useState([]);
    const { user } = useAuth()
    const [quantity, setQuantity] = useState(1);
    const [order, setOrder] = useState([]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    console.log(id)
    useEffect(() => {
        fetch(`https://rocky-dawn-44434.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    const onSubmit = (data) => {
        console.log(data);
        data.price = item.price;
        data.quantity = quantity;
        // data.email = user.email;
        data.status = "pending";
        // fetch('http://localhost:5000/addtoCart')
        // .then(res=>res.json())
        // .then(data=>setOrder(data));
        // if(order.includes(data.name)){

        // }

        fetch('https://rocky-dawn-44434.herokuapp.com/addtoCart', {
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
                    <h1>{item.name}</h1>
                    <h3>Price: {item.price}</h3>
                    <p>{item.description}</p>
                </Grid>
                <Grid item xs={12} md={6} >


                    <div aria-label="Basic example">
                        <h3>Add Quantity</h3>
                        <Button onClick={() => { setQuantity(quantity <= 2 ? 1 : quantity - 1); }} variant="secondary"><i class="fas fa-minus"></i></Button>
                        <Button style={{ background: "brown", padding: "10px 50px", borderRadius: "15px", color: "white" }}>{quantity}</Button>

                        <Button onClick={() => { setQuantity(quantity + 1); }} variant="secondary"><i class="fas fa-plus"></i></Button>
                        <br />
                        <form onSubmit={handleSubmit(onSubmit)}>




                            <input {...register("name", { required: true })} value={item.name} placeholder="product name" /> <br />
                            <input {...register("email", { required: true })} value={user.email} placeholder="Email" /> <br />
                            <input {...register("address", { required: true })} placeholder="address" /> <br />
                            <input {...register("phoneNumber", { required: true })} placeholder="Phone Number" /> <br />
                            <input {...register("quantity", { required: true })} value={quantity} placeholder="quantity" /> <br />



                            <input type="submit" value="Add to Cart" />
                        </form>
                        {/* <Button variant="danger" onClick={() => { handleAddtoCart(item); }}>Add to Cart</Button> */}
                    </div>

                </Grid>

            </Grid>

        </div>
    );
};

export default ProductsDetails;