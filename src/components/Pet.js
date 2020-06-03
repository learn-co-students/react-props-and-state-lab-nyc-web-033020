import React from "react";

class Pet extends React.Component {
  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id);
  };
  render() {
    const pet = this.props.pet;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.gender === "male" ? "♂" : "♀"}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {pet.isAdopted === true ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button onClick={this.handleClick} className="ui primary button">
              Adopt pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;
