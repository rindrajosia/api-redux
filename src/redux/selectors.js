import { CATEGORY_FILTERS } from '../constant';

export const getRecipesState = store => store.recipe;

export const getRecipeList = store => (getRecipesState(store) ? getRecipesState(store) : null);

export const getRecipeByFilter = (store, filter) => {
  const allRecipes = getRecipeList(store);
  switch (filter) {
    case CATEGORY_FILTERS.ALL:
      return allRecipes;
    default:
      return {
        ...allRecipes,
        recipes: allRecipes.recipes.filter(recipe => recipe.strCategory === filter)
      }
  }
};
