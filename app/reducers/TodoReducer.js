import DataStore from 'nedb/browser-version/out/nedb.js';
const db = new DataStore({ filename: 'todo.db', autoload: true });

import { LOAD_TODO, ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypesConstant.js'

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case LOAD_TODO:
      return [
        ...action.todos,
        ...state
      ];

    case ADD_TODO:
      let newTodo = {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: action.text,
        detail: ''
      };
      db.insert(newTodo, function (err, newDoc) {
        if (err) {
          return alert('写入数据失败');
        }
      });
      return [
        newTodo,
        ...state
      ];

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      );

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { text: action.text, detail: action.detail }) :
          todo
      );

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { completed: !todo.completed }) :
          todo
      );

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => Object.assign({}, todo, {
        completed: !areAllMarked
      }));

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);

    default:
      return state
  }
}
