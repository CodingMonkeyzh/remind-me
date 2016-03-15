import React, { Component } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import style from './Todo.css';

console.info(style);

export default class Todo extends Component {
  render() {
    const { todos, actions } = this.props;
    var lists = todos.map(function(item) {
      return <TodoItem key={item.id} todo={item} completeTodo={actions.completeTodo} />;
    });
    return (
      <div className={style.container}>
        <div>
          <Header addTodo={actions.addTodo} />
          {lists}
        </div>
      </div>
    );
  }
}

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {text: ''};
  }

  _handleInputChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  _handleKeyDown = (e) => {
    if (e.which === 13 && e.target.value.trim().length > 0) {
      this.props.addTodo(e.target.value);
      this._clearText();
    }
  };

  _clearText () {
    this.setState({
      text: ''
    });
  }

  render () {
    return (
      <div className={style.textInputerWrap}>
        <i className={`fa fa-angle-right ${style.inputerIcon}`} />
        <input className={style.textInputer} type="text" value={this.state.text} onChange={this._handleInputChange} onKeyDown={this._handleKeyDown} />
      </div>
    );
  }
}

class TodoItem extends Component {
  _completeTodo = () => {
    this.props.completeTodo(this.props.todo.id);
  };

  render () {
    let {todo} = this.props;
    return (
      <div className={todo.completed ? style.itemCompleted : style.item}>
        <div className={todo.completed ? style.checkboxCked : style.checkbox} onClick={this._completeTodo}></div>
        <div className={todo.completed ? style.titleCompleted : style.title}>{todo.text}</div>
      </div>
    );
  }
}

