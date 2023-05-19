import { CircularProgress } from '@material-ui/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth'

const CheckOutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { price, _id } = order;
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://jutecrafts-server1.onrender.com/create-payment-intent', {
            method: "POST", headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify({ price })
        }).then(res => res.json()).then(data => setClientSecret(data.clientSecret))

    }, [price])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {

            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        setProcessing(true);
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
            setSuccess('')
            setProcessing(false)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')

        }
        //payment intent
        console.log(clientSecret)
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
            setSuccess('')
            setProcessing(false)
        }
        else {
            setError('')
            setSuccess('your payment processed successfully');
            setProcessing(false);
            const payment = {
                amount: paymentIntent.amount,
                transaction: paymentIntent.client_secret.slice('_secret')[0],
                created: paymentIntent.created,
                last4: paymentMethod.card.last4

            }
            const url = `https://jutecrafts-server1.onrender.com/order/${_id}`;
            fetch(url, {
                method: "PUT", headers: {
                    'content-type': 'application/json'
                }
                , body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => console.log(data))
        }
    }

    return (
        <div><form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#0a07f4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {processing ? <CircularProgress /> : <button type="submit" disabled={!stripe || success}>
                Pay {price}$
            </button>}

        </form>
            <p style={{ color: "red" }}>{error}</p>
            <p style={{ color: "green" }}>{success}</p>
        </div>
    );
};

export default CheckOutForm;