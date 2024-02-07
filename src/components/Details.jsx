import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom";

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

                    defaultData();
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

    const defaultData = () => {
        setShowdata1(true);
        setShowdata2(false);
        setShowdata3(false);
    }

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
    <div className="h-screen overflow-y-auto bg-slate-700 font-sans">
      <div className=" text-white flex flex-row py-2">
        <Link to='/' className="text-xl px-5">Home</Link>
        <h1 className="lg:text-3xl px-5 text-center">Foodie Hub</h1>
        
      </div>
      <div className=" w-3/4 mx-auto bg-white shadow-2xl">
        <div className="">
            {recipes.map((recipe, index) => (
                <div key={index} className="flex lg:flex-row flex-col">
                    <div className="lg:w-1/2 w-full lg:bg-gradient-to-l bg-gradient-to-t to-slate-900 from-slate-600 text-white p-3">
                    <h2 className="text-center text-lg py-1">{recipe.label}</h2>
                    
                    <img src={recipe.image} alt={recipe.label} className="rounded-lg"/>
                    <p className="text-sm py-1"><span className="text-lg">Calories: </span> {recipe.calories.toFixed(2)}</p>
                    <p className="text-sm py-1"><span className="text-lg">Cuisine Type: </span> {recipe.cuisineType.join(', ')}</p>
                    <p className="text-sm py-1"><span className="text-lg">Diet Labels: </span> {recipe.dietLabels.join(', ')}</p>
                    <p className="text-sm py-1"><span className="text-lg">Source: </span> <Link to={recipe.url} target="_blank" rel="noopener noreferrer" className=' text-blue-600 px-2 py-1'>{recipe.source}</Link></p>


                    <div className="flex flex-col">
                    <button className=" bg-slate-300 text-black shadow-lg p-2 mx-1 my-2 rounded-3xl w-3/4" onClick={showIngredients} >Ingredients</button>
                    <button className=" bg-slate-300 text-black shadow-lg p-2 mx-1 my-2 rounded-3xl w-3/4" onClick={showNutritional} >Nutritional Info</button>
                    <button className=" bg-slate-300 text-black shadow-lg p-2 mx-1 my-2 rounded-3xl w-3/4" onClick={showHealthLabel} >Health Labels</button>
                    </div>

                    </div>

                    <div className=" lg:w-1/2 w-full lg:bg-gradient-to-r bg-gradient-to-b to-slate-900 from-slate-600 text-white text-center">
                    {/* Ingredients */}
                    {showdata1 && (
                        <div className="text-lg font-semibold">
                            <h3 className="">Ingredients</h3>
                            <ul>
                                {recipe.ingredientLines.map((ingredient, idx) => (
                                    <li key={idx} className="border-x-2 border-y-2 border-gray-400">{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Nutritional Info */}
                    {showdata2 && (
                        <div className="text-lg font-semibold">
                            <h3 className="text-center">Nutritional Information</h3>
                            <ol>
                                {Object.entries(recipe.totalNutrients).map(([key, value]) => (
                                    <li key={key} className="border-x-2 border-y-2 border-gray-400"><span className="text-lg ">{value.label}: </span><span className="text-sm">{value.quantity.toFixed(2)}</span> <span className="text-sm"> {value.unit}</span></li>
                                ))}
                            </ol>
                        </div>
                    )}

                    {/* Health Labels */}
                    {showdata3 &&  (
                        <div>
                            <h3 className="text-center text-lg font-semibold">Health Labels</h3>
                            <ol className="">
                                {recipe.healthLabels.map((label, idx) => (
                                    <li key={idx} className="border-x-2 border-y-2 border-gray-400">{label}</li>
                                ))}
                            </ol>
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
