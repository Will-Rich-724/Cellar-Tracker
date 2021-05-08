import React, { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';
import axios from 'axios';

import Table from 'react-bootstrap/Table'
import DrinkBottle from '../Components/DrinkBottle';
import LogOutButton from '../Components/LogOutButton';

const UserPage = (props) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${props.id}`, { withCredentials: true })
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setBottles(res.data.bottles);
            })
            .catch(err => console.log(err));
    }, [])

    //add removeFromDom

    return(
        <div className="main-body">
            <div>
                <h5>Welcome:</h5>
                <h4>{firstName}</h4>
                <LogOutButton />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Producer
                        </th>
                        <th>
                            Vintage
                        </th>
                        <th>
                            Country
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {bottles.map((bottle, index) => (
                        <tr>
                            <td>{bottle.wineName}</td>
                            <td>{bottle.producer}</td>
                            <td>{bottle.vintage}</td>
                            <td>{bottle.country}</td>
                            <td><DrinkBottle /></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default UserPage;