import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE
} from './actionTypes';

export const fetchRecipesRequest = () =>  {
  return {
    type: FETCH_RECIPES_REQUEST
  }
}

export const fetchRecipesSuccess = recipes =>  {
  return {
    type: FETCH_RECIPES_SUCCESS,
    payload: recipes
  }
}

export const fetchRecipesFailure = error =>  {
  return {
    type: FETCH_RECIPES_FAILURE,
    payload: error
  }
}

// fetch action creator
export const fetchRecipes = () =>  {
  return (dispatch) =>  {
    dispatch(fetchRecipesRequest);
    return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) =>  {
      if(!response.ok) {
        throw new Error('Error - 404 not found')
      }
      return response.json();
    })
    .then((data) => {
      dispatch(fetchRecipesSuccess(data.meals));
    })
    .catch((error) => {
      dispatch(fetchRecipesFailure(error));
    })
  }
}
