import React, { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';
import axios from 'axios';

import Button from 'react-bootstrap/Button'

const FavoriteBottle = (props) => {
    const {userId, bottleId, favoriteStatus, wineName, wineProd, wineVin, wineCountry} = props;
    // Handler:
    // First ternary based on current state of favorite
    // Second Axios update bottle
    const favoriteHandler = (e) => {

    }

    // Return:
    // Button: onClick => Handler
    // ternary based on current state of favorite
    return(
        <Button variant="{favoriteHandler ? success : danger}" onClick={favoriteHandler}>Ternary Function</Button>
    )
};

export default FavoriteBottle;