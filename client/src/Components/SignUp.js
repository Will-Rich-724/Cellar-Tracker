import React, { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';

const SignUp = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [bottles, setBottles] = useState([])

    const register = e => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/register", {
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                bottles
            },
                { withCredentials: true })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div>
            <Form onSubmit={register}>
                <Form.Row>
                    <Form.Group as={Col} controlId="firstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" onChange={e => setFirstName(e.target.value)} />
                        {errors.firstName ? <p>{errors.firstName.message}</p> : ""}
                    </Form.Group>
                    <Form.Group as={Col} controlId="lastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" onChange={e => setLastName(e.target.value)} />
                        {errors.lastName ? <p>{errors.lastName.message}</p> : ""}
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="email">
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" onChange={e => setEmail(e.target.value)} />
                    {errors.email ? <p>{errors.email.message}</p> : ""}
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                    {errors.password ? <p>{errors.password.message}</p> : ""}
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} />
                    {errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : ""}
                </Form.Group>
                <Button variant="primary" type="Submit">Sign Up</Button>
                <Link to={'/'}><Button>Back to Login</Button></Link>
            </Form>
            
        </div>
    )
};

export default SignUp;
