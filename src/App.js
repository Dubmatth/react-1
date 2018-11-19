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

  handleChange = (event, id) => {
    const famille = { ...this.state.famille }
    const nom = event.target.value
    famille[id].nom = nom
    this.setState({famille})
  }

  hideName = id => {
    const famille = { ...this.state.famille }
    famille[id].nom = 'X'
    this.setState({ famille })
  }

  handleChangeAge = (event, id) => {
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

    let description = null
    if (isShow) {
      description = <strong>Je suis un chien</strong>
    }
    
    const liste = Object.keys(famille)
    .map(membre => (
      <Membre
        key={membre}
        handleChange={event => this.handleChange(event, membre)}
        hideName={ () => this.hideName(membre) }
        age={famille[membre].age} 
        nom={famille[membre].nom} 
      />
    ))


    return (
        <div className="App">
          <h1>{titre}</h1>
          <p>Cette app vous est présentée par : {auteur}</p>
          <input type="text" value={famille.membre1.age} onChange={this.handleChangeAge}/>
          {liste}
          {/*<Membre
            age={famille.membre4.age} 
            nom={famille.membre4.nom} >
            { description }
            <button onClick={this.handleShowDescription}>
              { isShow ? 'Cacher' : 'Montrer' }
            </button>
          </Membre> */}
          {/* <Button 
            vieillir = {() => this.handleClick(2)}
          /> */}
        </div>

    )
  }
}

export default App
