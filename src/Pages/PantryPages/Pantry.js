import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PantryIndex from './PantryIndex';

import React from 'react'

const Pantry = (props) => {
    const [ pantries, setPantries ] = useState(null);
    const PANTRY_BASE_URL = "https://raam-test-api-2.herokuapp.com";

    const getPantries = async () => {
        // const data = await fetch(PANTRY_BASE_URL + "/pantry").then(Response => Response.json());
        const Response = await fetch(PANTRY_BASE_URL + "/pantry");
        const data = await Response.json();
        setPantries(data);
    };

    const createPantries = async (pantry) => {
        await fetch(PANTRY_BASE_URL + "/pantry", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(pantry)
        });
        getPantries();
    };

    useEffect(() => getPantries(), []);


    return (
        <div>
            
        </div>
    )
}

export default Pantry;
