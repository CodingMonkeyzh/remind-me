import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypesConstant.js';

export default function todo(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
          break;
    case DELETE_TODO:
          break;
    case COMPLETE_TODO:
          break;
    case COMPLETE_ALL:
          break;
    case CLEAR_COMPLETED:
          break;
    default:
          return state;
  }
}
