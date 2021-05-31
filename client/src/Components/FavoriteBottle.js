import React, { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';
import axios from 'axios';

import Button from 'react-bootstrap/Button'

const FavoriteBottle = (props) => {
    const {userId, bottleId, favoriteStatus, wineName, wineProd, wineVin, wineCountry} = props;
    const [favorite, setFavorite] = useState(favoriteStatus);

    const favoriteHandler = (e) => {
        console.log(`favorite: ${favorite}`)
        {favorite ? setFavorite(false) : setFavorite(true)}
        console.log(`favorite: ${favorite}`)

        axios.put(`http://localhost:8000/api/user/${userId}/${bottleId}`, {
            "wineName" : wineName,
            "producer" : wineProd,
            "country" : wineCountry,
            "vintage" : wineVin,
            "favorite" : favorite
        }, {withCredentials: true})
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    return(
        <Button variant={favoriteStatus ? "success" : "danger"} onClick={favoriteHandler}>{favoriteStatus ? <p>favorited</p> : <p>not favorited</p> }</Button>
    )
};

export default FavoriteBottle;