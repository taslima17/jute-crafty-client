import React from 'react';

import { useForm } from "react-hook-form";


const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            }, body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                alert('review added successfully')
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>




                <input {...register("name", { required: true })} placeholder="Name" /> <br />
                <input {...register("img", { required: true })} placeholder="Image Url" /> <br />
                <input {...register("rating", { required: true })} placeholder="Rating" /> <br />
                <input {...register("feedback", { required: true })} placeholder="Add Your FeedBack" /> <br />



                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;