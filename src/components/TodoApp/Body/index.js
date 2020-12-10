import React from 'react'
import Input from './Input'
import Tags from './Tags'
import List from './List'
import Tab from './Tab'
const filterByStatus = (listItem = [], status = '', id) => {
  switch (status) {
    case 'Active':
      return listItem.filter(item => !item.isChecked)
    case 'Completed':
      return listItem.filter(item => item.isChecked)
    default:
      return listItem
  }
}
const countCompleted = (listItem = []) => {
  return listItem.filter(item => item.isChecked)
}
class Body extends React.Component {
  constructor() {
    super()
    this.state = {
      currentTag: '',
      list: [],
      status: 'ALL',
      isChecked:false
    }
  }
  setCurrentTag = tag => {
    this.setState({
      currentTag:tag
    })
  }

  setCurrentTab = tab => {
    this.setState({
      currentTab:tab
    })
  }

  addNewTask = item => {
    this.setState({
      list: [...this.state.list, item]
    })
  }
  removeTask = task => {
    this.setState({
      list: this.state.list.filter(item => item.uuid !== task.uuid)
    })
  }

  markCompleted = (id = '') => {
    const { list } = this.state
    let isChecked = true
    const updatedlistItem = list.map(item => {
      if ((!item.isChecked && item.uuid !== id) || (item.isChecked && item.uuid === id)) {
        isChecked = false
      }
      if (item.uuid === id) {
        return { ...item, isChecked: !item.isCompleted }
      }
      return item
    })
    this.setState({
      isChecked,
      list: updatedlistItem
    })
  }
  render() {
    const { currentTag, list , status, isChecked} = this.state
    return (
      <div className="todoapp">
        <Input 
          currentTag = {currentTag}
          addNewTask = {this.addNewTask} />

        <Tags 
          currentTag = {currentTag}
          setCurrentTag = {this.setCurrentTag} />

        <List
          markCompleted={this.markCompleted}
          list={filterByStatus(list, status)}
          isChecked={isChecked} 
          currentTag = {currentTag} 
          removeTask={this.removeTask}
           />

         <Tab 
          activeButton={status}
          setStatusFilter={(status) => this.setState({ status })}
          numOfItem={countCompleted(list).length}
          numOfTodos={list.length}
          />  
      </div>
    )
  }
}

export default Body
