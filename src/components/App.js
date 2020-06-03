import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  onChangeType = (event) => {
    const target = event.target;
    // console.log("event: ", e.value);
    this.setState({ filters: { type: target.value } });
  };

  onFindPetsClick = () => {
    const url =
      this.state.filters.type === "all"
        ? "/api/pets"
        : `/api/pets?type=${this.state.filters.type}`;

    fetch(url)
      .then((res) => res.json())
      .then((pets) => this.setState({ pets: pets }));
  };

  onAdoptPet = (id) => {
    const index = this.state.pets.findIndex((pet) => pet.id === id);
    const pets = [...this.state.pets];
    const pet = pets[index];
    pet.isAdopted = true;
    pets[index] = pet;
    this.setState({ pets: pets });
    console.log("updated pet: ", this.state.pets[index]);
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onFindPetsClick={this.onFindPetsClick}
                onChangeType={this.onChangeType}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
