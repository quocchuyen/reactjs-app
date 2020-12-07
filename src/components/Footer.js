import React from 'react'

class Footer extends React.Component {

  render() {
    const { setStatusFilter, activeButton, clearCompleted, numOfItem, numOfTodos } = this.props
    return (
      <div className="footer">
        <span className="todo-count">
          <strong>{numOfItem}</strong>
          <span> </span>
          <span>{numOfItem > 1 ? 'item' : 'items'}</span>
          <span> / {numOfTodos} completed </span>
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              className={`${activeButton === 'ALL' ? "selected" : ''}`}
              onClick={() => setStatusFilter('ALL')}
            >
              All
            </a>
          </li>

          <span></span>
          <li>
            <a
              href="#/active"
              className={`${activeButton === 'ACTIVE' ? "selected" : ''}`}
              onClick={() => setStatusFilter('ACTIVE')}
            >
              Active
            </a>
          </li>

          <span></span>

          <li>
            <a
              href="#/completed"
              className={`${activeButton === 'COMPLETED' ? "selected" : ''}`}
              onClick={() => setStatusFilter('COMPLETED')}
            >
              Completed
            </a>
          </li>
          
        </ul>

        {
          numOfItem < numOfTodos && <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        }
      </div>
    )
  }
}

export default Footer
