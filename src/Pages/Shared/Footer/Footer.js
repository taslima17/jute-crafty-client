import { Grid } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <div style={{ background: "rgba(255, 247, 247, 1)", padding: "100px" }}>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} >

                    <Grid item xs={12} sm={6} md={4} >
                        <img style={{ width: "200px", margin: "auto" }} src={logo} alt="" />
                        <p>We have been working since 1998 as manufacturer, exporter & supplier of Jute Bag & Handicraft.</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <h1>Privacy Policy</h1>
                        <p>Terms and condition</p>
                        <p>Status</p>
                        <div className="icons" >
                            <i style={{ background: "black", color: "white", padding: "10px 15px", borderRadius: "50%" }} class="fab fa-facebook-f"></i>
                            <i style={{ background: "black", color: "white", padding: "10px ", borderRadius: "50%" }} class="fab fa-twitter"></i>
                            <i style={{ background: "black", color: "white", padding: "10px ", borderRadius: "50%" }} class="fab fa-linkedin-in"></i>
                            <i style={{ background: "black", color: "white", padding: "10px ", borderRadius: "50%" }} class="fab fa-instagram"></i>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <h1>Contract Information</h1>
                        <h4>Managing Director</h4>
                        <p>Taslima Rumky</p>
                        <p>Email:taslimarumky17@gmail.co</p>
                        <p>Phone:0175000023</p>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
};

export default Footer;