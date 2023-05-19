import { Grid } from '@material-ui/core';
import React from 'react';
import './About.css'
import Container from '@mui/material/Container';
const About = () => {
    const content = ['Outstanding support', 'Best products for sale', 'Fast delivery', 'Trusted quality', 'Money refund Guaranteed', '24 hours shipping', 'Provide best tools ever', 'Lifetime updates & support']
    return (
        <div className="about">
            <Container>
                <Grid container rowSpacing={1}>

                    <Grid item xs={12} md={6}>
                        <div><img style={{ paddingTop: "50px" }} src="https://jutecrafty.com/wp-content/uploads/2020/07/Lamp-Item-6.jpg" width="100%" alt="" /></div>


                    </Grid>
                    <Grid item xs={12} md={6} sx={{ ps: 5 }} style={{ background: "rgb(184, 90, 28)", marginTop: "50px", color: "white", marginBottom: "10px" }} >
                        <div style={{ paddingLeft: "40px" }}><h4 style={{ fontSize: "30px" }}>Why We</h4>
                            <div style={{ fontSize: "22px", paddingBottom: "5px" }}>
                                {
                                    content.map(c => <h5><i class="fas fa-check-circle"></i> {c}</h5>)
                                }
                            </div></div>



                    </Grid>

                </Grid>
            </Container>

        </div>
    );
};

export default About;