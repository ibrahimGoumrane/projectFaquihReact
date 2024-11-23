import { useSelector } from "react-redux";
import MenuItem from "./menuItem";

const MenuList = () => {
  const recipes = useSelector((state) => state.recipes);

  return (
    <div className="grid grid-cols-3 place-items-center place-content-center gap-4  flex-1 w-full ">
      {recipes.recipes.map((dish) => (
        <MenuItem key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export default MenuList;
