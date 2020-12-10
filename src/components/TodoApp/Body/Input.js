import React from 'react'
import { v4 as uuid } from 'uuid'
class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({
      value
    })
  }

  onClick = () => {
    if (!this.state.value.trim()) {
      return alert('nhap ndung')
    } 
    if (!this.props.currentTag) {
      return alert('chọn một tag')
    }
    this.props.addNewTask({
      name: this.state.value,
      group: this.props.currentTag,
      uuid: uuid(),
      isChecked:false
    })
  }

  render() {
    const { value } = this.state

    return (
      <div className="header">
        <input 
          className="new-todo"
          placeholder="What do you need to do?"
          type="text" value={value} 
          onChange={this.handleChange} />
        <button className="header_button" onClick={this.onClick}>+</button>
      </div>
    )
  }
}

export default Input
