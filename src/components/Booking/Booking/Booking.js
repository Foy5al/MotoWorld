import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        axios.get(`https://rocky-wave-02571.herokuapp.com/service/${serviceId}`)
            .then(resp => setService(resp.data));
    }, [])
    return (
        <div className='mt-5 pt-2'>
            <h1>Booking service id: {serviceId}</h1>
            <div>
                <h3 >Booking service name : {service.name}</h3>
                <h5 className='text-info p-2'>Price: {service.price}</h5>
                <p>Service details: {service.description}</p>
                <img width='500px' src={service.imgurl} alt="" />

            </div>
        </div>
    );
};

export default Booking;