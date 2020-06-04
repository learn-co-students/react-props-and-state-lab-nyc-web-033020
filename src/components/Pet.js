import React from 'react'

class Pet extends React.Component {

  adoptPet = (petId) => {
    const petIndex = this.state.pets.findIndex(pet => pet.id === petId)
    let newPetArray = [...this.state.pets]
    const adoptedPet = this.state.pets.find(pet => pet.id === petId)
        adoptedPet.isAdopted = true
        newPetArray[petIndex] = {...newPetArray[petIndex], completed: !newPetArray[petIndex].completed}
        this.setState({pets: newPetArray})
        console.log(this.state.pets[petIndex])
  }

  gender = () => {
    if (this.props.gender === 'male'){
      return '♀'
    }else{
      return '♂'
    }
  }

  render() {
    console.log(this.props.name)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.gender()}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.name}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
