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

  onChangeType = event => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = event => {
    const petQuery = () => {
      if(this.state.filters.type === 'all'){
        return ''
      }else{
        return `?type=${this.state.filters.type}`
      }
    }

    fetch('/api/pets' + `${petQuery()}`)
    .then(resp => resp.json())
    .then(pets => this.setState({ pets }))
  }

  onAdoptPet = (event, id) => {
    if (id === this.state.pets.id){
      this.setState({
        pets: [{
          ...this.state.pets,
          isAdopted: true
        }]
      })
    }
  }
   
  render() {
    // console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
