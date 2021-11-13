import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Products></Products>
            <Review></Review>
        </div>
    );
};

export default Home;