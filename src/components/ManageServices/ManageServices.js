import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setservices] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(resp => setservices(resp.data))
    }, [])

    const handleDeleteBtn = id => {
        axios.delete(`http://localhost:5000/services/${id}`)
            .then(resp => {
                console.log(resp);
                if (resp.data.deletedCount === 1) {
                    alert('Item is delete successfully')
                    const remaining = services.filter(service => service._id !== id);
                    setservices(remaining);
                }
            });
    }

    return (
        <div className='p-5'>
            {
                services.map(service => <div className="w-50 mx-auto d-flex justify-content-between flex-row border-bottom mb-3" key={service._id}>
                    <div><h3>{service.name}</h3></div>
                    <div><button onClick={() => { handleDeleteBtn(service._id) }} className='btn btn-danger'>Delete</button></div>
                </div>)
            }
        </div>
    );
};

export default ManageServices;