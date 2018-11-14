import React, { Component, Fragment } from 'react'
import './App.css'
import Membre from './Components/Membre'

class App extends Component {
  render() {
    const { titre, auteur } = this.props
    return (
      <Fragment>
        <div className="App">
          <h1>{titre}</h1>
          <em>Cette app vous est présentée par : {auteur}</em>
        </div>
        <Membre nom='Emilie'/>
        <Membre nom='Jules'/>
        <Membre nom='Mascha'/>
      </Fragment>
    )
  }
}

export default App
