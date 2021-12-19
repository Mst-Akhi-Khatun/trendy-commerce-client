import React from 'react';

const Footer = () => {
    return (
        <div className="footer-container bg-dark text-light p-4 pt-5">
            <div className="row">

                <div className="col-md-4">
                    <h4>
                        <span className="pink-text">Trendy</span> Commerce
                    </h4>
                    <h6 className="fw-normal">AR Plaza,Dhaka, Bangladesh..</h6>
                    <h6 className="fw-normal">Mail: abc@gmail.com</h6>
                    <i className="fab fa-facebook-square fs-2 mt-3"></i>
                    <i className="fab fa-linkedin fs-2 mx-4"></i>
                    <i className="fab fa-twitter-square fs-2"></i>
                    <i className="fab fa-whatsapp-square fs-2 ms-4"></i>
                </div>

                <div className="col-md-4 d-flex justify-content-center">
                    <div>
                        <h3>Subscribe Us Now:</h3>
                        <div className="input-group mt-3">
                            <input type="email" className="form-control" placeholder="your email address" />
                            <button className="pink-btn" type="button">Subscribe</button>
                        </div>
                        <p className="mt-3">Thanks for subscribing us.</p>
                    </div>



                </div>

                <div className="col-md-4">
                    <h3>Platform</h3>
                    <p>Partners</p>
                    <p>News & Blogs</p>
                    <p>FAQs</p>
                </div>
            </div>
            <hr />

            <footer>
                <p className="text-white text-center">&copy; Trendy Commerce All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Footer;