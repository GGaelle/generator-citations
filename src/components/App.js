import React from 'react';
import citations from '../citations'
import Citation from './Citation'
import Logo from '../../src/assets/Logo.png'

//http://lorempixel.com/
class App extends React.Component {

  state = {};

  componentWillMount(){
    this.genererCitation()
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

  render() {
    return(
      <div>
        <img className='rotating' src={Logo} alt='logo'/>
        <Citation details={this.state}/>
        <button onClick={e => this.genererCitation(e)} className='br-pill {border-radius: 9999px} calisto'>-- Une autre citation ! --</button>
      </div>
    )
  };

};

export default App
