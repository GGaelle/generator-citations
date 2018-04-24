import React, { Component } from 'react'

class Citation extends Component{

  render(){
    return(
      <p>
        {this.props.details.citation}
        <span>- {this.props.details.auteur} - <button onclick className='btn1'>W</button></span>

      </p>
    )
  }
}

export default Citation

//={e => href:'https://www.wikipedia.org/${this.props.details.auteur}'
