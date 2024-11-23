import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MenuList from "../components/menuList";
import SearchBar from "../components/searchBar";
import { setRecipes } from "../storage/recipeSlice";
import { options } from "../api/credentials";

const url =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=4";

const Menu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        dispatch(setRecipes(result.recipes));
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [dispatch]);
  return (
    <div className="max-w-[90vw] w-screen mx-auto flex-1 flex flex-col items-center justify-center">
      <div className="max-w-screen-2xl w-full bg-white p-20 rounded-t-2xl flex-1 flex flex-col items-start  justify-start ">
        <div className="flex-1 w-full flex flex-col justify-start items-center space-y-6  ">
          <h1 className="text-4xl text-center font-extrabold text-black  drop-shadow-lg">
            Explore our menu and discover our best dishes from around the world.
          </h1>
          <div className="mt-6 w-full flex items-center justify-center">
            <SearchBar />
          </div>
          <div className="max-h-[700px] overflow-y-auto w-full">
            <MenuList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
