import React, { Component } from 'react'
import './App.css'
import Membre from './Components/Membre'

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

  render() {
    const { titre, auteur } = this.props
    const { famille } = this.state
    return (
        <div className="App">
          <h1>{titre}</h1>
          <em>Cette app vous est présentée par : {auteur}</em>
          <Membre nom={famille.membre1.nom} />
          <Membre nom={famille.membre2.nom} />
          <Membre nom={famille.membre3.nom} />
          <Membre nom={famille.membre4.nom} >
            Je suis un chien
          </Membre>
        </div>

    )
  }
}

export default App
