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

function getYouTubeEmbedUrl(url) {
    if (!url) return null;

    const match = url.match(/(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (!match) return null;

    return `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1&controls=1&playsinline=1`;
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
    }, [id]);

    if (!meal) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_100%)] text-2xl font-semibold text-white">
                Loading recipe...
            </div>
        );
    }

    const ingredients = getIngredients(meal);
    const youtubeEmbedUrl = getYouTubeEmbedUrl(meal.strYoutube);
    const tabs = [
        { key: 'ingredients', label: 'Ingredients' },
        { key: 'instructions', label: 'Instructions' },
        { key: 'tags', label: 'Tags' },
    ];

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_100%)] px-4 py-6 text-slate-100 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-6">
                <header className="flex flex-wrap items-center justify-between gap-3 rounded-[1.5rem] border border-white/10 bg-slate-900/80 px-4 py-4 shadow-xl shadow-slate-950/30 backdrop-blur sm:px-6">
                    <Link to="/" className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-amber-400/30 hover:text-amber-200">
                        ← Back home
                    </Link>
                    <h1 className="text-xl font-semibold text-white sm:text-2xl">Recipe details</h1>
                </header>

                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-2xl shadow-slate-950/40 backdrop-blur">
                    <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="border-b border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-6 lg:border-b-0 lg:border-r">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="rounded-full bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-200">
                                    {meal.strCategory || 'Recipe'}
                                </span>
                                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                                    {meal.strArea || 'World'}
                                </span>
                            </div>

                            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">{meal.strMeal}</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-300">
                                Discover the ingredients, steps, and flavor notes behind this delicious dish.
                            </p>

                            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10">
                                <img src={meal.strMealThumb} alt={meal.strMeal} className="h-72 w-full object-cover" />
                            </div>

                            <div className="mt-6 space-y-3 text-sm text-slate-300">
                                {meal.strSource && (
                                    <p>
                                        <span className="font-semibold text-white">Source:</span>{' '}
                                        <Link to={meal.strSource} target="_blank" rel="noopener noreferrer" className="text-amber-200 transition hover:text-amber-100">
                                            View original recipe
                                        </Link>
                                    </p>
                                )}
                                {youtubeEmbedUrl ? (
                                    <div className="mt-4 rounded-[1.25rem] border border-slate-800 bg-slate-950/70 p-3">
                                        <div className="mb-3 flex items-center justify-between gap-3">
                                            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">Recipe video</h3>
                                            <span className="text-xs text-slate-400">Paused by default</span>
                                        </div>
                                        <div className="overflow-hidden rounded-[1rem] border border-slate-800">
                                            <iframe
                                                src={youtubeEmbedUrl}
                                                title={`${meal.strMeal} video`}
                                                className="aspect-video w-full"
                                                loading="lazy"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                ) : meal.strYoutube ? (
                                    <p className="mt-4">
                                        <span className="font-semibold text-white">Video:</span>{' '}
                                        <Link to={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="text-rose-300 transition hover:text-rose-200">
                                            Watch on YouTube
                                        </Link>
                                    </p>
                                ) : null}
                            </div>
                        </div>

                        <div className="p-6 sm:p-8">
                            <div className="flex flex-wrap gap-2">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.key}
                                        onClick={() => setActiveTab(tab.key)}
                                        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                                            activeTab === tab.key
                                                ? 'bg-amber-400 text-slate-900'
                                                : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                                {activeTab === 'ingredients' && (
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Ingredients</h3>
                                        <ul className="mt-4 space-y-3">
                                            {ingredients.map((item, idx) => (
                                                <li key={idx} className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {activeTab === 'instructions' && (
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Instructions</h3>
                                        <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-300">
                                            {meal.strInstructions}
                                        </p>
                                    </div>
                                )}

                                {activeTab === 'tags' && (
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Tags</h3>
                                        {meal.strTags ? (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {meal.strTags.split(',').map((tag, idx) => (
                                                    <span key={idx} className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
                                                        {tag.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="mt-4 text-sm text-slate-400">No tags available for this recipe.</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
