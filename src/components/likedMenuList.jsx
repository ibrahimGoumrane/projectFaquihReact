import { useSelector } from "react-redux";
import MenuItem from "./menuItem";

const LikedMenuList = () => {
  const recipes = useSelector((state) => state.recipes);

  return (
    <div className="grid grid-cols-3 place-items-center place-content-center gap-4  flex-1 w-full ">
      {recipes.likedRecipes.map((dish) => (
        <MenuItem key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export default LikedMenuList;
