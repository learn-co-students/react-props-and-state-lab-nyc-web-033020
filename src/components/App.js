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

  onChangeType = (typeValue) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: typeValue
      }
    })
  };

  onFindPetsClick = (typeValue) => {
    if (typeValue === 'all'){
      fetch('/api/pets')
      .then(resp => resp.json())
      .then(console.log)
    } else {
      fetch(`/api/pets?type=${typeValue}`)
      .then(resp => resp.json())
      .then(console.log)
    } 
  };

  render() {
    console.log(this.state.filters)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} typeValue={this.state.filters.type}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
