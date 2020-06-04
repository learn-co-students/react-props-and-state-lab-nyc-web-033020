import React from 'react'

class Filters extends React.Component {
 


  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={e => this.props.onChangeType(e)} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={e => this.props.onFindPetsClick(e)} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
} 

export default Filters


/*
pets: [
  {
  age: 4
  gender: "male"
  id: "9750e959-f8ef-465f-9e13-16323454dc1f"
  isAdopted: false
  name: "Hemingway"
  type: "micropig"
  weight: 5
  }
]
*/