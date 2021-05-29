import React, { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';
import axios from 'axios';

import Table from 'react-bootstrap/Table'
import DrinkBottle from '../Components/DrinkBottle';
import LogOutButton from '../Components/LogOutButton';
import AddBottle from '../Components/AddBottle';

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
    }, [bottles])

    const removeFromDom = (bottleId) => { 
        setBottles(bottles.filter(bottle => bottle._id != bottleId))
    };

    return(
        <div className="main-body">
            <div>
                <h5>Welcome:</h5>
                <h4>{firstName}</h4>
                <LogOutButton />
                <AddBottle userId={props.id}/>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            Favorite
                        </th>
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
                            <td>{bottle.favorite}</td>
                            <td>{bottle.wineName}</td>
                            <td>{bottle.producer}</td>
                            <td>{bottle.vintage}</td>
                            <td>{bottle.country}</td>
                            <td><DrinkBottle bottleId={bottle._id} userId={props.id} successCallback={() =>removeFromDom(bottle._id)} /></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default UserPage;