import React from "react"
import "./asset/main.scss"
import Header from "./components/Header"
import ListItem from "./components/ListItem"
import Footer from "./components/Footer"
const filterByStatus = (listItem = [], status = '', id) => {
  switch (status) {
    case 'ACTIVE':
      return listItem.filter(item => !item.isCompleted)
    case 'COMPLETED':
      return listItem.filter(item => item.isCompleted)
    case 'REMOVE':
      return listItem.filter(item => item.id !== id)
    default:
      return listItem
  }
}

const countCompleted = (listItem = []) => {
  return listItem.filter(item => item.isCompleted)
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listItem: [],
      isCheckedAll: false,
      status: 'ALL',
      todoEditingId: ''
    }
  }
  addItem = (item = {}) => {
    const listItem = this.state.listItem
    listItem.push(item)
    this.setState({
      listItem      
    })
  }
  markCompleted = (id = '') => {
    const { listItem } = this.state
    let isCheckedAll = true
    const updatedlistItem = listItem.map(item => {
      if ((!item.isCompleted && item.id !== id) || (item.isCompleted && item.id === id)) {
        isCheckedAll = false
      }
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted }
      }
      return item
    })
    this.setState({
      isCheckedAll,
      listItem: updatedlistItem
    })
  }
  removeTodo = (id = '') => {
    this.setState(prevState => ({
      listItem: filterByStatus(prevState.listItem, 'REMOVE', id)
    }))
  }
  clearCompleted = () => {
    this.setState(preState => ({
      listItem: countCompleted(preState.listItem)
    }))
  }
  render() {
    const { listItem, isCheckedAll, status } = this.state
    return (
      <div className="todoapp">
        <Header addItem={this.addItem} />

        <ListItem 
          listItem = {filterByStatus(listItem, status)}
          markCompleted={this.markCompleted}
          isCheckedAll={isCheckedAll}
          removeTodo={this.removeTodo}
        />

        <Footer
          activeButton={status}
          setStatusFilter={(status) => this.setState({ status })}
          clearCompleted={this.clearCompleted}
          numOfItem={countCompleted(listItem).length}
          numOfTodos={listItem.length}  
          />
          
      </div>
    )
  }
}

export default App;
