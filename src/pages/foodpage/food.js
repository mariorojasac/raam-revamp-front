import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FoodIndex from './FoodIndex';
import FoodShow from './FoodShow';
Food

const Food = (props) => {
    const [foods, setFoods] = useState([]);

    const FOOD_BASE_URL = 'https://raam-test-api-2.herokuapp.com/food/';

    const getFood = async () => {
        const data = await fetch(FOOD_BASE_URL).then(response => response.json());
        setFoods(data);
    }
    
    const createFood = async (food) => {
        await fetch(FOOD_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(food)
        });

        getFood();
    }

    const updateFood = async (food, id) => {
        await fetch(FOOD_BASE_URL + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(food)
        });
        getFood();
    }

    const deleteFood = async id => {
        await fetch(FOOD_BASE_URL + id, {method: 'DELETE'});
        getFood();
    }

    useEffect(() => getFood(), [])

    
    return (
        <main>
            <Switch>
                <Route exact path='/food'>
                    <FoodIndex foods={foods} createFood={createFood}/>
                </Route>
                <Route 
                    path='/food/:id' 
                    render={(rp) => (
                        <FoodShow 
                        {...rp}
                        foods={foods}
                        updateFood={updateFood}
                        deleteFood={deleteFood}
                    />
                )}
                
                />
                

            </Switch>
        </main>
    )
};

export default Food;