import React, { Component } from 'react';
import { Link } from 'react-router';
import {markdown} from 'markdown';

import style from './Detail.css';
import markdownCss from './share/github-markdown.global.css';

export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      completed: false,
      isEditing: false
    }
  }

  componentDidMount () {
    console.info(this.props);

    this.todo = this.props.todos.find(todo => todo.id === parseInt(this.props.params.id)) || {};
    this.setState({
      title: this.todo.text,
      content: this.todo.detail,
      html: markdown.toHTML(this.todo.detail || '> 点击编辑添加详情'),
      completed: this.todo.completed
    });
  }

  _handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  _handleTextAreaChange = (e) => {
    this.setState({ content: e.target.value });
  };

  _handleEditBtn = (e) => {
    this.setState({
      isEditing: !this.state.isEditing
    });
    if (this.state.isEditing) {
      this.setState({
        html: markdown.toHTML(this.state.content)
      });
    }
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
          { !this.state.isEditing ? <div className="mdArea markdown-body" dangerouslySetInnerHTML={{__html: this.state.html}}></div>
            : <textarea id="titleTextArea" value={this.state.content} className={style.titleTextArea} autoFocus onChange={this._handleTextAreaChange}></textarea>
          }
          <a href="javascript:void(0)" className={style.submitBtn} onClick={this._handleEditBtn}>{this.state.isEditing ? '预览' : '编辑'}</a>
          <Link className={style.submitBtn} onClick={this._handleSubmitBtn} to="/">提交</Link>
        </div>
        <Link className={style.todoBtn} to="/"><i className="fa fa-bars fa-2x" /></Link>
      </div>

    );
  }
}
