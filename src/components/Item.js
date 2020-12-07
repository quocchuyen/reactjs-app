import React from 'react'

class Item extends React.Component {

  render() {
    const { item, markCompleted,removeTodo} = this.props
    return (
      <li className={`${item.isCompleted ? 'completed' : ''}`}>
        <div className="view">
          <input 
            type="checkbox" 
            className="toggle" 
            checked={item.isCompleted}
            onChange={() => markCompleted(item.id)}
          />
          <label>{item.text}</label>
          <button className="destroy" onClick={() => removeTodo(item.id)}></button>
        </div>
      </li>
    )
  }
}

export default Item
