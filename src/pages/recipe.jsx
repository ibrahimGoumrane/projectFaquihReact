import { useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Add an unfilled heart icon
import { useDispatch, useSelector } from "react-redux";
import { options } from "../api/credentials";
import { likeRecipe, setActiveRecipe } from "../storage/recipeSlice";
import { useParams } from "react-router-dom";
const getRecipeUrl = (id) => {
  return `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`;
};
const Recipe = () => {
  const recipe = useSelector((state) => state.recipes.activeRecipe);
  //get liked state from the store
  const likedRecipes = useSelector((state) => state.recipes.likedRecipes);
  const dispatch = useDispatch();
  const { id } = useParams();

  // Destructure recipe properties
  const {
    sourceName,
    sourceUrl,
    extendedIngredients,
    title,
    vegan,
    image,
    vegetarian,
    veryHealthy,
    instructions,
    diets,
    dishTypes,
    cheap,
    readyInMinutes,
    isLiked, // Add `liked` directly here
  } = recipe || {};
  useEffect(() => {
    async function fetchData() {
      try {
        const url = getRecipeUrl(id);
        const response = await fetch(url, options);
        const result = await response.json();
        //check if the recipe is liked
        const isLiked = likedRecipes.some((r) => +r.id === +id);
        result.isLiked = isLiked;
        dispatch(setActiveRecipe(result));
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [dispatch, id]);

  const handleLike = () => {
    // Dispatch an action to toggle the like state
    dispatch(likeRecipe());
  };

  return (
    <div className="max-w-[90vw] w-screen mx-auto flex-1 flex flex-col items-center justify-center">
      <div className="max-w-screen-2xl w-full bg-white p-20 rounded-t-2xl flex-1 flex flex-col items-start justify-start">
        <div className="flex-1 w-full flex flex-col justify-start items-center space-y-6">
          <h1 className="text-4xl text-center font-extrabold text-black drop-shadow-lg">
            {title}
          </h1>
          <div className="overflow-y-auto w-full grid grid-cols-3 grid-rows-2 gap-5 flex-1 border rounded-md max-h-[850px]">
            {image && (
              <div className="relative rounded-md mb-4 col-start-1 row-start-1 ">
                <img
                  src={image}
                  alt={title}
                  className="object-fill  mt-2 mx-2 rounded-lg mb-4  w-full  "
                />
                <div className="h-[100px] mx-4 flex flex-col items-start justify-start">
                  <div className="text-slate-500 font-bold block text-lg w-[300px]">
                    <span className="text-slate-900">Diets : </span>
                    {diets?.join(", ")}
                  </div>
                  <div className="text-slate-500 font-bold block text-lg w-[300px]">
                    <span className="text-slate-900">Dish Types : </span>
                    {dishTypes?.join(", ")}
                  </div>
                </div>
                <div className="h-[100px]">
                  <a
                    className="text-white font-bold bg-slate-900 m-5 block w-fit rounded-md p-2 cursor-pointer text-lg"
                    href={sourceUrl}
                  >
                    Source : {sourceName}
                  </a>
                  <div className="flex flex-wrap justify-center gap-2 mb-4 place-items-end">
                    {vegan && (
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">
                        Vegan
                      </span>
                    )}
                    {vegetarian && (
                      <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-sm">
                        Vegetarian
                      </span>
                    )}
                    {veryHealthy && (
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm">
                        Very Healthy
                      </span>
                    )}
                    {cheap && (
                      <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-sm">
                        Cheap
                      </span>
                    )}
                    <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full text-sm">
                      Ready in {readyInMinutes} minutes
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div className="relative row-span-full col-start-2 row-start-1 rounded-md mt-10">
              <div className="text-gray-600 mb-4 text-sm h-[600px] overflow-y-auto">
                <h2 className="text-slate-900 font-bold mb-2 block w-fit rounded-md text-lg">
                  Ingredients
                </h2>
                <ol>
                  {extendedIngredients &&
                    extendedIngredients?.map((ingredient) => (
                      <li key={ingredient.id} className="mb-10">
                        {ingredient.original}
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="relative row-span-full col-start-3 row-start-1 rounded-md mb-4 flex flex-col items-center justify-between flex-1 mt-10">
              <div className="flex-1">
                <div className="text-gray-600 mb-4 text-sm h-[600px] overflow-y-auto">
                  <h2 className="text-slate-900 font-bold mb-2 block w-fit rounded-md text-lg">
                    Instructions
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: instructions }}
                    className="border-2 border-gray-300 p-4 rounded-md mr-2"
                  />
                </div>
              </div>
              <div className="flex justify-end w-full">
                <button
                  className="group rounded-lg transition duration-300"
                  onClick={handleLike}
                >
                  <span
                    className={`rounded-full p-5 flex items-center justify-center w-[100px] h-[100px] -translate-y-[50px] group-hover:bg-gray-200 transition duration-300 ${
                      isLiked ? "bg-red-500" : "bg-gray-300"
                    }`}
                  >
                    {isLiked ? (
                      <FaHeart className="text-3xl text-white group-hover:text-red-500 transition duration-300" />
                    ) : (
                      <FaRegHeart className="text-3xl text-gray-500 group-hover:text-red-500 transition duration-300" />
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
