import React, { Component } from 'react'
import Header from './Header'
import Body from './Body/index'
import '../../asset/main.scss'
class TodoApp extends Component {
  render() {
    return (
      <div className="todo-app">
        <Header />
        <Body />
      </div>
    )
  }
}

export default TodoApp
