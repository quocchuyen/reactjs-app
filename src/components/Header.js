import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Reactjs Quiz</h1>
        <div className="loading"></div>
        <p>0% complete</p>
      </div>
    )
  }
}

export default Header
