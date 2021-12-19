import React from 'react';
import './Banner.css';
import banner from '../../../images/Banner/banner.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="container-fluid light-pink-bg py-5">
            <div className="row d-flex align-items-center text-uppercase px-5">
                <div className="col-md-7 text-start ps-5">
                    <h2>WELCOME TO</h2>
                    <h1 className="fw-bolder"> Trendy  <span className="pink-text"> Commerce</span> Shop</h1>
                    <p className="fs-6 w-75">We deliver high-quality, organic digital products. All our products are rich in nutrients and it give a delicious aroma.</p>
                    <Link to="/exploreProducts">
                        <button className="pink-btn px-5">Explore</button>
                    </Link>
                </div>
                <div className="col-md-5">
                    <div className="mt-2">
                        <img src={banner} alt="" className="img-fluid pb-4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;