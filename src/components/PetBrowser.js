import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets;

    return (
      <div className="ui cards">
        {pets.map((pet) => (
          <Pet
            key={pet.id}
            onAdoptPet={this.props.onAdoptPet}
            pet={pet}
            {...pet}
          />
        ))}
      </div>
    );
  }
}

export default PetBrowser;