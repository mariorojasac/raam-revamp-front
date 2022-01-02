import React from 'react'

const PantryShow = () => {
    return (
        <div className='pantry'>
            <h1>{pantry?.name}</h1>
            <img src={pantry?.image} alt={pantry?.name} />
            <h2>{pantry?.location}</h2>
            <h2>{pantry?.description}</h2>
            <button id="delete" onClick={removePantry}>DELETE</button>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={editForm.name}
                onChange={handleChange}
                placeholder="name"
                name="name"
                />
                <input 
                type="text"
                value={editForm.image}
                onChange={handleChange}
                placeholder="image URL"
                name="image"
                />
                <input 
                type="text"
                value={editForm.location}
                onChange={handleChange}
                placeholder="location"
                name="location"
                />
                <input 
                type="text"
                value={editForm.description}
                onChange={handleChange}
                placeholder="description"
                name="description"
                />
                <input type="submit" value="Edit Pantry" />
            </form>
        </div>
    )
}

export default PantryShow;
