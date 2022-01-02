import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const FoodIndex = (props) => {


    
    const [newForm, setNewForm ] = useState(getNewState());

    

    const loaded = () => {
        return props.foods.map(food => (
            <div key={food._id} className="food">
                <Link to={`/food/${food._id}`}>
                    <h1>{food.name}</h1>
                </Link>
                <img src={food.img} alt={food.name} />
                <h3>{food.quantity}</h3>

            </div>
        ));
    }
        
            

                
                    

    const loading = () => <h1>Loading ...</h1>;

    const handleChange = (event) => {
        setNewForm(prevState => ({
                ...prevState,
                [event.target.name]: event.target.value
            }
        ));
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        props.createFood(newForm)
        setNewForm(getNewState());
    }

    function getNewState() {
        return {
            img: "",
            name: "",
            description: "",
            quantity: ""
        };
    }

    return(
        
        
        
            
                
        <section>
            <form className="Form" onSubmit={handleSubmit}>
                <input 
                value={newForm.img} 
                onChange={handleChange} 
                type="url"  
                placeholder="Image URL"
                name="img"/>

                <input 
                value={newForm.name} 
                onChange={handleChange} 
                type="text"  
                placeholder="Name"
                name="name"/>

                <textarea
                rows="10"
                cols="17"
                value={newForm.description} 
                onChange={handleChange} 
                type="text"  
                placeholder="Description"
                name="description"/>

                <input 
                value={newForm.quantity} 
                onChange={handleChange} 
                type="text"  
                placeholder="Quantity"
                name="quantity"/>

                <input type="submit" value= "Add" />
            </form>
            
                
            { props.foods ? loaded() : loading() }
        </section>
        
    )
};


export default FoodIndex; 