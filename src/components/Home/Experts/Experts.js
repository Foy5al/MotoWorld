import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        {
            id: 1,
            name: 'David',
            xpart: 'Engine',
            img: 'https://i.ibb.co/0VM3FQD/engine.jpg'
        },
        {
            id: 2,
            name: 'Maxwell',
            xpart: 'Paint',
            img: 'https://i.ibb.co/8brFtcq/mod.jpg'
        },
        {
            id: 3,
            name: 'MacLaren',
            xpart: 'ECU',
            img: 'https://i.ibb.co/8XfHMCD/performance.jpg'
        },
        {
            id: 4,
            name: 'Sofia',
            xpart: 'Engine',
            img: 'https://i.ibb.co/558CDnT/wiring.jpg'
        }
    ];
    return (
        <Container id="experts" className="my-5">
            <h1 className='text-info p-2'>Our Skilled Team is waitting for you</h1>

            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row className='mx-auto'>
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </Row>
        </Container>
    );
};

export default Experts;