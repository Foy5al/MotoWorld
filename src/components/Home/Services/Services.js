import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://rocky-wave-02571.herokuapp.com/services')
            .then(resp => resp.json())
            .then(data => setServices(data));
    }, []);
    console.log(services);

    return (
        <div id="services" className="container my-5 py-2">
            <h1>This is our services</h1>
            <Row className="mx-auto">
                {services[0]?.name ?
                    <>
                        {
                            services.map(service => <Service key={service._id} service={service}></Service>)

                        }
                    </> : <div height='500px'>Loading...<Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    /><Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                    </div>
                }
            </Row>
        </div>
    );
};

export default Services;