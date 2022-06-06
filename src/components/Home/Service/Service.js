import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, price, description, time, imgurl } = service;
    return (
        <Col className="my-3" xs={12} md={6} lg={4}>
            <Card className='shadow' >
                <Card.Img variant="top img-size" src={imgurl} />
                <Card.Body>
                    <Card.Title className='title'>{name}</Card.Title>
                    <Card.Text>
                        <p className='text-primary fw-bold fs-5'>Price: <span className='taka'>৳</span> {price}</p>
                        <p className='text-danger'>Time of service: {time}</p>
                        {description}
                    </Card.Text>

                    <Link to={`/booking/${_id}`}>
                        <Button variant="warning">Book {name}</Button>
                    </Link>

                </Card.Body>
            </Card>
        </Col >
    );
};

export default Service;