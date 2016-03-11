import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Detail from '../components/Detail.js';
import * as todoActions from '../actions/todoAction.js';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(todoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
