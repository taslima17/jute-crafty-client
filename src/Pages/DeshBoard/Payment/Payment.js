import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe('pk_test_51JvxPrIeG1G2dcSVgQpDGiup1DzQByRrYi53ddd2whE4HmHvmvjGuLgMf06z5nFd0XKKXevya8YBdvwziLv97Njg00iteqgBPI');
const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`https://jutecrafts-server1.onrender.com/orders/${id}`).then(res => res.json()).then(data => setOrder(data))
    }, [id])
    console.log('i', id)
    return (
        <div>
            <h1>Payment for <span style={{ color: "seagreen" }}>{order.name}</span> </h1>
            <h3>pay : {order.price}$</h3>
            {order?.price && <Elements stripe={stripePromise}>
                <CheckOutForm order={order} ></CheckOutForm>
            </Elements>}

        </div>
    );
};

export default Payment;