import { useDispatch } from "react-redux";
import { options } from "../api/credentials";
import { setRecipes } from "../storage/recipeSlice";
import { useRef } from "react";
function urlSearch(query) {
  const item = query.replace(/ /g, "%20");
  return `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${item}&diet=vegetarian%7CGluten%20Free%7CKetogenic%7CPaleo&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeInstructions=false&addRecipeNutrition=true&maxReadyTime=45&ignorePantry=true&sort=max-used-ingredients&offset=0&number=4`;
}

const SearchBar = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const handleSearch = async (e) => {
    e.stopPropagation();
    const query = inputRef.current.value;
    console.log(query);
    const url = urlSearch(query);
    console.log(url);
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const titles = result.results.map((recipe) => ({ title: recipe.title }));
      console.log(titles);
      dispatch(setRecipes(result.results));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className=" w-[500px] rounded-lg border-2 border-red-400">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative focus-visible:outline-none ">
        {/* Search Icon */}
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        {/* Input Field */}
        <input
          type="search"
          id="default-search"
          ref={inputRef}
          className="block w-full p-4 ps-10 text-sm text-gray-900  border-gray-300 rounded-lg bg-white ring-2 ring-transparent border-2 border-transparent focus:ring-red-500 focus:border-red-500 placeholder-gray-500 focus-visible:outline-none"
          placeholder="Search for dishes ..."
          required
        />
        {/* Search Button */}
        <button
          type="submit"
          onClick={handleSearch}
          className="text-white absolute end-2.5 bottom-2.5 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
