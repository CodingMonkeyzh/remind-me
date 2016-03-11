import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import todo from './todoReducer.js';

const rootReducer = combineReducers({
  todo,
  routing
});

export default rootReducer;
