import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ProductsBanner from './ProductsBanner/ProductsBanner';

const OurProducts = () => {
    const [products, setProducts] = useState([]);
    const history = useNavigate();
    useEffect(() => {
        fetch('https://jutecrafts-server1.onrender.com/products')
            .then(res => res.json()).then(data => setProducts(data))

    }, [products]);
    ;
    const handleDetails = id => {
        const url = `/products/${id}`;
        history(url);

    }
    return (
        <div>
            <ProductsBanner></ProductsBanner>
            <Grid container spacing={4} style={{ width: "80%", margin: "auto", marginTop: "100px", marginBottom: "50px" }}>
                {products.map((p, index) => (
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
                            <CardActions>
                                <Button onClick={() => handleDetails(p._id)} size="small" color="primary">
                                    See Details
                                </Button>
                            </CardActions>
                        </Card>

                    </Grid>
                ))}
            </Grid>


        </div>
    );
};

export default OurProducts;