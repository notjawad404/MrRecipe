import '../App.css'

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [recipes, setRecipes] = useState([]);
    const [foodItem, setFoodItem] = useState('');

    useEffect(() => {
        const foodItemFromLocalStorage = localStorage.getItem('foodItem');

        if (foodItemFromLocalStorage) {
            setFoodItem(foodItemFromLocalStorage);
            searchRecipe(foodItemFromLocalStorage);
        } else {
            getRandomRecipe();
        }
    }, []);

    const searchRecipe = async (foodItem, nextPage = 0) => {
        const apiId = '4221393d';
        const apiKey = '362a325c2c82392fc4b070a75c865d20';
        const pageSize = 10;
    
        const url = `https://api.edamam.com/search?q=${foodItem}&app_id=${apiId}&app_key=${apiKey}&from=${nextPage * pageSize}&to=${(nextPage + 1) * pageSize}`;
    
        try {
            const response = await fetch(url);
            const data = await response.json();
    
            setRecipes(prevRecipes => [...prevRecipes, ...data.hits.map(hit => hit.recipe)]);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };
    
    const handleShowMore = () => {
        const nextPage = Math.ceil(recipes.length / 20);
        searchRecipe(foodItem, nextPage);
    };

    const navigate = useNavigate();
    const sendData = (label, uri) => {
        navigate('/details', {state: {label, uri}});
    }

    const getRandomRecipe = async () => {
        const randomFoodItems = ["Pizza", "Burger", "Pasta", "Sushi", "Tacos", "Burritos", "Salad", "Sandwich", "Ramen", "Steak", "Chicken", "Fish", "Shrimp", "Lasagna", "Meatloaf", "Curry", "Fajitas", "Enchiladas", "Pad Thai", "Pho", "Fried Rice", "Gyoza", "Calzone", "Hot Dog", "Chili", "Hamburger", "Fried Chicken", "Spaghetti", "Carbonara", "Stir Fry", "Miso Soup", "Sushi Rolls", "Noodles", "Casserole", "Barbecue Ribs", "Gnocchi", "Biryani", "Pancakes", "Waffles", "French Toast", "Omelette", "Scrambled Eggs", "Eggs Benedict", "Quiche", "Crepes", "Grilled Cheese", "Macaroni and Cheese", "Frittata", "Hash Browns", "Potato Salad", "Potato Soup", "Potato Wedges", "Potato Skins", "Baked Potato", "Mashed Potato", "Tater Tots", "Potato Pancakes", "Potato Chips", "Cornbread", "Bagels", "Muffins", "Croissants", "Donuts", "Cinnamon Rolls", "Biscuits and Gravy", "Scones", "Danish Pastry", "Strudel", "Eclairs", "Cannoli", "Cheesecake", "Brownies", "Cookies", "Ice Cream", "Frozen Yogurt", "Sorbet", "Gelato", "Popsicles", "Sherbet", "Cake", "Pie", "Cobbler", "Tiramisu", "Trifle", "Pudding", "Parfait", "Creme Brulee", "Flan", "Macarons", "Cupcakes", "Marshmallows", "Candy", "Chocolate", "Caramel", "Fudge", "Licorice", "Gummies", "Lollipops", "Taffy"];
        const randomIndex = Math.floor(Math.random() * randomFoodItems.length);
        const randomFoodItem = randomFoodItems[randomIndex];
        localStorage.setItem('foodItem', randomFoodItem);
        searchRecipe(randomFoodItem);
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setFoodItem(inputValue);
        localStorage.setItem('foodItem', inputValue);
    };

    return (
        <div className='h-screen overflow-y-auto bg-slate-700'>
            <h1 className="text-center font-semibold text-3xl text-white">Welcome to Recipe App</h1>
            <div className="flex justify-center mt-10">
                <form onSubmit={(e) => { e.preventDefault(); searchRecipe(foodItem); }}>
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
                {recipes.map((recipe, index) => (
                    <div key={index} className='lg:w-1/4 md:w-1/3 sm:w-1/2 flex justify-between px-2 my-2'>
                        <div className='bg-slate-400 shadow-2xl rounded-2xl w-full h-72'>
                            <div className=' bg-slate-200 shadow-md rounded-2xl'>
                                <img src={recipe.image} alt={recipe.label} className=' w-96 p-2 h-52 rounded-2xl shadow-sm' />
                            </div>

                            <h2 className='text-lg font-medium mb-2 text-nowrap overflow-hidden'>
                                <span className='hover:text-wrap'>{recipe.label}</span>
                            </h2>

                            <button onClick={() => sendData(recipe.label, recipe.uri)} className=' bg-slate-800 text-white p-1 rounded-lg mx-2'>
                                View Recipe
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={handleShowMore} className=' bg-slate-300 text-black shadow-lg p-2 mx-1 my-2 rounded-3xl'>
                    Show More
                </button>
            </div>
        </div>
    );
}
