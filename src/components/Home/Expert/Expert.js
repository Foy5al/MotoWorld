import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Expert = ({ expert }) => {
    const { name, img, xpart } = expert;
    return (
        <>
            <Col xs={12} md={6} lg={4}>
                <Card className="mx-auto my-3 shadow rounded-pill bg-info" style={{ width: '18rem' }}>
                    <Card.Img variant="top img-size px-1 rounded-circle" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <h5 className='text-danger'>-{xpart} Expert-</h5>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Expert;