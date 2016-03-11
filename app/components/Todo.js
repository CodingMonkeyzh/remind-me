import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>我的任务清单</h2>
          <Link to="/detail">详情页</Link>
        </div>
      </div>
    );
  }
}
