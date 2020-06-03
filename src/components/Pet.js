import React from 'react'

class Pet extends React.Component {

  // adoptPet = () => {
  //   if (!this.props.isAdopted){
  //     this.setState({ isAdopted: true })
  //   }
  //   console.log(this.props.isAdopted)
  // }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.gender === 'female' ? '♀' : '♂'}
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
        <div className="extra content" onClick={() => this.props.onAdoptPet(this.props.id)} >
          {(this.props.isAdopted === true)
          ? <button className="ui primary button">Already adopted</button>
          : <button className="ui primary button">Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
