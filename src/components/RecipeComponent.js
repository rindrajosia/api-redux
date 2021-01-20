import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes, changeFilter } from '../redux/actions';

import { getRecipeByFilter } from '../redux/selectors';
import CategoryFilter from './CategoryFilter';

const RecipeComponent = ({ recipeData, fetchRecipes, changeFilter }) => {
  useEffect (() => {
    fetchRecipes();
  }, [])

  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  return (
    <>
      <div className="lesson-panel">
        <CategoryFilter handleFilterChange={handleFilterChange} />
      </div>

        {recipeData.loading ? (
          <h2>Loading</h2>
        ) : recipeData.error ? (
          <h2>{recipeData.error}</h2>
        ) : (
          recipeData && recipeData.recipes && recipeData.recipes.map(recipe =>
            <div key={recipe.idMeal} className='tile'>
              <h2>{recipe.strMeal}</h2>
              <img src={recipe.strMealThumb} alt=''/>
            </div>
          )
        )}
    </>
  )
};

const mapStateToProps = state => {
  const { filter } = state;
  const recipeData = getRecipeByFilter(state, filter);
  return { recipeData };
}

export default connect(
  mapStateToProps,
  { fetchRecipes, changeFilter }
)(RecipeComponent);
