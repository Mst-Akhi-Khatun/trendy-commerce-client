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
            <h1 className="text-uppercase mt-3"><span className="pink-text">Lipsticks</span> We Provide</h1>
            <div className="container-fluid px-4">
                {items?.length ? <div className="row row-cols-1 my-2 row-cols-md-3 g-5">

                    {
                        items.map(item =>
                            <div className="col">
                                <div className="card h-100 d-flex align-items-center p-3">
                                    <img src={item?.img} className="card-img-top" width="50px" height="170px" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title pink-text">{item?.name}</h5>
                                        <p className="card-text w-75 mx-auto text-secondary"> {item?.description}</p>
                                        <h5 className="card-text pink-text">Price: ${item?.price}</h5>
                                        <Link to={`/order/${item?._id}`}>
                                            <button className="pink-btn mt-2">Order Now</button>
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