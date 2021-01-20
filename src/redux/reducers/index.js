import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import filter from './categorieFilter';
export default combineReducers({ recipe: recipeReducer, filter: filter });
