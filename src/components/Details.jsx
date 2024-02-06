import '../App.css'

import { useState, useEffect } from "react";

export default function Details() {
    const [recipes, setRecipes] = useState([]);
    const url = "https://api.edamam.com/search?q=Chicken%20Nihari%20Recipe%20By%20Zubaida%20Tariq&app_id=4221393d&app_key=362a325c2c82392fc4b070a75c865d20";
    
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.hits.map(hit => hit.recipe));
            setRecipes(data.hits.map(hit => hit.recipe));
        })
        .catch(error => {
            console.error("Error fetching recipes:", error);
        });
    }, []);
  
    return (
        <div className='bg-red-200'>
            <h1 className="">Welcome to Recipe App</h1>
            <div className="flex justify-center mt-10">
                <input type="text" className="p-4 w-1/2" />
                <button className="bg-green-400 text-white p-4">Search</button>
            </div>

            <div>
                {recipes.map((recipe, index) => (
                    <div key={index}>
                        <h2>{recipe.label}</h2>
                        <p>Calories: {recipe.calories}</p>
                        <img src={recipe.image} alt={recipe.label} />
                        <ul>
                            {recipe.ingredients.map((ingredient, idx) => (
                                <li key={idx}>{ingredient.text}</li>
                            ))}
                        </ul>
                        <a href={recipe.url} target="_blank" rel="noopener noreferrer">{recipe.source}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
