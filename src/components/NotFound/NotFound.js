import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/Not-Found/not-found.png'

const NotFound = () => {
    return (
        <div className="container text-center py-5">
            <img src={error} className="w-100" height="500" alt="" />

            <Link to="/home">
                <button className="pink-btn text-white mt-4">BACK TO HOME PAGE</button>
            </Link>
        </div>
    );
};

export default NotFound;