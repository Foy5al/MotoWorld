import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/serviecs', data)
            .then(resp => {
                if (resp.data.insertedId) {
                    alert('Added data successfully');
                    reset({
                        name: '',
                        description: '',
                        price: '',
                        time: '',
                        imgurl: ''

                    })
                }
                console.log(resp);
            })
    }
    return (
        <div id='addservices'>
            <h1>Please add a service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="serviceName">Service Name</label>
                <input id='serviceName' {...register("name", { required: true })} placeholder="Engine service" />

                <label htmlFor="serviceName">Description</label>
                <textarea {...register("description")} placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, saepe." />


                <label htmlFor="serviceName">Price</label>
                <input type="number" {...register("price")} placeholder="Price" />

                <label htmlFor="serviceName">Times of Service</label>
                <input type="number" {...register("time")} placeholder="service Time" />

                <label htmlFor="serviceName">Image Url</label>
                <input {...register("imgurl")} placeholder="https://i.ibb.co/558CDnT/wiring.jpg" />
                <input className="warning" type="submit" />
            </form>
        </div>
    );
};

export default AddServices;