import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'

const Login = () => {
    const { user, singInUsingGoole } = useAuth();
    const { displayName, photoURL } = user;
    console.log(user);
    return (
        <div className="container">
            {
                user?.email ? <>
                    <img className='avatar border border-info shadow' src={photoURL} alt="img" />
                    <h2 className='text-dark'>Welcome <span className='text-info'>{displayName}</span> Thanks for signing up to keep in touch with <span className='text-info'>MotoWorld</span> 😁 </h2>
                    <p>Check our services here <Link variant='text-info' to="services">Servicers</Link></p>
                </> : <>
                    <h2>Please login</h2>
                    <button onClick={singInUsingGoole} className='btn btn-warning'>Continue with Google Mama 😉</button>
                </>
            }
        </div>
    );
};

export default Login;