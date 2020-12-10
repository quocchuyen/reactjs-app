import React from 'react'

class Tab extends React.Component {
  constructor() {
    super()
    this.state = {
      tab: ['Active', 'Completed']
    }
  }

  render() {
    const {activeButton, setStatusFilter, numOfItem, numOfTodos } = this.props
    const { tab } = this.state
    return (
      <div className="tabs">
        <span  
        onClick= {() => this.props.setCurrentTab('')} 
        className={`${activeButton === 'ALL' ? "selected" : ''}`}
        onClick={() => setStatusFilter('ALL')}>
        All Tasks
        </span>
        {
          tab.map((tab, index) => {
            return <span
              className={`${activeButton === tab ? "selected" : ''}`}
              key={index}
              onClick={() => setStatusFilter(tab)} > {tab} </span>
          })
        }
        <span className="todo-count">
          <strong>{numOfItem}</strong>
          <span> </span>
          <span>{numOfItem > 1 ? 'item' : 'items'}</span>
          <span> / {numOfTodos} completed </span>
        </span>
      </div>
    )
  }
}

export default Tab
