import React, { Component } from 'react';
import { Link } from 'react-router';

import style from './Detail.css';

export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      completed: false
    }
  }

  componentDidMount () {
    console.info(this.props);

    this.todo = this.props.todos.find(todo => todo.id === parseInt(this.props.params.id)) || {};
    this.setState({
      title: this.todo.text,
      content: this.todo.detail,
      completed: this.todo.completed
    });
  }

  _handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  _handleTextAreaChange = (e) => {
    this.setState({ content: e.target.value });
  };

  _handleSubmitBtn = (e) => {
    let {editTodo} = this.props.actions;
    editTodo(this.todo.id, this.state.title, this.state.content);
  };

  render() {
    return (
      <div>
        <div className={style.container}>
          <label className={style.label} htmlFor="titleInputer">标题 ></label>
          <input type="text" value={this.state.title} id="titleInputer" className={style.titleInputer} onChange={this._handleTitleChange} />
          <label className={style.label} htmlFor="titleTextArea">详情 ></label>
          <textarea id="titleTextArea" value={this.state.content} className={style.titleTextArea} autoFocus onChange={this._handleTextAreaChange}></textarea>
          <Link className={style.submitBtn} onClick={this._handleSubmitBtn} to="/">提交</Link>
        </div>
        <Link className={style.todoBtn} to="/"><i className="fa fa-list-ul fa-2x" /></Link>
      </div>

    );
  }
}
