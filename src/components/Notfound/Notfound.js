import React from 'react';
import { NavLink } from 'react-router-dom';
import notfound from '../../imgs/notfoundimg.jpg'
const Notfound = () => {
    return (
        <div className='mt-5'>
            <h1 className='pt-5'>404 page not found</h1>
            <img width="100%" src={notfound} alt="" />
            <NavLink to="/home">Back to Home</NavLink>
        </div>
    );
};

export default Notfound;