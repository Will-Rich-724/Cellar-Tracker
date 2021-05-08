import React, { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';
import axios from 'axios';

import Table from `react-bootstrap/Tabel`;

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
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default UserPage;