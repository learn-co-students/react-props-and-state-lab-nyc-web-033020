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
  
  changeType = (e) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: e.target.value
      }
    })
  }
  

  typeOfAnimal = () => {
    let url = '/api/pets'
    if(this.state.filters.type === "cat"){
      url = "/api/pets?type=cat"
    }else if(this.state.filters.type === "dog"){
      url = "/api/pets?type=dog"
    }else if(this.state.filters.type === "micropig"){
      url = "/api/pets?type=micropig"
    }
    return url
  }
  

  fetchAll = () => {
    fetch(this.typeOfAnimal())
    .then(res => res.json())
    .then(animals => {
      // console.log(animals)
      // console.log(this.state.filters.type)
      this.setState({
        pets: animals
      })
    })
  }


  adoption = (id) => {
    this.state.pets.map(pet =>{
      if(pet.id === id){
        pet.isAdopted = true
      }
    })
    console.log(this.state.pets)
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.fetchAll}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoption}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
