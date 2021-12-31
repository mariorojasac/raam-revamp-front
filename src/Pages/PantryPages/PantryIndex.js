import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react-router-dom';

import React from 'react'

const PantryIndex = () => {
    const [newForm, setNewForm] = useState(getNewState());
    function getNewState() {
        return {
            name: "",
            image: "",
            location: "",
            description: ""
        }
    }

    return (
        <div>
            
        </div>
    )
}

export default PantryIndex;
