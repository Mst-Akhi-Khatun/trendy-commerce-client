import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';


const Products = () => {
    const [items, setItems] = useProduct();

    return (
        <div className="container-fluid px-3 my-5">
            <h1 className="text-uppercase mb-5"><span className="pink-text">Lipsticks</span> We Provide</h1>
            {items?.length ? <div className="row row-cols-1 mb-5 row-cols-md-3 g-5">

                {
                    items.slice(0, 6).map(item =>
                        <div className="col" key={item._id}>
                            <div className="card h-100 d-flex align-items-center p-3">
                                <img src={item?.img} className="card-img-top" width="50px" height="170px" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title pink-text">{item?.name}</h5>
                                    <p className="card-text text-secondary" style={{ textAlign: "justify" }}> {item?.description}</p>
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
    );
};

export default Products;