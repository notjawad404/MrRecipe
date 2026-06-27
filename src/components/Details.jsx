import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MEALDB_BASE = 'https://www.themealdb.com/api/json/v1/1';

function getIngredients(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            ingredients.push(`${measure?.trim() ?? ''} ${ingredient.trim()}`.trim());
        }
    }
    return ingredients;
}

export default function Details() {
    const [meal, setMeal] = useState(null);
    const [activeTab, setActiveTab] = useState('ingredients');

    const location = useLocation();
    const { id } = location.state || {};

    useEffect(() => {
        if (!id) {
            console.error("Meal ID is undefined.");
            return;
        }
        const fetchData = async () => {
            try {
                const response = await fetch(`${MEALDB_BASE}/lookup.php?i=${id}`);
                const data = await response.json();
                setMeal(data.meals?.[0] ?? null);
            } catch (error) {
                console.error("Error fetching meal:", error);
            }
        };
        fetchData();
    }, []);

    if (!meal) {
        return (
            <div className="h-screen bg-slate-700 flex items-center justify-center text-white text-2xl">
                Loading...
            </div>
        );
    }

    const ingredients = getIngredients(meal);

    return (
        <div className="h-screen overflow-y-auto bg-slate-700 font-sans">
            <div className="text-white flex flex-row py-2">
                <Link to='/' className="text-xl px-5">Home</Link>
                <h1 className="lg:text-3xl px-5 text-center">Foodie Hub</h1>
            </div>

            <div className="w-3/4 mx-auto bg-white shadow-2xl">
                <div className="flex lg:flex-row flex-col">
                    {/* Left panel */}
                    <div className="lg:w-1/2 w-full lg:bg-gradient-to-l bg-gradient-to-t to-slate-900 from-slate-600 text-white p-3">
                        <h2 className="text-center text-lg py-1">{meal.strMeal}</h2>
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-lg" />
                        <p className="text-sm py-1"><span className="text-lg">Category: </span>{meal.strCategory}</p>
                        <p className="text-sm py-1"><span className="text-lg">Cuisine: </span>{meal.strArea}</p>
                        {meal.strSource && (
                            <p className="text-sm py-1">
                                <span className="text-lg">Source: </span>
                                <Link to={meal.strSource} target="_blank" rel="noopener noreferrer" className="text-blue-400 px-2 py-1">View Original</Link>
                            </p>
                        )}
                        {meal.strYoutube && (
                            <p className="text-sm py-1">
                                <span className="text-lg">Video: </span>
                                <Link to={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="text-red-400 px-2 py-1">Watch on YouTube</Link>
                            </p>
                        )}

                        <div className="flex flex-col">
                            <button className="bg-slate-300 text-black shadow-lg p-2 mx-1 my-2 rounded-3xl w-3/4" onClick={() => setActiveTab('ingredients')}>Ingredients</button>
                            <button className="bg-slate-300 text-black shadow-lg p-2 mx-1 my-2 rounded-3xl w-3/4" onClick={() => setActiveTab('instructions')}>Instructions</button>
                            <button className="bg-slate-300 text-black shadow-lg p-2 mx-1 my-2 rounded-3xl w-3/4" onClick={() => setActiveTab('tags')}>Tags</button>
                        </div>
                    </div>

                    {/* Right panel */}
                    <div className="lg:w-1/2 w-full lg:bg-gradient-to-r bg-gradient-to-b to-slate-900 from-slate-600 text-white text-center">
                        {activeTab === 'ingredients' && (
                            <div className="text-lg font-semibold">
                                <h3>Ingredients</h3>
                                <ul>
                                    {ingredients.map((item, idx) => (
                                        <li key={idx} className="border-x-2 border-y-2 border-gray-400">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === 'instructions' && (
                            <div className="text-sm font-normal p-4 text-left">
                                <h3 className="text-lg font-semibold text-center mb-2">Instructions</h3>
                                <p className="whitespace-pre-line">{meal.strInstructions}</p>
                            </div>
                        )}

                        {activeTab === 'tags' && (
                            <div>
                                <h3 className="text-center text-lg font-semibold">Tags</h3>
                                {meal.strTags ? (
                                    <ol>
                                        {meal.strTags.split(',').map((tag, idx) => (
                                            <li key={idx} className="border-x-2 border-y-2 border-gray-400">{tag.trim()}</li>
                                        ))}
                                    </ol>
                                ) : (
                                    <p className="p-4">No tags available.</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
