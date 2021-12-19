import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch("https://evening-island-64478.herokuapp.com/addItem", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Item successfully added');
                    reset()
                }
            })
    };
    return (
        <div className="container mt-4">
            <h1 className="pink-text">Add A New Product</h1>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                        <input
                            type="text"
                            {...register("title", { required: true })}
                            className="form-control my-3 "
                            placeholder="Product Name"
                        />
                        <input
                            type="number"
                            {...register("price", { required: true })}
                            className="form-control my-3 "
                            placeholder="Price"
                        />
                        <input
                            type="text"
                            {...register("description", { required: true })}
                            className="form-control my-3 "
                            placeholder="Description"
                        />
                        <input
                            type="url"
                            {...register("image", { required: true })}
                            className="form-control my-3 "
                            placeholder="Image url link"
                        />
                        <input type="submit" value="Add Product" className="pink-btn w-100 mb-5" />
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default AddProduct;