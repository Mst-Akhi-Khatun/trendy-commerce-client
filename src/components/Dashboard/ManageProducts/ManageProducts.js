import React from 'react';
import { Spinner } from 'react-bootstrap';
import useProduct from '../../../hooks/useProduct';


const ManageProducts = () => {
    const [items, setItems] = useProduct();

    const removeItem = (id) => {
        const proceed = window.confirm('Are you sure you want to remove?')
        if (proceed) {
            fetch(`https://evening-island-64478.herokuapp.com/removeItem/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Item removed successfully!')
                        window.location.reload()
                    }
                })
        }
    }

    return (
        <div className="mb-5" style={{ minHeight: "600px" }}>
            <h1 className="text-uppercase mt-3">All Available <span className="pink-text">Trendy Products</span></h1>
            <div className="container-fluid px-4">
                {items?.length ? <div className="row row-cols-1 my-2 row-cols-md-3 g-5">

                    {
                        items.map(item =>
                            <div className="col">
                                <div className="card h-100 d-flex align-items-center p-3">
                                    <img src={item?.image} className="card-img-top" width="50px" height="200px" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title pink-text">{item?.title}</h5>
                                        <p className="card-text text-center text-secondary"> {item?.description?.slice(0, 90)}</p>
                                        <h5 className="card-text pink-text">Price: ${item?.price}</h5>

                                        <button onClick={() => removeItem(item?._id)} className="btn btn-danger rounded-pill px-4 mt-2">Remove Product</button>

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

export default ManageProducts;