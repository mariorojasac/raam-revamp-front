import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PantryIndex from './PantryIndex';
import PantryShow from './PantryShow';

import React from 'react'

const Pantry = (props) => {
    const [ pantries, setPantries ] = useState([]);
    const PANTRY_BASE_URL = "https://raam-test-api-2.herokuapp.com/pantry/";

    const getPantries = async () => {
        // const data = await fetch(PANTRY_BASE_URL).then(Response => Response.json());
        const Response = await fetch(PANTRY_BASE_URL);
        const data = await Response.json();
        setPantries(data);
    };

    const createPantries = async (pantry) => {
        await fetch(PANTRY_BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(pantry)
        });
        getPantries();
    };

    const updatePantries = async (pantry, id) => {
        await fetch(PANTRY_BASE_URL + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(pantry)
        });
        getPantries()
    };

    const deletePantries = async id => {
        await fetch(PANTRY_BASE_URL + id, { method: 'DELETE' });
        getPantries();
    }

    useEffect(() => getPantries(), []);

    return (
        <main>
            <Switch>
                <Route exact path="/pantry">
                    <Index pantries={pantries} createPantries={createPantries}/>
                </Route>
                <Route path="/pantry/:id" render={(rp) => (
                    pantries.length ?
                    <Show 
                        {...rp}
                        pantries={pantries} 
                        updatePantries={updatePantries}
                        deletePantries={deletePantries}
                    />
                :
                <Redirect to="/" />
                )} />
            </Switch>
        </main>
    )
}

export default Pantry;
