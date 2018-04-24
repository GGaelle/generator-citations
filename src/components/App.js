import React, { Component } from 'react';
import citations from '../container/citations'
import Citation from './Citation'
import Generator from '../container/Generator'
import images from '../container/images'
//import Logo from '../../src/assets/Logo.png'


class App extends Component {

  state = {};

  componentWillMount(){
    this.genererCitation();
    this.genererImage()
  }

  genererCitation = event => {
    //on transforme les citations en array
    const keyArray = Object.keys(citations)

    //on sélectionne une citation au hasard en créant une clé
    const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)]

    //mettre la condition pour ne pas avoir 2 fois la même
    if (this.state.citation === citations[randomKey].citation) {
      this.genererCitation();
      return
    }

    //on lui demande de nous retourner une citation avec la clé choisie
    this.setState(citations[randomKey])

  };


  genererImage = event => {
    const keyArrayImage = Object.keys(images)
    const randomKeyImage = keyArrayImage[Math.floor(Math.random() * keyArrayImage.length)]

    if (this.state.image === images[randomKeyImage].image) {
      this.genererImage();
      return
    }

    this.setState(images[randomKeyImage])
  };

  render() {
    return(
      <div>
        <Generator details={this.state}/>
        <Citation details={this.state}/>
        <button onClick={e => this.genererCitation(e) && this.genererImage(e)} className='br-pill {border-radius: 9999px} calisto'>-- Une autre citation ! --</button>
      </div>
    )
  };

};

export default App
