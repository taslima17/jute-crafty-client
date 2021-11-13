import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/product', {
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
            <form onSubmit={handleSubmit(onSubmit)}>




                <input {...register("name", { required: true })} placeholder="Name" /> <br />
                <input {...register("img", { required: true })} placeholder="Image Url" /> <br />
                <input {...register("price", { required: true })} placeholder="Price" /> <br />
                <input {...register("description", { required: true })} placeholder="Add a description" /> <br />



                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;