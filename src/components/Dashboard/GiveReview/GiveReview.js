import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const GiveReview = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch("https://evening-island-64478.herokuapp.com/review", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Successfully Sent');
                    reset()
                }
            })
    };
    return (
        <div className="container mt-3">
            <h1 className="pink-text">Give A Review About This Site</h1>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                        {user?.displayName && <input
                            type="text"
                            defaultValue={user?.displayName}
                            {...register("username", { required: true })}
                            className="form-control"
                            placeholder="User Name"
                        />}
                        {user?.email && <input
                            type="email"
                            defaultValue={user?.email}
                            {...register("email", { required: true })}
                            className="form-control my-3 "
                            placeholder="User Email"
                        />}
                        <textarea
                            type="text"
                            {...register("message", { required: true })}
                            className="form-control"
                            placeholder="Message"
                        />
                        <input
                            {...register("rating", { required: true, min: 0, max: 5 })}
                            className="form-control my-3 "
                            placeholder="Give ratings (a number between 0-5)"
                        />
                        <input type="submit" value="Send" className="pink-btn w-100 mb-5" />
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default GiveReview;