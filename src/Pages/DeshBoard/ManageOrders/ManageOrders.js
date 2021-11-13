import React, { useEffect, useState } from 'react';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders').then(res => res.json()).then(data => setOrders(data))
    }, [])
    return (
        <div>
            {
                orders.map(o => <div>
                    <p>{o.name}</p> <button>{o.status}</button>
                </div>)
            }
        </div>
    );
};

export default ManageOrders;