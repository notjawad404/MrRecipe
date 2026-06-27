import '../App.css'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const PAGE_SIZE = 10;
const MEALDB_BASE = 'https://www.themealdb.com/api/json/v1/1';

export default function Home() {
    const [allMeals, setAllMeals] = useState([]);
    const [displayed, setDisplayed] = useState([]);
    const [foodItem, setFoodItem] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleBeforeUnload = () => localStorage.removeItem('foodItem');

        localStorage.removeItem('foodItem');
        setFoodItem('');
        setAllMeals([]);
        setDisplayed([]);

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    }, []);

    const searchMeal = async (query) => {
        const trimmedQuery = query?.trim();
        if (!trimmedQuery) {
            setAllMeals([]);
            setDisplayed([]);
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(`${MEALDB_BASE}/search.php?s=${encodeURIComponent(trimmedQuery)}`);
            const data = await response.json();
            const meals = data.meals || [];
            setAllMeals(meals);
            setDisplayed(meals.slice(0, PAGE_SIZE));
            localStorage.setItem('foodItem', trimmedQuery);
        } catch (error) {
            console.error("Error fetching meals:", error);
            setAllMeals([]);
            setDisplayed([]);
        } finally {
            setIsLoading(false);
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
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_100%)] text-slate-100">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
                <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur sm:p-8 lg:p-12">
                    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div>
                            <span className="mb-4 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-200">
                                Fresh ideas, every day
                            </span>
                            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                Welcome to Mr Recipe
                            </h1>
                            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
                                Unlock flavor, fuel health, and discover recipes that turn everyday ingredients into something memorable.
                            </p>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    searchMeal(foodItem);
                                }}
                                className="mt-8 flex flex-col gap-3 sm:flex-row"
                            >
                                <label htmlFor="recipe-search" className="sr-only">
                                    Search recipes
                                </label>
                                <div className="flex-1 rounded-full border border-slate-700 bg-slate-800/90 px-4 py-3 shadow-inner shadow-slate-950/30">
                                    <input
                                        id="recipe-search"
                                        value={foodItem}
                                        onChange={handleInputChange}
                                        placeholder="Search recipes, ingredients, or cuisines"
                                        type="text"
                                        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-400"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="rounded-full bg-amber-400 px-5 py-3 font-semibold text-slate-900 transition hover:bg-amber-300"
                                >
                                    Search
                                </button>
                            </form>

                            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
                                <span className="rounded-full bg-slate-800/80 px-3 py-1">Quick dinners</span>
                                <span className="rounded-full bg-slate-800/80 px-3 py-1">Healthy bowls</span>
                                <span className="rounded-full bg-slate-800/80 px-3 py-1">Desserts</span>
                            </div>
                        </div>

                        <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-amber-400/20 via-slate-800 to-slate-950 p-5">
                            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-5">
                                <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Start searching</p>
                                <h2 className="mt-3 text-2xl font-semibold text-white">
                                    Type a recipe, ingredient, or cuisine to begin
                                </h2>
                                <p className="mt-3 text-sm leading-7 text-slate-300">
                                    Explore meals from cozy comfort food to vibrant global favorites and save the ones you love.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-8">
                    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h3 className="text-2xl font-semibold text-white">Recipe collection</h3>
                            <p className="text-sm text-slate-400">Browse delicious matches from your search.</p>
                        </div>
                        {allMeals.length > 0 && (
                            <p className="text-sm text-slate-400">
                                {displayed.length} of {allMeals.length} recipes shown
                            </p>
                        )}
                    </div>

                    {isLoading ? (
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="animate-pulse rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-3">
                                    <div className="h-44 rounded-[1rem] bg-slate-800" />
                                    <div className="mt-4 h-4 w-3/4 rounded bg-slate-800" />
                                    <div className="mt-2 h-4 w-1/2 rounded bg-slate-800" />
                                    <div className="mt-4 h-10 rounded-full bg-slate-800" />
                                </div>
                            ))}
                        </div>
                    ) : displayed.length === 0 ? (
                        <div className="rounded-[1.5rem] border border-dashed border-slate-700 bg-slate-900/60 p-10 text-center text-slate-300">
                            <p className="text-xl font-semibold text-white">No recipes found yet</p>
                            <p className="mt-2 text-sm">Try a broader search like pasta, curry, or dessert.</p>
                        </div>
                    ) : (
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {displayed.map((meal) => (
                                <article
                                    key={meal.idMeal}
                                    className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:border-amber-400/30 hover:shadow-amber-400/10"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={meal.strMealThumb}
                                            alt={meal.strMeal}
                                            className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute left-4 top-4 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
                                            {meal.strCategory || 'Recipe'}
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center justify-between gap-3">
                                            <h4 className="text-lg font-semibold text-white">{meal.strMeal}</h4>
                                            <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
                                                {meal.strArea || 'World'}
                                            </span>
                                        </div>
                                        <p className="mt-3 text-sm leading-6 text-slate-400">
                                            A flavorful dish that brings comfort and creativity to your kitchen.
                                        </p>
                                        <button
                                            onClick={() => sendData(meal.idMeal)}
                                            className="mt-5 inline-flex items-center rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
                                        >
                                            View recipe
                                            <span className="ml-2">→</span>
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                    {displayed.length < allMeals.length && (
                        <div className="mt-8 flex justify-center">
                            <button
                                onClick={handleShowMore}
                                className="rounded-full border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-amber-400/30 hover:text-amber-200"
                            >
                                Show more recipes
                            </button>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
