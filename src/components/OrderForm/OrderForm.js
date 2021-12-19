import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Menubar from '../Header/Menubar/Menubar';

const OrderForm = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [item, setItem] = useState({})

    useEffect(() => {
        fetch(`https://evening-island-64478.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })

    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = "Pending"
        data.price = item?.price;
        data.image = item?.image;
        fetch("https://evening-island-64478.herokuapp.com/order", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Successfully Placed');
                    reset()
                }
            })
    };

    return (
        <div style={{ minHeight: '400px' }}>
            <Menubar />
            <div className="row my-4">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <Card className="bg-dark text-white">
                        <Card.Img src={item?.image} alt="Card image" className="w-100" height="400px" style={{ opacity: 0.5 }} />
                        <Card.ImgOverlay>
                            <Card.Title className="text-white fs-2 mt-5">{item?.title}</Card.Title>
                            <Card.Text className="text-white fs-5 w-75 mx-auto">
                                {item?.description?.slice(0, 200)}
                            </Card.Text>
                            <Card.Text className="text-white fs-6 fw-bold">
                                Ratings: {item?.rating?.rate} ({item?.rating?.count})
                            </Card.Text>
                            <Card.Text className="text-white fs-4 fw-bold">
                                Price: $ {item?.price}
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 px-3">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                        {user?.displayName && <input
                            defaultValue={user?.displayName}
                            {...register("username", { required: true })}
                            className="form-control my-3 "
                            placeholder="User Name"
                        />}
                        {user?.email && <input
                            defaultValue={user?.email}
                            {...register("email", { required: true })}
                            className="form-control my-3 "
                            placeholder="User Email"
                        />}
                        <input
                            type="text"
                            {...register("address", { required: true })}
                            className="form-control my-3 "
                            placeholder="Address"
                        />
                        <input
                            type="tel"
                            {...register("phone", { required: true })}
                            className="form-control my-3 "
                            placeholder="Phone"
                        />
                        {item?.title && <input
                            defaultValue={item?.title}
                            {...register("productName", { required: true })}
                            className="form-control my-3 "
                            placeholder="Item Name"
                        />}
                        <input type="submit" value="Order Now" className="pink-btn w-100 mb-5" />
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default OrderForm;