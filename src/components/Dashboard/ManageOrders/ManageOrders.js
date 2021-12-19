import { Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [remove, setRemove] = useState(false);
    const [order, setOrder] = useState({});
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        fetch('https://evening-island-64478.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [remove, update])

    const handleRemove = (id) => {
        const proceed = window.confirm("Are you sure to remove order?");
        if (proceed) {
            fetch(`https://evening-island-64478.herokuapp.com/removeOrder/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Order successfully Removed!")
                        setRemove(!remove)
                    };
                })
        }
    }

    // update status
    const handleShipped = (id) => {
        fetch(`https://evening-island-64478.herokuapp.com/allOrders/${id}`)
            .then((res) => res.json())
            .then((data) => setOrder(data));
        setOrder(order.status = "Shipped");

        fetch(`https://evening-island-64478.herokuapp.com/allOrders/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("Order  Successfully Shipped!");
                    setUpdate(!update)
                }
            });
    }
    return (
        <div className="mb-5 px-2" style={{ minHeight: '500px' }}>
            <h1 className="pink-text mt-2">Manage All Orders</h1>
            <h3 className="light-pink-text">All customers ordered products are here</h3>
            <Table className="light-pink-bg my-5" responsive="sm" striped bordered hover>
                <thead>
                    <tr className="pink-text">
                        <th>No</th>
                        <th>User Name</th>
                        <th>Email </th>
                        <th>Phone</th>
                        <th>Product</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map((items, index) => <tr key={items?._id}>
                            <td>{index + 1}</td>
                            <td>{items?.username}</td>
                            <td>{items?.email}</td>
                            <td>{items?.phone}</td>
                            <td>{items?.productName} ({items?.status})</td>
                            <td>
                                <button onClick={() => handleShipped(items?._id)} className="btn btn-outline-info mt-1">Shipped</button>
                                <button onClick={() => handleRemove(items?._id)} className="btn btn-outline-danger ms-2 mt-1">Cancel</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;