import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeFilter = (animal) => {
    this.setState({filters: {type: animal}})
  }

  onFindPetsClick = () => {
     if (this.state.filters.type === 'all'){
      fetch('/api/pets')
      .then(res => res.json())
      .then(res =>  
        this.setState({ pets: res })
        )
      } else {
        fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(res => res.json())
        .then(res =>  
          this.setState({ pets: res })
          )
      }
  }

  adoptPet = (petId) => {
  const petIndex = this.state.pets.findIndex(pet => pet.id === petId)
  let newPetArray = [...this.state.pets]
  const adoptedPet = this.state.pets.find(pet => pet.id === petId)
      adoptedPet.isAdopted = true
      newPetArray[petIndex] = {...newPetArray[petIndex], completed: !newPetArray[petIndex].completed}
      this.setState({pets: newPetArray})
      console.log(this.state.pets[petIndex])
  }
  
  render() {  
    console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters handleClick={this.onFindPetsClick} handleFilter={this.changeFilter}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser petsProp={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
