import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ProductsBanner from './ProductsBanner/ProductsBanner';

const OurProducts = () => {
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
            <ProductsBanner></ProductsBanner>
            <Grid container spacing={4} style={{ width: "80%", margin: "auto" }}>
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
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
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