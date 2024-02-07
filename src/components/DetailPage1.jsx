import '../App.css';
import { useState, useEffect } from "react";

export default function Details() {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null);
    const [nutritionalInfo, setNutritionalInfo] = useState(null);
    const [healthLabels, setHealthLabels] = useState(null);

    useEffect(() => {
        const url = "https://api.edamam.com/search?q=Chicken%20Nihari%20Recipe%20By%20Zubaida%20Tariq&app_id=4221393d&app_key=362a325c2c82392fc4b070a75c865d20";
        
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
  
    const handleNutritionalInfo = (index) => {
        setSelectedRecipeIndex(index);
        const recipe = recipes[index];
        setNutritionalInfo(recipe.totalNutrients);
        setHealthLabels(null); // Clear health labels
    };

    const handleHealthLabels = (index) => {
        setSelectedRecipeIndex(index);
        const recipe = recipes[index];
        setHealthLabels({
            label: recipe.label,
            healthLabels: recipe.healthLabels
        });
        setNutritionalInfo(null); // Clear nutritional info
    };

    return (
        <div className='bg-red-200'>
            <h1>Welcome to Recipe App</h1>

            <div className='flex justify-center items-center bg-white shadow-2xl'>
                {recipes.map((recipe, index) => (
                    <div key={index} className='flex flex-row'>
                        <div>
                            <h2>{recipe.label}</h2>
                            <img src={recipe.image} alt={recipe.label} />
                            <p>Calories: {recipe.calories.toFixed(2)}</p>
                            <p>Yield: {recipe.yield}</p>
                            <p>Cuisine Type: {recipe.cuisineType.join(', ')}</p>
                            <p>Diet Labels: {recipe.dietLabels.join(', ')}</p>
                        </div>
                        <div>
                            <ul>
                                {recipe.ingredientLines.map((ingredient, idx) => (
                                    <li key={idx}>{ingredient}</li>
                                ))}
                            </ul>
                            <a href={recipe.url} target="_blank" rel="noopener noreferrer">{recipe.source}</a>
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                <button onClick={() => handleNutritionalInfo(index)}>Check Nutritional Information</button>
                                <button onClick={() => handleHealthLabels(index)}>Check Health Labels</button>
                            </div>

                            {selectedRecipeIndex === index && (
                                <div>
                                    {nutritionalInfo && (
                                        <div>
                                            <h3>Nutritional Information for {recipe.label}</h3>
                                            <ul>
                                                {Object.entries(nutritionalInfo).map(([key, value]) => (
                                                    <li key={key}>{value.label}: {value.quantity.toFixed(2)} {value.unit}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {healthLabels && (
                                        <div>
                                            <h3>Health Labels for {healthLabels.label}</h3>
                                            <ul>
                                                {healthLabels.healthLabels.map((label, idx) => (
                                                    <li key={idx}>{label}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>  
                    </div>
                ))}
            </div>
        </div>
    );
}
