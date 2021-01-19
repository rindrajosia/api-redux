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
