import React, { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';
import axios from 'axios';

import Button from 'react-bootstrap/Button'

const DrinkBottle = (props) => {
    const {bottleId, userId, successCallback} = props

    const deleteBottle = e => {
        axios.delete(`http://localhost:8000/api/user/${userId}/${bottleId}`)
        .then(res => {successCallback();})
    }

    return(
        <Button variant="danger" onClick={deleteBottle} >Remove bottle</Button>
    )
}

export default DrinkBottle;