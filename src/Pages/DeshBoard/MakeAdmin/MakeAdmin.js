import { Alert, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleBlur = e => {
        const email = e.target.value;
        setEmail(email)
    }
    const { user } = useAuth();

    const handleSubmit = e => {
        e.preventDefault();

        console.log(user)
        if (user.email === "admin@gmail.com") {
            fetch('https://jutecrafts-server1.onrender.com/user/admin', {
                method: "PUT", headers: {
                    'content-type': 'application/json'
                }, body: JSON.stringify(user)
            }).then(res => res.json()).then(data => {
                console.log(data);
                setEmail('')
                setSuccess(true)
                alert('admin added successfully')
                // e.target.reset();
                // if (data.modifiedCount > 0) {

                // }
            })
        }
        else alert('you are not an admin')

    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email" type="email" onBlur={handleBlur} variant="standard"
                /> <br /> <br />
                <Button variant="contained" type="submit" sx={{ background: "black" }} onClick={handleSubmit}>Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Made admin successfully</Alert>
            }
        </div>
    );
};

export default MakeAdmin;