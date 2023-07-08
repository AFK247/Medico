import React from 'react';
import Card from './Card';
import Carousel from './Carousel';
import ShopCategory from './ShopCategory';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Card></Card>
            <ShopCategory></ShopCategory>
        </div>
    );
};

export default Home;