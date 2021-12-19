import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import Banner from '../Header/Banner/Banner';
import Menubar from '../Header/Menubar/Menubar';
import Products from '../Products/Products';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            <Menubar />
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;