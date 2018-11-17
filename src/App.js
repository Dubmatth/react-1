import React, { Component } from 'react'
import './App.css'
import Membre from './Components/Membre'

class App extends Component {
  render() {
    const { titre, auteur } = this.props
    return (
        <div className="App">
          <h1>{titre}</h1>
          <em>Cette app vous est présentée par : {auteur}</em>
          <Membre nom='Emilie'/>
          <Membre nom='Jules'/>
          <Membre nom='Mascha'>
            Je suis un chien
          </Membre>
        </div>

    )
  }
}

export default App
