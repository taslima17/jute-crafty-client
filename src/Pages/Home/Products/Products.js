
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useHistory } from 'react-router';
import { Grid } from '@material-ui/core';





const Products = () => {

    const [products, setProducts] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json()).then(data => setProducts(data))

    }, [products]);
    ;
    const handleDetails = id => {
        const url = `/products/${id}`;
        history.push(url);

    }

    return (
        <div>
            <h1 style={{ padding: "40px", fontSize: "40px", marginTop: "30px" }}>WELCOME TO PRODUCT STORE</h1>
            <Grid container spacing={4} style={{ width: "80%", margin: "auto" }}>
                {products.slice(2, 8).map((p, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="400px"
                                    image={p.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {p.name}
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{ mx: "auto" }}>
                                <Button onClick={() => handleDetails(p._id)} size="small" color="primary">
                                    See Details
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>




        </div >
    );
};

export default Products;