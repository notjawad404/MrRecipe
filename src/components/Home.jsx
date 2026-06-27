import '../App.css'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const PAGE_SIZE = 10;
const MEALDB_BASE = 'https://www.themealdb.com/api/json/v1/1';

export default function Home() {
    const [allMeals, setAllMeals] = useState([]);
    const [displayed, setDisplayed] = useState([]);
    const [foodItem, setFoodItem] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const saved = localStorage.getItem('foodItem');
        if (saved) {
            setFoodItem(saved);
            searchMeal(saved);
        } else {
            getRandomMeal();
        }
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    }, []);

    const handleBeforeUnload = () => localStorage.removeItem('foodItem');

    const searchMeal = async (query) => {
        try {
            const response = await fetch(`${MEALDB_BASE}/search.php?s=${query}`);
            const data = await response.json();
            const meals = data.meals || [];
            setAllMeals(meals);
            setDisplayed(meals.slice(0, PAGE_SIZE));
        } catch (error) {
            console.error("Error fetching meals:", error);
        }
    };

    const getRandomMeal = async () => {
        try {
            const response = await fetch(`${MEALDB_BASE}/random.php`);
            const data = await response.json();
            const meal = data.meals[0];
            localStorage.setItem('foodItem', meal.strMeal);
            setFoodItem(meal.strMeal);
            searchMeal(meal.strMeal);
        } catch (error) {
            console.error("Error fetching random meal:", error);
        }
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setFoodItem(value);
        localStorage.setItem('foodItem', value);
    };

    const handleShowMore = () => {
        setDisplayed(prev => allMeals.slice(0, prev.length + PAGE_SIZE));
    };

    const sendData = (id) => {
        navigate('/details', { state: { id } });
    };

    return (
        <div className='h-screen overflow-y-auto bg-slate-700'>
            <h1 className="text-center font-semibold text-3xl text-white">Welcome to Mr Recipe</h1>
            <p className="text-center text-lg text-gray-300">Unlock Flavor, Fuel Health: Your Culinary Journey Starts Here!</p>
            <div className="flex justify-center mt-10">
                <form onSubmit={(e) => { e.preventDefault(); searchMeal(foodItem); }}>
                    <input
                        value={foodItem}
                        onChange={handleInputChange}
                        placeholder='Search Recipe'
                        type="text"
                        className="p-4 w-80 text-black bg-slate-200 shadow-2xl rounded-3xl"
                    />
                </form>
            </div>

            <div className='flex flex-wrap justify-around py-5'>
                {displayed.map((meal) => (
                    <div key={meal.idMeal} className='lg:w-1/4 md:w-1/3 sm:w-1/2 flex justify-between px-2 my-2'>
                        <div className='bg-slate-400 shadow-2xl rounded-2xl w-full h-72'>
                            <div className='bg-slate-200 shadow-md rounded-2xl'>
                                <img src={meal.strMealThumb} alt={meal.strMeal} className='w-96 p-2 h-52 rounded-2xl shadow-sm' />
                            </div>
                            <h2 className='text-lg font-medium mb-2 text-nowrap overflow-hidden'>
                                <span className='hover:text-wrap'>{meal.strMeal}</span>
                            </h2>
                            <button onClick={() => sendData(meal.idMeal)} className='bg-slate-800 text-white p-1 rounded-lg mx-2'>
                                View Recipe
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {displayed.length < allMeals.length && (
                <div className='flex justify-center items-center'>
                    <button onClick={handleShowMore} className='bg-slate-300 text-black shadow-lg p-2 mx-1 my-2 rounded-3xl'>
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
}
