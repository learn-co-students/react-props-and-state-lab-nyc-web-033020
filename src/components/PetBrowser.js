import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  // const  {age, gender, id, isAdopted, name, type, weight} = props
  render() {
    return (
      <div className="ui cards">
          {this.props.pets.map(pet => <Pet 
              key={pet.id}
              age={pet.age} 
              gender={pet.gender}
              id={pet.id}
              isAdopted={pet.isAdopted}
              name={pet.name}
              type={pet.type}
              weight={pet.weight}
            />)
          }
      </div>
    )
  }
}

export default PetBrowser
