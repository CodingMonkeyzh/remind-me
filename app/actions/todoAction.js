import * as types from '../constants/ActionTypesConstant.js'

import DataStore from 'nedb/browser-version/out/nedb.js';
const db = new DataStore({ filename: 'todo.db', autoload: true });

/**
 * 从数据库中加载纪录
 * @returns {Function}
 */
export function loadTodo() {
  return dispatch => {
    db.find({}, function (err, Doc) {
      if (err) {
        return alert('读取数据失败');
      }
      dispatch({
        type: types.LOAD_TODO,
        todos: Doc.sort(function (a, b) { // 倒序
          return b.id - a.id;
        })
      });
    });
  };
}

export function addTodo(text) {
  return { type: types.ADD_TODO, text };
}

export function deleteTodo(id) {
  return dispatch => {
    db.remove({ id: id }, {}, function (err, numRemoved) {
      if (err) {
        return alert('删除数据失败');
      }
      dispatch({ type: types.DELETE_TODO, id });
    });
  };
}

export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text }
}

export function completeTodo(id, value) {
  return dispatch => {
    db.update({ id: id }, { $set: { completed: value } }, {}, function (err, numReplaced) {
      if (err) {
        return alert('写入数据失败');
      }
      dispatch({ type: types.COMPLETE_TODO, id });
    });
  };
}

export function completeAll() {
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED }
}
