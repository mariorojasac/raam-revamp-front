import { useState } from "react";

const FoodShow = (props) => {
    const id = props.match.params.id;
    const foods = props.foods;
    const food = foods.find(f => f._id === id);

    const [ editForm, setEditForm ] = useState(food);

    const handleChange = event => {
        setEditForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));

    }

    const handleSubmit = event => {
        event.preventDefault();
        const { _id, img, name, description, quantity } = editForm;
        props.updateFood({ img, name, description, quantity }, _id);
        props.history.push('/food');

    }

    const removeFood = () => {
        props.deleteFood(food._id);
        props.history.push('/food');
    }
    
    
    
    return(
        <div className="food">
            <img src={food?.img} alt={food?.name} />
            <h1>{food?.name}</h1>
            <h3>{food?.description}</h3>
            <h3>{food?.quantity}</h3>
            <button onClick={removeFood}>DELETE</button>
            <form onSubmit={handleSubmit} className="Form">
            <input 
                value={editForm.img} 
                onChange={handleChange} 
                type="url"  
                placeholder="Image URL"
                name="img"/>

            <input 
                value={editForm.name} 
                onChange={handleChange} 
                type="text"  
                placeholder="Name"
                name="name"/>

            <input 
                value={editForm.description} 
                onChange={handleChange} 
                type="text"  
                placeholder="Description"
                name="description"/>

            <input 
                value={editForm.quantity} 
                onChange={handleChange} 
                type="text"  
                placeholder="Quantity"
                name="quantity"/>
            <input 
                type="submit" 
                value="Edit" />
                
            </form>
        </div>
        
    )

};


export default FoodShow