import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://jutecrafts-server1.onrender.com/reviews').then(res => res.json()).then(data => setReviews(data))
    }, [reviews])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div style={{ marginBottom: "60px" }}>
            <h2 style={{ padding: "40px", fontSize: "40px", marginTop: "30px" }}>What Our Customer Says About Us</h2>
            <Slider style={{ width: "70%", margin: "auto" }} {...settings}>
                {reviews.map(r => <div>
                    <img style={{ borderRadius: "50%", height: "150px", margin: "auto" }} src={r.img} alt="" />

                    <div style={{ padding: "30px", fontSize: "1.1rem" }}><h3>{r.name}</h3>
                        <Rating name="read-only" value={r.rating} />
                        <p>{r.feedback}</p></div>
                </div>)}


            </Slider>

        </div>
    );
};

export default Review;