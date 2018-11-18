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
    famille,
    isShow: false
  }

  handleClick = addAge => {
    const famille = { ...this.state.famille }
    famille.membre1.age += addAge
    this.setState({ famille })
  }

  handleChange = event => {
    const famille = { ...this.state.famille }
    const nomFamille = event.target.value
    famille.membre1.nom = nomFamille
    this.setState({famille})
  }

  handleChangeAge = event => {
    const famille = { ...this.state.famille }
    const ageMembre = event.target.value
    famille.membre1.age = ageMembre
    this.setState({famille})
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }

  render() {
    const { titre, auteur } = this.props
    const { famille, isShow } = this.state
    return (
        <div className="App">
          <h1>{titre}</h1>
          <p>Cette app vous est présentée par : {auteur}</p>
          <input type="text" value={famille.membre1.nom} onChange={this.handleChange}/>
          <input type="text" value={famille.membre1.age} onChange={this.handleChangeAge}/>
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
            {
              isShow ? <strong>Je suis un chien</strong> : null
            }
            <button onClick={this.handleShowDescription}>Montrer</button>
          </Membre>
          <Button 
            vieillir = {() => this.handleClick(2)}
          />
        </div>

    )
  }
}

export default App
