import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const YourOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${user.email}`).then(res => res.json()).then(data => setOrders(data))
    }, [orders])
    return (
        <div>
            {
                orders.map(o => <h1>{o.name}</h1>)
            }
        </div>
    );
};

export default YourOrders;