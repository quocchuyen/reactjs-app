import React from 'react'

class Menu extends React.Component {
  render() {
    return (
      <div className="bg-menu">
        <ul>
          <a href="#" className="link home" ><i class="fas fa-home"></i></a>
          <a href="#" className="link project" ><i class="fas fa-flask"></i>Projects</a>
          <a href="#" className="link beadcrumb" ><i class="fas fa-angle-double-right"></i>Beadcrumb</a>
          <a href="#" className="link getting-started" ><i class="fas fa-rocket"></i>Getting-started</a>
          <a href="#" className="link download" ><i class="fas fa-arrow-down"></i>Download</a>
        </ul>
      </div>
    )
  }
}

export default Menu