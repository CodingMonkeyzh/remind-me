import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    //console.info(this.props);
    let todo = this.props.todos[this.props.params.id] || {};
    return (
      <div>
        <h2>Detail Page</h2>
        <p>{todo.text}</p>
        <Link to="/">回首页咯</Link>
      </div>
    );
  }
}
