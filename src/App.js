import React, { Component } from 'react'
import './App.css'
import Membre from './Components/Membre'
import Button from './Components/Button'

const famille = {
  membre1: {
    nom: 'Emilie',
    age: 28
  },
  membre2: {
    nom: 'Matthieu',
    age: 30
  },
  membre3: {
    nom: 'Jules',
    age: 2
  },
  membre4: {
    nom: 'Mascha',
    age: 5
  }
}

class App extends Component {

  
  state = {
    famille
  }

  handleClick = (addAge) => {
    const famille = { ...this.state.famille }
    famille.membre1.age += addAge
    this.setState({ famille })
  }

  render() {
    const { titre, auteur } = this.props
    const { famille } = this.state
    return (
        <div className="App">
          <h1>{titre}</h1>
          <em>Cette app vous est présentée par : {auteur}</em>
          <Membre
            age={famille.membre1.age} 
            nom={famille.membre1.nom} />
          <Membre
            age={famille.membre2.age} 
            nom={famille.membre2.nom} />
          <Membre
            age={famille.membre3.age} 
            nom={famille.membre3.nom} />
          <Membre
            age={famille.membre4.age} 
            nom={famille.membre4.nom} >
            Je suis un chien
          </Membre>
          <Button 
            vieillir = {() => this.handleClick(2)}
          />
        </div>

    )
  }
}

export default App
