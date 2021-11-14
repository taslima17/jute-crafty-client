import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://rocky-dawn-44434.herokuapp.com/product', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            }, body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                alert('product added successfully')
            }
        })
    }
    return (
        <div>
            <h1>Add Products</h1>
            <form onSubmit={handleSubmit(onSubmit)}>




                <input {...register("name", { required: true })} placeholder="Name" /> <br />
                <input {...register("img", { required: true })} placeholder="Image Url" /> <br />
                <input {...register("price", { required: true })} placeholder="Price" /> <br />
                <input {...register("description", { required: true })} placeholder="Add a description" /> <br />



                <input type="submit" value="Add Product" style={{ background: "rosybrown" }} />
            </form>
        </div>
    );
};

export default AddProduct;