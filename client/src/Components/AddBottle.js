import React, { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';
import axios from 'axios';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddBottle = (props) => {
    const {userId} = props;
    const [show, setShow] = useState(false);
    const [wineName, setWineName] = useState();
    const [producer, setProducer] = useState();
    const [vintage, setVintage] = useState();
    const [country, setCountry] = useState();


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const AddBottle = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/user/${userId}/account` , {
            wineName,
            producer,
            country,
            vintage
        },{withCredentials: true})
        .then(res => {console.log(res)
        handleClose()})
        .catch(err => console.log(err))
    };

    return (
        <>
            <Button onClick={handleShow}></Button>
            <Modal>
                show={show}
                onHide={handleClose}
                backdrop="static"

                <Modal.Header closeButton>
                    <Modal.Title>Add New bottle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={AddBottle}>
                        <Form.Group controlId="wineName">
                            <Form.Label>Wine Name</Form.Label>
                            <Form.Control type="string" placeholder="Wine Name" onChange={e => setWineName(e.target.value)} />
                            {/* {errors.wineName ? <p>{errors.wineName.message}</p> : ""} */}
                        </Form.Group>
                        <Form.Group controlId="producer">
                            <Form.Label>Producer</Form.Label>
                            <Form.Control type="string" placeholder="Prodcer" onChange={e => setProducer(e.target.value)} />
                            {/* {errors.producer ? <p>{errors.producer.message}</p> : ""} */}
                        </Form.Group>
                        <Form.Group controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="string" placeholder="Country" onChange={e => setCountry(e.target.value)} />
                            {/* {errors.country ? <p>{errors.country.message}</p> : ""} */}
                        </Form.Group>
                        <Form.Group controlId="vintage">
                            <Form.Label>Vintage</Form.Label>
                            <Form.Control type="string" placeholder="vintage" onChange={e => setVintage(e.target.value)} />
                            {/* {errors.vintage ? <p>{errors.vintage.message}</p> : ""} */}
                        </Form.Group>
                        <Button variant="success" type="Submit">Add Bottle</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
};

export default AddBottle;