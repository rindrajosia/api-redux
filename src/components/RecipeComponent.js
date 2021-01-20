import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../redux/actions';

const RecipeComponent = ({ recipeData, fetchRecipes }) => {
  useEffect (() => {
    fetchRecipes();
  }, [])

  return (
    recipeData.loading ? (
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
    )
}

const mapStateToProps = state => {
  return {
    recipeData: state.recipe
  }
}

const mapDispatchToProps = state => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeComponent);
