import React, { Component } from 'react'

class Generator extends Component {

  render(){
    return(
      <div className='image1'>
        <img src={this.props.details.image} alt='foto' />
      </div>
      )
    }

  }



  export default Generator


  //<img alt='image' src={`http://lorempixel.com/200/200/nature${this.state.image}`} />
