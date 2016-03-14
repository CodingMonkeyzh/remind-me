import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Todo from '../components/Todo.js';
import * as todoActions from '../actions/todoAction.js';


function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
