import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  generatePetCards = () => {
    return (
      this.props.petArray.map(
        pet => <Pet 
        key={pet.id} 
        type={pet.type} 
        gender={pet.gender} 
        age={pet.age} 
        weight={pet.weight} 
        name={pet.name} 
        isAdopted={pet.isAdopted}/>
      )
    )
  };
  
  render() {
    // console.log(this.props.petArray)
    return ( 
      <div className="ui cards">
        {this.generatePetCards()}
        {/* PET COMPONENT SHOULD GO HERE */}
      </div>
    )
  }
}

export default PetBrowser
