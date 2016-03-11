import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={style.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
