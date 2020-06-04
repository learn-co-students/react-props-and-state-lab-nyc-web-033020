import React from 'react'

class Pet extends React.Component {

  // const { id type gender age weight name isAdopted } = this.props;
  

  handleClick = () => {
    this.props.onAdoptPet(this.props.id)
  };

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.gender === 'male'? '♀' : '♂'}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {/* <button className="ui primary button">
            Already adopted
          </button>
          <button className="ui disabled button">
            Adopt pet
          </button> */}
          <button className={this.props.isAdopted? "ui primary button" : "ui disabled button"}>
            Already adopted
          </button>
          <button className={this.props.isAdopted? "ui disabled button" : "ui primary button"} onClick={this.handleClick}>
            Adopt pet
          </button>
        </div>
      </div>
    )
  }
}

export default Pet
