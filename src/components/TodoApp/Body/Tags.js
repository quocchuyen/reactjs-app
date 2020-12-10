import React from 'react'

class Tag extends React.Component {
  constructor() {
    super()
    this.state = {
      tags: ['Home', 'Work', 'School']
    }
  }

  render() {
    const { currentTag } = this.props
    const { tags } = this.state
    return (
      <div className="tags">
        Tags:
        <span  
        onClick= {() => this.props.setCurrentTag('')} 
        className= { !currentTag ? 'tag-active' : ''}>
        All
        </span>
        {
          tags.map((tag, index) => {
            return <span 
              className= { currentTag === tag ? 'tag-active' : ''} 
              key={index}
              onClick= {() => this.props.setCurrentTag(tag)} > {tag} </span>
          })
        }
      </div>
    )
  }
}

export default Tag
