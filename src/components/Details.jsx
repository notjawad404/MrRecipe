import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";

export default function Details() {
    const [recipes, setRecipes] = useState([]);
    const [showdata1, setShowdata1] = useState(false);
    const [showdata2, setShowdata2] = useState(false);
    const [showdata3, setShowdata3] = useState(false);

    const location = useLocation();
    const {label, uri} = location.state || [];



    useEffect(() => {

        const fetchData = async () => {
            try{
                if (label && uri) {
                    const response = await fetch(`https://api.edamam.com/search?q=${label}&app_id=4221393d&app_key=362a325c2c82392fc4b070a75c865d20`);
                    const data = await response.json();
                    const filterData = data.hits.map(hit => hit.recipe).filter(recipe => recipe.uri === uri);
                    setRecipes(filterData);
                } else {
                    console.error("Label or URI is undefined.");
                }
            }
            catch(error){
                console.error("Error fetching recipes:", error);
            }
        }

        fetchData();
    },[]);


    const showIngredients = () => {
        setShowdata1(true);
        setShowdata2(false);
        setShowdata3(false);
    }

    const showNutritional = () => {
        setShowdata1(false);
        setShowdata2(true);
        setShowdata3(false);
    }

    const showHealthLabel = () => {
        setShowdata1(false);
        setShowdata2(false);
        setShowdata3(true);
    }


  return (
    <div className="h-screen overflow-auto bg-slate-700">
      <div>
        <h1>Welcome to Recipe App</h1>
      </div>
      <div className="w-3/4 mx-auto bg-white shadow-2xl">
        <div className="flex flex-row">
            {recipes.map((recipe, index) => (
                <div key={index} className="flex flex-row">
                    <div>
                    <h2>{recipe.label}</h2>
                    
                    <img src={recipe.image} alt={recipe.label} />
                    <p><span>Calories: </span> {recipe.calories.toFixed(2)}</p>
                    <p><span>Yield: </span> {recipe.yield}</p>
                    <p><span>Cuisine Type: </span> {recipe.cuisineType.join(', ')}</p>
                    <p><span>Diet Labels: </span> {recipe.dietLabels.join(', ')}</p>
                    <div className="flex flex-col">
                    <button className=" bg-slate-700 text-white shadow-lg p-2 mx-1 my-2 rounded-3xl" onClick={showIngredients} >Ingredients</button>
                    <button className=" bg-slate-700 text-white shadow-lg p-2 mx-1 my-2 rounded-3xl" onClick={showNutritional} >Nutritional Info</button>
                    <button className=" bg-slate-700 text-white shadow-lg p-2 mx-1 my-2 rounded-3xl" onClick={showHealthLabel} >Health Labels</button>
                    </div>

                    </div>

                    <div>
                    {/* Ingredients */}
                    {showdata1 && (
                        <div>
                            <h3>Ingredients for {recipe.label}</h3>
                            <ul>
                                {recipe.ingredientLines.map((ingredient, idx) => (
                                    <li key={idx}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Nutritional Info */}
                    {showdata2 && (
                        <div>
                            <h3>Nutritional Information for {recipe.label}</h3>
                            <ul>
                                {Object.entries(recipe.totalNutrients).map(([key, value]) => (
                                    <li key={key}>{value.label}: {value.quantity.toFixed(2)} {value.unit}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Health Labels */}
                    {showdata3 && (
                        <div>
                            <h3>Health Labels for {recipe.label}</h3>
                            <ul>
                                {recipe.healthLabels.map((label, idx) => (
                                    <li key={idx}>{label}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    

                    </div>

                    <div>
                    </div>
                </div>
            ))}
            
        </div>
      </div>
    </div>
  )
}
