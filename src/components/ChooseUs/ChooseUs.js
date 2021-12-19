import React from 'react';
import image from '../../images/Chose-Us/chose-1.jpg';

const ChooseUs = () => {
    return (
        <div className="row container-fluid d-flex align-items-center mt-5 py-5 light-pink-bg">
            <div className="col-md-6">
                <img src={image} className="img-fluid w-75" alt="" />
            </div>
            <div className="col-md-6 text-start">
                <h1 className="text-uppercase mb-3">Why Choose <span className="pink-text">Lip Care ?</span></h1>

                <h4>Professional and Certified</h4>
                <p style={{ textAlign: 'justify' }}>
                    We provide the continual delivery of superior technical support while simultaneously providing industry leading customer.
                </p>
                <h4>Get Instant Product</h4>
                <p style={{ textAlign: 'justify' }}>
                    A booking is the arrangement that you make when you book something such as a hotel room, a table at a restaurant, a theatre seat, or a place on public transport.
                </p>
            </div>
        </div>
    );
};

export default ChooseUs;