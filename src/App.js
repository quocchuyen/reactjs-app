import React from 'react'
import Menu from './components/Menu'
import Header from './components/Header'
import Question from './components/Question'
import Control from './components/Control'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-menu">
          <Menu />
        </div>
        <div className="box">
          <Header />
          <Question />
          <Control />
        </div>
      </div>
    )
  }
}

export default App
