import React, { Component } from 'react'

class Generator extends Component {

  render(){
    return(
      <div className='image1'>
        {this.props.details.image}
      </div>
      )
    }

  }

  export default Generator


  //<img alt='image' src={`http://lorempixel.com/200/200/nature${this.state.image}`} />
