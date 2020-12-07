import React from 'react'
import Item from './Item'
class ListItem extends React.Component {
  render() {
    const { listItem } = this.props 
    return (
      <section className="main">
        <ul className="todo-list">
          {
            listItem.map((item, index) => <Item index={index} key={item.id} item={item} {...this.props} />)
          }
        </ul>
      </section>
    )
  }
}

export default ListItem