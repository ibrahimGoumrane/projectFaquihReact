import { createSlice } from "@reduxjs/toolkit";

const loadLikedRecipes = () => {
  const likedRecipes = localStorage.getItem("likedRecipes");
  return likedRecipes ? JSON.parse(likedRecipes) : [];
};

const saveLikedRecipes = (likedRecipes) => {
  localStorage.setItem("likedRecipes", JSON.stringify(likedRecipes));
};

const initialState = {
  recipes: [],
  activeRecipe: null,
  likedRecipes: loadLikedRecipes(),
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes(state, action) {
      return { ...state, activeRecipe: null, recipes: action.payload };
    },
    setActiveRecipe(state, action) {
      state.activeRecipe = action.payload;
    },
    likeRecipe(state) {
      const recipe = state.activeRecipe;
      recipe.isLiked = !recipe.isLiked;
      if (recipe.isLiked) {
        state.likedRecipes.push(recipe);
      } else {
        state.likedRecipes = state.likedRecipes.filter(
          (r) => +r.id !== +recipe.id
        );
      }
      saveLikedRecipes(state.likedRecipes);
    },
  },
});

export const { setRecipes, likeRecipe, setActiveRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
