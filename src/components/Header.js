import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  render() {
    const { addItem } = this.props
    const text = this.state.text
    const setText = (text) => {
      this.setState({
        text
      })
    } 
    const onAddItem = (e = {}) => {
      addItem({
          id: new Date().valueOf(),
          text,
          isCompleted: false
        })
      setText('')
    }
    
    return (
      <div className="header">
        <input 
          className="new-todo"
          placeholder="What do you need to do?" 
          onChange={(e) => setText(e.target.value) }
          value={text}
        />
        <button className="header_button" onClick={(e) => onAddItem(e)}>+</button>
      </div>
    )
  }
}

export default Header
