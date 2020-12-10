import React from 'react'

import TodoApp from './components/TodoApp'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  
  
  render() {
    return (
      <div>
        <TodoApp />
      </div>
    )
  }
}

export default App
