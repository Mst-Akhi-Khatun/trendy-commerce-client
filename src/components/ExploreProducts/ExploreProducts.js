import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import Menubar from '../Header/Menubar/Menubar';


const ExploreProducts = () => {
    const [items, setItems] = useProduct();

    return (
        <div className="mb-5" style={{ minHeight: "600px" }}>
            <Menubar />
            <h1 className="text-uppercase mt-3"><span className="pink-text">Products</span> We Provide</h1>
            <div className="container px-4">
                {items?.length ? <div className="row row-cols-1 my-2 row-cols-md-3 gy-5">

                    {

                        items.map(item =>
                            <div className="col" key={item._id}>
                                <div className="card h-100 d-flex align-items-center p-3">
                                    <img src={item?.image} className="card-img-top" width="50px" height="200px" alt="..." />
                                    <div className="card-body text-center">
                                        <h6 className="card-title pink-text">{item?.title}</h6>
                                        <h6 className="card-title">Category: {item?.category}</h6>
                                        <p className="card-text text-secondary text-center"> {item?.description.slice(0, 60)}</p>
                                        <p className="card-text text-secondary text-center"> Ratings: {item?.rating?.rate} ({item?.rating?.count})</p>
                                        <h5 className="card-text pink-text">Price: ${item?.price}</h5>
                                        <Link to={`/order/${item?._id}`}>
                                            <button className="pink-btn mt-2 w-100">Order Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
                    :
                    <Spinner animation="border" />
                }
            </div>
        </div>
    );
};

export default ExploreProducts;