import React from 'react'

class List extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  renderList = () => {
    const { currentTag } = this.props

    let newList = this.props.list
    if (currentTag) {
      newList = this.props.list.filter(task => task.group === currentTag )
    }

    return newList
    
  }
  render() {
    const list = this.renderList()
    const { markCompleted } = this.props
    return (
      <div  className="todo-list">
        {
          list.map((task, index) => {
            return <div
                className={`${task.isChecked ? 'completed' : ''}`} 
                key={index}>
              <div className="view">
              <input 
                type="checkbox"
                className="toggle" 
                checked={task.isChecked}
                onChange={() => markCompleted(task.uuid)}
              />
              <span>{task.name}</span>
              <button className="destroy" onClick={() => this.props.removeTask(task)}>x</button>
              </div>
            </div>
          })
        }
      </div>
    )
  }
}

export default List
