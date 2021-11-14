import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';


const MakeAdmin = () => {
    const [email, setEmail] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleBlur = e => {
        const email = e.target.value;
        setEmail(email)
    }
    const handleSubmit = e => {
        e.preventDefault();
        const user = { email }
        console.log(user)
        fetch('http://localhost:5000/user/admin', {
            method: "PUT", headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(user)
        }).then(res => res.json()).then(data => {
            console.log(data);

            if (data.modifiedCount > 0) {
                setEmail('')
                setSuccess(true)
                alert('admin added successfully')
                e.target.reset();
            }
        })
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