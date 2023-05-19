import React from 'react';

import { useForm } from "react-hook-form";
import './addReview.css'


const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://jutecrafts-server1.onrender.com/review', {
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
            <h1>Add Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>




                <input {...register("name", { required: true })} placeholder="Name" /> <br />
                <input {...register("img", { required: true })} placeholder="Image Url" /> <br />
                <input {...register("rating", { required: true })} placeholder="Rating" /> <br />
                <input {...register("feedback", { required: true })} placeholder="Add Your FeedBack" /> <br />



                <input type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;