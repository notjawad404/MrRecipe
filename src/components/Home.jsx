import { Link } from 'react-router-dom';
import '../App.css'

import { useState } from "react";

export default function Home() {
    const [recipes, setRecipes] = useState([]);
    const [foodItem, setFoodItem] = useState('');

    const SearchRecipe = (foodItem) => {
        const url = `https://api.edamam.com/search?q=${foodItem}&app_id=4221393d&app_key=362a325c2c82392fc4b070a75c865d20`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.hits.map(hit => hit.recipe));
                setRecipes(data.hits.map(hit => hit.recipe));
            })
            .catch(error => {
                console.error("Error fetching recipes:", error);
            });
    }

    return (
        <div className='h-screen overflow-y-auto'>
            <h1 className="text-center font-semibold text-3xl">Welcome to Recipe App</h1>
            <div className="flex justify-center mt-10">
                <form onSubmit={(e) => { e.preventDefault(); SearchRecipe(foodItem); }}>
                    <input value={foodItem} onChange={(e) => setFoodItem(e.target.value)} type="text" className="p-4 w-80 text-black bg-slate-200 shadow-2xl rounded-3xl" />
                </form>
            </div>

            <div className='flex flex-wrap justify-around py-5'>
                {recipes.map((recipe, index) => (
                    <div key={index} className='w-1/4 flex justify-between px-2 my-2'>

                        <div className='bg-whie shadow-2xl rounded-2xl w-full h-80'>
                            <div className=' bg-slate-200 shadow-md rounded-2xl'>
                                <img src={recipe.image} alt={recipe.label} className=' w-96 p-2 h-52 rounded-2xl shadow-sm' />

                            </div>

                            <h2 className='text-lg font-medium mb-2 text-nowrap overflow-hidden'>
                                <span className='hover:text-wrap'>{recipe.label}</span>
                            </h2>
                            <Link to={recipe.url} target="_blank" rel="noopener noreferrer" className=' text-blue-600 px-2 py-1'>{recipe.source}</Link><br></br>
                            <button className='py-2'>
                                <Link to={`/details/${recipe.label}`} className=' bg-slate-800 text-white p-1 rounded-lg mx-2'>View Recipe</Link>
                            </button>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    );
}